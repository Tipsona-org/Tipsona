# Tipsona websites

Marketing pages for **Tipsona** and its products. The site is not the product: it explains each product and links to it.

| Page | Route | Source | What it shows |
| --- | --- | --- | --- |
| Tipsona home | `/` | `src/app/page.tsx` | What Tipsona is, why it exists, the three products launching first, sign-up CTA |
| Products | `/products/` | `src/app/products/page.tsx` | Every product in detail |
| Why Tipsona | `/why-tipsona/` | `src/app/why-tipsona/page.tsx` | The problems creators run into, and how Tipsona compares with other tools |
| Community | `/community/` | `src/app/community/page.tsx` | Coming soon: campus ambassadors, UGC Creative Academy, communities, content studio |
| TipStore landing | `/tipstore/` | `src/app/tipstore/page.tsx` | TipStore, the commerce layer: how it works, who it's for, features, dashboard, trust, plans, FAQ |
| TipStore pricing | `/tipstore/pricing/` | `src/app/tipstore/pricing/page.tsx` | Plans, feature comparison, fee example, billing FAQ |
| Tipper | `/tipper/` | `src/app/tipper/page.tsx` | Paid UGC brand work for creators: why, workflow, trust |
| TipFix | `/tipfix/` | `src/app/tipfix/page.tsx` | Coming soon: payouts, legal desk, escrow, small problems |
| Waitlist | `/waitlist/` | `src/app/waitlist/page.tsx` | Waitlist sign-up, prefilled from `?product=` and `?username=` |
| Brand and design system | `/design-system/` | `src/app/design-system/page.tsx` | Logo, colour, contrast, type, tip shapes, icons, components, motion and UX rules (not in search results) |

TipStore copy comes from the TipStore PRD. Tipsona, Tipper, TipFix and the other products come from the Tipsona investor pitch document (2026). The site is for creators, so investor material (flywheel, roadmap, business model, market size, moat, research sources, brand-side pricing) is left off. Products outside the first launch wave (TipStore, Tipper, TipStar) are labelled "Coming soon". Anything in neither document is shown as a visible placeholder.

The product list, plans, creator types and FAQs live in `src/content/`, so the home and products grids, the plan cards, the TipStore personas and the FAQ structured data stay in sync.

## Develop, build and preview

Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4, the same stack as `tipsona-web`.

```bash
npm install
cp .env.example .env.local   # only needed to test the waitlist
npm run dev     # http://localhost:3000
npm run build
npm run start   # serve the production build
npm run lint
```

Every page is prerendered to static HTML at build time. The only server code is the waitlist API route.

To add a page, add `src/app/<route>/page.tsx` (copy the Why Tipsona page: `NavHub`, a `<main>`, `HubCta`, `Footer`, `JsonLd` breadcrumbs), give it `pageMetadata`, and add the route to `src/app/sitemap.ts`. For a product page, also give the product a `page` in `src/content/products.ts` and link it from the footer.

## Deploy (Vercel)

This site is `tipsona.co`, the company's only domain (PRD Ch. 21). The other addresses on it belong to other repos: `app.tipsona.co` (sign-up and the creator dashboard) and `tipstore.tipsona.co/{username}` (storefronts) are `tipsona-web`, `api.tipsona.co` is `tipsona-api`, `admin.tipsona.co` is `tipsona-admin`. Copy on this site shows store links as `tipstore.tipsona.co/yourname`.

Vercel detects Next.js and needs no settings beyond these environment variables (Project Settings > Environment Variables, see `.env.example`):

| Variable | What it's for |
| --- | --- |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key for the waitlist. Built into the page, so redeploy after changing it. Without it, Cloudflare's always-pass test key is used |
| `TURNSTILE_SECRET` | The secret that pairs with that site key. Previews and local development use the test pair (see `.env.example`) |
| `RESEND_API_KEY` | Waitlist sign-ups are saved as Resend contacts |
| `RESEND_WAITLIST_SEGMENT_ID` | Optional: the Resend segment sign-ups join |
| `NEXT_PUBLIC_SITE_URL` | Optional: the canonical domain. Without it, Vercel's production domain is used |

Before the first sign-up, create these contact properties in Resend (Audience > Properties, type text): `country`, `role`, `products`, `username`. Resend rejects contacts with properties it doesn't know. At launch, send the news as a Resend broadcast to the waitlist segment.

The old `.html` addresses redirect to the new routes (`/products.html` to `/products/` and so on, in `next.config.ts`).

## Search (SEO)

- **Titles and descriptions**: every page sets its own with `pageMetadata` (`src/lib/metadata.ts`), which also adds the canonical link and the share card. Keep titles under about 60 characters and descriptions under about 160.
- **Sitemap and robots**: `src/app/sitemap.ts` lists every page that should be found; `src/app/robots.ts` points to it and keeps `/api/` out.
- **Previews stay out of search**: on Vercel preview deployments, `robots.txt` blocks everything and every page is `noindex` (`INDEXABLE` in `src/config/site.ts`). Canonical links always point to production.
- **Structured data** (`src/lib/structured-data.ts`, rendered by `<JsonLd>`): Organization and WebSite on the home page, breadcrumbs on every other page, WebApplication for TipStore and Tipper, FAQPage for both TipStore FAQs. It only repeats what the page shows.
- **Icons**: `favicon.ico`, the SVG favicon, `apple-touch-icon.png` and the manifest icons (`src/app/manifest.ts`).
- **After launch**: add the domain in Google Search Console (DNS verification) and submit `/sitemap.xml`.

## How it's built

- `src/app/`: one folder per route. `layout.tsx` holds what every page shares: fonts, icons, the motion gate, the icon and logo sprites and the site scripts. `api/waitlist/route.ts` checks the Turnstile pass and saves the sign-up in Resend.
- `src/components/layout/`: the three navigation bars (Tipsona hub, product, TipStore), footer, icon sprite and logo symbols. Every Tipsona page shares the same menu (`NavHub`).
- `src/components/sections/`: sections built from data in `src/content/` (product grid, plans, personas, ticker, FAQ) and the closing CTA (`HubCta`).
- `src/styles/tipsona.css`: the original stylesheet. Design tokens at the top (`:root`), then components and sections.
- `src/app/globals.css`: Tailwind (without Preflight, so the site's own base styles stay as they were) with the design tokens mapped to Tailwind names: `bg-flame`, `text-ember`, `text-step-3`, `rounded-lg` and so on. The stylesheet sits in the components layer, so a utility on an element overrides it.
- `src/content/icons.ts`: the custom icon set (`<svg className="i"><use href="#i-store" /></svg>`).
- `src/lib/site/`: interactions (menu, username check, tabs, FAQ, waitlist) and motion (GSAP + ScrollTrigger + SplitText, Lenis smooth scrolling), run by `src/components/site-scripts.tsx` once the page has loaded. They attach to the markup by data attributes (`data-reveal`, `data-split`, `data-swap` and so on). Pages work without JavaScript, and motion is off for people who prefer reduced motion.
- `public/assets/fonts/`: self-hosted, subsetted DM Sans (variable, with italic) and DM Mono, plus two tiny fallback files for the ₦ and ₵ signs.
- `public/assets/img/`: WebP photos from Unsplash (see `CREDITS.md`), the share image, the icons and the TipStore logo (`tipstore-logo.svg`).

Pages link to each other with plain `<a>` tags, not `next/link`, on purpose: a full page load is what plays the page transition (a cross-document view transition in `src/styles/view-transitions.css`).

See `DESIGN.md` for the design system rules.

## Placeholders to confirm before launch

- **"Coming soon" labels** assume TipStore, Tipper and TipStar launch first, as in the pitch's roadmap.
- **Community programs**: details, dates and how to join are still to be confirmed.
- **Pro and Business prices** (shown as "Price TBC"). The PRD leaves prices and exact fees open.
- **Fee example** (₦10,000 − ₦500 − ₦150 = ₦9,350) is the PRD's illustrative example.
- **info@tipsona.co** contact address (`CONTACT_EMAIL` in `src/config/site.ts`); office: 97, Adeola Odeku Street, 2nd Floor Union Bank Building, Victoria Island, Lagos State.
- **Example storefronts, people, products and figures** in mockups are fictional and labelled as examples.
- **Links** to Help Center, Terms, Privacy and social profiles point to `#`. When the social profiles are real, also add them as `sameAs` in `organization()` (`src/lib/structured-data.ts`). Log in points to `#` until TipStore opens: set `APP_LOGIN_URL` in `src/config/site.ts`.
