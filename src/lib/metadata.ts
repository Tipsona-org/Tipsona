import type { Metadata } from "next";

import { SITE_URL } from "@/config/site";

type PageMeta = {
  /** Under about 60 characters, so search results show all of it */
  title: string;
  /** Under about 160 characters, for the same reason */
  description: string;
  /** The page's own route, e.g. "/tipstore/pricing/" */
  path: string;
  /** Keep the page out of search results (and the sitemap) */
  noindex?: boolean;
};

/** Title, description, canonical link and share card for one page. */
export function pageMetadata({ title, description, path, noindex }: PageMeta): Metadata {
  const url = new URL(path, SITE_URL).toString();
  return {
    title,
    description,
    ...(noindex ? { robots: { index: false, follow: true } } : { alternates: { canonical: url } }),
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: "Tipsona",
      images: [
        {
          url: new URL("assets/img/og.png", SITE_URL).toString(),
          width: 1200,
          height: 630,
          alt: "Tipsona: your creator business, all in one place."
        }
      ]
    },
    twitter: { card: "summary_large_image" }
  };
}
