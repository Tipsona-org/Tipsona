import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { NavTipstore } from "@/components/layout/nav-tipstore";
import { FaqList } from "@/components/sections/faq-list";
import { Plans } from "@/components/sections/plans";
import { JsonLd } from "@/components/seo/json-ld";
import { BILLING_FAQ } from "@/content/faq";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbs, faqPage } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "TipStore pricing · Free, Pro and Business plans",
  description:
    "Compare TipStore’s Free, Pro and Business plans. Start free and upgrade as your digital product business grows.",
  path: "/tipstore/pricing/"
});

export default function TipStorePricingPage() {
  return (
    <>
      <NavTipstore home="/tipstore/" pricing="/tipstore/pricing/" pricingCurrent />
      <main id="main">
        <section className="page-hero grid-lines" aria-labelledby="page-title">
          <div
            className="container"
            style={{ display: "grid", gap: "26px", justifyItems: "center", textAlign: "center" }}
          >
            <p className="tab-label" data-intro="">
              <span className="tip tip--pill c-mint" aria-hidden="true" />
              TipStore pricing
            </p>
            <h1 className="h1" id="page-title" style={{ maxWidth: "none" }}>
              <span className="ln">
                <span className="ln__in">Start free.</span>
              </span>{" "}
              <span className="ln">
                <span className="ln__in">
                  Upgrade{" "}
                  <span className="hl">
                    <span className="hl__bg" aria-hidden="true" />
                    as you grow.
                  </span>
                </span>
              </span>
            </h1>
            <p className="lede" data-intro="" style={{ marginInline: "auto" }}>
              Every creator can start on the Free plan. Pro and Business unlock more as your
              business grows, billed monthly or yearly.
            </p>
          </div>
        </section>
        <section
          className="pricing"
          aria-label="Plans"
          style={{ paddingBottom: "clamp(64px,8vw,112px)" }}
        >
          <div className="container">
            <Plans ctaHref="/tipstore/#claim" />
            <p className="ph-note">
              <span className="ph-tag">Placeholder</span>Pro and Business prices haven’t been
              announced yet.
            </p>
          </div>
        </section>
        <section className="section" aria-labelledby="compare-title" style={{ paddingTop: "0" }}>
          <div className="container">
            <header className="section-head">
              <p className="tab-label">
                <span className="tip tip--square c-lilac" aria-hidden="true" />
                Compare plans
              </p>
              <h2 className="h2" id="compare-title" data-split="">
                Every feature, <em>side by side.</em>
              </h2>
            </header>
            <div
              className="compare-wrap"
              data-reveal=""
              tabIndex={0}
              role="region"
              aria-label="Plan comparison table"
            >
              <table className="compare">
                <caption className="sr-only">
                  Feature comparison of the Free, Pro and Business plans
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col">Free</th>
                    <th scope="col" className="col-pro">
                      Pro
                    </th>
                    <th scope="col">Business</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="group">
                    <th scope="rowgroup" colSpan={4}>
                      Core features
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">Storefront</th>
                    <td>
                      <span className="yes">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span className="sr-only">Included</span>
                      </span>
                    </td>
                    <td className="col-pro">
                      <span className="yes">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span className="sr-only">Included</span>
                      </span>
                    </td>
                    <td>
                      <span className="yes">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span className="sr-only">Included</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Product upload</th>
                    <td>
                      <span className="yes">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span className="sr-only">Included</span>
                      </span>
                    </td>
                    <td className="col-pro">
                      <span className="yes">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span className="sr-only">Included</span>
                      </span>
                    </td>
                    <td>
                      <span className="yes">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span className="sr-only">Included</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Digital product sales</th>
                    <td>
                      <span className="yes">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span className="sr-only">Included</span>
                      </span>
                    </td>
                    <td className="col-pro">
                      <span className="yes">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span className="sr-only">Included</span>
                      </span>
                    </td>
                    <td>
                      <span className="yes">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span className="sr-only">Included</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Analytics dashboard</th>
                    <td className="txt">Basic</td>
                    <td className="txt col-pro">Advanced</td>
                    <td className="txt">Advanced</td>
                  </tr>
                  <tr>
                    <th scope="row">Products allowed</th>
                    <td className="txt">Limited</td>
                    <td className="txt col-pro">Configurable</td>
                    <td className="txt">Configurable</td>
                  </tr>
                  <tr>
                    <th scope="row">Storage allocation</th>
                    <td className="txt">Limited</td>
                    <td className="txt col-pro">Higher limit</td>
                    <td className="txt">Highest limit</td>
                  </tr>
                  <tr>
                    <th scope="row">Product categories</th>
                    <td>
                      <span className="yes">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span className="sr-only">Included</span>
                      </span>
                    </td>
                    <td className="col-pro">
                      <span className="yes">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span className="sr-only">Included</span>
                      </span>
                    </td>
                    <td>
                      <span className="yes">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span className="sr-only">Included</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">SEO settings</th>
                    <td className="txt">Basic</td>
                    <td className="txt col-pro">Advanced</td>
                    <td className="txt">Advanced</td>
                  </tr>
                  <tr>
                    <th scope="row">Custom branding</th>
                    <td className="txt">Basic</td>
                    <td className="txt col-pro">Enhanced</td>
                    <td className="txt">Full</td>
                  </tr>
                  <tr>
                    <th scope="row">Priority support</th>
                    <td>
                      <span className="no">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-minus" />
                        </svg>
                        <span className="sr-only">Not included</span>
                      </span>
                    </td>
                    <td className="col-pro">
                      <span className="yes">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span className="sr-only">Included</span>
                      </span>
                    </td>
                    <td className="txt">Dedicated</td>
                  </tr>
                  <tr>
                    <th scope="row">Team members</th>
                    <td>
                      <span className="no">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-minus" />
                        </svg>
                        <span className="sr-only">Not included</span>
                      </span>
                    </td>
                    <td className="col-pro">
                      <span className="no">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-minus" />
                        </svg>
                        <span className="sr-only">Not included</span>
                      </span>
                    </td>
                    <td>
                      <span className="yes">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span className="sr-only">Included</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Custom domain</th>
                    <td>
                      <span className="soon">Future</span>
                    </td>
                    <td className="col-pro">
                      <span className="soon">Future</span>
                    </td>
                    <td>
                      <span className="soon">Future</span>
                    </td>
                  </tr>
                  <tr className="group">
                    <th scope="rowgroup" colSpan={4}>
                      More in each plan
                    </th>
                  </tr>
                  <tr>
                    <th scope="row">Coupons</th>
                    <td>
                      <span className="no">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-minus" />
                        </svg>
                        <span className="sr-only">Not included</span>
                      </span>
                    </td>
                    <td className="col-pro">
                      <span className="yes">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span className="sr-only">Included</span>
                      </span>
                    </td>
                    <td>
                      <span className="yes">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span className="sr-only">Included</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Transaction fee</th>
                    <td className="txt">Standard</td>
                    <td className="txt col-pro">Lower</td>
                    <td className="txt">Lower</td>
                  </tr>
                  <tr>
                    <th scope="row">White-label branding options</th>
                    <td>
                      <span className="no">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-minus" />
                        </svg>
                        <span className="sr-only">Not included</span>
                      </span>
                    </td>
                    <td className="col-pro">
                      <span className="no">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-minus" />
                        </svg>
                        <span className="sr-only">Not included</span>
                      </span>
                    </td>
                    <td>
                      <span className="yes">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span className="sr-only">Included</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Advanced reporting</th>
                    <td>
                      <span className="no">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-minus" />
                        </svg>
                        <span className="sr-only">Not included</span>
                      </span>
                    </td>
                    <td className="col-pro">
                      <span className="no">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-minus" />
                        </svg>
                        <span className="sr-only">Not included</span>
                      </span>
                    </td>
                    <td>
                      <span className="yes">
                        <svg className="i" aria-hidden="true">
                          <use href="#i-check" />
                        </svg>
                        <span className="sr-only">Included</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="compare__note">
              Exact limits for products, storage and transaction fees are still being finalised.
            </p>
          </div>
        </section>
        <section className="section" aria-labelledby="fees-title" style={{ paddingTop: "0" }}>
          <div className="container">
            <div className="pricing__foot" style={{ marginTop: "0", alignItems: "center" }}>
              <div className="receipt" data-reveal="">
                <p className="receipt__title">
                  <span>Where a ₦10,000 sale goes</span>
                  <span>Illustrative</span>
                </p>
                <p className="receipt__row">
                  <span>Product price</span>
                  <span>₦10,000</span>
                </p>
                <p className="receipt__row">
                  <span>Platform fee</span>
                  <span>−₦500</span>
                </p>
                <p className="receipt__row">
                  <span>Gateway charges</span>
                  <span>−₦150</span>
                </p>
                <p className="receipt__row receipt__total">
                  <span>Seller earnings</span>
                  <b>₦9,350</b>
                </p>
                <p className="receipt__note">
                  These figures are illustrative. Actual fees will be announced.
                </p>
              </div>
              <div style={{ display: "grid", gap: "18px", maxWidth: "34rem" }}>
                <p className="tab-label">
                  <span className="tip tip--pill c-mint" aria-hidden="true" />
                  Fees
                </p>
                <h2 className="h3" id="fees-title">
                  See how every sale becomes <em>your earnings.</em>
                </h2>
                <p className="lede">
                  Your reports show gross revenue, platform fees, gateway fees and net revenue, then
                  what’s available and what you’ve withdrawn.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section faq"
          id="billing-faq"
          aria-labelledby="faq-title"
          style={{ paddingTop: "0" }}
        >
          <div className="container faq__grid">
            <div className="faq__intro">
              <p className="tab-label">
                <span className="tip tip--diamond c-blush" aria-hidden="true" />
                Billing
              </p>
              <h2 className="h2" id="faq-title" data-split="">
                Billing <em>questions.</em>
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
            <FaqList items={BILLING_FAQ} />
          </div>
        </section>
      </main>
      <Footer pitch="Start free. Upgrade when your business needs more." />
      <JsonLd
        graph={[
          breadcrumbs(["TipStore", "/tipstore/"], ["Pricing", "/tipstore/pricing/"]),
          faqPage("/tipstore/pricing/", BILLING_FAQ)
        ]}
      />
    </>
  );
}
