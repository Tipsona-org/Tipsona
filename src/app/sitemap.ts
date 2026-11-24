import type { MetadataRoute } from "next";

import { SITE_URL } from "@/config/site";
import { getAllPosts } from "@/lib/blog";

/** Every page that should be in search results. Add new pages here. */
const PAGES = [
  "/",
  "/products/",
  "/why-tipsona/",
  "/community/",
  "/blog/",
  "/tipstore/",
  "/tipstore/pricing/",
  "/tipstore/terms/",
  "/tipstore/privacy/",
  "/tipper/",
  "/tipfix/",
  "/waitlist/",
  "/terms/",
  "/privacy/"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = PAGES.map((path) => ({ url: new URL(path, SITE_URL).toString() }));
  // Blog posts are listed from their files, so a new post is in the next build's sitemap.
  const posts = getAllPosts().map((post) => ({
    url: new URL(`/blog/${post.slug}/`, SITE_URL).toString(),
    lastModified: post.date
  }));
  return [...pages, ...posts];
}
