/**
 * Absolute base for canonical links, the sitemap, structured data and share
 * images. On Vercel it is the project's production domain (the shortest custom
 * domain, or the *.vercel.app one until a domain is added), so previews also
 * point search engines at production. Set NEXT_PUBLIC_SITE_URL to override it,
 * for example when www is the primary domain.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

/** Only production is open to search engines; Vercel previews are not. */
export const INDEXABLE = (process.env.VERCEL_ENV ?? "production") === "production";

export const CONTACT_EMAIL = "info@tipsona.co";

/**
 * The Cloudflare Turnstile site key for the waitlist. It is public; its secret
 * pair is TURNSTILE_SECRET on the server. Without one, Cloudflare's
 * always-pass test key is used: fine locally and on previews together with the
 * test secret, and a real secret rejects it, so production fails closed.
 */
export const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA";

/**
 * Where "Log in" goes. TipStore isn't open yet, so it stays a "#" link, which
 * shows the "design preview" toast. At launch set it to the app's log-in page,
 * https://app.tipsona.co/login (PRD Ch. 21).
 */
export const APP_LOGIN_URL = "#";
