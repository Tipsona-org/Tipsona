import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { NavHub } from "@/components/layout/nav-hub";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Tipsona brand and design system",
  description:
    "Logo, colour, contrast, type, tip shapes, icons, components and motion rules for Tipsona websites.",
  path: "/design-system/",
  noindex: true
});

export default function DesignSystemPage() {
  return (
    <>
      <NavHub home="/" />
      <main id="main">
        <section className="page-hero" aria-labelledby="page-title">
          <div
            className="container"
            style={{ display: "grid", gap: "26px", justifyItems: "start" }}
          >
            <p className="tab-label" data-intro="">
              <span className="tip tip--star c-sun" aria-hidden="true" />
              Brand and design system
            </p>
            <h1 className="h1" id="page-title">
              <span className="ln">
                <span className="ln__in">How Tipsona</span>
              </span>{" "}
              <span className="ln">
                <span className="ln__in">
                  looks and{" "}
                  <span className="hl">
                    <span className="hl__bg" aria-hidden="true" />
                    moves.
                  </span>
                </span>
              </span>
            </h1>
            <p className="lede" data-intro="">
              The rules behind the website: logo, colour, contrast, type, the six tip shapes, icons,
              components and motion. Every Tipsona page is built from these tokens.
            </p>
            <nav className="ds-toc" aria-label="On this page" data-intro="">
              <a href="#ds-logo">Logo</a>
              <a href="#ds-colour">Colour</a>
              <a href="#ds-contrast">Contrast</a>
              <a href="#ds-type">Type</a>
              <a href="#ds-shapes">Tip shapes</a>
              <a href="#ds-icons">Icons</a>
              <a href="#ds-components">Components</a>
              <a href="#ds-motion">Motion</a>
              <a href="#ds-ux">UX rules</a>
            </nav>
          </div>
        </section>
        <section className="ds-section" id="ds-logo" aria-labelledby="ds-logo-t">
          <div className="container ds-grid">
            <h2 className="h3" id="ds-logo-t">
              Logo
            </h2>
            <p className="lede">
              Flame, always, on light and dark surfaces. On a flame surface, use white. Keep clear
              space equal to the height of the “T” bar on every side, and never set it smaller than
              20px tall.
            </p>
            <div
              className="ds-grid"
              style={{ gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}
            >
              <div className="ds-demo" style={{ justifyContent: "center", minHeight: "180px" }}>
                <svg
                  className="logo"
                  viewBox="0 0 303.15 84"
                  style={{ height: "44px" }}
                  role="img"
                  aria-label="Tipsona logo in flame on canvas"
                >
                  <use href="#logo" />
                </svg>
              </div>
              <div
                className="ds-demo ds-demo--dark"
                style={{ justifyContent: "center", minHeight: "180px" }}
              >
                <svg
                  className="logo"
                  viewBox="0 0 303.15 84"
                  style={{ height: "44px" }}
                  role="img"
                  aria-label="Tipsona logo in flame on night"
                >
                  <use href="#logo" />
                </svg>
              </div>
              <div
                className="ds-demo"
                style={{
                  justifyContent: "center",
                  minHeight: "180px",
                  background: "var(--flame)",
                  borderColor: "transparent"
                }}
              >
                <svg
                  className="logo"
                  viewBox="0 0 303.15 84"
                  style={{ height: "44px", fill: "#FFFFFF" }}
                  role="img"
                  aria-label="Tipsona logo in white on flame"
                >
                  <use href="#logo" />
                </svg>
              </div>
              <div
                className="ds-demo"
                style={{ justifyContent: "center", minHeight: "180px", gap: "28px" }}
              >
                <svg
                  className="logo-mark"
                  viewBox="-4.4 0 83.1 83.1"
                  style={{ width: "64px", height: "64px", color: "var(--flame)" }}
                  role="img"
                  aria-label="Tipsona mark in flame"
                >
                  <use href="#logo-mark" />
                </svg>
                <svg
                  className="logo-mark"
                  viewBox="-4.4 0 83.1 83.1"
                  style={{ width: "40px", height: "40px" }}
                  aria-hidden="true"
                >
                  <use href="#logo-mark" />
                </svg>
                <svg
                  className="logo-mark"
                  viewBox="-4.4 0 83.1 83.1"
                  style={{ width: "24px", height: "24px" }}
                  aria-hidden="true"
                >
                  <use href="#logo-mark" />
                </svg>
              </div>
            </div>
            <h3 className="h4" style={{ marginTop: "20px" }}>
              Product logos
            </h3>
            <p style={{ maxWidth: "62ch", color: "var(--ink-2)" }}>
              Every product logo starts with the Tipsona “T” mark. On a product’s pages, its logo
              leads the menu and opens that product’s home, and a “by Tipsona” link next to it opens
              the Tipsona home.
            </p>
            <div
              className="ds-grid"
              style={{ gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}
            >
              <div className="ds-demo" style={{ justifyContent: "center", minHeight: "160px" }}>
                <img
                  className="logo logo--tipstore"
                  src="/assets/img/tipstore-logo.svg"
                  width="927"
                  height="254"
                  style={{ height: "44px" }}
                  alt="TipStore logo in flame on canvas"
                />
              </div>
              <div
                className="ds-demo ds-demo--dark"
                style={{ justifyContent: "center", minHeight: "160px" }}
              >
                <img
                  className="logo logo--tipstore"
                  src="/assets/img/tipstore-logo.svg"
                  width="927"
                  height="254"
                  style={{ height: "44px" }}
                  alt="TipStore logo in flame on night"
                />
              </div>
              <div
                className="ds-demo"
                style={{
                  justifyContent: "center",
                  minHeight: "160px",
                  background: "var(--flame)",
                  borderColor: "transparent"
                }}
              >
                <img
                  className="logo logo--tipstore"
                  src="/assets/img/tipstore-logo.svg"
                  width="927"
                  height="254"
                  style={{ height: "44px", filter: "brightness(0) invert(1)" }}
                  alt="TipStore logo in white on flame"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="ds-section" id="ds-colour" aria-labelledby="ds-colour-t">
          <div className="container">
            <h2 className="h3" id="ds-colour-t">
              Colour
            </h2>
            <p className="lede" style={{ marginTop: "14px" }}>
              Flame leads and the logo is always flame. Night, a warm near-black, carries dark
              sections. Four illustration colours give each tip shape its own voice. Neutrals lean
              warm.
            </p>
            <h3 className="h4" style={{ margin: "36px 0 14px" }}>
              Brand
            </h3>
            <div className="ds-swatches">
              <div className="swatch">
                <div className="swatch__chip" style={{ background: "#FF5D02", color: "#17120E" }}>
                  <span>White text: 19px bold+</span>
                  <span>Aa</span>
                </div>
                <div className="swatch__meta">
                  <b>Flame</b>
                  <code>--flame · #FF5D02</code>
                  <span>
                    Primary. Logo, buttons, highlights and shapes. White text at 19px bold or
                    bigger.
                  </span>
                </div>
              </div>
              <div className="swatch">
                <div className="swatch__chip" style={{ background: "#E84F00", color: "#17120E" }}>
                  <span>Hover</span>
                  <span>Aa</span>
                </div>
                <div className="swatch__meta">
                  <b>Flame deep</b>
                  <code>--flame-deep · #E84F00</code>
                  <span>Hover and pressed state for flame.</span>
                </div>
              </div>
              <div className="swatch">
                <div className="swatch__chip" style={{ background: "#B83D00", color: "#FFFFFF" }}>
                  <span>5.4:1 on canvas</span>
                  <span>Aa</span>
                </div>
                <div className="swatch__meta">
                  <b>Ember</b>
                  <code>--ember · #B83D00</code>
                  <span>Orange text on light surfaces.</span>
                </div>
              </div>
              <div className="swatch">
                <div className="swatch__chip" style={{ background: "#FFE3D2", color: "#17120E" }}>
                  <span>Ink 15:1</span>
                  <span>Aa</span>
                </div>
                <div className="swatch__meta">
                  <b>Flame tint</b>
                  <code>--flame-tint · #FFE3D2</code>
                  <span>Soft orange surfaces.</span>
                </div>
              </div>
            </div>
            <h3 className="h4" style={{ margin: "36px 0 14px" }}>
              Neutrals
            </h3>
            <div className="ds-swatches">
              <div className="swatch">
                <div className="swatch__chip" style={{ background: "#17120E", color: "#FFF6EC" }}>
                  <span>17.6:1 on canvas</span>
                  <span>Aa</span>
                </div>
                <div className="swatch__meta">
                  <b>Ink</b>
                  <code>--ink · #17120E</code>
                  <span>Headings and body text.</span>
                </div>
              </div>
              <div className="swatch">
                <div className="swatch__chip" style={{ background: "#3B332C", color: "#FFF6EC" }}>
                  <span>11.7:1</span>
                  <span>Aa</span>
                </div>
                <div className="swatch__meta">
                  <b>Ink 2</b>
                  <code>--ink-2 · #3B332C</code>
                  <span>Secondary text.</span>
                </div>
              </div>
              <div className="swatch">
                <div className="swatch__chip" style={{ background: "#6B6158", color: "#FFF6EC" }}>
                  <span>5.7:1</span>
                  <span>Aa</span>
                </div>
                <div className="swatch__meta">
                  <b>Muted</b>
                  <code>--muted · #6B6158</code>
                  <span>Captions, meta and hints.</span>
                </div>
              </div>
              <div className="swatch">
                <div className="swatch__chip" style={{ background: "#FBF8F4", color: "#17120E" }}>
                  <span />
                  <span>Aa</span>
                </div>
                <div className="swatch__meta">
                  <b>Canvas</b>
                  <code>--canvas · #FBF8F4</code>
                  <span>Page background.</span>
                </div>
              </div>
              <div className="swatch">
                <div className="swatch__chip" style={{ background: "#FFFFFF", color: "#17120E" }}>
                  <span />
                  <span>Aa</span>
                </div>
                <div className="swatch__meta">
                  <b>Paper</b>
                  <code>--paper · #FFFFFF</code>
                  <span>Cards, inputs and mockups.</span>
                </div>
              </div>
              <div className="swatch">
                <div className="swatch__chip" style={{ background: "#F3EDE5", color: "#17120E" }}>
                  <span />
                  <span>Aa</span>
                </div>
                <div className="swatch__meta">
                  <b>Sand</b>
                  <code>--sand · #F3EDE5</code>
                  <span>Recessed surfaces and tracks.</span>
                </div>
              </div>
              <div className="swatch">
                <div className="swatch__chip" style={{ background: "#E7DFD5", color: "#17120E" }}>
                  <span />
                  <span>Aa</span>
                </div>
                <div className="swatch__meta">
                  <b>Line</b>
                  <code>--line · #E7DFD5</code>
                  <span>Hairlines and borders.</span>
                </div>
              </div>
            </div>
            <h3 className="h4" style={{ margin: "36px 0 14px" }}>
              Night
            </h3>
            <div className="ds-swatches">
              <div className="swatch">
                <div className="swatch__chip" style={{ background: "#161514", color: "#FFF6EC" }}>
                  <span>Cream 17.1:1</span>
                  <span>Aa</span>
                </div>
                <div className="swatch__meta">
                  <b>Night</b>
                  <code>--night · #161514</code>
                  <span>Dark sections, the featured plan and the footer.</span>
                </div>
              </div>
              <div className="swatch">
                <div className="swatch__chip" style={{ background: "#22201E", color: "#FFF6EC" }}>
                  <span>Cream 15.2:1</span>
                  <span>Aa</span>
                </div>
                <div className="swatch__meta">
                  <b>Night 2</b>
                  <code>--night-2 · #22201E</code>
                  <span>Raised surfaces on night.</span>
                </div>
              </div>
              <div className="swatch">
                <div className="swatch__chip" style={{ background: "#FFF6EC", color: "#161514" }}>
                  <span />
                  <span>Aa</span>
                </div>
                <div className="swatch__meta">
                  <b>Cream</b>
                  <code>--cream · #FFF6EC</code>
                  <span>Text on night and ink.</span>
                </div>
              </div>
              <div className="swatch">
                <div className="swatch__chip" style={{ background: "#B5ADA4", color: "#161514" }}>
                  <span>8.2:1 on night</span>
                  <span>Aa</span>
                </div>
                <div className="swatch__meta">
                  <b>Night muted</b>
                  <code>--night-muted · #B5ADA4</code>
                  <span>Secondary text on night.</span>
                </div>
              </div>
            </div>
            <h3 className="h4" style={{ margin: "36px 0 14px" }}>
              Illustration
            </h3>
            <div className="ds-swatches">
              <div className="swatch">
                <div className="swatch__chip" style={{ background: "#FFC83D", color: "#17120E" }}>
                  <span>Ink 12.0:1</span>
                  <span>Aa</span>
                </div>
                <div className="swatch__meta">
                  <b>Sun</b>
                  <code>--sun · #FFC83D</code>
                  <span>Stars: tips and ideas. Stickers.</span>
                </div>
              </div>
              <div className="swatch">
                <div className="swatch__chip" style={{ background: "#CBB8FF", color: "#17120E" }}>
                  <span>Ink 10.5:1</span>
                  <span>Aa</span>
                </div>
                <div className="swatch__meta">
                  <b>Lilac</b>
                  <code>--lilac · #CBB8FF</code>
                  <span>Squares: products. Analytics.</span>
                </div>
              </div>
              <div className="swatch">
                <div className="swatch__chip" style={{ background: "#FFC9D6", color: "#17120E" }}>
                  <span>Ink 12.9:1</span>
                  <span>Aa</span>
                </div>
                <div className="swatch__meta">
                  <b>Blush</b>
                  <code>--blush · #FFC9D6</code>
                  <span>Diamonds: trust. The pink section.</span>
                </div>
              </div>
              <div className="swatch">
                <div className="swatch__chip" style={{ background: "#D8F36A", color: "#17120E" }}>
                  <span>Ink 15.0:1</span>
                  <span>Aa</span>
                </div>
                <div className="swatch__meta">
                  <b>Lime</b>
                  <code>--mint · #D8F36A</code>
                  <span>Pills: money. Stickers and checks on night.</span>
                </div>
              </div>
            </div>
            <h3 className="h4" style={{ margin: "36px 0 14px" }}>
              Semantic
            </h3>
            <div className="ds-swatches">
              <div className="swatch">
                <div className="swatch__chip" style={{ background: "#1B7148", color: "#DDF3E6" }}>
                  <span>5.2:1 on its tint</span>
                  <span>Aa</span>
                </div>
                <div className="swatch__meta">
                  <b>Success</b>
                  <code>--success · #1B7148</code>
                  <span>Paid, delivered, available.</span>
                </div>
              </div>
              <div className="swatch">
                <div className="swatch__chip" style={{ background: "#8A5A00", color: "#FFF1CC" }}>
                  <span>5.3:1 on its tint</span>
                  <span>Aa</span>
                </div>
                <div className="swatch__meta">
                  <b>Warning</b>
                  <code>--warning · #8A5A00</code>
                  <span>Pending states.</span>
                </div>
              </div>
              <div className="swatch">
                <div className="swatch__chip" style={{ background: "#B42318", color: "#FDE4E1" }}>
                  <span>5.4:1 on its tint</span>
                  <span>Aa</span>
                </div>
                <div className="swatch__meta">
                  <b>Danger</b>
                  <code>--danger · #B42318</code>
                  <span>Errors and failed payments.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ds-section" id="ds-contrast" aria-labelledby="ds-contrast-t">
          <div className="container ds-grid">
            <h2 className="h3" id="ds-contrast-t">
              Contrast rules
            </h2>
            <div
              className="ds-grid"
              style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}
            >
              <div className="ds-pair" style={{ background: "#FBF8F4" }}>
                <span className="ds-pair__sample" style={{ color: "#17120E" }} aria-hidden="true">
                  Aa
                </span>
                <span className="ds-pair__label" style={{ color: "#17120E" }}>
                  Ink on canvas<small>17.6:1 · Pass</small>
                </span>
              </div>
              <div className="ds-pair" style={{ background: "#FBF8F4" }}>
                <span className="ds-pair__sample" style={{ color: "#6B6158" }} aria-hidden="true">
                  Aa
                </span>
                <span className="ds-pair__label" style={{ color: "#17120E" }}>
                  Muted on canvas<small>5.7:1 · Pass</small>
                </span>
              </div>
              <div className="ds-pair" style={{ background: "#FBF8F4" }}>
                <span className="ds-pair__sample" style={{ color: "#B83D00" }} aria-hidden="true">
                  Aa
                </span>
                <span className="ds-pair__label" style={{ color: "#17120E" }}>
                  Ember on canvas<small>5.4:1 · Pass</small>
                </span>
              </div>
              <div className="ds-pair" style={{ background: "#161514" }}>
                <span className="ds-pair__sample" style={{ color: "#FFF6EC" }} aria-hidden="true">
                  Aa
                </span>
                <span className="ds-pair__label" style={{ color: "#FFF6EC" }}>
                  Cream on night<small>17.1:1 · Pass</small>
                </span>
              </div>
              <div className="ds-pair" style={{ background: "#161514" }}>
                <span className="ds-pair__sample" style={{ color: "#B5ADA4" }} aria-hidden="true">
                  Aa
                </span>
                <span className="ds-pair__label" style={{ color: "#FFF6EC" }}>
                  Muted on night<small>8.2:1 · Pass</small>
                </span>
              </div>
              <div className="ds-pair" style={{ background: "#161514" }}>
                <svg
                  className="ds-pair__sample"
                  viewBox="0 0 64 36"
                  width="64"
                  height="36"
                  aria-hidden="true"
                >
                  <text
                    x="0"
                    y="30"
                    fill="#FF5D02"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: "700",
                      fontSize: "34px",
                      letterSpacing: "-1px"
                    }}
                  >
                    Aa
                  </text>
                </svg>
                <span className="ds-pair__label" style={{ color: "#FFF6EC" }}>
                  Flame on night<small>5.9:1 · Pass</small>
                </span>
              </div>
              <div className="ds-pair" style={{ background: "#FF5D02" }}>
                <svg
                  className="ds-pair__sample"
                  viewBox="0 0 64 36"
                  width="64"
                  height="36"
                  aria-hidden="true"
                >
                  <text
                    x="0"
                    y="30"
                    fill="#FFFFFF"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: "700",
                      fontSize: "34px",
                      letterSpacing: "-1px"
                    }}
                  >
                    Aa
                  </text>
                </svg>
                <span className="ds-pair__label" style={{ color: "#17120E" }}>
                  White on flame, 19px bold+ only<small>3.1:1 · Large text</small>
                </span>
              </div>
              <div className="ds-pair" style={{ background: "#FBF8F4" }}>
                <svg
                  className="ds-pair__sample"
                  viewBox="0 0 64 36"
                  width="64"
                  height="36"
                  aria-hidden="true"
                >
                  <text
                    x="0"
                    y="30"
                    fill="#FF5D02"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: "700",
                      fontSize: "34px",
                      letterSpacing: "-1px"
                    }}
                  >
                    Aa
                  </text>
                </svg>
                <span className="ds-pair__label" style={{ color: "#17120E" }}>
                  Flame text on canvas<small>2.9:1 · Avoid</small>
                </span>
              </div>
            </div>
            <ul className="ds-rules">
              <li>
                <b>Text meets WCAG AA</b>
                <p>
                  Body text is 4.5:1 or better against its background. Large display text (24px bold
                  and up) is 3:1 or better.
                </p>
              </li>
              <li>
                <b>Flame is a surface, not a text colour</b>
                <p>
                  Flame on light backgrounds is only 2.9:1. Use it for the logo, buttons, highlights
                  and shapes. Text on flame is white and large: 19px bold or bigger. For orange
                  words on light, use Ember.
                </p>
              </li>
              <li>
                <b>Pair every surface with its text token</b>
                <p>
                  Canvas and paper take ink. Night takes cream. Flame takes white at large sizes.
                  Sun, lilac, blush and lime take ink. Never place muted text on tinted illustration
                  colours.
                </p>
              </li>
              <li>
                <b>Status is never colour alone</b>
                <p>
                  Pills pair colour with a word and a dot: Paid, Pending, Failed. Charts pair colour
                  with labels.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="ds-section" id="ds-type" aria-labelledby="ds-type-t">
          <div className="container">
            <h2 className="h3" id="ds-type-t">
              Type
            </h2>
            <p className="lede" style={{ marginTop: "14px" }}>
              DM Sans for everything you read, and its sibling DM Mono for labels and data. DM Sans
              is a low-contrast geometric sans with optical sizing: small text gets sturdier letters
              and more space, big headlines get finer, tighter ones. It has a true italic, which we
              use as the second voice in headlines.
            </p>
            <div style={{ marginTop: "28px" }}>
              <div className="ds-type-row">
                <code>
                  Hero · DM Sans 600
                  <br />
                  step 7 · 50 → 136px
                  <br />
                  leading .9 · tracking −3%
                </code>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: "600",
                    fontSize: "clamp(2.6rem,7vw,6rem)",
                    lineHeight: ".9",
                    letterSpacing: "-.03em"
                  }}
                >
                  Know something?
                </p>
              </div>
              <div className="ds-type-row">
                <code>
                  H2 · DM Sans 500 + italic
                  <br />
                  step 5 · 38 → 72px
                  <br />
                  leading .98 · tracking −2.4%
                </code>
                <p className="h2">
                  One home for <em>your business.</em>
                </p>
              </div>
              <div className="ds-type-row">
                <code>
                  H3 · DM Sans 500
                  <br />
                  step 3 · 26 → 38px · leading 1.08
                </code>
                <p className="h3">Customers pay. Files arrive.</p>
              </div>
              <div className="ds-type-row">
                <code>
                  H4 · DM Sans 600
                  <br />
                  step 2 · 22 → 28px · leading 1.22
                </code>
                <p className="h4">Checkout in one step</p>
              </div>
              <div className="ds-type-row">
                <code>
                  Lede · DM Sans 400
                  <br />
                  step 1 · 18 → 22px · leading 1.55
                </code>
                <p className="lede">
                  TipStore gives you a storefront for your e-books, courses, templates and presets.
                </p>
              </div>
              <div className="ds-type-row">
                <code>
                  Body · DM Sans 400
                  <br />
                  step 0 · 16 → 18px · leading 1.6 · max 62ch
                </code>
                <p style={{ maxWidth: "60ch" }}>
                  Buyers get instant access, an email with their access link and a copy in their
                  library. You never send a file by hand.
                </p>
              </div>
              <div className="ds-type-row">
                <code>
                  Label · DM Mono 400
                  <br />
                  step −2 · 12 → 13px · uppercase · +8%
                </code>
                <p>
                  <span className="tab-label">
                    <span className="tip tip--star c-sun" aria-hidden="true" />
                    How it works
                  </span>
                </p>
              </div>
              <div className="ds-type-row">
                <code>
                  Data · DM Mono 400
                  <br />
                  fixed-width figures
                </code>
                <p className="mono" style={{ fontSize: "1rem" }}>
                  Order #TPS-24817 · ₦7,500.00 · GH₵ 450.00
                </p>
              </div>
            </div>
            <div style={{ marginTop: "36px" }}>
              <ul className="ds-rules">
                <li>
                  <b>One loud thing per section</b>
                  <p>
                    A mono tab label names the section, then one headline, then one short lede. At
                    most one flame element; everything around it stays quiet.
                  </p>
                </li>
                <li>
                  <b>Size, then weight, then colour</b>
                  <p>
                    Hierarchy comes from the type scale first. Colour is the last resort, not the
                    first.
                  </p>
                </li>
                <li>
                  <b>One scale, no in-betweens</b>
                  <p>
                    Eleven fluid steps, from 12px labels to 176px display. The ratio is about 1.2 on
                    phones and 1.33 on desktop, so contrast grows with the screen.
                  </p>
                </li>
                <li>
                  <b>Tracking and leading follow size</b>
                  <p>
                    The bigger the type, the tighter the letters and lines: −3% and .9 for heroes,
                    normal spacing and 1.6 for body text.
                  </p>
                </li>
                <li>
                  <b>Emphasis is a change of voice</b>
                  <p>
                    Each headline has one italic phrase: the payoff. It changes the voice, not the
                    colour. The orange highlight is kept for the single key phrase of a hero.
                  </p>
                </li>
                <li>
                  <b>Break lines by meaning</b>
                  <p>
                    Headlines break where you would pause when reading aloud, and sizes are set so
                    those breaks hold on every screen. Short phrases never split.
                  </p>
                </li>
                <li>
                  <b>A comfortable measure</b>
                  <p>
                    Reading text stays under about 62 characters a line. Centred text is balanced,
                    so no line is left hanging.
                  </p>
                </li>
                <li>
                  <b>Numbers are content</b>
                  <p>
                    Prices, balances and order IDs use DM Mono, so figures line up and read like
                    receipts. DM Sans has no Naira (₦) or Cedi (₵) sign, so those two come from
                    matching fallback fonts, loaded only when a page shows them.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="ds-section" id="ds-shapes" aria-labelledby="ds-shapes-t">
          <div className="container ds-grid">
            <h2 className="h3" id="ds-shapes-t">
              Tip shapes
            </h2>
            <p className="lede">
              Six shapes, each with one meaning and one colour. They mark navigation, fill icons,
              build product covers, float in heroes and become stickers. Use the shape that matches
              what you are talking about.
            </p>
            <div className="ds-shapes">
              <div className="ds-shape">
                <div className="stage">
                  <span className="tip tip--circle c-flame" />
                </div>
                <b
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    letterSpacing: "-.02em"
                  }}
                >
                  A person
                </b>
                <span className="mono" style={{ color: "var(--muted)" }}>
                  circle · flame
                </span>
                <p style={{ color: "var(--ink-2)", fontSize: ".9375rem" }}>
                  Creators, buyers, avatars. The most human shape.
                </p>
              </div>
              <div className="ds-shape">
                <div className="stage">
                  <span className="tip tip--star c-sun" />
                </div>
                <b
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    letterSpacing: "-.02em"
                  }}
                >
                  A tip or idea
                </b>
                <span className="mono" style={{ color: "var(--muted)" }}>
                  star · sun
                </span>
                <p style={{ color: "var(--ink-2)", fontSize: ".9375rem" }}>
                  Knowledge, highlights, “how it works”.
                </p>
              </div>
              <div className="ds-shape">
                <div className="stage">
                  <span className="tip tip--square c-lilac" />
                </div>
                <b
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    letterSpacing: "-.02em"
                  }}
                >
                  A product
                </b>
                <span className="mono" style={{ color: "var(--muted)" }}>
                  square · lilac
                </span>
                <p style={{ color: "var(--ink-2)", fontSize: ".9375rem" }}>
                  Files, e-books, templates, anything for sale.
                </p>
              </div>
              <div className="ds-shape">
                <div className="stage">
                  <span className="tip tip--arch c-night" />
                </div>
                <b
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    letterSpacing: "-.02em"
                  }}
                >
                  A storefront
                </b>
                <span className="mono" style={{ color: "var(--muted)" }}>
                  arch · night
                </span>
                <p style={{ color: "var(--ink-2)", fontSize: ".9375rem" }}>
                  Stores, doorways, photo frames.
                </p>
              </div>
              <div className="ds-shape">
                <div className="stage">
                  <span className="tip tip--pill c-mint" />
                </div>
                <b
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    letterSpacing: "-.02em"
                  }}
                >
                  Money
                </b>
                <span className="mono" style={{ color: "var(--muted)" }}>
                  pill · mint
                </span>
                <p style={{ color: "var(--ink-2)", fontSize: ".9375rem" }}>
                  Prices, payments, payouts, balances.
                </p>
              </div>
              <div className="ds-shape">
                <div className="stage">
                  <span className="tip tip--diamond c-blush" />
                </div>
                <b
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.2rem",
                    letterSpacing: "-.02em"
                  }}
                >
                  Trust
                </b>
                <span className="mono" style={{ color: "var(--muted)" }}>
                  diamond · blush
                </span>
                <p style={{ color: "var(--ink-2)", fontSize: ".9375rem" }}>
                  Security, verification, protection.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="ds-section" id="ds-icons" aria-labelledby="ds-icons-t">
          <div className="container ds-grid">
            <h2 className="h3" id="ds-icons-t">
              Icons
            </h2>
            <p className="lede">
              A 24px grid, 1.75px round strokes, drawn in the current text colour. Product icons
              carry one tip-shape accent behind the line work, coloured with{" "}
              <code className="mono">--acc</code>.
            </p>
            <div className="ds-icons" data-icon-grid="" />
          </div>
        </section>
        <section className="ds-section" id="ds-components" aria-labelledby="ds-components-t">
          <div className="container ds-grid">
            <h2 className="h3" id="ds-components-t">
              Components
            </h2>
            <div className="ds-demo">
              <a className="btn btn--flame" href="#">
                Primary action
                <svg className="i i-go" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
              </a>
              <a className="btn btn--ink" href="#">
                Secondary
              </a>
              <a className="btn btn--ghost" href="#">
                Ghost
              </a>
              <a className="btn btn--flame btn--sm" href="#">
                Small
              </a>
              <a className="link-arrow" href="#">
                Text link
                <svg className="i" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
              </a>
            </div>
            <div className="ds-demo ds-demo--dark on-dark">
              <a className="btn btn--flame" href="#">
                On night
                <svg className="i i-go" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
              </a>
              <a className="btn btn--cream" href="#">
                Cream
              </a>
              <span className="tab-label">
                <span className="tip tip--circle c-flame" aria-hidden="true" />
                File tab on dark
              </span>
            </div>
            <div className="ds-demo">
              <span className="pill pill--success pill--dot">Paid</span>
              <span className="pill pill--warning pill--dot">Pending</span>
              <span className="pill pill--danger pill--dot">Failed</span>
              <span className="pill pill--flame">Early access</span>
              <span className="pill pill--ink">New</span>
              <span className="tab-label">
                <span className="tip tip--star c-sun" aria-hidden="true" />
                File tab
              </span>
            </div>
            <div className="ds-demo" style={{ display: "block" }}>
              <form
                className="claim"
                data-claim=""
                noValidate
                style={{ width: "100%", maxWidth: "560px", minWidth: "0" }}
              >
                <label className="sr-only" htmlFor="claim-ds">
                  Choose your storefront name
                </label>{" "}
                <div className="claim__field">
                  <span className="claim__prefix" aria-hidden="true">
                    tipstore.tipsona.co/
                  </span>
                  <input
                    className="claim__input"
                    id="claim-ds"
                    type="text"
                    autoComplete="off"
                    autoCapitalize="none"
                    spellCheck="false"
                    maxLength={30}
                    placeholder="try “admin”"
                    aria-describedby="claim-ds-hint"
                  />
                  <button className="btn btn--flame" type="submit">
                    Claim your link
                    <svg className="i i-go" aria-hidden="true">
                      <use href="#i-arrow-right" />
                    </svg>
                  </button>
                </div>
                <p className="claim__hint" id="claim-ds-hint" aria-live="polite">
                  Live validation: lowercase letters and numbers, 3 to 30 characters, reserved words
                  blocked.
                </p>
              </form>
            </div>
          </div>
        </section>
        <section className="ds-section" id="ds-motion" aria-labelledby="ds-motion-t">
          <div className="container ds-grid">
            <h2 className="h3" id="ds-motion-t">
              Motion
            </h2>
            <p className="lede">
              Four curves do all the work. Press a card to play it. Scroll-linked scenes pin only on
              large screens, loops pause when off screen, and everything stops for people who ask
              for reduced motion.
            </p>
            <div className="ds-motion" data-motion-demos="">
              <button type="button" data-ease="expo.out">
                <span className="track">
                  <span className="ball" />
                </span>
                <b>Reveal</b>
                <code>expo.out · 1.1s · text and cards rising into place</code>
              </button>{" "}
              <button type="button" data-ease="back.out(1.9)">
                <span className="track">
                  <span className="ball" />
                </span>
                <b>Pop</b>
                <code>back.out(1.9) · 0.8s · stickers, cards, confirmations</code>
              </button>{" "}
              <button type="button" data-ease="expo.inOut">
                <span className="track">
                  <span className="ball" />
                </span>
                <b>Wipe</b>
                <code>expo.inOut · 0.95s · highlights and photo reveals</code>
              </button>{" "}
              <button type="button" data-ease="power2.inOut">
                <span className="track">
                  <span className="ball" />
                </span>
                <b>Travel</b>
                <code>power2.inOut · 1.6s · files moving, lines drawing</code>
              </button>
            </div>
          </div>
        </section>
        <section className="ds-section" id="ds-ux" aria-labelledby="ds-ux-t">
          <div className="container ds-grid">
            <h2 className="h3" id="ds-ux-t">
              UX rules
            </h2>
            <ul className="ds-rules">
              <li>
                <b>Write from the seller’s side</b>
                <p>
                  Say “Withdraw to your bank”, not “Initiate payout”. Buttons say exactly what
                  happens: “Claim your link”, “Pay ₦7,500”.
                </p>
              </li>
              <li>
                <b>Show real money</b>
                <p>
                  Always show currency symbols (₦, GH₵) and full amounts. Fees are shown before they
                  are taken.
                </p>
              </li>
              <li>
                <b>Validate as people type</b>
                <p>
                  Usernames are lowercased and cleaned as you type, with a clear reason when a name
                  is not available and a suggestion to try.
                </p>
              </li>
              <li>
                <b>Motion explains, never blocks</b>
                <p>
                  Animation shows cause and effect: a payment lands, a file flies to the library.
                  Content is readable without it, and reduced-motion settings turn it off.
                </p>
              </li>
              <li>
                <b>Thumb-first</b>
                <p>
                  Touch targets are at least 44px. Primary actions are full-width on phones. Nothing
                  scrolls sideways except data tables.
                </p>
              </li>
              <li>
                <b>Fast by default</b>
                <p>
                  Self-hosted, subsetted fonts. WebP images with fixed sizes and lazy loading.
                  Animation libraries load deferred and pause when off screen.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer pitch="One design system for every Tipsona product page." />
    </>
  );
}
