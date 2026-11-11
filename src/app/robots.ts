import type { MetadataRoute } from "next";

import { INDEXABLE, SITE_URL } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  if (!INDEXABLE) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: new URL("/sitemap.xml", SITE_URL).toString()
  };
}
