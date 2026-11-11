import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { NavProduct } from "@/components/layout/nav-product";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbs } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "TipFix by Tipsona · The problem-solving engine for creators",
  description:
    "TipFix, coming soon to Tipsona, turns the everyday friction of running a digital business into simple, trusted services: payouts, contracts, escrow and more.",
  path: "/tipfix/"
});

export default function TipFixPage() {
  return (
    <>
      <NavProduct
        product="TipFix"
        cta="Join the waitlist"
        ctaHref="/waitlist/?product=tipfix"
        links={[
          { label: "Services", href: "#services" },
          { label: "Escrow", href: "#escrow" },
          { label: "Small problems", href: "#small" },
          { label: "All products", href: "/products/" }
        ]}
      />
      <main id="main">
        <section className="page-hero grid-lines prod-hero" id="top" aria-labelledby="page-title">
          <div className="container prod-hero__grid">
            <div className="prod-hero__copy">
              <p className="tab-label" data-intro="">
                <span className="tip tip--diamond c-blush" aria-hidden="true" />
                TipFix · Coming soon
              </p>
              <h1 className="h1" id="page-title">
                <span className="ln">
                  <span className="ln__in">Small problems,</span>
                </span>{" "}
                <span className="ln">
                  <span className="ln__in">
                    <span className="hl">
                      <span className="hl__bg" aria-hidden="true" />
                      fixed.
                    </span>
                  </span>
                </span>
              </h1>
              <p className="lede" data-intro="">
                TipFix is the problem-solving engine for Africa’s digital creators and online
                businesses: one place for the payouts, paperwork and protection that usually need
                several different services.
              </p>
              <div className="hub-hero__ctas" data-intro="">
                <a className="btn btn--flame" href="#services">
                  See what it fixes
                  <svg className="i i-go" aria-hidden="true">
                    <use href="#i-arrow-down" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="prod-hero__art fix-stack" data-intro="" aria-hidden="true">
              <div className="fix-chip fix-chip--a">
                <span className="icon-tile acc-mint">
                  <svg className="i">
                    <use href="#i-naira" />
                  </svg>
                </span>
                Payout troubleshooting
              </div>
              <div className="fix-chip fix-chip--b">
                <span className="icon-tile acc-lilac">
                  <svg className="i">
                    <use href="#i-pen" />
                  </svg>
                </span>
                Contracts and e-signature
              </div>
              <div className="fix-chip fix-chip--c">
                <span className="icon-tile acc-blush">
                  <svg className="i">
                    <use href="#i-shield" />
                  </svg>
                </span>
                Escrow and protection
              </div>
              <div className="fix-chip fix-chip--d">
                <span className="icon-tile acc-sun">
                  <svg className="i">
                    <use href="#i-receipt" />
                  </svg>
                </span>
                Invoices and reminders
              </div>
              <div className="fix-core">
                <svg className="i">
                  <use href="#i-wrench" />
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="section principle on-dark" aria-labelledby="principle-title">
          <div className="container">
            <p className="tab-label">
              <span className="tip tip--diamond c-blush" aria-hidden="true" />
              The principle
            </p>
            <h2 className="thesis__statement" id="principle-title" data-words="">
              No more hunting for a workaround, a lawyer, a payment intermediary or an escrow
              provider every time a small problem comes up.
            </h2>
            <p className="lede" style={{ marginTop: "28px" }}>
              TipFix turns each one into a simple, trusted service, working with trusted partners
              behind one Tipsona experience.
            </p>
          </div>
        </section>{" "}
        {/* ─────────────────────────── Services ─────────────────────────── */}{" "}
        <section className="section" id="services" aria-labelledby="services-title">
          <div className="container">
            <header className="section-head">
              <p className="tab-label">
                <span className="tip tip--square c-lilac" aria-hidden="true" />
                What TipFix covers
              </p>
              <h2 className="h2" id="services-title" data-split="">
                Four services, <em>one place.</em>
              </h2>
            </header>
            <article className="service" data-reveal="">
              <div className="service__copy">
                <p className="service__num">01</p>
                <h3 className="service__title">Cross-platform monetization and payout concierge</h3>
                <p>
                  Platform monetization isn’t available everywhere in Africa. TipFix makes getting
                  your earnings paid out simple and compliant.
                </p>
                <ul className="checks">
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    Check which monetization routes are actually available to you
                  </li>
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    Connect eligible international earnings to compliant payout partners
                  </li>
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    FX conversion and local settlement where permitted
                  </li>
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    Earnings, fees, balances and settlement status in one dashboard
                  </li>
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-check" />
                    </svg>
                    Cases that need foreign entities or accounts go to legitimate partner solutions
                  </li>
                </ul>
                <p className="service__note">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-shield" />
                  </svg>
                  Compliant by design. TipFix never helps anyone falsify their location or open
                  deceptive foreign accounts.
                </p>
              </div>
              <div className="service__art" aria-hidden="true">
                <div className="settle">
                  <p className="settle__label">Settlement · example</p>
                  <div className="settle__row">
                    <span>International earnings</span>
                    <b>$420.00</b>
                  </div>
                  <div className="settle__row">
                    <span>FX conversion</span>
                    <span className="pill pill--success pill--dot">Done</span>
                  </div>
                  <div className="settle__row">
                    <span>Fees</span>
                    <span>Shown before settlement</span>
                  </div>
                  <div className="settle__row settle__row--total">
                    <span>Local settlement</span>
                    <span className="pill pill--warning pill--dot">In progress</span>
                  </div>
                </div>
              </div>
            </article>
            <article className="service service--flip" data-reveal="">
              <div className="service__copy">
                <p className="service__num">02</p>
                <h3 className="service__title">Creator legal and documentation desk</h3>
                <p>
                  As your brand deals grow, you need professional paperwork for deliverables,
                  payment, usage rights, exclusivity and consent.
                </p>
                <p className="service__note">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-users" />
                  </svg>
                  TipFix generates structured templates and workflows, and escalates to qualified
                  lawyers for anything that needs legal advice.
                </p>
              </div>
              <div className="service__art">
                <ul className="docs">
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-file" />
                    </svg>
                    Brand influencer agreements
                  </li>
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-file" />
                    </svg>
                    UGC statements of work
                  </li>
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-file" />
                    </svg>
                    Content licensing and usage rights
                  </li>
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-file" />
                    </svg>
                    NDAs and contractor agreements
                  </li>
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-receipt" />
                    </svg>
                    Invoices and payment requests
                  </li>
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-file" />
                    </svg>
                    Terms, refund and cancellation policies
                  </li>
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-lock" />
                    </svg>
                    Privacy and cookie policy templates
                  </li>
                  <li>
                    <svg className="i" aria-hidden="true">
                      <use href="#i-users" />
                    </svg>
                    Basic collaboration agreements
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>{" "}
        {/* ─────────────────────────── Escrow ─────────────────────────── */}{" "}
        <section className="section flow-sec on-dark" id="escrow" aria-labelledby="escrow-title">
          <div className="container flow-sec__grid">
            <div className="flow-sec__copy">
              <p className="tab-label">
                <span className="tip tip--diamond c-blush" aria-hidden="true" />
                03 · Independent escrow
              </p>
              <h2 className="h2" id="escrow-title" data-split="">
                Buy on Instagram or WhatsApp, <em>protected.</em>
              </h2>
              <p className="lede">
                A buyer and seller can create a protected transaction even when neither uses a
                Tipsona storefront. It’s a trust layer for African social commerce.
              </p>
            </div>
            <ol className="flow" data-flow="">
              <li className="flow__rail" aria-hidden="true">
                <i data-flow-fill="" />
              </li>
              <li className="flow__step" data-reveal="">
                <span className="flow__icon">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-card" />
                  </svg>
                </span>
                <div>
                  <b>Buyer pays Tipsona</b>
                  <span>The money is held, not sent to the seller.</span>
                </div>
              </li>
              <li className="flow__step" data-reveal="">
                <span className="flow__icon">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-bell" />
                  </svg>
                </span>
                <div>
                  <b>Seller is notified</b>
                  <span>They know the funds are secured.</span>
                </div>
              </li>
              <li className="flow__step" data-reveal="">
                <span className="flow__icon">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-truck" />
                  </svg>
                </span>
                <div>
                  <b>Seller ships</b>
                  <span>Tracking is attached to the transaction.</span>
                </div>
              </li>
              <li className="flow__step" data-reveal="">
                <span className="flow__icon">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-box" />
                  </svg>
                </span>
                <div>
                  <b>Buyer receives and inspects</b>
                  <span>Checking the goods before anything is released.</span>
                </div>
              </li>
              <li className="flow__step" data-reveal="">
                <span className="flow__icon">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-check-circle" />
                  </svg>
                </span>
                <div>
                  <b>Buyer approves or opens a dispute</b>
                  <span>Either way, there’s a clear next step.</span>
                </div>
              </li>
              <li className="flow__step" data-reveal="">
                <span className="flow__icon">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-bank" />
                  </svg>
                </span>
                <div>
                  <b>Funds are released</b>
                  <span>Once the agreed conditions are met.</span>
                </div>
              </li>
            </ol>
          </div>
        </section>{" "}
        {/* ─────────────────────────── Small problems ─────────────────────────── */}{" "}
        <section className="section" id="small" aria-labelledby="small-title">
          <div className="container">
            <header className="section-head section-head--split">
              <div style={{ display: "grid", gap: "22px" }}>
                <p className="tab-label">
                  <span className="tip tip--star c-sun" aria-hidden="true" />
                  04 · The small-problems marketplace
                </p>
                <h2 className="h2" id="small-title" data-split="">
                  The little jobs that <em>eat your week.</em>
                </h2>
              </div>
              <p className="lede">
                Utilities planned for TipFix, each solving one problem creators run into again and
                again.
              </p>
            </header>
            <ul className="problem-cloud">
              <li data-reveal="">Payment and payout troubleshooting</li>
              <li data-reveal="">International invoice and payment collection</li>
              <li data-reveal="">Contract generation and e-signature</li>
              <li data-reveal="">Escrow and transaction protection</li>
              <li data-reveal="">Digital-product delivery and refunds</li>
              <li data-reveal="">Content licensing and rights tracking</li>
              <li data-reveal="">Brand-deal payment reminders</li>
              <li data-reveal="">Tax and income record organization</li>
              <li data-reveal="">Media kits and rate cards</li>
              <li data-reveal="">Campaign quotation tools</li>
              <li data-reveal="">Link-in-bio and landing pages</li>
              <li data-reveal="">Customer dispute workflows</li>
              <li data-reveal="">Business registration guidance through verified partners</li>
              <li data-reveal="">Copyright and ownership records</li>
            </ul>
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
                className="tip tip--diamond c-blush bg-shape"
                style={{ "--s": "clamp(90px,12vw,170px)", right: "-3%", top: "-6%" }}
                data-float=""
                aria-hidden="true"
              />{" "}
              <div className="cta__copy">
                <h2 className="cta__title" id="cta-title" data-split="">
                  Got a <em>small&nbsp;problem?</em>
                </h2>
                <p>Join the waitlist, and tell us what keeps slowing your business down.</p>
                <div className="cta__btns">
                  <a className="btn btn--ink" href="/waitlist/?product=tipfix">
                    Join the waitlist
                    <svg className="i i-go" aria-hidden="true">
                      <use href="#i-arrow-right" />
                    </svg>
                  </a>{" "}
                  <a className="btn btn--cream" href="mailto:info@tipsona.co?subject=TipFix">
                    info@tipsona.co
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer pitch="TipFix turns the everyday friction of running a digital business into simple, trusted services." />
      <JsonLd graph={[breadcrumbs(["TipFix", "/tipfix/"])]} />
    </>
  );
}
