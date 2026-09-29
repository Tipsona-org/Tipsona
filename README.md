# Tipsona website

Marketing website for **Tipsona**, the storefront for creators, educators, coaches, consultants, trainers and digital entrepreneurs who sell digital products.

Three pages, plain HTML/CSS/JS, no build step:

| Page | File | What it shows |
| --- | --- | --- |
| Home | `site/index.html` | Hero with live "claim your link", the old way vs the Tipsona way, how it works, who it's for, features, dashboard, trust, pricing, FAQ |
| Pricing | `site/pricing.html` | Plans, full feature comparison, fee example, billing FAQ |
| Brand and design system | `site/design-system.html` | Logo, colour, contrast, type, tip shapes, icons, components, motion and UX rules |

## Preview locally

```bash
cd site
python3 -m http.server 4173
# open http://localhost:4173
```

## Deploy

- **Netlify:** connect this repo and it will publish the `site/` folder (see `netlify.toml`). No build command.
- **Any static host** (Vercel, Cloudflare Pages, GitHub Pages): publish the `site/` folder as-is.
- **Self-contained copy** (inline CSS/JS, CDN libraries): `node scripts/build-artifact.mjs` writes `dist/artifact/`.

## How it's built

- `site/assets/css/tipsona.css`: design tokens at the top (`:root`), then components and sections in page order.
- `site/assets/js/icons.js`: the custom icon set (one SVG sprite, used as `<svg class="i"><use href="#i-store"/></svg>`).
- `site/assets/js/tipsona.js`: interactions (menu, claim form, tabs, pricing toggle, FAQ) and motion (GSAP + ScrollTrigger + SplitText, Lenis smooth scrolling on desktop). The page is complete without JavaScript, and all motion is skipped for people who prefer reduced motion.
- `site/assets/fonts/`: self-hosted, subsetted Bricolage Grotesque, Plus Jakarta Sans and Fragment Mono (all include ₦ and ₵).
- `site/assets/vendor/`: pinned GSAP 3.15.0 and Lenis 1.3.26.
- `site/assets/img/`: WebP photos from Unsplash (see `CREDITS.md`).

See `DESIGN.md` for the design system rules.

## Placeholders to confirm before launch

- **Plan prices** (₦0 / ₦5,000 / ₦15,000 per month) and the 5% fee in the receipt example are placeholders. The PRD leaves exact prices and fees open.
- **Example stores and people** (Adaeze Okoro, @missamara.teaches, customer names, sales figures) are fictional mockup data.
- **Links** to Log in, Help centre, legal pages and social profiles point to `#` until those pages exist.
- **hello@tipsona.com** is assumed as the contact address.
- There are no testimonials or customer counts on purpose. Add real ones once you have them.
