import type { MetadataRoute } from "next";

import { SITE_URL } from "@/config/site";

/** Every page that should be in search results. Add new pages here. */
const PAGES = [
  "/",
  "/products/",
  "/why-tipsona/",
  "/community/",
  "/tipstore/",
  "/tipstore/pricing/",
  "/tipper/",
  "/tipfix/",
  "/waitlist/"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((path) => ({ url: new URL(path, SITE_URL).toString() }));
}
