import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { NavHub } from "@/components/layout/nav-hub";
import { HubCta } from "@/components/sections/hub-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbs } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Why Tipsona · Built for African creators",
  description:
    "The everyday problems of running a creator business, and how Tipsona compares with global creator platforms, agencies and payment apps.",
  path: "/why-tipsona/"
});

export default function WhyTipsonaPage() {
  return (
    <>
      <NavHub home="/" current="/why-tipsona/" />
      <main id="main">
        <section className="page-hero grid-lines" id="top" aria-labelledby="page-title">
          <div
            className="container"
            style={{ display: "grid", gap: "26px", justifyItems: "start" }}
          >
            <p className="tab-label" data-intro="">
              <span className="tip tip--circle c-flame" aria-hidden="true" />
              Why Tipsona
            </p>
            <h1 className="h1" id="page-title">
              <span className="ln">
                <span className="ln__in">Built for</span>
              </span>{" "}
              <span className="ln">
                <span className="ln__in">
                  <span className="hl">
                    <span className="hl__bg" aria-hidden="true" />
                    African creators.
                  </span>
                </span>
              </span>
            </h1>
            <p className="lede" data-intro="">
              The everyday problems of running a creator business, and how Tipsona compares with
              the tools creators use today.
            </p>
          </div>
        </section>
        {/* ─────────────────────────── Problem ─────────────────────────── */}{" "}
        <section className="section problem" id="problems" aria-labelledby="problem-title">
          <div className="container">
            <header className="section-head section-head--split">
              <div style={{ display: "grid", gap: "22px" }}>
                <p className="tab-label">
                  <span className="tip tip--square c-lilac" aria-hidden="true" />
                  Sound familiar?
                </p>
                <h2 className="h2" id="problem-title" data-split="">
                  Running a creator&nbsp;business <em>shouldn’t</em> be this hard.
                </h2>
              </div>
              <p className="lede">
                Tipsona was built around the problems creators run into every day.
              </p>
            </header>
            <ol className="numbered">
              <li data-reveal="">
                <span className="numbered__n">01</span>
                <span className="icon-tile acc-lilac">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-link" />
                  </svg>
                </span>
                <p>
                  You juggle separate tools for your storefront, memberships, brand deals, payments,
                  analytics and contracts.
                </p>
              </li>
              <li data-reveal="">
                <span className="numbered__n">02</span>
                <span className="icon-tile acc-sun">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-briefcase" />
                  </svg>
                </span>
                <p>Brand deals start in DMs, and too often end in ghosting.</p>
              </li>
              <li data-reveal="">
                <span className="numbered__n">03</span>
                <span className="icon-tile acc-blush">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-shield" />
                  </svg>
                </span>
                <p>Getting paid safely, especially across borders, is a headache.</p>
              </li>
              <li data-reveal="">
                <span className="numbered__n">04</span>
                <span className="icon-tile acc-mint">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-naira" />
                  </svg>
                </span>
                <p>You have an audience, but platform monetization isn’t available to you.</p>
              </li>
              <li data-reveal="">
                <span className="numbered__n">05</span>
                <span className="icon-tile acc-flame">
                  <svg className="i" aria-hidden="true">
                    <use href="#i-chart" />
                  </svg>
                </span>
                <p>Your data is scattered, so it’s hard to see what actually makes you money.</p>
              </li>
            </ol>
          </div>
        </section>{" "}
        {/* ─────────────────────────── Why not other tools ─────────────────────────── */}{" "}
        <section className="section vs-sec" id="compare" aria-labelledby="compare-title">
          <div className="container">
            <header className="section-head vs-head">
              <p className="tab-label">
                <span className="tip tip--circle c-flame" aria-hidden="true" />
                Why not other tools?
              </p>
              <h2 className="h2" id="compare-title" data-split="">
                Other tools solve one&nbsp;piece.
                <br />
                <em>Tipsona connects&nbsp;them.</em>
              </h2>
              <p className="lede">
                Most creator tools were built for another market, or for a single job. Here is how
                the usual options compare.
              </p>
            </header>
            <ul className="vs">
              <li className="vs__row" data-reveal="">
                <span className="vs__icon" aria-hidden="true">
                  <svg className="i">
                    <use href="#i-globe" />
                  </svg>
                </span>{" "}
                <h3 className="vs__name">Global creator platforms</h3>
                <p className="vs__line">
                  Advanced software, but often not built for African payments, logistics and
                  everyday realities.
                </p>{" "}
                <span className="vs__tag">Not built locally</span>
              </li>
              <li className="vs__row" data-reveal="">
                <span className="vs__icon" aria-hidden="true">
                  <svg className="i">
                    <use href="#i-users" />
                  </svg>
                </span>{" "}
                <h3 className="vs__name">Agencies and directories</h3>
                <p className="vs__line">
                  Service-heavy, with people doing the work by hand, so they are hard to scale as
                  you grow.
                </p>{" "}
                <span className="vs__tag">Hard to scale</span>
              </li>
              <li className="vs__row" data-reveal="">
                <span className="vs__icon" aria-hidden="true">
                  <svg className="i">
                    <use href="#i-card" />
                  </svg>
                </span>{" "}
                <h3 className="vs__name">Payment apps</h3>
                <p className="vs__line">
                  They move money, but not the rest of your creator business.
                </p>{" "}
                <span className="vs__tag">Payments only</span>
              </li>
              <li className="vs__row vs__row--us" data-reveal="">
                <span className="vs__icon" aria-hidden="true">
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                </span>{" "}
                <h3 className="vs__name">
                  <svg className="logo" viewBox="0 0 303.15 84" aria-hidden="true">
                    <use href="#logo" />
                  </svg>
                  <span className="sr-only">Tipsona</span>
                </h3>
                <p className="vs__line">
                  Commerce, brand work, discovery, payouts, business tools, AI and analytics in one
                  ecosystem, built for African creators. Some products are coming soon.
                </p>{" "}
                <span className="vs__tag vs__tag--us">All in one account</span>
              </li>
            </ul>
          </div>
        </section>{" "}
        <HubCta
          title={
            <>
              Run it all from <em>one account.</em>
            </>
          }
          text="Start with TipStore. Join the waitlist to hear first when it opens."
        />
      </main>
      <Footer pitch="Sell, earn and grow your creator&nbsp;business with one Tipsona account." />
      <JsonLd graph={[breadcrumbs(["Why Tipsona", "/why-tipsona/"])]} />
    </>
  );
}
