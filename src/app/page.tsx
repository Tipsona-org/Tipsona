import { preload } from "react-dom";
import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { NavHub } from "@/components/layout/nav-hub";
import { EcosystemGrid } from "@/components/sections/ecosystem-grid";
import { HubCta } from "@/components/sections/hub-cta";
import { TabTicker } from "@/components/sections/tab-ticker";
import { JsonLd } from "@/components/seo/json-ld";
import { PRODUCTS } from "@/content/products";
import { pageMetadata } from "@/lib/metadata";
import { organization, website } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Tipsona · Build, earn and grow your creator business",
  description:
    "Tipsona gives creators the tools to build, monetize, finance, discover and grow a digital business from one place. Start with TipStore.",
  path: "/"
});

export default function HomePage() {
  preload("/assets/img/hub-hero.webp", { as: "image", fetchPriority: "high" });

  return (
    <>
      <NavHub home="" />
      <main id="main">
        {/* ─────────────────────────── Hero (Plerouse + Nebula) ─────────────────────────── */}{" "}
        <section className="page-hero hub-hero grid-lines" id="top" aria-labelledby="hub-title">
          <div className="hub-bubbles" aria-hidden="true" data-depth="28">
            <span className="bubble bubble--a" data-float="">
              <svg className="i" style={{ "--acc": "var(--flame-tint)" }}>
                <use href="#i-store" />
              </svg>
            </span>{" "}
            <span className="bubble bubble--b" data-float="">
              <svg className="i" style={{ "--acc": "var(--lilac)" }}>
                <use href="#i-briefcase" />
              </svg>
            </span>{" "}
            <span className="bubble bubble--c" data-float="">
              <svg className="i" style={{ "--acc": "var(--sun)" }}>
                <use href="#i-heart" />
              </svg>
            </span>{" "}
            <span className="bubble bubble--d" data-float="">
              <svg className="i" style={{ "--acc": "var(--blush)" }}>
                <use href="#i-wrench" />
              </svg>
            </span>{" "}
            <span className="bubble bubble--e" data-float="">
              <svg className="i" style={{ "--acc": "var(--mint)" }}>
                <use href="#i-rocket" />
              </svg>
            </span>{" "}
            <span className="bubble bubble--f" data-float="">
              <svg className="i" style={{ "--acc": "var(--lilac)" }}>
                <use href="#i-spark" />
              </svg>
            </span>
          </div>
          <div className="container hub-hero__inner">
            <a className="hero__badge" href="#products" data-intro="">
              <span className="pill pill--ink">Tipsona</span> Sell, earn and grow with one account{" "}
              <svg className="i" aria-hidden="true">
                <use href="#i-arrow-right" />
              </svg>
            </a>{" "}
            <h1 className="hub-hero__title" id="hub-title">
              <span className="ln">
                <span className="ln__in">Your creator business,</span>
              </span>{" "}
              <span className="ln">
                <span className="ln__in">
                  all in{" "}
                  <span className="avatars" aria-hidden="true">
                    <img src="/assets/img/av-amara.webp" alt="" width="160" height="160" />
                    <img src="/assets/img/av-kofi.webp" alt="" width="160" height="160" />
                    <img src="/assets/img/av-zara.webp" alt="" width="160" height="160" />
                  </span>{" "}
                  <span className="hl">
                    <span className="hl__bg" aria-hidden="true" />
                    one place.
                  </span>
                </span>
              </span>{" "}
              <span className="hub-tag hub-tag--a" aria-hidden="true">
                For African creators
              </span>{" "}
              <span className="hub-tag hub-tag--b" aria-hidden="true">
                One account
              </span>
            </h1>
            <p className="lede" data-intro="">
              Tipsona gives African creators the tools to build, monetize, finance, discover and
              grow a digital business. Sell your products, work with brands and earn from your fans,
              with one account.
            </p>
            <div className="hub-hero__ctas" data-intro="">
              <a className="btn btn--flame" href="/waitlist/">
                Join the waitlist
                <svg className="i i-go" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
              </a>{" "}
              <a className="btn btn--ghost" href="/products/">
                See all products
              </a>
            </div>
          </div>
          <div className="container">
            <div className="hero-card" data-intro="" data-depth="-10">
              <span className="hero-card__back" aria-hidden="true" />{" "}
              <figure className="hero-card__front">
                <span className="hero-card__photo">
                  <img
                    src="/assets/img/hub-hero.webp"
                    width="1200"
                    height="960"
                    alt="A creator in a yellow shirt posing in front of a bright yellow wall"
                    fetchPriority="high"
                  />
                </span>{" "}
                <span className="hero-card__mark" aria-hidden="true">
                  <svg className="logo-mark" viewBox="-4.4 0 83.1 83.1">
                    <use href="#logo-mark" />
                  </svg>
                </span>{" "}
                <figcaption className="hero-card__bar">
                  <span>
                    Your business,
                    <br />
                    in one account.
                  </span>
                  <a className="btn btn--blush btn--xs" href="/tipstore/">
                    Start selling
                  </a>
                </figcaption>
              </figure>
              <div
                className="float-card hero-card__chip hero-card__chip--a"
                aria-hidden="true"
                data-depth="18"
              >
                <span className="icon-tile" style={{ background: "var(--mint)", border: "0" }}>
                  <svg className="i">
                    <use href="#i-naira" />
                  </svg>
                </span>{" "}
                <span>
                  <b>Payment verified</b>TipStore · ₦7,500
                </span>
              </div>
              <div
                className="float-card hero-card__chip hero-card__chip--b"
                aria-hidden="true"
                data-depth="22"
              >
                <span
                  className="icon-tile"
                  style={{ background: "var(--lilac)", border: "0", "--acc": "var(--paper)" }}
                >
                  <svg className="i">
                    <use href="#i-lock" />
                  </svg>
                </span>{" "}
                <span>
                  <b>Campaign funded</b>Tipper · held in escrow
                </span>
              </div>
              <p className="hero-card__example" aria-hidden="true">
                Example activity
              </p>
            </div>
          </div>
        </section>{" "}
        {/* ─────────────────────────── Ticker (a tab notched into the dark section) ─────────────────────────── */}{" "}
        <TabTicker
          label="What Tipsona offers"
          items={[
            "TipStore",
            "Tipper",
            "TipStar",
            "TipFix",
            "TipLaunch",
            "TipMarket",
            "TipAds",
            "TipAI",
            "TipInsights"
          ]}
        />{" "}
        {/* ─────────────────────────── Why Tipsona (Plerouse dark editorial) ─────────────────────────── */}{" "}
        <section className="section thesis on-dark" aria-labelledby="thesis-title">
          <div className="container">
            <div className="meta-row">
              <p className="tab-label">
                <span className="tip tip--circle c-flame" aria-hidden="true" />
                Why Tipsona
              </p>
              <p className="meta-row__note">
                One account for your
                <br />
                whole creator business
              </p>
            </div>
            <div className="thesis__layout">
              <div className="thesis__main">
                <h2 className="thesis__statement" id="thesis-title" data-words="">
                  Stop stitching tools together. Run your whole creator business from{" "}
                  <em>one account.</em>
                </h2>
                <p className="lede">
                  Your storefront, memberships, brand deals, payments and insights, connected. Built
                  for African creators, with local payments.
                </p>
                <ul className="thesis__list">
                  <li data-reveal="">
                    <span className="thesis__n">01</span>One creator identity across every product.
                  </li>
                  <li data-reveal="">
                    <span className="thesis__n">02</span>Many ways to earn: products, fans and
                    brands.
                  </li>
                  <li data-reveal="">
                    <span className="thesis__n">03</span>Local payments and payouts, built for
                    Africa.
                  </li>
                  <li data-reveal="">
                    <span className="thesis__n">04</span>Insights that show what actually drives
                    your revenue.
                  </li>
                </ul>
                <p>
                  <a className="link-arrow" href="/why-tipsona/">
                    See the problems Tipsona solves
                    <svg className="i" aria-hidden="true">
                      <use href="#i-arrow-right" />
                    </svg>
                  </a>
                </p>
              </div>
              <div className="thesis__photos">
                <figure className="thesis__ph thesis__ph--a" data-reveal="">
                  <span className="thesis__img">
                    <img
                      src="/assets/img/creator-camera.webp"
                      width="900"
                      height="1125"
                      loading="lazy"
                      alt="A smiling creator holding up a camera with a flash"
                    />
                  </span>{" "}
                  <figcaption>Creators, educators, coaches</figcaption>
                </figure>
                <figure className="thesis__ph thesis__ph--b" data-reveal="">
                  <span className="thesis__img">
                    <img
                      src="/assets/img/creator-podcast.webp"
                      width="900"
                      height="1125"
                      loading="lazy"
                      alt="A creator in headphones recording at a microphone"
                    />
                  </span>{" "}
                  <span className="thesis__tag" aria-hidden="true">
                    Local payments
                  </span>{" "}
                  <figcaption>Consultants, trainers, entrepreneurs</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>{" "}
        {/* ─────────────────────────── Ecosystem ─────────────────────────── */}{" "}
        <section className="section ecosystem" id="products" aria-labelledby="eco-title">
          <div className="container">
            <header className="section-head section-head--split">
              <div style={{ display: "grid", gap: "22px" }}>
                <p className="tab-label">
                  <span className="tip tip--star c-sun" aria-hidden="true" />
                  Products
                </p>
                <h2 className="h2" id="eco-title" data-split="">
                  Everything you need to <em>earn and grow.</em>
                </h2>
              </div>
              <p className="lede">
                Each product solves one part of running a creator business, and they all work from
                the same account. Start with TipStore today.
              </p>
            </header>
            <EcosystemGrid launchOnly />
            <p className="mt-10 flex justify-center">
              <a className="btn btn--ghost" href="/products/">
                See all {PRODUCTS.length} products
              </a>
            </p>
          </div>
        </section>{" "}
        <HubCta
          title={
            <>
              The creator is becoming <em>a business.</em>
            </>
          }
          text="Tipsona gives you the tools to run it. Join the waitlist to hear first when TipStore opens."
        />
      </main>
      <Footer pitch="Sell, earn and grow your creator&nbsp;business with one Tipsona account." />
      <JsonLd graph={[organization(), website()]} />
    </>
  );
}
