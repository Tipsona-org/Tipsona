# Tipsona design system

The live reference is `site/design-system.html` (source: `src/pages/design-system.html`). This file is the short version for anyone writing code.

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
- Status is never colour alone: pills pair colour, a dot and a word.

## Type

| Role | Font | Size |
| --- | --- | --- |
| Hero | Inter Tight 600 | clamp(48px, 9.4vw, 148px), line-height .9, tracking −5.5% |
| H2 | Inter Tight 500 | clamp(38px, 5.4vw, 80px), line-height .98 |
| H3 / H4 | Inter Tight 500 / 600 | clamp(26px, 2.6vw, 38px) / clamp(19px, 1.5vw, 22px) |
| Lede / body | Inter Tight 400 | clamp(17px, 1.25vw, 20px) / 16px, line-height 1.55–1.6 |
| Labels, data | Fragment Mono 400 | 12px uppercase +8% tracking / 13px |

Inter Tight is a tight neo-grotesk in the spirit of the inspiration sites. Both fonts include the Naira (₦) and Cedi (₵) signs, so prices never fall back to a system font.

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

CSS: `<span class="tip tip--star c-sun"></span>`, sized with `--s`.

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
