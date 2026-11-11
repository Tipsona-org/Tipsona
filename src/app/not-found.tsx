import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { NavHub } from "@/components/layout/nav-hub";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Page not found · Tipsona",
  description: "This page doesn’t exist. Find your way back to Tipsona.",
  path: "/404/",
  noindex: true
});

export default function NotFound() {
  return (
    <>
      <NavHub home="/" />
      <main id="main">
        <section className="page-hero grid-lines nf" id="top" aria-labelledby="nf-title">
          <div className="container nf__inner">
            <p className="nf__code" aria-hidden="true" data-intro="">
              4
              <span className="nf__zero">
                <span className="tip tip--circle c-flame" />
              </span>
              4
            </p>
            <p className="tab-label" data-intro="">
              <span className="tip tip--diamond c-blush" aria-hidden="true" />
              Error 404
            </p>
            <h1 className="h1 nf__title" id="nf-title">
              <span className="ln">
                <span className="ln__in">This page</span>
              </span>{" "}
              <span className="ln">
                <span className="ln__in">
                  doesn’t{" "}
                  <span className="hl">
                    <span className="hl__bg" aria-hidden="true" />
                    exist.
                  </span>
                </span>
              </span>
            </h1>
            <p className="lede" data-intro="">
              The link may be broken, or the page may have moved. Here are some good places to go
              instead.
            </p>
            <div className="hub-hero__ctas" data-intro="">
              <a className="btn btn--flame" href="/">
                Go to the home page
                <svg className="i i-go" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
              </a>{" "}
              <a className="btn btn--ghost" href="/tipstore/">
                Visit TipStore
              </a>
            </div>
            <h2 className="sr-only">Places to go instead</h2>
            <ul className="nf__links" data-intro="">
              <li>
                <a href="/products/">
                  <span className="tip tip--square c-lilac" aria-hidden="true" />
                  All products
                </a>
              </li>
              <li>
                <a href="/tipper/">
                  <span className="tip tip--circle c-lilac" aria-hidden="true" />
                  Tipper
                </a>
              </li>
              <li>
                <a href="/tipfix/">
                  <span className="tip tip--diamond c-blush" aria-hidden="true" />
                  TipFix
                </a>
              </li>
              <li>
                <a href="/tipstore/pricing/">
                  <span className="tip tip--pill c-mint" aria-hidden="true" />
                  TipStore pricing
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer pitch="Sell, earn and grow your creator business with one Tipsona account." />
    </>
  );
}
