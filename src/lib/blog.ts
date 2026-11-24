// Blog posts are Markdown files in src/content/blog, written in the editor at
// /admin (Decap CMS), which commits them to the repo. Pages are built from them
// at build time, so a published post goes live with the next deploy.
import fs from "node:fs";
import path from "node:path";

import type { Element, ElementContent, Root } from "hast";
import matter from "gray-matter";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { visit } from "unist-util-visit";

const DIR = path.join(process.cwd(), "src/content/blog");
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  /** "2026-11-24" */
  date: string;
  author: string;
  category: string;
  cover: string | null;
  coverAlt: string;
  featured: boolean;
  readingMinutes: number;
};

export type Heading = { id: string; text: string };
export type Post = PostMeta & { html: string; headings: Heading[] };

/** "24 November 2026", in the same style as the rest of the site. */
export const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${date}T00:00:00Z`));

function isoDate(value: unknown, file: string) {
  // YAML turns 2026-11-24 into a Date; the editor can also write a string.
  const date = value instanceof Date ? value : new Date(String(value));
  if (Number.isNaN(date.getTime())) throw new Error(`${file}: "date" is missing or not a date`);
  return date.toISOString().slice(0, 10);
}

function required(data: Record<string, unknown>, key: string, file: string) {
  const value = data[key];
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`${file}: "${key}" is missing`);
  }
  return value.trim();
}

function read(file: string) {
  const slug = file.replace(/\.md$/, "");
  if (!SLUG.test(slug)) throw new Error(`${file}: file names must be lowercase words joined by hyphens`);
  const { data, content } = matter(fs.readFileSync(path.join(DIR, file), "utf8"));
  const words = content.split(/\s+/).filter(Boolean).length;
  const meta: PostMeta = {
    slug,
    title: required(data, "title", file),
    description: required(data, "description", file),
    date: isoDate(data.date, file),
    author: typeof data.author === "string" && data.author.trim() ? data.author.trim() : "The Tipsona team",
    category: required(data, "category", file),
    cover: typeof data.cover === "string" && data.cover.trim() ? data.cover.trim() : null,
    // No description given: the title is a better alt text than nothing.
    coverAlt: typeof data.coverAlt === "string" && data.coverAlt.trim() ? data.coverAlt.trim() : String(data.title ?? ""),
    featured: data.featured === true,
    readingMinutes: Math.max(1, Math.round(words / 220))
  };
  return { meta, content };
}

const files = () =>
  fs.existsSync(DIR) ? fs.readdirSync(DIR).filter((f) => f.endsWith(".md")) : [];

/** Every post, newest first. */
export function getAllPosts(): PostMeta[] {
  return files()
    .map((f) => read(f).meta)
    .sort((a, b) => (a.date === b.date ? a.title.localeCompare(b.title) : b.date.localeCompare(a.date)));
}

const element = (tagName: string, className: string | null, children: ElementContent[]): Element => ({
  type: "element",
  tagName,
  properties: className ? { className: [className] } : {},
  children
});

const caption = (text: string): ElementContent[] =>
  text ? [element("figcaption", null, [{ type: "text", value: text }])] : [];

/**
 * Images the editor adds, turned into figures:
 * - an image alone in its paragraph, `![description](src "caption")`, becomes
 *   one figure, its title shown as the caption;
 * - a gallery block, as the editor writes it, becomes images side by side:
 *     :::gallery Optional caption
 *     ![description](src)
 *     ![description](src)
 *     :::
 */
function figureFor(p: Element): Element | null {
  const kids = p.children.filter((c) => !(c.type === "text" && !c.value.trim()));
  const images = kids.filter((c): c is Element => c.type === "element" && c.tagName === "img");

  if (kids.length === 1 && images.length === 1) {
    const [img] = images;
    const text = String(img.properties.title ?? "").trim();
    delete img.properties.title;
    return element("figure", "post-figure", [img, ...caption(text)]);
  }

  const first = kids[0];
  const last = kids[kids.length - 1];
  if (
    first?.type === "text" &&
    first.value.startsWith(":::gallery") &&
    last?.type === "text" &&
    last.value.trim().endsWith(":::") &&
    images.length > 0
  ) {
    const text = first.value.slice(":::gallery".length).split("\n")[0].trim();
    images.forEach((img) => delete img.properties.title);
    const gallery = element("figure", "post-gallery", [
      element("div", "post-gallery__grid", images),
      ...caption(text)
    ]);
    gallery.properties.dataCount = String(images.length);
    return gallery;
  }
  return null;
}

/**
 * Tidies the HTML Markdown produces: figures and galleries, lazy images,
 * external links in a new tab, tables that scroll on phones, and the list of
 * h2s for the contents.
 */
function polish(headings: Heading[]) {
  return () => (tree: Root) => {
    visit(tree, "element", (node: Element, index, parent) => {
      if (node.tagName === "p" && parent && typeof index === "number") {
        const figure = figureFor(node);
        // The images move into the figure as they are, so the visit below
        // still makes them lazy.
        if (figure) parent.children[index] = figure;
      }
      // The post title is the page's only h1: a "# Heading" in the text becomes a section.
      if (node.tagName === "h1") node.tagName = "h2";
      if (node.tagName === "img") {
        node.properties.loading = "lazy";
        node.properties.decoding = "async";
      }
      if (node.tagName === "a" && /^https?:\/\//.test(String(node.properties.href ?? ""))) {
        node.properties.target = "_blank";
        node.properties.rel = ["noopener", "noreferrer"];
      }
      if (node.tagName === "h2" && node.properties.id) {
        headings.push({ id: String(node.properties.id), text: textOf(node) });
      }
      if (node.tagName === "table" && parent && typeof index === "number") {
        parent.children[index] = {
          type: "element",
          tagName: "div",
          properties: { className: ["post-body__table"] },
          children: [node]
        };
      }
    });
  };
}

function textOf(node: Element): string {
  return node.children
    .map((child) => (child.type === "text" ? child.value : child.type === "element" ? textOf(child) : ""))
    .join("");
}

export function getPost(slug: string): Post | null {
  if (!SLUG.test(slug) || !fs.existsSync(path.join(DIR, `${slug}.md`))) return null;
  const { meta, content } = read(`${slug}.md`);
  const headings: Heading[] = [];
  // Raw HTML in a post is dropped (remark-rehype's default), so a post can
  // only contain what Markdown can express: no scripts, no embeds.
  const html = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(polish(headings))
    .use(rehypeStringify)
    .processSync(content)
    .toString();
  return { ...meta, html, headings };
}

/** Up to `count` other posts, same category first. */
export function relatedPosts(post: PostMeta, count = 3): PostMeta[] {
  const others = getAllPosts().filter((p) => p.slug !== post.slug);
  const same = others.filter((p) => p.category === post.category);
  return [...same, ...others.filter((p) => p.category !== post.category)].slice(0, count);
}
