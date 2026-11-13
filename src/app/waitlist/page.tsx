import Script from "next/script";
import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { NavHub } from "@/components/layout/nav-hub";
import { JsonLd } from "@/components/seo/json-ld";
import { TURNSTILE_SITE_KEY } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbs } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata({
  title: "Join the waitlist · Tipsona",
  description:
    "Join the Tipsona waitlist. Hear first when TipStore opens, tell us the username you want, and pick the products you want news about.",
  path: "/waitlist/"
});

export default function WaitlistPage() {
  return (
    <>
      <NavHub home="/" current="/waitlist/" />
      <main id="main">
        <section className="page-hero grid-lines wl" id="top" aria-labelledby="wl-title">
          <div className="container wl__grid">
            <div className="wl__copy">
              <p className="tab-label" data-intro="">
                <span className="tip tip--circle c-flame" aria-hidden="true" />
                Waitlist
              </p>
              <h1 className="h1" id="wl-title">
                <span className="ln">
                  <span className="ln__in">Be first</span>
                </span>{" "}
                <span className="ln">
                  <span className="ln__in">
                    <span className="hl">
                      <span className="hl__bg" aria-hidden="true" />
                      in line.
                    </span>
                  </span>
                </span>
              </h1>
              <p className="lede" data-intro="">
                Tipsona is opening soon, starting with TipStore. Join the waitlist and we’ll email
                you when it’s your turn.
              </p>
              <ul className="wl__perks" data-intro="">
                <li>
                  <svg className="i" aria-hidden="true">
                    <use href="#i-bell" />
                  </svg>
                  Hear first when TipStore opens
                </li>
                <li>
                  <svg className="i" aria-hidden="true">
                    <use href="#i-store" />
                  </svg>
                  Tell us the storefront username you want
                </li>
                <li>
                  <svg className="i" aria-hidden="true">
                    <use href="#i-spark" />
                  </svg>
                  Pick the products you want news about
                </li>
              </ul>
            </div>
            <div className="wl__card" data-intro="">
              <h2 className="sr-only">Waitlist form</h2>
              <form
                className="wl__form"
                name="waitlist"
                method="POST"
                action="/api/waitlist/"
                data-waitlist=""
                noValidate
              >
                <input type="hidden" name="products" value="" />{" "}
                <p className="wl__hp" aria-hidden="true">
                  <label>
                    Leave this empty <input name="company" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>
                <div className="wl__row">
                  <div className="wl__field">
                    <label htmlFor="wl-name">Full name</label>{" "}
                    <input id="wl-name" name="name" type="text" autoComplete="name" required />
                  </div>
                  <div className="wl__field">
                    <label htmlFor="wl-email">Email</label>{" "}
                    <input
                      id="wl-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      required
                    />
                  </div>
                </div>
                <div className="wl__row">
                  <div className="wl__field">
                    <label htmlFor="wl-country">Country</label>{" "}
                    <select id="wl-country" name="country" autoComplete="country-name">
                      <option value="">Choose one</option>
                      <option>Nigeria</option>
                      <option>Ghana</option>
                      <option>Kenya</option>
                      <option>South Africa</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="wl__field">
                    <label htmlFor="wl-role">What best describes you?</label>{" "}
                    <select id="wl-role" name="role">
                      <option value="">Choose one</option>
                      <option>Content creator</option>
                      <option>UGC creator</option>
                      <option>Educator</option>
                      <option>Coach</option>
                      <option>Consultant</option>
                      <option>Trainer</option>
                      <option>Digital entrepreneur</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <fieldset className="wl__field wl__products">
                  <legend>Products you want news about</legend>
                  <div className="wl__chips">
                    <label className="wl__chip">
                      <input type="checkbox" name="product" value="TipStore" />
                      <span>TipStore</span>
                    </label>{" "}
                    <label className="wl__chip">
                      <input type="checkbox" name="product" value="Tipper" />
                      <span>Tipper</span>
                    </label>{" "}
                    <label className="wl__chip">
                      <input type="checkbox" name="product" value="TipStar" />
                      <span>TipStar</span>
                    </label>{" "}
                    <label className="wl__chip">
                      <input type="checkbox" name="product" value="TipFix" />
                      <span>TipFix</span>
                    </label>{" "}
                    <label className="wl__chip">
                      <input type="checkbox" name="product" value="TipLaunch" />
                      <span>TipLaunch</span>
                    </label>{" "}
                    <label className="wl__chip">
                      <input type="checkbox" name="product" value="TipMarket" />
                      <span>TipMarket</span>
                    </label>{" "}
                    <label className="wl__chip">
                      <input type="checkbox" name="product" value="TipAds" />
                      <span>TipAds</span>
                    </label>{" "}
                    <label className="wl__chip">
                      <input type="checkbox" name="product" value="TipAI" />
                      <span>TipAI</span>
                    </label>{" "}
                    <label className="wl__chip">
                      <input type="checkbox" name="product" value="TipInsights" />
                      <span>TipInsights</span>
                    </label>
                  </div>
                </fieldset>
                <div className="wl__field">
                  <label htmlFor="wl-username">
                    TipStore username you’d like <span className="wl__opt">Optional</span>
                  </label>{" "}
                  <div className="wl__prefixed">
                    <span aria-hidden="true">tipstore.tipsona.co/</span>{" "}
                    <input
                      id="wl-username"
                      name="username"
                      type="text"
                      autoComplete="off"
                      autoCapitalize="none"
                      spellCheck="false"
                      maxLength={30}
                      placeholder="yourname"
                      aria-describedby="wl-username-hint"
                    />
                  </div>
                  <p className="wl__hint" id="wl-username-hint">
                    Lowercase letters and numbers, 3 to 30 characters. Availability is confirmed
                    when you sign up.
                  </p>
                </div>
                <div
                  className="wl__captcha"
                  data-turnstile=""
                  data-sitekey={TURNSTILE_SITE_KEY}
                />
                <p className="wl__error" data-wl-error="" role="alert" hidden />{" "}
                <button className="btn btn--flame btn--block" type="submit">
                  Join the waitlist
                  <svg className="i i-go" aria-hidden="true">
                    <use href="#i-arrow-right" />
                  </svg>
                </button>{" "}
                <p className="wl__note">
                  We’ll only use your details to tell you about Tipsona.{" "}
                  <span className="ph-tag">Placeholder</span> Link to the privacy policy once it’s
                  ready.
                </p>
              </form>
              <div className="wl__done" data-wl-done="" tabIndex={-1} hidden>
                <span className="wl__done-icon" aria-hidden="true">
                  <svg className="i">
                    <use href="#i-check" />
                  </svg>
                </span>{" "}
                <h2 className="h3">You’re on the list.</h2>
                <p>We’ll email you when Tipsona opens. Until then, have a look around.</p>
                <div className="hub-hero__ctas">
                  <a className="btn btn--ink" href="/products/">
                    See all products
                    <svg className="i i-go" aria-hidden="true">
                      <use href="#i-arrow-right" />
                    </svg>
                  </a>{" "}
                  <a className="btn btn--ghost" href="/">
                    Back to home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer pitch="Sell, earn and grow your creator&nbsp;business with one Tipsona account." />
      <JsonLd graph={[breadcrumbs(["Join the waitlist", "/waitlist/"])]} />
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=tipsonaTurnstile"
        strategy="afterInteractive"
      />
    </>
  );
}
