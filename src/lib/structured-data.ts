// schema.org nodes for <JsonLd>. Everything here repeats what the page itself
// shows; search engines ignore (or penalise) structured data that doesn't.
import { CONTACT_EMAIL, SITE_URL } from "@/config/site";
import type { Qa } from "@/content/faq";
import { SOCIAL } from "@/content/social";

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
    },
    sameAs: SOCIAL.map((profile) => profile.url)
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

type BlogEntry = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  cover: string | null;
};

const TEAM = "The Tipsona team";
const postUrl = (slug: string) => url(`/blog/${slug}/`);

/**
 * The company spelled out, not just referenced: a post page doesn't carry the
 * home page's Organization node, and article checks want the name and logo here.
 */
const ORG_FULL = {
  "@type": "Organization",
  ...ORG,
  name: "Tipsona",
  url: url("/"),
  logo: { "@type": "ImageObject", url: url("/assets/img/icon-512.png"), width: 512, height: 512 }
};

/** One blog post. Posts signed by the team are credited to the company. */
export function blogPosting(post: BlogEntry): Thing {
  return {
    "@type": "BlogPosting",
    "@id": postUrl(post.slug) + "#post",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: post.author === TEAM ? ORG_FULL : { "@type": "Person", name: post.author },
    publisher: ORG_FULL,
    mainEntityOfPage: postUrl(post.slug),
    inLanguage: "en",
    // Every article needs an image: the cover, or the site's share card.
    image: url(post.cover ?? "/assets/img/og.png")
  };
}

/** The blog itself, listing its posts. */
export function blog(posts: BlogEntry[]): Thing {
  return {
    "@type": "Blog",
    "@id": url("/blog/#blog"),
    name: "Tipsona blog",
    url: url("/blog/"),
    publisher: ORG,
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: postUrl(post.slug),
      datePublished: post.date
    }))
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
