#!/usr/bin/env node
/*
  Builds a self-contained copy of the site for hosts that only allow inline
  CSS/JS and a short list of CDNs (for example a claude.ai Artifact).

  - CSS and site JS are inlined.
  - Self-hosted fonts are swapped for the Google Fonts stylesheet.
  - Vendored libraries are swapped for the same pinned versions on cdnjs/jsdelivr.
  - The main page loses its <html>/<head>/<body> wrapper (the host adds one).
  Images stay as files under assets/img/.

  Usage: node scripts/build-artifact.mjs   → dist/artifact/
*/
import { readFile, writeFile, mkdir, cp, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const site = path.join(root, 'site');
const out = path.join(root, 'dist', 'artifact');

const GOOGLE_FONTS = [
  '<link rel="preconnect" href="https://fonts.googleapis.com">',
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Fragment+Mono&family=Plus+Jakarta+Sans:wght@400..800&display=swap">'
].join('\n');

const CDN = {
  'assets/vendor/gsap.min.js': 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.15.0/gsap.min.js',
  'assets/vendor/ScrollTrigger.min.js': 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.15.0/ScrollTrigger.min.js',
  'assets/vendor/SplitText.min.js': 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.15.0/SplitText.min.js',
  'assets/vendor/lenis.min.js': 'https://cdn.jsdelivr.net/npm/lenis@1.3.26/dist/lenis.min.js'
};

const css = (await readFile(path.join(site, 'assets/css/tipsona.css'), 'utf8'))
  .replace(/\/\* @fonts-start \*\/[\s\S]*?\/\* @fonts-end \*\/\n?/, '');
const icons = await readFile(path.join(site, 'assets/js/icons.js'), 'utf8');
const app = await readFile(path.join(site, 'assets/js/tipsona.js'), 'utf8');

function transform(html, { main }) {
  let s = html;
  s = s.replace(/<!-- @fonts -->[\s\S]*?<!-- \/@fonts -->/, GOOGLE_FONTS);
  s = s.replace('<link rel="stylesheet" href="assets/css/tipsona.css">', () => `<style>\n${css}\n</style>`);
  for (const [local, remote] of Object.entries(CDN)) s = s.replace(`src="${local}"`, `src="${remote}"`);
  s = s.replace('<script defer src="assets/js/tipsona.js"></script>', '');
  s = s.replace('<script src="assets/js/icons.js"></script>', () => `<script>\n${icons}\n</script>`);
  s = s.replace('</body>', () => `<script>\n${app}\n</script>\n</body>`);
  if (main) {
    s = s.replace(/<title>[^<]*<\/title>/, '<title>Tipsona</title>');
    s = s.replace(/^<!doctype html>\s*/i, '')
      .replace(/<html[^>]*>\s*/i, '')
      .replace(/<head>\s*/i, '')
      .replace(/<\/head>\s*/i, '')
      .replace(/<body>\s*/i, '')
      .replace(/<\/body>\s*/i, '')
      .replace(/<\/html>\s*$/i, '')
      .replace(/<meta charset="utf-8">\s*/i, '')
      .replace(/<meta name="viewport"[^>]*>\s*/i, '');
    /* the title must sit in the first 8KB for the host to find it */
    const title = '<title>Tipsona</title>';
    s = title + '\n' + s.replace(title, '');
  }
  return s;
}

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(path.join(site, 'assets/img'), path.join(out, 'assets/img'), { recursive: true });

const pages = [['index.html', true], ['pricing.html', false], ['design-system.html', false]];
for (const [file, main] of pages) {
  const html = await readFile(path.join(site, file), 'utf8');
  await writeFile(path.join(out, file), transform(html, { main }));
}
console.log('Built', out);
