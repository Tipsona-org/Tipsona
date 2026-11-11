import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { NavHub } from "@/components/layout/nav-hub";
import { HubCta } from "@/components/sections/hub-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbs } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Tipsona community · Grow with other creators",
  description:
    "Campus ambassadors, a UGC Creative Academy, creator communities and referrals, and a content studio. Tipsona community programs are coming soon.",
  path: "/community/"
});

export default function CommunityPage() {
  return (
    <>
      <NavHub home="/" current="/community/" />
      <main id="main">
        <section className="page-hero grid-lines" id="top" aria-labelledby="page-title">
          <div
            className="container"
            style={{ display: "grid", gap: "26px", justifyItems: "start" }}
          >
            <p className="tab-label" data-intro="">
              <span className="tip tip--star c-sun" aria-hidden="true" />
              Community · Coming soon
            </p>
            <h1 className="h1" id="page-title">
              <span className="ln">
                <span className="ln__in">Grow with</span>
              </span>{" "}
              <span className="ln">
                <span className="ln__in">
                  <span className="hl">
                    <span className="hl__bg" aria-hidden="true" />
                    other creators.
                  </span>
                </span>
              </span>
            </h1>
            <p className="lede" data-intro="">
              Programs planned to help you learn, connect and grow alongside other creators.
            </p>
          </div>
        </section>
        <section className="section community on-dark" aria-label="Community programs">
          <div className="container">
            <ul className="comm">
              <li className="comm__card" data-reveal="">
                <span className="icon-tile acc-sun" aria-hidden="true">
                  <svg className="i">
                    <use href="#i-map" />
                  </svg>
                </span>{" "}
                <h2>Campus ambassadors</h2>
                <p>For students who want to bring Tipsona to their campus.</p>{" "}
                <span className="pill pill--dot comm__pill">Coming soon</span>
              </li>
              <li className="comm__card" data-reveal="">
                <span className="icon-tile acc-lilac" aria-hidden="true">
                  <svg className="i">
                    <use href="#i-book" />
                  </svg>
                </span>{" "}
                <h2>UGC Creative Academy</h2>
                <p>Learn to make the short-form content brands hire for on Tipper.</p>{" "}
                <span className="pill pill--dot comm__pill">Coming soon</span>
              </li>
              <li className="comm__card" data-reveal="">
                <span className="icon-tile acc-blush" aria-hidden="true">
                  <svg className="i">
                    <use href="#i-loop" />
                  </svg>
                </span>{" "}
                <h2>Communities and referrals</h2>
                <p>Meet other creators, and invite the ones you know.</p>{" "}
                <span className="pill pill--dot comm__pill">Coming soon</span>
              </li>
              <li className="comm__card" data-reveal="">
                <span className="icon-tile acc-mint" aria-hidden="true">
                  <svg className="i">
                    <use href="#i-video" />
                  </svg>
                </span>{" "}
                <h2>Content studio</h2>
                <p>A space to shoot and create your content.</p>{" "}
                <span className="pill pill--dot comm__pill">Coming soon</span>
              </li>
            </ul>
            <p className="comm__ph">
              <span className="ph-tag">Placeholder</span> Program details, dates and how to join are
              still to be confirmed.
            </p>
          </div>
        </section>{" "}
        <HubCta
          title={
            <>
              Want to be <em>part of it?</em>
            </>
          }
          text="Join the waitlist to hear first when Tipsona opens, or email us if you want to help shape these programs."
        />
      </main>
      <Footer pitch="Sell, earn and grow your creator&nbsp;business with one Tipsona account." />
      <JsonLd graph={[breadcrumbs(["Community", "/community/"])]} />
    </>
  );
}
