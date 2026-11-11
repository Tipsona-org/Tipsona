import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { NavHub } from "@/components/layout/nav-hub";
import { EcosystemGrid } from "@/components/sections/ecosystem-grid";
import { HubCta } from "@/components/sections/hub-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbs } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Tipsona products · Tools to run your creator business",
  description:
    "Sell with TipStore, work with brands on Tipper, earn from fans with TipStar, and more. One Tipsona account for your whole creator business.",
  path: "/products/"
});

export default function ProductsPage() {
  return (
    <>
      <NavHub home="/" current="/products/" />
      <main id="main">
        <section className="page-hero grid-lines" id="top" aria-labelledby="page-title">
          <div
            className="container"
            style={{ display: "grid", gap: "26px", justifyItems: "start" }}
          >
            <p className="tab-label" data-intro="">
              <span className="tip tip--star c-sun" aria-hidden="true" />
              Products
            </p>
            <h1 className="h1" id="page-title">
              <span className="ln">
                <span className="ln__in">One account.</span>
              </span>{" "}
              <span className="ln">
                <span className="ln__in">
                  <span className="hl">
                    <span className="hl__bg" aria-hidden="true" />
                    Every way to earn.
                  </span>
                </span>
              </span>
            </h1>
            <p className="lede" data-intro="">
              Sell products, earn from fans, work with brands, raise funds, get discovered and
              understand your numbers, all from one Tipsona account.
            </p>
          </div>
        </section>
        <section
          className="section ecosystem"
          id="products"
          aria-label="All products"
          style={{ paddingTop: "0" }}
        >
          <div className="container">
            <EcosystemGrid anchors />
          </div>
        </section>{" "}
        {/* ─────────────────────────── Product details ─────────────────────────── */}{" "}
        <section
          className="section eco-details"
          aria-label="Product details"
          style={{ paddingTop: "0" }}
        >
          <div className="container">
            <article className="eco-detail" id="tipstore" aria-labelledby="d-tipstore">
              <div className="eco-detail__head">
                <p className="eco-detail__meta">
                  <span className="tip tip--arch c-flame" aria-hidden="true" />
                  Sell
                </p>
                <h2 className="eco-detail__name" id="d-tipstore">
                  TipStore
                </h2>
                <p className="eco-detail__line">Sell digital products from your own storefront.</p>{" "}
                <a className="link-arrow" href="/tipstore/">
                  Visit TipStore
                  <svg className="i" aria-hidden="true">
                    <use href="#i-arrow-right" />
                  </svg>
                </a>
              </div>
              <div className="eco-detail__body">
                <p>
                  Turn your audience’s attention into sales you own: courses, e-books, templates,
                  communities, toolkits, digital services and other digital products.
                </p>
                <ul className="checks">
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    Creator storefront and product hosting
                  </li>
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    Payments and customer access
                  </li>
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    Sales and transaction history
                  </li>
                </ul>
              </div>
            </article>
            <article className="eco-detail" id="tipper" aria-labelledby="d-tipper">
              <div className="eco-detail__head">
                <p className="eco-detail__meta">
                  <span className="tip tip--circle c-lilac" aria-hidden="true" />
                  Work with brands
                </p>
                <h2 className="eco-detail__name" id="d-tipper">
                  Tipper
                </h2>
                <p className="eco-detail__line">Africa’s automated UGC marketplace.</p>{" "}
                <a className="link-arrow" href="/tipper/">
                  Visit Tipper
                  <svg className="i" aria-hidden="true">
                    <use href="#i-arrow-right" />
                  </svg>
                </a>
              </div>
              <div className="eco-detail__body">
                <p>
                  Get matched with brands for UGC work. Tipper handles the brief, product delivery,
                  escrow, approvals and your payout.
                </p>
                <ol className="mini-flow">
                  <li>Brand funds campaign into escrow</li>
                  <li>You apply with a pitch</li>
                  <li>Courier delivery is tracked</li>
                  <li>Delivery starts the deadline</li>
                  <li>You submit a watermarked draft</li>
                  <li>Brand approves</li>
                  <li>You get paid</li>
                </ol>
              </div>
            </article>
            <article className="eco-detail" id="tipstar" aria-labelledby="d-tipstar">
              <div className="eco-detail__head">
                <p className="eco-detail__meta">
                  <span className="tip tip--star c-sun" aria-hidden="true" />
                  Earn every month
                </p>
                <h2 className="eco-detail__name" id="d-tipstar">
                  TipStar
                </h2>
                <p className="eco-detail__line">Memberships, donations and exclusive content.</p>
              </div>
              <div className="eco-detail__body eco-detail__body--tiles">
                <div className="mini-tile">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-users" />
                  </svg>
                  Memberships
                </div>
                <div className="mini-tile">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-heart" />
                  </svg>
                  Donations
                </div>
                <div className="mini-tile">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-lock" />
                  </svg>
                  Exclusive content
                </div>
              </div>
            </article>
            <article className="eco-detail" id="tipfix" aria-labelledby="d-tipfix">
              <div className="eco-detail__head">
                <p className="eco-detail__meta">
                  <span className="tip tip--diamond c-blush" aria-hidden="true" />
                  Fix problems · Coming soon
                </p>
                <h2 className="eco-detail__name" id="d-tipfix">
                  TipFix
                </h2>
                <p className="eco-detail__line">Small business problems, fixed.</p>{" "}
                <a className="link-arrow" href="/tipfix/">
                  Visit TipFix
                  <svg className="i" aria-hidden="true">
                    <use href="#i-arrow-right" />
                  </svg>
                </a>
              </div>
              <div className="eco-detail__body">
                <p>
                  No more hunting for a workaround, a lawyer, a payment intermediary or an escrow
                  provider for every small problem. TipFix turns each one into a simple, trusted
                  service.
                </p>
                <ul className="checks">
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    Cross-platform monetization and payout concierge
                  </li>
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    Creator legal and documentation desk
                  </li>
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    Independent escrow for online transactions
                  </li>
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    A marketplace for everyday “small problems”
                  </li>
                </ul>
              </div>
            </article>
            <article className="eco-detail" id="tiplaunch" aria-labelledby="d-tiplaunch">
              <div className="eco-detail__head">
                <p className="eco-detail__meta">
                  <span className="tip tip--pill c-mint" aria-hidden="true" />
                  Raise funds · Coming soon
                </p>
                <h2 className="eco-detail__name" id="d-tiplaunch">
                  TipLaunch
                </h2>
                <p className="eco-detail__line">Get community-backed capital for your project.</p>
              </div>
              <div className="eco-detail__body eco-detail__body--tiles">
                <div className="mini-tile">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-users" />
                  </svg>
                  Community-backed capital
                </div>
              </div>
            </article>
            <article className="eco-detail" id="tipmarket" aria-labelledby="d-tipmarket">
              <div className="eco-detail__head">
                <p className="eco-detail__meta">
                  <span className="tip tip--square c-lilac" aria-hidden="true" />
                  Get discovered · Coming soon
                </p>
                <h2 className="eco-detail__name" id="d-tipmarket">
                  TipMarket
                </h2>
                <p className="eco-detail__line">Get found by new audiences.</p>
              </div>
              <div className="eco-detail__body">
                <p>
                  TipMarket is the destination where audiences discover creators, creator-led
                  businesses, TipStore products, TipStar communities, TipLaunch projects and other
                  creator experiences.
                </p>
              </div>
            </article>
            <article className="eco-detail" id="tipads" aria-labelledby="d-tipads">
              <div className="eco-detail__head">
                <p className="eco-detail__meta">
                  <span className="tip tip--tri c-flame" aria-hidden="true" />
                  Earn from ads · Coming soon
                </p>
                <h2 className="eco-detail__name" id="d-tipads">
                  TipAds
                </h2>
                <p className="eco-detail__line">Earn from brand distribution.</p>
              </div>
              <div className="eco-detail__body">
                <p>Brands pay creators to distribute their message through:</p>
                <ul className="tags tags--solid">
                  <li>Sponsored content</li>
                  <li>UGC</li>
                  <li>Product placement</li>
                  <li>Affiliate and performance campaigns</li>
                  <li>Creator whitelisting</li>
                  <li>Sponsored TipMarket placement</li>
                </ul>
              </div>
            </article>
            <article className="eco-detail" id="tipai" aria-labelledby="d-tipai">
              <div className="eco-detail__head">
                <p className="eco-detail__meta">
                  <span className="tip tip--star c-lilac" aria-hidden="true" />
                  Get help · Coming soon
                </p>
                <h2 className="eco-detail__name" id="d-tipai">
                  TipAI
                </h2>
                <p className="eco-detail__line">An AI assistant for your creator business.</p>
              </div>
              <div className="eco-detail__body">
                <p>
                  TipAI isn’t just a chatbot. With your permission, it uses your Tipsona activity to
                  understand your actual business and help you run it.
                </p>
                <ul className="checks checks--2">
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    Scripts, hooks, captions and content calendars
                  </li>
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    Repurposing content
                  </li>
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    Product, pricing and promotion ideas
                  </li>
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    Revenue analysis and a path to a target
                  </li>
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    Replies to brand briefs and proposals
                  </li>
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    Routine business emails and documents
                  </li>
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    Collaborations and growth experiments
                  </li>
                </ul>
                <div
                  className="ai-chat"
                  role="img"
                  aria-label="Example: a creator asks TipAI for a plan to make two million naira this month"
                >
                  <p className="ai-chat__label" aria-hidden="true">
                    Example
                  </p>
                  <p className="ai-chat__me" aria-hidden="true">
                    I want to make ₦2m this month.
                  </p>
                  <p className="ai-chat__ai" aria-hidden="true">
                    <span className="ai-chat__av">
                      <svg className="i">
                        <use href="#i-spark" />
                      </svg>
                    </span>
                    Here’s a plan across your products, memberships, brand work and content, based
                    on your Tipsona activity.
                  </p>
                </div>
              </div>
            </article>
            <article className="eco-detail" id="tipinsights" aria-labelledby="d-tipinsights">
              <div className="eco-detail__head">
                <p className="eco-detail__meta">
                  <span className="tip tip--square c-sun" aria-hidden="true" />
                  See what works · Coming soon
                </p>
                <h2 className="eco-detail__name" id="d-tipinsights">
                  TipInsights
                </h2>
                <p className="eco-detail__line">See what actually makes you money.</p>
              </div>
              <div className="eco-detail__body">
                <p>
                  One picture of your whole business across Tipsona. It connects attention,
                  engagement, conversion and revenue, instead of showing vanity metrics alone.
                </p>
                <dl className="metric-grid">
                  <div>
                    <dt>Audience</dt>
                    <dd>Growth, demographics and engagement</dd>
                  </div>
                  <div>
                    <dt>Content</dt>
                    <dd>Formats, performance and conversion</dd>
                  </div>
                  <div>
                    <dt>Commerce</dt>
                    <dd>Products, revenue, average order value and repeat customers</dd>
                  </div>
                  <div>
                    <dt>Memberships</dt>
                    <dd>Subscribers, churn and recurring revenue</dd>
                  </div>
                  <div>
                    <dt>Brand deals</dt>
                    <dd>Campaigns, earnings and performance</dd>
                  </div>
                  <div>
                    <dt>Overall business</dt>
                    <dd>Revenue, revenue mix and growth</dd>
                  </div>
                </dl>
                <div className="insight-card">
                  <span className="icon-tile acc-sun">
                    <svg className="i" aria-hidden="true">
                      <use href="#i-trend" />
                    </svg>
                  </span>{" "}
                  <p>
                    <span className="ai-chat__label">Example insight</span>Your finance videos
                    generate 3.4× more revenue per 1,000 views than your entertainment videos.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
        <HubCta
          title={
            <>
              Start with <em>TipStore.</em>
            </>
          }
          text="Set up your storefront and sell your first digital product, then add more ways to earn as they launch."
          waitlist="/waitlist/?product=tipstore"
        />
      </main>
      <Footer pitch="One Tipsona account for your whole creator business." />
      <JsonLd graph={[breadcrumbs(["Products", "/products/"])]} />
    </>
  );
}
