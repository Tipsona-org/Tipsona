# Tipsona websites

Marketing pages for **Tipsona** and its products. The site is not the product: it explains each product and links to it.

| Page | Built file | Source | What it shows |
| --- | --- | --- | --- |
| Tipsona home | `site/index.html` | `src/pages/index.html` | For creators: why Tipsona, the problems it solves, all products, ways to earn, sign-up CTA |
| Products | `site/products.html` | `src/pages/products.html` | Every product in detail |
| TipStore landing | `site/tipstore/index.html` | `src/pages/tipstore/index.html` | TipStore, the commerce layer: how it works, who it's for, features, dashboard, trust, plans, FAQ |
| TipStore pricing | `site/tipstore/pricing.html` | `src/pages/tipstore/pricing.html` | Plans, feature comparison, fee example, billing FAQ |
| Tipper | `site/tipper/index.html` | `src/pages/tipper/index.html` | Paid UGC brand work for creators: why, workflow, trust |
| TipFix | `site/tipfix/index.html` | `src/pages/tipfix/index.html` | Coming soon: payouts, legal desk, escrow, small problems |
| Brand and design system | `site/design-system.html` | `src/pages/design-system.html` | Logo, colour, contrast, type, tip shapes, icons, components, motion and UX rules |

TipStore copy comes from the TipStore PRD. Tipsona, Tipper, TipFix and the other products come from the Tipsona investor pitch document (2026). The site is for creators, so investor material (flywheel, roadmap, business model, market size, moat, research sources, brand-side pricing) is left off. Products outside the first launch wave (TipStore, Tipper, TipStar) are labelled "Coming soon". Anything in neither document is shown as a visible placeholder.

The product list, phases and one-liners live in `PRODUCTS` in `scripts/build-pages.py`, so the home and ecosystem grids and the roadmap stay in sync.

## Build and preview

```bash
python3 scripts/build-pages.py        # src/ → site/
cd site && python3 -m http.server 4173 # open http://localhost:4173
```

`build-pages.py` wraps each page in `src/pages` with the shared partials in `src/partials` (head, logo, nav, footer). The persona panels and plan cards are generated from data in the script. Edit `src/`, not the built HTML.

To add a product page, add `src/pages/<product>/index.html` with a front-matter comment (see the TipStore page), a nav partial if it needs its own, and a card in the products section of `src/pages/index.html`.

## Deploy

Netlify publishes the `site/` folder (see `netlify.toml`). No build command runs there, so build locally and commit `site/`.

## How it's built

- `site/assets/css/tipsona.css`: design tokens at the top (`:root`), then components and sections.
- `site/assets/js/icons.js`: the custom icon sprite (`<svg class="i"><use href="#i-store"/></svg>`).
- `site/assets/js/tipsona.js`: interactions (menu, username check, tabs, FAQ) and motion (GSAP + ScrollTrigger + SplitText, Lenis smooth scrolling). Pages work without JavaScript, and motion is off for people who prefer reduced motion.
- `site/assets/fonts/`: self-hosted, subsetted DM Sans (variable, with italic) and DM Mono, plus two tiny fallback files for the ₦ and ₵ signs.
- `site/assets/vendor/`: pinned GSAP 3.15.0 and Lenis 1.3.26.
- `site/assets/img/`: WebP photos from Unsplash (see `CREDITS.md`), the share image, and the TipStore logo (`tipstore-logo.svg`).

See `DESIGN.md` for the design system rules.

## Placeholders to confirm before launch

- **"Coming soon" labels** assume TipStore, Tipper and TipStar launch first, as in the pitch's roadmap.
- **Pro and Business prices** (shown as "Price TBC"). The PRD leaves prices and exact fees open.
- **Fee example** (₦10,000 − ₦500 − ₦150 = ₦9,350) is the PRD's illustrative example.
- **hello@tipsona.com** contact address.
- **Example storefronts, people, products and figures** in mockups are fictional and labelled as examples.
- **Links** to Log in, Help Center, Terms, Privacy and social profiles point to `#`.
