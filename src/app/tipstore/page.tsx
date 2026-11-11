import { preload } from "react-dom";
import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { NavTipstore } from "@/components/layout/nav-tipstore";
import { FaqList } from "@/components/sections/faq-list";
import { Personas } from "@/components/sections/personas";
import { Plans } from "@/components/sections/plans";
import { TabTicker } from "@/components/sections/tab-ticker";
import { JsonLd } from "@/components/seo/json-ld";
import { TIPSTORE_FAQ } from "@/content/faq";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbs, faqPage, productApp } from "@/lib/structured-data";

const DESCRIPTION =
  "TipStore is a digital commerce platform for creators, coaches and educators. Build a storefront, sell digital products, get paid and deliver automatically.";

export const metadata: Metadata = pageMetadata({
  title: "TipStore · Sell digital products from your own storefront",
  description: DESCRIPTION,
  path: "/tipstore/"
});

export default function TipStorePage() {
  preload("/assets/img/hero-ada.webp", { as: "image", fetchPriority: "high" });

  return (
    <>
      <NavTipstore home="" pricing="/tipstore/pricing/" />
      <main id="main">
        {/* ─────────────────────────── Hero ─────────────────────────── */}{" "}
        <section className="hero hero--center" id="top" aria-labelledby="hero-title">
          <div className="container hero__inner">
            <a className="hero__badge" href="#how" data-intro="">
              <span className="pill pill--ink">TipStore</span> From idea to first sale in minutes{" "}
              <svg className="i" aria-hidden="true">
                <use href="#i-arrow-right" />
              </svg>
            </a>{" "}
            <h1 className="hero__title" id="hero-title">
              <span className="ln">
                <span className="ln__in">Know something?</span>
              </span>{" "}
              <span className="ln">
                <span className="ln__in">
                  <span className="hl">
                    <span className="hl__bg" aria-hidden="true" />
                    Sell it
                  </span>{" "}
                  <span className="avatars" aria-hidden="true">
                    <img src="/assets/img/av-sade.webp" alt="" width="160" height="160" />
                    <img src="/assets/img/av-tobi.webp" alt="" width="160" height="160" />
                    <img src="/assets/img/av-zara.webp" alt="" width="160" height="160" />
                  </span>{" "}
                  online.
                </span>
              </span>{" "}
              <span className="hero__sticker" aria-hidden="true" data-intro="">
                Instant delivery
              </span>
            </h1>
            <p className="hero__lede" data-intro="">
              TipStore gives you a professional storefront for your e-books, templates, presets and
              courses. Customers pay securely, get instant access, and you track every sale from one
              dashboard.
            </p>
            <form
              className="claim"
              id="claim"
              data-claim=""
              data-waitlist-url="/waitlist/"
              noValidate
              data-intro=""
            >
              <label className="sr-only" htmlFor="claim-name">
                Choose your storefront username
              </label>{" "}
              <div className="claim__field">
                <span className="claim__prefix" aria-hidden="true">
                  tipstore.tipsona.co/
                </span>{" "}
                <input
                  className="claim__input"
                  id="claim-name"
                  name="username"
                  type="text"
                  autoComplete="off"
                  autoCapitalize="none"
                  spellCheck="false"
                  maxLength={30}
                  placeholder="yourname"
                  aria-describedby="claim-hint"
                />{" "}
                <button className="btn btn--flame" type="submit">
                  Claim your link
                  <svg className="i i-go" aria-hidden="true">
                    <use href="#i-arrow-right" />
                  </svg>
                </button>
              </div>
              <p className="claim__hint" id="claim-hint" aria-live="polite">
                Usernames are lowercase, 3 to 30 characters, with no spaces or symbols.
              </p>
            </form>
            <ul className="hero__proof" data-intro="">
              <li>
                <svg className="i" aria-hidden="true">
                  <use href="#i-check" />
                </svg>
                Payments by Paystack
              </li>
              <li>
                <svg className="i" aria-hidden="true">
                  <use href="#i-check" />
                </svg>
                Instant access after payment
              </li>
              <li>
                <svg className="i" aria-hidden="true">
                  <use href="#i-check" />
                </svg>
                Withdraw to your bank
              </li>
            </ul>
          </div>
          <div className="container">
            <div className="hero__stage" data-hero-stage="">
              <span
                className="tip tip--star c-sun stage__shape stage__shape--a"
                data-float=""
                aria-hidden="true"
              />{" "}
              <span
                className="tip tip--circle c-lilac stage__shape stage__shape--b"
                data-float=""
                aria-hidden="true"
              />{" "}
              <span
                className="tip tip--pill c-mint stage__shape stage__shape--c"
                data-float=""
                aria-hidden="true"
              />{" "}
              <span
                className="tip tip--diamond c-blush stage__shape stage__shape--d"
                data-float=""
                aria-hidden="true"
              />{" "}
              <figure className="stage__portrait" data-intro="" data-depth="-10">
                <img
                  src="/assets/img/hero-ada.webp"
                  width="1100"
                  height="1375"
                  alt="A creator standing with her arms crossed in front of an orange wall"
                  fetchPriority="high"
                />{" "}
                <figcaption className="stage__caption">
                  <span>
                    Your storefront,
                    <br />
                    your brand.
                  </span>
                  <a className="btn btn--cream btn--xs" href="#product">
                    See features
                  </a>
                </figcaption>
              </figure>
              <div
                className="phone stage__phone"
                data-intro=""
                data-depth="18"
                role="img"
                aria-label="Example storefront at tipstore.tipsona.co/adaeze selling a budget planner, an e-book and a video"
              >
                <div className="phone__screen" aria-hidden="true">
                  <div className="phone__island" />
                  <div className="store" data-theme="modern">
                    <div className="phone__status">
                      <span>9:41</span>
                      <span>
                        <svg className="i">
                          <use href="#i-signal" />
                        </svg>
                        <svg className="i">
                          <use href="#i-battery" />
                        </svg>
                      </span>
                    </div>
                    <div className="store__url" data-live-url="">
                      <svg className="i">
                        <use href="#i-lock" />
                      </svg>
                      tipstore.tipsona.co/<span data-live-name="">adaeze</span>
                    </div>
                    <div className="store__cover">
                      <span
                        className="tip tip--star c-sun"
                        style={{ "--s": "9cqw", left: "10%", top: "18%" }}
                      />{" "}
                      <span
                        className="tip tip--circle c-cream"
                        style={{ "--s": "5cqw", left: "28%", top: "58%" }}
                      />{" "}
                      <span
                        className="tip tip--pill c-ink"
                        style={{ "--s": "5cqw", right: "12%", top: "26%" }}
                      />
                    </div>
                    <div className="store__head">
                      <img
                        className="store__avatar"
                        src="/assets/img/av-sade.webp"
                        width="160"
                        height="160"
                        alt=""
                      />{" "}
                      <p className="store__name">Adaeze Okoro</p>
                      <p className="store__bio">
                        Finance educator. Budgeting templates and guides.
                      </p>
                    </div>
                    <div className="store__tabs">
                      <span>All</span>
                      <span>Templates</span>
                      <span>E-books</span>
                      <span>Video</span>
                    </div>
                    <div className="store__list">
                      <div className="prod">
                        <span className="prod__thumb cover-sun">
                          <svg className="i" style={{ "--acc": "var(--paper)" }}>
                            <use href="#i-template" />
                          </svg>
                        </span>
                        <span className="prod__meta">
                          <span className="prod__title">Budget Planner</span>
                          <span className="prod__type">Template · PDF</span>
                        </span>
                        <span className="prod__price">₦7,500</span>
                      </div>
                      <div className="prod">
                        <span className="prod__thumb cover-lilac">
                          <svg className="i" style={{ "--acc": "var(--paper)" }}>
                            <use href="#i-book" />
                          </svg>
                        </span>
                        <span className="prod__meta">
                          <span className="prod__title">Side-Hustle Guide</span>
                          <span className="prod__type">E-book · PDF</span>
                        </span>
                        <span className="prod__price">₦12,000</span>
                      </div>
                      <div className="prod">
                        <span className="prod__thumb cover-night">
                          <svg className="i" style={{ "--acc": "var(--night-3)" }}>
                            <use href="#i-video" />
                          </svg>
                        </span>
                        <span className="prod__meta">
                          <span className="prod__title">Money Habits</span>
                          <span className="prod__type">Video lessons</span>
                        </span>
                        <span className="prod__price">₦25,000</span>
                      </div>
                    </div>
                    <div className="store__buy">Buy now</div>
                  </div>
                </div>
              </div>
              <div
                className="float-card fc-sale"
                data-intro=""
                data-sale-card=""
                data-depth="24"
                aria-hidden="true"
              >
                <span className="icon-tile">
                  <svg className="i">
                    <use href="#i-naira" />
                  </svg>
                </span>{" "}
                <span>
                  <b>Payment verified</b>
                  <span className="amt" data-sale-amt="">
                    ₦7,500
                  </span>{" "}
                  <span data-sale-prod="">· Budget Planner</span>
                </span>
              </div>
              <div
                className="float-card fc-delivered"
                data-intro=""
                data-depth="20"
                aria-hidden="true"
              >
                <span className="icon-tile">
                  <svg className="i">
                    <use href="#i-bolt" />
                  </svg>
                </span>{" "}
                <span>
                  <b>Product unlocked</b>
                  <span data-sale-mail="">Access link emailed</span>
                </span>
              </div>
              <p className="stage__example" data-intro="">
                <span data-live-label="">Example storefront</span>
              </p>
            </div>
          </div>
        </section>{" "}
        {/* ─────────────────────────── Ticker (a tab notched into the dark section) ─────────────────────────── */}{" "}
        <TabTicker
          label="Digital products you can sell"
          items={[
            "E-books",
            "Design templates",
            "Lightroom presets",
            "LUTs",
            "Study guides",
            "Workbooks",
            "Audio packs",
            "SOP templates",
            "Exercise plans",
            "Stock photos"
          ]}
        />{" "}
        {/* ─────────────────────────── Old way vs TipStore way ─────────────────────────── */}{" "}
        <section className="swap on-dark" id="product" aria-labelledby="swap-title" data-swap="">
          <div className="container swap__grid">
            <div className="swap__copy">
              <div className="swap__before" data-swap-before="">
                <p className="tab-label">
                  <span className="tip tip--circle c-flame" aria-hidden="true" />
                  The old way
                </p>
                <h2 className="h2" id="swap-title" style={{ marginTop: "22px" }} data-split="">
                  Selling shouldn’t feel like a <em>second job.</em>
                </h2>
                <p className="lede" style={{ marginTop: "22px" }}>
                  Many sellers still confirm payments by hand, send files over WhatsApp and email
                  products one by one. It’s slow, error-prone and hard to scale.
                </p>
              </div>
              <div className="swap__after" data-swap-after="">
                <p className="tab-label">
                  <span className="tip tip--star c-sun" aria-hidden="true" />
                  The TipStore way
                </p>
                <p className="h3">
                  Payment verified. Product unlocked. Receipt sent. <em>Automatically.</em>
                </p>
                <div>
                  <a className="btn btn--flame" href="#how">
                    See how it works
                    <svg className="i i-go" aria-hidden="true">
                      <use href="#i-arrow-down" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="swap__stage">
              <div
                className="chat"
                data-chat=""
                role="img"
                aria-label="An example chat where a seller confirms a bank transfer by hand and sends a file over WhatsApp"
              >
                <div className="chat__head" aria-hidden="true">
                  <img src="/assets/img/av-amara.webp" width="160" height="160" alt="" />{" "}
                  <div>
                    <b>Customer</b>
                    <span>Example chat</span>
                  </div>
                </div>
                <div className="msg msg--them" aria-hidden="true">
                  Hi! Is the budget planner still available?
                </div>
                <div className="msg msg--me" aria-hidden="true">
                  Yes! Send the money to my account and share your receipt.
                </div>
                <div className="msg msg--them" aria-hidden="true">
                  Sent 🙏
                  <span className="msg__file">
                    <svg className="i">
                      <use href="#i-paperclip" />
                    </svg>
                    transfer-receipt.jpg
                  </span>
                </div>
                <div className="msg msg--me" aria-hidden="true">
                  Let me confirm with my bank…
                </div>
                <div className="msg msg--them" aria-hidden="true">
                  Hello? Did you see it?
                </div>
                <div className="msg msg--me" aria-hidden="true">
                  Confirmed. Sending the file now
                  <span className="msg__file">
                    <svg className="i">
                      <use href="#i-paperclip" />
                    </svg>
                    budget-planner.pdf
                  </span>
                </div>
                <div className="msg msg--them msg--angry" aria-hidden="true">
                  I can’t find the file 😩
                </div>
              </div>
              <article className="order-card" data-order="" aria-label="The same sale on TipStore">
                <div className="order-card__top">
                  <span className="order-card__id">Order · example</span>{" "}
                  <span className="pill pill--success pill--dot">Paid</span>
                </div>
                <div className="order-card__prod">
                  <span className="prod__thumb cover-sun">
                    <svg className="i" style={{ "--acc": "var(--paper)" }} aria-hidden="true">
                      <use href="#i-template" />
                    </svg>
                  </span>{" "}
                  <div>
                    <b>Budget Planner</b>
                    <span>Guest checkout · Paystack</span>
                  </div>{" "}
                  <span className="price">₦7,500</span>
                </div>
                <ol className="tl">
                  <li className="tl-row">
                    <span className="dot">
                      <svg className="i" aria-hidden="true">
                        <use href="#i-check" />
                      </svg>
                    </span>
                    <span>
                      Payment verified <small>· Paystack</small>
                    </span>
                  </li>
                  <li className="tl-row">
                    <span className="dot">
                      <svg className="i" aria-hidden="true">
                        <use href="#i-check" />
                      </svg>
                    </span>
                    <span>Order created</span>
                  </li>
                  <li className="tl-row">
                    <span className="dot">
                      <svg className="i" aria-hidden="true">
                        <use href="#i-check" />
                      </svg>
                    </span>
                    <span>
                      Product unlocked <small>· secure download</small>
                    </span>
                  </li>
                  <li className="tl-row">
                    <span className="dot">
                      <svg className="i" aria-hidden="true">
                        <use href="#i-check" />
                      </svg>
                    </span>
                    <span>Confirmation email and receipt sent</span>
                  </li>
                </ol>
                <div className="order-card__foot">
                  <span>No access is granted before payment is verified.</span>
                </div>
              </article>
            </div>
          </div>
        </section>{" "}
        {/* ─────────────────────────── How it works ─────────────────────────── */}{" "}
        <section className="section steps" id="how" aria-labelledby="how-title">
          <div className="container">
            <header className="section-head section-head--split">
              <div style={{ display: "grid", gap: "22px" }}>
                <p className="tab-label">
                  <span className="tip tip--star c-sun" aria-hidden="true" />
                  How it works
                </p>
                <h2 className="h2" id="how-title" data-split="">
                  Three steps to your <em>first sale.</em>
                </h2>
              </div>
              <p className="lede">
                No website to build, no payment gateway to configure and no technical knowledge
                required.
              </p>
            </header>
            <div className="steps__rail" aria-hidden="true">
              <i data-rail="" />
            </div>
            <ol className="steps__list">
              <li className="step" data-step="claim" data-reveal="">
                <div className="step__art" aria-hidden="true">
                  <div className="art-claim">
                    <div className="art-url">
                      <span className="base">tipstore.tipsona.co/</span>
                      <span className="typed" data-typed="adaeze">
                        adaeze
                      </span>
                      <span className="caret" />
                      <span className="ok" data-ok="">
                        <svg className="i">
                          <use href="#i-check-circle" />
                        </svg>
                      </span>
                    </div>
                    <div className="art-mini-store" data-pop="">
                      <img
                        className="av"
                        src="/assets/img/av-sade.webp"
                        width="160"
                        height="160"
                        alt=""
                      />{" "}
                      <div className="lines">
                        <i />
                        <i />
                        <i />
                      </div>{" "}
                      <span className="tip tip--arch c-flame" />
                    </div>
                  </div>
                </div>
                <p className="step__num">
                  <span className="tip tip--arch c-night" aria-hidden="true" />
                  Step 01
                </p>
                <h3>Create your storefront</h3>
                <p>
                  Sign up, verify your email and choose a username. Your storefront lives at
                  tipstore.tipsona.co/yourname.
                </p>
              </li>
              <li className="step" data-step="upload" data-reveal="">
                <div className="step__art" aria-hidden="true">
                  <div className="art-upload">
                    <div className="art-drop">
                      <div className="art-file" data-drop="">
                        <span className="icon-tile">
                          <svg className="i">
                            <use href="#i-file" />
                          </svg>
                        </span>
                        <div>
                          <b>budget-planner.pdf</b>
                          <span>PDF · digital file</span>
                        </div>
                      </div>
                      <div className="art-bar">
                        <i data-bar="" />
                      </div>
                    </div>
                    <div className="art-price">
                      <span>Price</span>
                      <b>₦7,500</b>
                      <span className="pill pill--success pill--dot" data-pop="">
                        Published
                      </span>
                    </div>
                  </div>
                </div>
                <p className="step__num">
                  <span className="tip tip--square c-lilac" aria-hidden="true" />
                  Step 02
                </p>
                <h3>Upload your product</h3>
                <p>
                  Add a title, description, thumbnail and your file: an e-book, PDF, template, ZIP,
                  image, audio or video. Set your price and publish.
                </p>
              </li>
              <li className="step" data-step="paid" data-reveal="">
                <div className="step__art" aria-hidden="true">
                  <div className="art-paid">
                    <div className="art-socials">
                      <span>
                        <svg className="i">
                          <use href="#i-instagram" />
                        </svg>
                      </span>
                      <span>
                        <svg className="i">
                          <use href="#i-tiktok" />
                        </svg>
                      </span>
                      <span>
                        <svg className="i">
                          <use href="#i-chat" />
                        </svg>
                      </span>
                      <span>
                        <svg className="i">
                          <use href="#i-linkedin" />
                        </svg>
                      </span>
                    </div>
                    <div className="art-note" data-note="">
                      <span className="icon-tile">
                        <svg className="i">
                          <use href="#i-naira" />
                        </svg>
                      </span>
                      <div>
                        <b>₦7,500</b> <span>New sale</span>
                      </div>
                    </div>
                    <div className="art-note" data-note="">
                      <span className="icon-tile">
                        <svg className="i">
                          <use href="#i-naira" />
                        </svg>
                      </span>
                      <div>
                        <b>₦12,000</b> <span>New sale</span>
                      </div>
                    </div>
                    <div className="art-note" data-note="">
                      <span className="icon-tile">
                        <svg className="i">
                          <use href="#i-naira" />
                        </svg>
                      </span>
                      <div>
                        <b>₦25,000</b> <span>New sale</span>
                      </div>
                    </div>
                    <div className="art-total">
                      <span>Example total</span>
                      <b data-count="44500" data-prefix="₦">
                        ₦44,500
                      </b>
                    </div>
                  </div>
                </div>
                <p className="step__num">
                  <span className="tip tip--pill c-mint" aria-hidden="true" />
                  Step 03
                </p>
                <h3>Share it and get paid</h3>
                <p>
                  Share your store link on Instagram, TikTok, WhatsApp, LinkedIn, Facebook or email.
                  Buyers pay securely and get instant access.
                </p>
              </li>
            </ol>
          </div>
        </section>{" "}
        {/* ─────────────────────────── Who it's for ─────────────────────────── */}{" "}
        <section
          className="section personas on-dark"
          id="creators"
          aria-labelledby="personas-title"
          data-personas=""
        >
          <div className="container personas__grid">
            <div className="personas__intro">
              <p className="tab-label">
                <span className="tip tip--circle c-flame" aria-hidden="true" />
                Who it’s for
              </p>
              <h2 className="sr-only" id="personas-title">
                Built for six kinds of sellers
              </h2>
              <p className="lede">
                For anyone who packages knowledge, creativity or expertise into digital products.
              </p>
              <div className="personas__list" role="tablist" aria-label="Seller types">
                <button
                  className="persona-tab"
                  role="tab"
                  id="pt-0"
                  aria-selected="true"
                  aria-controls="pp-0"
                  tabIndex={0}
                >
                  <sup>01</sup>Creators
                  <span className="tip tip--circle c-flame" aria-hidden="true" />
                </button>{" "}
                <button
                  className="persona-tab"
                  role="tab"
                  id="pt-1"
                  aria-selected="false"
                  aria-controls="pp-1"
                  tabIndex={-1}
                >
                  <sup>02</sup>Educators
                  <span className="tip tip--star c-sun" aria-hidden="true" />
                </button>{" "}
                <button
                  className="persona-tab"
                  role="tab"
                  id="pt-2"
                  aria-selected="false"
                  aria-controls="pp-2"
                  tabIndex={-1}
                >
                  <sup>03</sup>Coaches
                  <span className="tip tip--diamond c-blush" aria-hidden="true" />
                </button>{" "}
                <button
                  className="persona-tab"
                  role="tab"
                  id="pt-3"
                  aria-selected="false"
                  aria-controls="pp-3"
                  tabIndex={-1}
                >
                  <sup>04</sup>Consultants
                  <span className="tip tip--square c-lilac" aria-hidden="true" />
                </button>{" "}
                <button
                  className="persona-tab"
                  role="tab"
                  id="pt-4"
                  aria-selected="false"
                  aria-controls="pp-4"
                  tabIndex={-1}
                >
                  <sup>05</sup>Trainers
                  <span className="tip tip--pill c-mint" aria-hidden="true" />
                </button>{" "}
                <button
                  className="persona-tab"
                  role="tab"
                  id="pt-5"
                  aria-selected="false"
                  aria-controls="pp-5"
                  tabIndex={-1}
                >
                  <sup>06</sup>Entrepreneurs
                  <span className="tip tip--arch c-cream" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="personas__panels">
              <Personas />
            </div>
          </div>
        </section>{" "}
        {/* ─────────────────────────── Features ─────────────────────────── */}{" "}
        <section className="section features" aria-labelledby="features-title">
          <div className="container">
            <header className="section-head section-head--split">
              <div style={{ display: "grid", gap: "22px" }}>
                <p className="tab-label">
                  <span className="tip tip--square c-lilac" aria-hidden="true" />
                  Everything in one place
                </p>
                <h2 className="h2" id="features-title" data-split="">
                  One platform for your&nbsp;<em>whole digital business.</em>
                </h2>
              </div>
              <p className="lede">
                No more juggling a payment processor, cloud storage, an email service, a landing
                page builder and an analytics tool.
              </p>
            </header>
            <div className="bento">
              <article className="tile tile--night tile--store on-dark" data-reveal="">
                <span
                  className="icon-tile"
                  style={{
                    background: "rgba(255,246,236,.08)",
                    borderColor: "var(--night-line)",
                    color: "var(--cream)",
                    "--acc": "var(--flame)"
                  }}
                >
                  <svg className="i" aria-hidden="true">
                    <use href="#i-store" />
                  </svg>
                </span>{" "}
                <h3>A storefront that looks like you</h3>
                <p>
                  Choose a theme and a colour, then add your photo, banner, bio, featured products
                  and social links. No design skills needed.
                </p>
                <div className="tile__ui themer" data-themer="">
                  <div className="themer__controls">
                    <span className="swatch-label" id="theme-label">
                      Theme
                    </span>{" "}
                    <div className="seg" role="group" aria-labelledby="theme-label">
                      <button type="button" data-theme-btn="classic" aria-pressed="false">
                        Classic
                      </button>{" "}
                      <button type="button" data-theme-btn="modern" aria-pressed="true">
                        Modern
                      </button>{" "}
                      <button type="button" data-theme-btn="minimal" aria-pressed="false">
                        Minimal
                      </button>{" "}
                      <button type="button" data-theme-btn="bold" aria-pressed="false">
                        Bold
                      </button>
                    </div>{" "}
                    <span className="swatch-label" id="accent-label">
                      Accent colour
                    </span>{" "}
                    <div className="swatches" role="group" aria-labelledby="accent-label">
                      <button
                        type="button"
                        style={{ "--sw": "#FF5D02" }}
                        data-accent="#FF5D02"
                        data-accent-ink="#FFFFFF"
                        aria-pressed="true"
                      >
                        <span className="sr-only">Orange</span>
                      </button>{" "}
                      <button
                        type="button"
                        style={{ "--sw": "#CBB8FF" }}
                        data-accent="#CBB8FF"
                        data-accent-ink="#17120E"
                        aria-pressed="false"
                      >
                        <span className="sr-only">Lilac</span>
                      </button>{" "}
                      <button
                        type="button"
                        style={{ "--sw": "#FFC83D" }}
                        data-accent="#FFC83D"
                        data-accent-ink="#17120E"
                        aria-pressed="false"
                      >
                        <span className="sr-only">Yellow</span>
                      </button>{" "}
                      <button
                        type="button"
                        style={{ "--sw": "#D8F36A" }}
                        data-accent="#D8F36A"
                        data-accent-ink="#17120E"
                        aria-pressed="false"
                      >
                        <span className="sr-only">Lime</span>
                      </button>{" "}
                      <button
                        type="button"
                        style={{ "--sw": "#FFC9D6" }}
                        data-accent="#FFC9D6"
                        data-accent-ink="#17120E"
                        aria-pressed="false"
                      >
                        <span className="sr-only">Pink</span>
                      </button>
                    </div>
                  </div>
                  <div
                    className="phone"
                    role="img"
                    aria-label="Preview of an example storefront in the selected theme and colour"
                  >
                    <div className="phone__screen" aria-hidden="true">
                      <div className="phone__island" />
                      <div className="store" data-theme="modern" data-themed-store="">
                        <div className="phone__status">
                          <span>9:41</span>
                          <span>
                            <svg className="i">
                              <use href="#i-signal" />
                            </svg>
                            <svg className="i">
                              <use href="#i-battery" />
                            </svg>
                          </span>
                        </div>
                        <div className="store__url">
                          <svg className="i">
                            <use href="#i-lock" />
                          </svg>
                          tipstore.tipsona.co/amara
                        </div>
                        <div className="store__cover">
                          <span
                            className="tip tip--star c-cream"
                            style={{ "--s": "8cqw", left: "12%", top: "22%" }}
                          />{" "}
                          <span
                            className="tip tip--circle c-ink"
                            style={{ "--s": "5cqw", right: "16%", top: "30%" }}
                          />{" "}
                          <span
                            className="tip tip--square c-cream"
                            style={{ "--s": "5cqw", left: "40%", top: "62%" }}
                          />
                        </div>
                        <div className="store__head">
                          <img
                            className="store__avatar"
                            src="/assets/img/av-zara.webp"
                            width="160"
                            height="160"
                            alt=""
                          />{" "}
                          <p className="store__name">Amara Uwase</p>
                          <p className="store__bio">Tutor. Lesson notes and practice questions.</p>
                        </div>
                        <div className="store__tabs">
                          <span>All</span>
                          <span>Study guides</span>
                          <span>Worksheets</span>
                        </div>
                        <div className="store__list">
                          <div className="prod">
                            <span className="prod__thumb cover-sun">
                              <svg className="i" style={{ "--acc": "var(--paper)" }}>
                                <use href="#i-file" />
                              </svg>
                            </span>
                            <span className="prod__meta">
                              <span className="prod__title">Physics Practice Questions</span>
                              <span className="prod__type">PDF</span>
                            </span>
                            <span className="prod__price">₦3,000</span>
                          </div>
                          <div className="prod">
                            <span className="prod__thumb cover-night">
                              <svg className="i" style={{ "--acc": "var(--night-3)" }}>
                                <use href="#i-video" />
                              </svg>
                            </span>
                            <span className="prod__meta">
                              <span className="prod__title">Maths Video Lessons</span>
                              <span className="prod__type">Video</span>
                            </span>
                            <span className="prod__price">₦8,000</span>
                          </div>
                        </div>
                        <div className="store__buy">Buy now</div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="tile tile--checkout" data-reveal="">
                <span className="icon-tile acc-tint">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-card" />
                  </svg>
                </span>{" "}
                <h3>Checkout in one step</h3>
                <p>
                  Guest checkout needs only a name and email. Payments are processed through
                  Paystack.
                </p>
                <div className="tile__ui">
                  <div className="checkout-ui" aria-hidden="true">
                    <div className="checkout-ui__row">
                      <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span
                          className="prod__thumb cover-sun"
                          style={{ width: "36px", height: "36px", borderRadius: "9px" }}
                        >
                          <svg
                            className="i"
                            style={{ "--acc": "var(--paper)", width: "18px", height: "18px" }}
                          >
                            <use href="#i-template" />
                          </svg>
                        </span>
                        Budget Planner
                      </span>
                      <b>₦7,500</b>
                    </div>
                    <div className="fake-input">
                      <svg className="i">
                        <use href="#i-users" />
                      </svg>
                      Your name
                    </div>
                    <div className="fake-input">
                      <svg className="i">
                        <use href="#i-mail" />
                      </svg>
                      you@email.com
                    </div>{" "}
                    <span
                      className="btn btn--ink btn--block"
                      style={{ minHeight: "46px", fontSize: "1rem" }}
                    >
                      Complete purchase
                      <svg className="i i-go">
                        <use href="#i-arrow-right" />
                      </svg>
                    </span>{" "}
                    <div className="trust-row">
                      <span>
                        <svg className="i">
                          <use href="#i-check" />
                        </svg>
                        Secure payment
                      </span>
                      <span>
                        <svg className="i">
                          <use href="#i-check" />
                        </svg>
                        Instant delivery
                      </span>
                      <span>
                        <svg className="i">
                          <use href="#i-check" />
                        </svg>
                        SSL protected
                      </span>
                    </div>
                  </div>
                </div>
              </article>
              <article className="tile tile--delivery" data-reveal="">
                <span className="icon-tile acc-sun">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-bolt" />
                  </svg>
                </span>{" "}
                <h3>Delivered the moment payment is verified</h3>
                <p>
                  Buyers get instant access, an email with their access link and a copy in their
                  library. You never send a file by hand.
                </p>
                <div className="tile__ui" aria-hidden="true">
                  <div className="delivery-ui">
                    <div className="node">
                      <span
                        className="icon-tile acc-flame"
                        style={{ background: "var(--mint-tint)", border: "0" }}
                      >
                        <svg className="i">
                          <use href="#i-naira" />
                        </svg>
                      </span>
                      Paid
                    </div>
                    <div className="wire">
                      <span className="packet" data-packet="">
                        <svg className="i">
                          <use href="#i-file" />
                        </svg>
                      </span>
                    </div>
                    <div className="node">
                      <span
                        className="icon-tile acc-lilac"
                        style={{ background: "var(--lilac-tint)", border: "0" }}
                      >
                        <svg className="i">
                          <use href="#i-library" />
                        </svg>
                      </span>
                      Library
                    </div>
                  </div>
                  <div className="link-expiry">
                    <span>Signed download link</span>
                    <span>
                      expires in <b data-countdown="599">09:59</b>
                    </span>
                  </div>
                </div>
              </article>
              <article className="tile tile--lilac tile--analytics" data-reveal="">
                <span className="icon-tile acc-lilac">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-chart" />
                  </svg>
                </span>{" "}
                <h3>See what’s selling</h3>
                <p>Revenue, orders, conversion rate, downloads and your top products.</p>
                <div className="tile__ui" aria-hidden="true">
                  <div className="bars" data-bars="">
                    <span style={{ "--h": "34%" }} />
                    <span style={{ "--h": "55%" }} />
                    <span style={{ "--h": "45%" }} />
                    <span style={{ "--h": "74%" }} />
                    <span style={{ "--h": "63%" }} />
                    <span className="is-top" style={{ "--h": "100%" }} data-v="Top day" />
                    <span style={{ "--h": "78%" }} />
                  </div>
                  <div className="bars-x">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>
              </article>
              <article className="tile tile--sand tile--payout" data-reveal="">
                <span className="icon-tile acc-mint">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-wallet" />
                  </svg>
                </span>{" "}
                <h3>Withdraw to your bank</h3>
                <p>
                  See your available and pending balance, then request a withdrawal to your verified
                  payout account.
                </p>
                <div className="tile__ui payout-ui" aria-hidden="true">
                  <span className="swatch-label" style={{ color: "var(--muted)" }}>
                    Available balance · example
                  </span>{" "}
                  <span className="payout-ui__bal num">₦184,500</span>{" "}
                  <div className="payout-ui__row">
                    <span>
                      <svg className="i">
                        <use href="#i-clock" />
                      </svg>
                      Pending
                    </span>
                    <b>₦32,000</b>
                  </div>
                  <div className="payout-ui__row">
                    <span>
                      <svg className="i">
                        <use href="#i-bank" />
                      </svg>
                      Withdrawal
                    </span>
                    <span className="pill pill--success">Completed</span>
                  </div>
                </div>
              </article>
              <article className="tile tile--library" data-reveal="">
                <span className="icon-tile acc-blush">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-library" />
                  </svg>
                </span>{" "}
                <h3>A library for your buyers</h3>
                <p>
                  Purchased products, download buttons, purchase dates, invoices and receipts in one
                  place.
                </p>
                <div className="tile__ui library-ui" aria-hidden="true">
                  <div className="lib-item">
                    <span className="prod__thumb cover-sun">
                      <svg className="i" style={{ "--acc": "var(--paper)" }}>
                        <use href="#i-template" />
                      </svg>
                    </span>
                    <div>
                      <b>Budget Planner</b>
                      <span>Purchased · receipt</span>
                    </div>
                    <span className="dl">
                      <svg className="i">
                        <use href="#i-download" />
                      </svg>
                    </span>
                  </div>
                  <div className="lib-item">
                    <span className="prod__thumb cover-night">
                      <svg className="i" style={{ "--acc": "var(--night-3)" }}>
                        <use href="#i-video" />
                      </svg>
                    </span>
                    <div>
                      <b>Money Habits</b>
                      <span>Video · download</span>
                    </div>
                    <span className="dl">
                      <svg className="i">
                        <use href="#i-download" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
              <article className="tile tile--seo" data-reveal="">
                <span className="icon-tile acc-sun">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-search" />
                  </svg>
                </span>{" "}
                <h3>Found on Google, shared everywhere</h3>
                <p>
                  Storefronts and product pages are built for search engines, and show a thumbnail,
                  title and description when shared on WhatsApp, X, LinkedIn, Facebook, Telegram or
                  Discord.
                </p>
                <div className="tile__ui" aria-hidden="true">
                  <div className="serp">
                    <div className="serp__url">
                      <span className="serp__fav">
                        <svg
                          className="logo-mark"
                          viewBox="-4.4 0 83.1 83.1"
                          style={{ width: "13px", height: "13px", fill: "#FFFFFF" }}
                        >
                          <use href="#logo-mark" />
                        </svg>
                      </span>
                      <span>tipstore.tipsona.co › adaeze › budget-planner</span>
                    </div>
                    <p className="serp__title">Budget Planner by Adaeze Okoro</p>
                    <p className="serp__desc">
                      A printable budgeting template. Delivered instantly after payment.
                    </p>
                    <div className="serp__rich">
                      <span>₦7,500</span>
                      <span>Digital download</span>
                    </div>
                  </div>
                </div>
              </article>
              <article className="tile tile--blush tile--email" data-reveal="">
                <span className="icon-tile acc-flame">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-mail" />
                  </svg>
                </span>{" "}
                <h3>Emails that send themselves</h3>
                <p>
                  Buyers get a purchase confirmation, receipt and access link. You get a new-sale
                  notification.
                </p>
                <div className="tile__ui mail-ui" aria-hidden="true">
                  <div className="mail-ui__from">
                    <span
                      className="icon-tile icon-tile--sm"
                      style={{ background: "var(--flame)", border: "0" }}
                    >
                      <svg
                        className="logo-mark"
                        viewBox="-4.4 0 83.1 83.1"
                        style={{ width: "18px", height: "18px", fill: "#FFFFFF" }}
                      >
                        <use href="#logo-mark" />
                      </svg>
                    </span>
                    <div>
                      <b>TipStore</b> <span>· receipt</span>
                    </div>
                  </div>
                  <p className="mail-ui__subj">Your purchase is ready: Budget Planner</p>
                  <div className="receipt-lines">
                    <div>
                      <span>Status</span>
                      <span>Paid</span>
                    </div>
                    <div>
                      <span>Amount</span>
                      <span>₦7,500.00</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>{" "}
        {/* ─────────────────────────── Dashboard ─────────────────────────── */}{" "}
        <section className="section showcase showcase--light" aria-labelledby="showcase-title">
          <div className="container">
            <header className="section-head section-head--center">
              <p className="tab-label">
                <span className="tip tip--star c-sun" aria-hidden="true" />
                Seller dashboard
              </p>
              <h2 className="h2" id="showcase-title" data-split="">
                “How is my business <em>performing today?</em>”
              </h2>
              <p className="lede">
                Your dashboard answers it the moment you log in: revenue, balance, orders and your
                best-selling products.
              </p>
            </header>
            <div
              className="dash-wrap"
              data-dash-wrap=""
              tabIndex={0}
              role="region"
              aria-label="Dashboard preview"
            >
              <div
                className="dash"
                data-dash=""
                role="img"
                aria-label="Example seller dashboard with revenue, available balance, orders, conversion rate, a weekly revenue chart, top products and recent orders"
              >
                <div className="dash__chrome" aria-hidden="true">
                  <span className="dash__dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="dash__addr">Example data</span>
                </div>
                <div className="dash__body" aria-hidden="true">
                  <aside className="dash__side">
                    <span className="brand">
                      <img
                        className="logo logo--tipstore"
                        src="/assets/img/tipstore-logo.svg"
                        width="927"
                        height="254"
                        alt=""
                        style={{ height: "20px" }}
                      />
                    </span>{" "}
                    <span className="dash__nav is-on">
                      <svg className="i">
                        <use href="#i-home" />
                      </svg>
                      Home
                    </span>{" "}
                    <span className="dash__nav">
                      <svg className="i">
                        <use href="#i-box" />
                      </svg>
                      Products
                    </span>{" "}
                    <span className="dash__nav">
                      <svg className="i">
                        <use href="#i-bag" />
                      </svg>
                      Orders
                    </span>{" "}
                    <span className="dash__nav">
                      <svg className="i">
                        <use href="#i-users" />
                      </svg>
                      Customers
                    </span>{" "}
                    <span className="dash__nav">
                      <svg className="i">
                        <use href="#i-chart" />
                      </svg>
                      Analytics
                    </span>{" "}
                    <span className="dash__nav">
                      <svg className="i">
                        <use href="#i-wallet" />
                      </svg>
                      Withdrawals
                    </span>{" "}
                    <span className="dash__nav">
                      <svg className="i">
                        <use href="#i-store" />
                      </svg>
                      Storefront
                    </span>{" "}
                    <span className="dash__nav">
                      <svg className="i">
                        <use href="#i-sliders" />
                      </svg>
                      Settings
                    </span>{" "}
                    <div className="upgrade">
                      <b>Go Pro</b>
                      <span style={{ fontSize: "12px", color: "var(--ink-2)" }}>
                        Unlimited products and lower fees.
                      </span>
                      <span
                        className="btn btn--ink"
                        style={{ minHeight: "34px", fontSize: "12px", padding: "0 12px" }}
                      >
                        Upgrade
                      </span>
                    </div>
                  </aside>
                  <div className="dash__main">
                    <div className="dash__top">
                      <p className="dash__hello">
                        Good evening, Adaeze<span>Today</span>
                      </p>
                      <div className="dash__range">
                        <span>Daily</span>
                        <span className="is-on">Weekly</span>
                        <span>Monthly</span>
                        <span>Yearly</span>
                      </div>
                    </div>
                    <div className="kpis">
                      <div className="kpi kpi--ink">
                        <span className="kpi__label">
                          Today’s revenue
                          <span className="icon-tile">
                            <svg className="i">
                              <use href="#i-naira" />
                            </svg>
                          </span>
                        </span>
                        <span className="kpi__val" data-count="48500" data-prefix="₦">
                          ₦48,500
                        </span>
                      </div>
                      <div className="kpi">
                        <span className="kpi__label">
                          Available balance
                          <span className="icon-tile">
                            <svg className="i">
                              <use href="#i-wallet" />
                            </svg>
                          </span>
                        </span>
                        <span className="kpi__val" data-count="184500" data-prefix="₦">
                          ₦184,500
                        </span>
                      </div>
                      <div className="kpi">
                        <span className="kpi__label">
                          Orders
                          <span className="icon-tile">
                            <svg className="i">
                              <use href="#i-bag" />
                            </svg>
                          </span>
                        </span>
                        <span className="kpi__val" data-count="31">
                          31
                        </span>
                      </div>
                      <div className="kpi">
                        <span className="kpi__label">
                          Conversion rate
                          <span className="icon-tile">
                            <svg className="i">
                              <use href="#i-chart" />
                            </svg>
                          </span>
                        </span>
                        <span
                          className="kpi__val"
                          data-count="4.8"
                          data-decimals="1"
                          data-suffix="%"
                        >
                          4.8%
                        </span>
                      </div>
                    </div>
                    <div className="dash__row">
                      <div className="panel">
                        <div className="panel__head">
                          <span className="panel__title">Revenue</span>
                          <span className="panel__meta">This week</span>
                        </div>{" "}
                        <svg className="chart" viewBox="0 0 560 190" data-chart="">
                          <defs>
                            <linearGradient id="dashFill" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0" stopColor="#FF5D02" stopOpacity=".22" />
                              <stop offset="1" stopColor="#FF5D02" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <line className="grid-line" x1="40" y1="20" x2="560" y2="20" />
                          <line className="grid-line" x1="40" y1="70" x2="560" y2="70" />
                          <line className="grid-line" x1="40" y1="120" x2="560" y2="120" />
                          <line className="grid-line" x1="40" y1="170" x2="560" y2="170" />
                          <text className="axis" x="0" y="24">
                            ₦75k
                          </text>
                          <text className="axis" x="0" y="74">
                            ₦50k
                          </text>
                          <text className="axis" x="0" y="124">
                            ₦25k
                          </text>
                          <text className="axis" x="0" y="174">
                            ₦0
                          </text>
                          <path
                            className="area"
                            d="M60 128 C95 120,120 102,139 102 C160 102,190 114,218 114 C250 114,270 78,297 78 C325 78,350 92,376 92 C405 92,430 46,455 46 C480 46,505 73,534 73 L534 170 L60 170 Z"
                          />
                          <path
                            className="line"
                            data-line=""
                            d="M60 128 C95 120,120 102,139 102 C160 102,190 114,218 114 C250 114,270 78,297 78 C325 78,350 92,376 92 C405 92,430 46,455 46 C480 46,505 73,534 73"
                          />
                          <circle className="pt" cx="60" cy="128" r="4" />
                          <circle className="pt" cx="139" cy="102" r="4" />
                          <circle className="pt" cx="218" cy="114" r="4" />
                          <circle className="pt" cx="297" cy="78" r="4" />
                          <circle className="pt" cx="376" cy="92" r="4" />
                          <circle className="pt" cx="455" cy="46" r="4" />
                          <circle className="pt-last" cx="534" cy="73" r="6" />
                          <g data-chart-tip="">
                            <rect className="tip-bg" x="418" y="12" width="74" height="24" rx="7" />
                            <text className="tip-txt" x="455" y="28" textAnchor="middle">
                              ₦62,000
                            </text>
                          </g>
                          <text className="axis" x="60" y="188" textAnchor="middle">
                            Mon
                          </text>
                          <text className="axis" x="139" y="188" textAnchor="middle">
                            Tue
                          </text>
                          <text className="axis" x="218" y="188" textAnchor="middle">
                            Wed
                          </text>
                          <text className="axis" x="297" y="188" textAnchor="middle">
                            Thu
                          </text>
                          <text className="axis" x="376" y="188" textAnchor="middle">
                            Fri
                          </text>
                          <text className="axis" x="455" y="188" textAnchor="middle">
                            Sat
                          </text>
                          <text className="axis" x="534" y="188" textAnchor="middle">
                            Sun
                          </text>
                        </svg>{" "}
                        <div className="chart-stats">
                          <div>
                            <span>Products</span>
                            <b>6</b>
                          </div>
                          <div>
                            <span>Customers</span>
                            <b>28</b>
                          </div>
                          <div>
                            <span>Downloads</span>
                            <b>58</b>
                          </div>
                        </div>
                      </div>
                      <div className="panel">
                        <div className="panel__head">
                          <span className="panel__title">Balance</span>
                          <span className="panel__meta">Cleared funds</span>
                        </div>
                        <div className="balance">
                          <small>Available to withdraw</small>
                          <b>₦184,500</b>
                          <span className="btn btn--cream">Request withdrawal</span>
                        </div>
                        <div className="panel__head" style={{ marginTop: "4px" }}>
                          <span className="panel__title">Top products</span>
                        </div>
                        <ul className="top-prod">
                          <li>
                            <span className="prod__thumb cover-sun">
                              <svg className="i" style={{ "--acc": "var(--paper)" }}>
                                <use href="#i-template" />
                              </svg>
                            </span>
                            <span>
                              <b>Budget Planner</b>
                              <small>Template</small>
                            </span>
                            <span className="val">₦96k</span>
                            <span className="meter">
                              <i style={{ "--w": "100%" }} data-meter="" />
                            </span>
                          </li>
                          <li>
                            <span className="prod__thumb cover-lilac">
                              <svg className="i" style={{ "--acc": "var(--paper)" }}>
                                <use href="#i-book" />
                              </svg>
                            </span>
                            <span>
                              <b>Side-Hustle Guide</b>
                              <small>E-book</small>
                            </span>
                            <span className="val">₦72k</span>
                            <span className="meter">
                              <i style={{ "--w": "75%" }} data-meter="" />
                            </span>
                          </li>
                          <li>
                            <span className="prod__thumb cover-night">
                              <svg className="i" style={{ "--acc": "var(--night-3)" }}>
                                <use href="#i-video" />
                              </svg>
                            </span>
                            <span>
                              <b>Money Habits</b>
                              <small>Video</small>
                            </span>
                            <span className="val">₦50k</span>
                            <span className="meter">
                              <i style={{ "--w": "52%" }} data-meter="" />
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="panel">
                      <div className="panel__head">
                        <span className="panel__title">Recent orders</span>
                      </div>
                      <table className="orders">
                        <thead>
                          <tr>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Status</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <span className="who">
                                <img
                                  src="/assets/img/av-musa.webp"
                                  width="160"
                                  height="160"
                                  alt=""
                                  loading="lazy"
                                />
                                Customer A
                              </span>
                            </td>
                            <td>Budget Planner</td>
                            <td>
                              <span className="pill pill--warning pill--dot">Pending</span>
                            </td>
                            <td className="amt">₦7,500</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="who">
                                <img
                                  src="/assets/img/av-amara.webp"
                                  width="160"
                                  height="160"
                                  alt=""
                                  loading="lazy"
                                />
                                Customer B
                              </span>
                            </td>
                            <td>Budget Planner</td>
                            <td>
                              <span className="pill pill--success pill--dot">Paid</span>
                            </td>
                            <td className="amt">₦7,500</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="who">
                                <img
                                  src="/assets/img/av-tobi.webp"
                                  width="160"
                                  height="160"
                                  alt=""
                                  loading="lazy"
                                />
                                Customer C
                              </span>
                            </td>
                            <td>Money Habits</td>
                            <td>
                              <span className="pill pill--success pill--dot">Paid</span>
                            </td>
                            <td className="amt">₦25,000</td>
                          </tr>
                          <tr>
                            <td>
                              <span className="who">
                                <img
                                  src="/assets/img/av-kofi.webp"
                                  width="160"
                                  height="160"
                                  alt=""
                                  loading="lazy"
                                />
                                Customer D
                              </span>
                            </td>
                            <td>Side-Hustle Guide</td>
                            <td>
                              <span className="pill pill--danger pill--dot">Failed</span>
                            </td>
                            <td className="amt">₦12,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="dash-hint" aria-hidden="true">
              <svg className="i">
                <use href="#i-arrow-right" />
              </svg>
              Swipe to explore the dashboard
            </p>
            <ul className="showcase__notes">
              <li data-reveal="">
                <span className="icon-tile acc-flame">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-bell" />
                  </svg>
                </span>
                <h3>New-sale notifications</h3>
                <p>An email with the order details every time someone buys.</p>
              </li>
              <li data-reveal="">
                <span className="icon-tile acc-lilac">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-chart" />
                  </svg>
                </span>
                <h3>Know what performs</h3>
                <p>
                  Top products, sales trends and where your visitors come from: direct, Google,
                  social media or referral links.
                </p>
              </li>
              <li data-reveal="">
                <span className="icon-tile acc-mint">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-receipt" />
                  </svg>
                </span>
                <h3>Transparent revenue</h3>
                <p>
                  Gross revenue, platform fees, gateway fees and net revenue, each shown clearly.
                </p>
              </li>
            </ul>
          </div>
        </section>{" "}
        {/* ─────────────────────────── Trust ─────────────────────────── */}{" "}
        <section className="section trust" aria-labelledby="trust-title">
          <div className="container trust__inner">
            <div className="trust__lock" aria-hidden="true" data-lock="">
              <span
                className="tip tip--arch c-ink"
                style={{
                  "--s": "58%",
                  left: "21%",
                  top: "0",
                  background: "transparent",
                  border: "clamp(8px,1vw,12px) solid var(--ink)",
                  borderBottom: "0"
                }}
              />{" "}
              <span
                className="tip tip--square c-flame"
                style={{ "--s": "100%", left: "0", top: "38%", height: "62%", borderRadius: "22%" }}
              />{" "}
              <span
                className="tip tip--diamond c-cream"
                style={{ "--s": "24%", left: "38%", top: "58%" }}
              />
            </div>
            <h2 className="trust__statement" id="trust-title" data-words="">
              Secure payments. Verified transactions. Protected downloads. Transparent reporting.
            </h2>
            <ul className="trust__grid">
              <li data-reveal="">
                <span className="icon-tile acc-flame">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-shield" />
                  </svg>
                </span>
                <h3>Verified payments</h3>
                <p>No product access is granted until the payment is verified.</p>
              </li>
              <li data-reveal="">
                <span className="icon-tile acc-lilac">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-lock" />
                  </svg>
                </span>
                <h3>Protected downloads</h3>
                <p>
                  Downloads never expose where files are stored. Signed links expire after a few
                  minutes.
                </p>
              </li>
              <li data-reveal="">
                <span className="icon-tile acc-sun">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-receipt" />
                  </svg>
                </span>
                <h3>Clear records</h3>
                <p>Every order has a receipt, and every wallet movement is recorded.</p>
              </li>
              <li data-reveal="">
                <span className="icon-tile acc-mint">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-bank" />
                  </svg>
                </span>
                <h3>Safe withdrawals</h3>
                <p>Withdrawals need a verified identity (KYC) and a verified payout account.</p>
              </li>
            </ul>
            <p className="trust__meta" aria-hidden="true">
              <span>
                <span className="tip tip--diamond c-ink" style={{ "--s": "9px" }} />
                Payments by Paystack
              </span>
              <span>
                <span className="tip tip--diamond c-ink" style={{ "--s": "9px" }} />
                HTTPS / TLS 1.3
              </span>
              <span>
                <span className="tip tip--diamond c-ink" style={{ "--s": "9px" }} />
                Encrypted data at rest
              </span>
            </p>
          </div>
        </section>{" "}
        {/* ─────────────────────────── Pricing ─────────────────────────── */}{" "}
        <section className="section pricing" id="pricing" aria-labelledby="pricing-title">
          <div className="container">
            <header className="section-head section-head--center">
              <p className="tab-label">
                <span className="tip tip--pill c-mint" aria-hidden="true" />
                Pricing
              </p>
              <h2 className="h2" id="pricing-title" data-split="">
                Start free.
                <br />
                <em>Upgrade as you&nbsp;grow.</em>
              </h2>
              <p className="lede">Three plans: Free, Pro and Business. Billed monthly or yearly.</p>
            </header>
            <Plans ctaHref="#claim" />
            <p className="pricing__more">
              <a className="link-arrow" href="/tipstore/pricing/">
                Compare every feature
                <svg className="i" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
              </a>
            </p>
          </div>
        </section>{" "}
        {/* ─────────────────────────── FAQ ─────────────────────────── */}{" "}
        <section className="section faq" id="faq" aria-labelledby="faq-title">
          <div className="container faq__grid">
            <div className="faq__intro">
              <p className="tab-label">
                <span className="tip tip--diamond c-blush" aria-hidden="true" />
                FAQ
              </p>
              <h2 className="h2" id="faq-title" data-split="">
                Questions, <em>answered.</em>
              </h2>
              <div className="copy-chip">
                <span>info@tipsona.co</span>
                <button type="button" data-copy="info@tipsona.co">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-copy" />
                  </svg>
                  <span>Copy</span>
                </button>
              </div>
            </div>
            <FaqList items={TIPSTORE_FAQ} />
          </div>
        </section>{" "}
        {/* ─────────────────────────── Final CTA ─────────────────────────── */}{" "}
        <section className="section cta" aria-labelledby="cta-title" style={{ paddingTop: "0" }}>
          <div className="container">
            <div className="cta__panel" data-reveal="">
              <span
                className="tip tip--star c-sun bg-shape"
                style={{ "--s": "clamp(90px,12vw,170px)", right: "-3%", top: "-6%" }}
                data-float=""
                aria-hidden="true"
              />{" "}
              <div className="cta__copy">
                <h2 className="cta__title" id="cta-title" data-split="">
                  From idea to first&nbsp;sale <em>in minutes.</em>
                </h2>
                <p>Create your account, publish your first product and share your storefront.</p>
                <form
                  className="claim claim--on-flame"
                  data-claim=""
                  data-waitlist-url="/waitlist/"
                  noValidate
                >
                  <label className="sr-only" htmlFor="claim-name-2">
                    Choose your storefront username
                  </label>{" "}
                  <div className="claim__field">
                    <span className="claim__prefix" aria-hidden="true">
                      tipstore.tipsona.co/
                    </span>{" "}
                    <input
                      className="claim__input"
                      id="claim-name-2"
                      name="username"
                      type="text"
                      autoComplete="off"
                      autoCapitalize="none"
                      spellCheck="false"
                      maxLength={30}
                      placeholder="yourname"
                      aria-describedby="claim-hint-2"
                    />{" "}
                    <button className="btn btn--ink" type="submit">
                      Claim it
                      <svg className="i i-go" aria-hidden="true">
                        <use href="#i-arrow-right" />
                      </svg>
                    </button>
                  </div>
                  <p className="claim__hint" id="claim-hint-2" aria-live="polite" />
                </form>
              </div>
              <div className="cta__phones" aria-hidden="true">
                <div className="phone">
                  <div className="phone__screen">
                    <div className="phone__island" />
                    <div className="phone__status">
                      <span>9:41</span>
                      <span>
                        <svg className="i">
                          <use href="#i-signal" />
                        </svg>
                        <svg className="i">
                          <use href="#i-battery" />
                        </svg>
                      </span>
                    </div>
                    <div className="checkout-screen">
                      <h4>Checkout</h4>
                      <div className="cs-prod">
                        <span className="prod__thumb cover-lilac">
                          <svg className="i" style={{ "--acc": "var(--paper)" }}>
                            <use href="#i-book" />
                          </svg>
                        </span>
                        <div>
                          <b>Side-Hustle Guide</b>
                          <span>E-book</span>
                        </div>
                      </div>
                      <div className="cs-field">Name</div>
                      <div className="cs-field">Email address</div>
                      <div className="cs-total">
                        <span>Total</span>
                        <span>₦12,000</span>
                      </div>
                      <div className="cs-pay">
                        <svg className="i" style={{ width: "4cqw", height: "4cqw" }}>
                          <use href="#i-lock" />
                        </svg>
                        Complete purchase
                      </div>
                      <div className="cs-trust">
                        <span>Secure payment</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="phone">
                  <div className="phone__screen">
                    <div className="phone__island" />
                    <div className="phone__status">
                      <span>9:41</span>
                      <span>
                        <svg className="i">
                          <use href="#i-signal" />
                        </svg>
                        <svg className="i">
                          <use href="#i-battery" />
                        </svg>
                      </span>
                    </div>
                    <div className="checkout-screen">
                      <div className="cs-success">
                        <span className="ring">
                          <svg className="i">
                            <use href="#i-check" />
                          </svg>
                        </span>
                        <h4>Purchase complete</h4>
                        <span style={{ fontSize: "3.4cqw", color: "var(--muted)" }}>
                          Your product is unlocked. A receipt is on its way to your email.
                        </span>
                      </div>
                      <div className="ls-item">
                        <span className="prod__thumb cover-lilac">
                          <svg className="i" style={{ "--acc": "var(--paper)" }}>
                            <use href="#i-book" />
                          </svg>
                        </span>
                        <div>
                          <b>Side-Hustle Guide</b>
                          <span>E-book · PDF</span>
                        </div>
                        <span className="dl">
                          <svg className="i">
                            <use href="#i-download" />
                          </svg>
                        </span>
                      </div>
                      <div className="cs-pay">Open my library</div>
                    </div>
                  </div>
                </div>
                <div className="phone">
                  <div className="phone__screen">
                    <div className="phone__island" />
                    <div className="phone__status">
                      <span>9:41</span>
                      <span>
                        <svg className="i">
                          <use href="#i-signal" />
                        </svg>
                        <svg className="i">
                          <use href="#i-battery" />
                        </svg>
                      </span>
                    </div>
                    <div className="library-screen">
                      <h4>My Library</h4>
                      <div className="ls-item">
                        <span className="prod__thumb cover-lilac">
                          <svg className="i" style={{ "--acc": "var(--paper)" }}>
                            <use href="#i-book" />
                          </svg>
                        </span>
                        <div>
                          <b>Side-Hustle Guide</b>
                          <span>E-book</span>
                        </div>
                        <span className="dl">
                          <svg className="i">
                            <use href="#i-download" />
                          </svg>
                        </span>
                      </div>
                      <div className="ls-item">
                        <span className="prod__thumb cover-flame">
                          <svg className="i" style={{ "--acc": "var(--sun)" }}>
                            <use href="#i-video" />
                          </svg>
                        </span>
                        <div>
                          <b>Golden Hour LUTs</b>
                          <span>ZIP file</span>
                        </div>
                        <span className="dl">
                          <svg className="i">
                            <use href="#i-download" />
                          </svg>
                        </span>
                      </div>
                      <div className="ls-item">
                        <span className="prod__thumb cover-sun">
                          <svg className="i" style={{ "--acc": "var(--paper)" }}>
                            <use href="#i-file" />
                          </svg>
                        </span>
                        <div>
                          <b>Practice Questions</b>
                          <span>PDF</span>
                        </div>
                        <span className="dl">
                          <svg className="i">
                            <use href="#i-download" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer pitch="TipStore helps creators, educators, coaches, consultants, trainers and digital entrepreneurs sell what they know." />
      <JsonLd
        graph={[
          breadcrumbs(["TipStore", "/tipstore/"]),
          productApp({ name: "TipStore", description: DESCRIPTION, path: "/tipstore/", free: true }),
          faqPage("/tipstore/", TIPSTORE_FAQ)
        ]}
      />
    </>
  );
}
