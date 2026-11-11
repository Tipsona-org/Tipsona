# Tipsona design system

The live reference is the `/design-system/` page (source: `src/app/design-system/page.tsx`). This file is the short version for anyone writing code.

The tokens below are also Tailwind utilities (mapped in `src/app/globals.css`): `bg-flame`, `text-ember`, `border-line`, `text-step-3`, `rounded-lg` (24px), `shadow-md` and so on.

## Principles

1. **One loud thing per screen.** One display headline and at most one flame element per section. Everything around it stays quiet.
2. **Show the product, not stock art.** Mockups (storefront, checkout, dashboard, library) are live HTML, and their data is labelled as an example.
5. **Facts only.** Product copy comes from the PRD. Anything else is a visible placeholder (`.ph-tag`).
6. **Neutral first.** Canvas, paper and night carry the page. Flame is the accent, not the background of every section.
3. **Money is content.** Always show the currency (₦, GH₵), full amounts, and fees before they are taken.
4. **Motion explains.** Every animation shows cause and effect (a payment lands, a file travels). The page reads fine without it.

## Colour tokens

| Token | Hex | Use | Text on it |
| --- | --- | --- | --- |
| `--flame` | #FF5D02 | Logo, primary buttons, highlights, shapes | White, 19px bold or larger (3.1:1) |
| `--flame-deep` | #E84F00 | Hover and pressed | White, large only |
| `--ember` | #B83D00 | Orange text on light surfaces | 5.4:1 on canvas |
| `--ink` | #17120E | Text | 17.6:1 on canvas |
| `--ink-2` | #3B332C | Secondary text | 11.7:1 |
| `--muted` | #6B6158 | Captions, hints | 5.7:1 |
| `--canvas` / `--paper` / `--sand` / `--line` | #FBF8F4 / #FFFFFF / #F3EDE5 / #E7DFD5 | Page, cards, recessed areas, hairlines | Ink |
| `--night` | #161514 | Dark sections, featured plan, footer | Cream (17.1:1) |
| `--cream` | #FFF6EC | Text on night and ink | |
| `--night-muted` | #B5ADA4 | Secondary text on night | 8.2:1 on night |
| `--sun` / `--lilac` / `--blush` / `--mint` | #FFC83D / #CBB8FF / #FFC9D6 / #D8F36A (lime) | Illustration, tinted tiles | Ink (10:1 or more) |
| `--success` / `--warning` / `--danger` | #1B7148 / #8A5A00 / #B42318 | Status, always with a word | 5.1:1 or more on their tints |

**Contrast rules**
- Body text is at least 4.5:1; display text (24px bold and up) at least 3:1.
- Never use flame as a text colour on light backgrounds (2.9:1). Use ember for orange words.
- Text on flame is white and large: 19px bold (18.66px) or 24px and up. Small text never sits on flame; use ink or cream surfaces instead.
- The logo is always flame (white only when it sits on a flame surface).
- Product logos start with the Tipsona "T" mark. The TipStore logo (`public/assets/img/tipstore-logo.svg`, traced from the brand file and set in flame) leads the TipStore menu and opens the TipStore home; the "by Tipsona" link beside it opens the Tipsona home.
- Status is never colour alone: pills pair colour, a dot and a word.

## Type

DM Sans for everything you read, DM Mono for labels and data. DM Sans is a variable, low-contrast geometric sans with optical sizing (small text gets sturdier letters, big text gets finer, tighter ones) and a true italic.

Sizes come only from an 11-step fluid scale (`--step--2` to `--step-8`, 12px to 176px). It scales smoothly between 360px and 1440px screens, with a ratio of about 1.2 on phones and 1.33 on desktop.

| Role | Font | Step | Size | Leading · tracking |
| --- | --- | --- | --- | --- |
| Hero | DM Sans 600 | 7 | 50 → 136px | .9 · −3% |
| H2 | DM Sans 500 | 5 | 38 → 72px | .98 · −2.4% |
| H3 | DM Sans 500 | 3 | 26 → 38px | 1.08 · −1.8% |
| H4 | DM Sans 600 | 2 | 22 → 28px | 1.22 · −1.2% |
| Lede | DM Sans 400 | 1 | 18 → 22px | 1.55 |
| Body | DM Sans 400 | 0 | 16 → 18px | 1.6, max 62ch |
| Label | DM Mono 400 | −2 | 12 → 13px | uppercase, +8% |
| Data | DM Mono 400 | — | 13–16px | fixed-width figures |

Rules:

1. **One scale, no in-betweens.** Every size is a `--step-*` token.
2. **Tracking and leading follow size.** Bigger type gets tighter letters and lines.
3. **Emphasis is a change of voice.** Each headline has one italic phrase, the payoff. The orange highlight is kept for the single key phrase of a hero.
4. **Break lines by meaning.** Headlines break where you would pause reading aloud. Hero sizes are fitted to their column (product heroes use container units, the TipStore hero fits "Know something?" to the phone width), so the designed breaks hold on every screen. Short phrases are joined with a non-breaking space.
5. **A comfortable measure.** Reading text stays under about 62 characters a line. Centred text uses `text-wrap: balance`; paragraphs use `text-wrap: pretty`.
6. **Interface text never wraps.** Nav items, buttons, pills and badges stay on one line.
7. **Numbers are content.** Prices and IDs use DM Mono so figures line up.

DM Sans has no Naira (₦) or Cedi (₵) sign. Two tiny fallback files fill those glyphs under the same family names (Plus Jakarta Sans for DM Sans, Fragment Mono for DM Mono), using `unicode-range`, so browsers download them only on pages that show a price.

## Tip shapes

Six shapes, one meaning and one colour each. They appear in navigation, icon accents, product covers, hero illustrations and stickers.

| Shape | Colour | Means |
| --- | --- | --- |
| circle | flame | a person (creator, buyer) |
| star | sun | a tip or idea |
| square | lilac | a product or file |
| arch | night | a storefront |
| pill | lime (`--mint`) | money |
| diamond | blush | trust and security |

Markup: `<span className="tip tip--star c-sun" />`, sized with `--s`.

## Icons

24px grid, 1.75px round strokes, `currentColor`. Product icons carry one tip-shape accent behind the line work, coloured with `--acc` on the `<svg>` (or the `acc-flame`, `acc-sun`, `acc-lilac`, `acc-blush`, `acc-mint` helpers).

## Layout

- Container: 1320px max, side gutter `clamp(16px, 4vw, 56px)`.
- Sections: `clamp(88px, 11vw, 168px)` vertical padding.
- Radii: 6 / 10 / 16 / 24 / 36px and pill. Photos use the arch frame (`50% 50% r r / 40% 40% r r`).
- Every section opens with a file-tab label (`.tab-label`), then an H2, then one short lede.

## Motion

| Name | Ease | Duration | Used for |
| --- | --- | --- | --- |
| Reveal | expo.out | 1.1s | Text lines and cards rising in |
| Pop | back.out(1.9) | 0.8s | Stickers, float cards, confirmations |
| Wipe | expo.inOut | 0.95s | Highlight bars, photo reveals |
| Travel | power2.inOut | 1.6s | Files moving, chart lines drawing |

- Scroll scenes (chat → order, creator types) pin only at 900px wide and 700px tall or more.
- Loops pause when off screen.
- `prefers-reduced-motion: reduce` turns all motion off; content is visible by default and only hidden when motion is allowed and the scripts load.

## UX rules

- Write from the seller's side ("Withdraw to your bank").
- Buttons say exactly what happens ("Claim your link", "Pay ₦7,500").
- Validate as people type, explain the problem, suggest a fix.
- Touch targets at least 44px; primary actions full width on phones.
- Nothing scrolls sideways except data (the dashboard mockup and the comparison table).
