/**
 * Names a creator can't claim, because the TipStore app serves (or will serve)
 * a page at /{name}. Mirrors tipsona-web src/lib/constants/reserved-slugs.ts;
 * keep the two in sync so the claim form never okays a name sign-up rejects.
 */
export const RESERVED_USERNAMES: ReadonlySet<string> = new Set([
  // App routes that exist today
  "dashboard",
  "onboarding",
  "login",
  "signup",
  "forgot-password",
  "reset-password",
  "verify-email",
  "check-email",
  "settings",
  "products",
  "orders",
  "storefront",

  // Reserved for the roadmap
  "admin",
  "account",
  "analytics",
  "auth",
  "blog",
  "cart",
  "category",
  "checkout",

  // Discovery: search, category and browse pages (PRD 15.12-15.14)
  "search",
  "explore",
  "discover",
  "browse",
  "categories",
  "collections",
  "trending",
  "featured",
  "popular",
  "tags",

  "customers",
  "help",
  "library",
  "receipt",
  "receipts",
  "access",
  "payouts",
  "pricing",
  "support",

  // Legal and marketing
  "about",
  "contact",
  "privacy",
  "terms",

  // The company and its products, and names that read as staff
  "tipsona",
  "tipstore",
  "tipper",
  "tipstar",
  "tipfix",
  "tiplaunch",
  "tipmarket",
  "tipads",
  "tipai",
  "tipinsights",
  "official",
  "team",
  "staff",
  "security",

  // Planned pages
  "app",
  "waitlist",
  "community",

  // Infrastructure
  "_next",
  "api",
  "assets",
  "docs",
  "public",
  "robots.txt",
  "sitemap.xml",
  "static"
]);
