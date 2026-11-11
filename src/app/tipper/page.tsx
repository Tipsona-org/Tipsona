import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { NavProduct } from "@/components/layout/nav-product";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbs, productApp } from "@/lib/structured-data";

const DESCRIPTION =
  "Tipper matches UGC creators with brands. The brief, product delivery, escrow, approvals and your payout are handled in one place.";

export const metadata: Metadata = pageMetadata({
  title: "Tipper by Tipsona · Get paid for UGC, safely",
  description: DESCRIPTION,
  path: "/tipper/"
});

export default function TipperPage() {
  return (
    <>
      <NavProduct
        product="Tipper"
        cta="Join the waitlist"
        ctaHref="/waitlist/?product=tipper"
        links={[
          { label: "Why Tipper", href: "#why" },
          { label: "How it works", href: "#how" },
          { label: "Trust", href: "#trust" },
          { label: "All products", href: "/products/" }
        ]}
      />
      <main id="main">
        <section className="page-hero grid-lines prod-hero" id="top" aria-labelledby="page-title">
          <div className="container prod-hero__grid">
            <div className="prod-hero__copy">
              <p className="tab-label" data-intro="">
                <span className="tip tip--circle c-lilac" aria-hidden="true" />
                Tipper · For UGC creators
              </p>
              <h1 className="h1" id="page-title">
                <span className="ln">
                  <span className="ln__in">Get paid for UGC.</span>
                </span>{" "}
                <span className="ln">
                  <span className="ln__in">
                    <span className="hl">
                      <span className="hl__bg" aria-hidden="true" />
                      Safely.
                    </span>
                  </span>
                </span>
              </h1>
              <p className="lede" data-intro="">
                Tipper is Africa’s automated UGC marketplace. It matches you with brands, and
                handles the brief, product delivery, escrow, approvals and your payout in one place.
              </p>
              <div className="hub-hero__ctas" data-intro="">
                <a className="btn btn--flame" href="#how">
                  See how it works
                  <svg className="i i-go" aria-hidden="true">
                    <use href="#i-arrow-down" />
                  </svg>
                </a>{" "}
                <a className="btn btn--ghost" href="#contact">
                  Get in touch
                </a>
              </div>
            </div>
            <div className="prod-hero__art" data-intro="">
              <article
                className="order-card campaign"
                aria-label="Example Tipper campaign moving from escrow to payout"
              >
                <div className="order-card__top">
                  <span className="order-card__id">Example campaign</span>{" "}
                  <span className="pill pill--success pill--dot">Escrow funded</span>
                </div>
                <div className="order-card__prod">
                  <span className="prod__thumb cover-lilac">
                    <svg className="i" style={{ "--acc": "var(--paper)" }} aria-hidden="true">
                      <use href="#i-video" />
                    </svg>
                  </span>{" "}
                  <div>
                    <b>Short-form UGC video</b>
                    <span>Brand campaign · 1 creator</span>
                  </div>
                </div>
                <ol className="tl" data-campaign="">
                  <li className="tl-row is-done">
                    <span className="dot">
                      <svg className="i" aria-hidden="true">
                        <use href="#i-check" />
                      </svg>
                    </span>
                    <span>
                      Brand funds campaign <small>· escrow</small>
                    </span>
                  </li>
                  <li className="tl-row is-done">
                    <span className="dot">
                      <svg className="i" aria-hidden="true">
                        <use href="#i-check" />
                      </svg>
                    </span>
                    <span>You apply with a pitch</span>
                  </li>
                  <li className="tl-row is-done">
                    <span className="dot">
                      <svg className="i" aria-hidden="true">
                        <use href="#i-check" />
                      </svg>
                    </span>
                    <span>Courier delivery tracked</span>
                  </li>
                  <li className="tl-row is-done">
                    <span className="dot">
                      <svg className="i" aria-hidden="true">
                        <use href="#i-check" />
                      </svg>
                    </span>
                    <span>Execution deadline starts</span>
                  </li>
                  <li className="tl-row is-now">
                    <span className="dot">
                      <svg className="i" aria-hidden="true">
                        <use href="#i-eye" />
                      </svg>
                    </span>
                    <span>You submit a watermarked draft</span>
                  </li>
                  <li className="tl-row">
                    <span className="dot">
                      <svg className="i" aria-hidden="true">
                        <use href="#i-check" />
                      </svg>
                    </span>
                    <span>Brand approves</span>
                  </li>
                  <li className="tl-row">
                    <span className="dot">
                      <svg className="i" aria-hidden="true">
                        <use href="#i-check" />
                      </svg>
                    </span>
                    <span>
                      You get paid <small>· local or cross-border</small>
                    </span>
                  </li>
                </ol>
              </article>
              <div className="float-card campaign__rails" aria-hidden="true">
                <span className="icon-tile" style={{ background: "var(--mint)", border: "0" }}>
                  <svg className="i">
                    <use href="#i-bank" />
                  </svg>
                </span>{" "}
                <span>
                  <b>Local payout rails</b>NGN · GHS · KES · mobile money
                </span>
              </div>
            </div>
          </div>
        </section>{" "}
        {/* ─────────────────────────── Why ─────────────────────────── */}{" "}
        <section className="section" id="why" aria-labelledby="why-title">
          <div className="container">
            <header className="section-head section-head--split">
              <div style={{ display: "grid", gap: "22px" }}>
                <p className="tab-label">
                  <span className="tip tip--square c-lilac" aria-hidden="true" />
                  Why Tipper
                </p>
                <h2 className="h2" id="why-title" data-split="">
                  Brand work, <em>without the chaos.</em>
                </h2>
              </div>
              <p className="lede">
                Brands need authentic content. You need clear briefs, the product in your hands,
                fast approvals and a payout you don’t have to chase.
              </p>
            </header>
            <div className="card-grid card-grid--4">
              <article className="info-card" data-reveal="">
                <span className="icon-tile acc-flame">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-video" />
                  </svg>
                </span>
                <h3>Brands need you</h3>
                <p>
                  Brands need high volumes of authentic short-form content, and they’re looking for
                  creators.
                </p>
              </article>
              <article className="info-card" data-reveal="">
                <span className="icon-tile acc-lilac">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-chat" />
                  </svg>
                </span>
                <h3>No more ghosting</h3>
                <p>
                  Deals in DMs fall through. On Tipper, the brand funds the campaign into escrow
                  before you start.
                </p>
              </article>
              <article className="info-card" data-reveal="">
                <span className="icon-tile acc-mint">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-naira" />
                  </svg>
                </span>
                <h3>Paid the way you want</h3>
                <p>Local and cross-border payouts across NGN, GHS, KES and mobile money.</p>
              </article>
              <article className="info-card" data-reveal="">
                <span className="icon-tile acc-sun">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-link" />
                  </svg>
                </span>
                <h3>Everything in one place</h3>
                <p>
                  Brief, shipping, approvals, usage rights and payment, connected instead of
                  scattered.
                </p>
              </article>
            </div>
          </div>
        </section>{" "}
        {/* ─────────────────────────── How it works ─────────────────────────── */}{" "}
        <section className="section flow-sec on-dark" id="how" aria-labelledby="how-title">
          <div className="container flow-sec__grid">
            <div className="flow-sec__copy">
              <p className="tab-label">
                <span className="tip tip--star c-sun" aria-hidden="true" />
                How it works
              </p>
              <h2 className="h2" id="how-title" data-split="">
                From brief to&nbsp;payout, <em>in&nbsp;one&nbsp;flow.</em>
              </h2>
              <p className="lede">
                The money is secured in escrow before you start, and your deadline only begins once
                the product reaches you.
              </p>
            </div>
            <ol className="flow" data-flow="">
              <li className="flow__rail" aria-hidden="true">
                <i data-flow-fill="" />
              </li>
              <li className="flow__step" data-reveal="">
                <span className="flow__icon">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-lock" />
                  </svg>
                </span>
                <div>
                  <b>Brand funds the campaign</b>
                  <span>The budget goes into escrow.</span>
                </div>
              </li>
              <li className="flow__step" data-reveal="">
                <span className="flow__icon">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-users" />
                  </svg>
                </span>
                <div>
                  <b>You apply with a pitch</b>
                  <span>Tell the brand why you’re the right creator.</span>
                </div>
              </li>
              <li className="flow__step" data-reveal="">
                <span className="flow__icon">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-truck" />
                  </svg>
                </span>
                <div>
                  <b>Courier delivery is tracked</b>
                  <span>The product ships to you.</span>
                </div>
              </li>
              <li className="flow__step" data-reveal="">
                <span className="flow__icon">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-clock" />
                  </svg>
                </span>
                <div>
                  <b>Delivery starts the deadline</b>
                  <span>The execution deadline begins when the product arrives.</span>
                </div>
              </li>
              <li className="flow__step" data-reveal="">
                <span className="flow__icon">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-eye" />
                  </svg>
                </span>
                <div>
                  <b>You submit a watermarked draft</b>
                  <span>Your work stays protected while the brand reviews it.</span>
                </div>
              </li>
              <li className="flow__step" data-reveal="">
                <span className="flow__icon">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-check-circle" />
                  </svg>
                </span>
                <div>
                  <b>Brand approves</b>
                  <span>Then the payout is released from escrow.</span>
                </div>
              </li>
              <li className="flow__step" data-reveal="">
                <span className="flow__icon">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-bank" />
                  </svg>
                </span>
                <div>
                  <b>You get paid</b>
                  <span>A local or cross-border payout.</span>
                </div>
              </li>
            </ol>
          </div>
        </section>{" "}
        {/* ─────────────────────────── Trust ─────────────────────────── */}{" "}
        <section className="section" id="trust" aria-labelledby="trust-title">
          <div className="container">
            <header className="section-head section-head--split">
              <div style={{ display: "grid", gap: "22px" }}>
                <p className="tab-label">
                  <span className="tip tip--diamond c-blush" aria-hidden="true" />
                  Built for trust
                </p>
                <h2 className="h2" id="trust-title" data-split="">
                  Built for trust, <em>built for Africa.</em>
                </h2>
              </div>
              <p className="lede">
                Verification, escrow tied to logistics, and local payment rails, with matching that
                understands culture and dialect.
              </p>
            </header>
            <div className="card-grid card-grid--4">
              <article className="info-card info-card--tint-lilac" data-reveal="">
                <span className="icon-tile acc-lilac">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-shield" />
                  </svg>
                </span>
                <h3>Trust and verification</h3>
                <p>
                  Vetted creators and verification, so both sides know who they’re working with.
                </p>
              </article>
              <article className="info-card info-card--tint-sun" data-reveal="">
                <span className="icon-tile acc-sun">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-globe" />
                  </svg>
                </span>
                <h3>Culture and dialect</h3>
                <p>
                  Matching that understands culture and dialect, so brands find voices like yours.
                </p>
              </article>
              <article className="info-card info-card--tint-blush" data-reveal="">
                <span className="icon-tile acc-blush">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-truck" />
                  </svg>
                </span>
                <h3>Logistics-locked escrow</h3>
                <p>Your deadline starts when tracked delivery arrives, not before.</p>
              </article>
              <article className="info-card info-card--tint-sand" data-reveal="">
                <span className="icon-tile acc-mint">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-bank" />
                  </svg>
                </span>
                <h3>Local rails</h3>
                <p>Localized bank, FX and mobile-money infrastructure.</p>
              </article>
            </div>
          </div>
        </section>
        <section
          className="section cta"
          id="contact"
          aria-labelledby="cta-title"
          style={{ paddingTop: "0" }}
        >
          <div className="container">
            <div className="cta__panel cta__panel--hub" data-reveal="">
              <span
                className="tip tip--circle c-lilac bg-shape"
                style={{ "--s": "clamp(90px,12vw,170px)", right: "-3%", top: "-6%" }}
                data-float=""
                aria-hidden="true"
              />{" "}
              <div className="cta__copy">
                <h2 className="cta__title" id="cta-title" data-split="">
                  Ready for <em>brand work?</em>
                </h2>
                <p>Join the waitlist and tell us about the content you create.</p>
                <div className="cta__btns">
                  <a className="btn btn--ink" href="/waitlist/?product=tipper">
                    Join the waitlist
                    <svg className="i i-go" aria-hidden="true">
                      <use href="#i-arrow-right" />
                    </svg>
                  </a>{" "}
                  <a className="btn btn--cream" href="mailto:info@tipsona.co?subject=Tipper">
                    info@tipsona.co
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer pitch="Tipper: paid brand work for UGC&nbsp;creators, from brief to payout." />
      <JsonLd
        graph={[
          breadcrumbs(["Tipper", "/tipper/"]),
          productApp({ name: "Tipper", description: DESCRIPTION, path: "/tipper/" })
        ]}
      />
    </>
  );
}
