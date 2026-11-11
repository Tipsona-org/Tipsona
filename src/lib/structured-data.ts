// schema.org nodes for <JsonLd>. Everything here repeats what the page itself
// shows; search engines ignore (or penalise) structured data that doesn't.
import { CONTACT_EMAIL, SITE_URL } from "@/config/site";
import type { Qa } from "@/content/faq";

export type Thing = Record<string, unknown>;

const url = (path: string) => new URL(path, SITE_URL).toString();
const ORG = { "@id": url("/#organization") };

/** The company. Home page only; other pages point to it by @id. */
export function organization(): Thing {
  return {
    "@type": "Organization",
    ...ORG,
    name: "Tipsona",
    url: url("/"),
    logo: {
      "@type": "ImageObject",
      url: url("/assets/img/icon-512.png"),
      width: 512,
      height: 512
    },
    description:
      "Tipsona gives African creators the tools to build, monetize, finance, discover and grow a digital business.",
    email: CONTACT_EMAIL,
    // The office in the footer
    address: {
      "@type": "PostalAddress",
      streetAddress: "97 Adeola Odeku Street, 2nd Floor, Union Bank Building",
      addressLocality: "Victoria Island",
      addressRegion: "Lagos",
      addressCountry: "NG"
    }
    // sameAs: add the Instagram, TikTok, X and LinkedIn profiles once the footer links are real
  };
}

export function website(): Thing {
  return {
    "@type": "WebSite",
    "@id": url("/#website"),
    name: "Tipsona",
    url: url("/"),
    inLanguage: "en",
    publisher: ORG
  };
}

/** Tipsona › … › this page. Pass the trail after the home page. */
export function breadcrumbs(...trail: Array<[name: string, path: string]>): Thing {
  const items: Array<[string, string]> = [["Tipsona", "/"], ...trail];
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], n) => ({
      "@type": "ListItem",
      position: n + 1,
      name,
      item: url(path)
    }))
  };
}

type App = {
  name: string;
  description: string;
  path: string;
  /** Has a free plan (TipStore's Free plan is ₦0) */
  free?: boolean;
};

/** A Tipsona product that people use in the browser. */
export function productApp({ name, description, path, free }: App): Thing {
  return {
    "@type": "WebApplication",
    "@id": url(path) + "#app",
    name,
    description,
    url: url(path),
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    publisher: ORG,
    ...(free && { offers: { "@type": "Offer", name: "Free", price: "0", priceCurrency: "NGN" } })
  };
}

export function faqPage(path: string, items: Qa[]): Thing {
  return {
    "@type": "FAQPage",
    "@id": url(path) + "#faq",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a }
    }))
  };
}
