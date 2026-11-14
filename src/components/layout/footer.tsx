import { Fragment } from "react";

import { TabTicker } from "@/components/sections/tab-ticker";
import { SOCIAL } from "@/content/social";

type FooterProps = {
  /** One line above the address, written for the page it closes */
  pitch: string;
};

export function Footer({ pitch }: FooterProps) {
  return (
    <>
      <footer className="footer on-dark">
        <TabTicker
          label="What you can do with Tipsona"
          items={[
            "Sell digital products",
            "Work with brands",
            "Earn from your fans",
            "Local payments",
            "One creator identity"
          ]}
        />
        <div className="container">
          <div className="footer__top">
            <div className="footer__brand">
              <svg
                className="logo footer__mini-logo"
                viewBox="0 0 303.15 84"
                role="img"
                aria-label="Tipsona"
              >
                <use href="#logo" />
              </svg>{" "}
              <a className="footer__cta" href="/products/" aria-label="See all Tipsona products">
                <svg className="i" aria-hidden="true">
                  <use href="#i-arrow-up-right" />
                </svg>
              </a>
            </div>
            <div className="footer__talk">
              <p className="footer__pitch">{pitch}</p>
              <address className="footer__address">
                97, Adeola Odeku Street,
                <br />
                2nd Floor Union Bank Building,
                <br />
                Victoria Island, Lagos State
              </address>
              <div className="footer__contact">
                <a className="footer__mail" href="mailto:info@tipsona.co">
                  info@tipsona.co
                </a>{" "}
                <span className="footer__faces" aria-hidden="true">
                  <img
                    src="/assets/img/av-sade.webp"
                    alt=""
                    width="160"
                    height="160"
                    loading="lazy"
                  />
                  <img
                    src="/assets/img/av-tobi.webp"
                    alt=""
                    width="160"
                    height="160"
                    loading="lazy"
                  />
                  <img
                    src="/assets/img/av-zara.webp"
                    alt=""
                    width="160"
                    height="160"
                    loading="lazy"
                  />
                </span>{" "}
                <div className="footer__social">
                  {SOCIAL.map(({ name, icon, url }, n) => (
                    <Fragment key={name}>
                      {n > 0 && " "}
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Tipsona on ${name}`}
                      >
                        <svg className="i" aria-hidden="true">
                          <use href={`#i-${icon}`} />
                        </svg>
                      </a>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="footer__cols">
            <div>
              <h3>
                <span className="tip tip--arch c-flame" aria-hidden="true" />
                Tipsona
              </h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/products/">All products</a>
                </li>
                <li>
                  <a href="/why-tipsona/">Why Tipsona</a>
                </li>
                <li>
                  <a href="/community/">Community</a>
                </li>
                <li>
                  <a href="/waitlist/">Join the waitlist</a>
                </li>
                <li>
                  <a href="mailto:info@tipsona.co">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>
                <span className="tip tip--square c-lilac" aria-hidden="true" />
                Products
              </h3>
              <ul>
                <li>
                  <a href="/tipstore/">TipStore</a>
                </li>
                <li>
                  <a href="/tipper/">Tipper</a>
                </li>
                <li>
                  <a href="/tipfix/">TipFix</a>
                </li>
                <li>
                  <a href="/products/#tipstar">TipStar</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>
                <span className="tip tip--star c-sun" aria-hidden="true" />
                TipStore
              </h3>
              <ul>
                <li>
                  <a href="/tipstore/#how">How it works</a>
                </li>
                <li>
                  <a href="/tipstore/pricing/">Pricing</a>
                </li>
                <li>
                  <a href="/tipstore/#faq">FAQ</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>
                <span className="tip tip--diamond c-blush" aria-hidden="true" />
                Legal
              </h3>
              <ul>
                <li>
                  <a href="/terms/">Terms of Use</a>
                </li>
                <li>
                  <a href="/privacy/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/tipstore/terms/">TipStore terms</a>
                </li>
                <li>
                  <a href="/tipstore/privacy/">TipStore privacy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__word" data-footer-word="" aria-hidden="true">
            <span className="sticker sticker--sun sticker--a" data-sticker="">
              <span className="tip tip--star c-ink" />
              One creator identity
            </span>{" "}
            <span className="sticker sticker--flame sticker--b" data-sticker="">
              <span className="tip tip--pill c-cream" />
              Many ways to earn
            </span>{" "}
            <span className="sticker sticker--lilac sticker--c" data-sticker="">
              <span className="tip tip--circle c-ink" />
              For African creators
            </span>{" "}
            <span className="sticker sticker--mint sticker--d" data-sticker="">
              <span className="tip tip--arch c-ink" />
              Local payment rails
            </span>{" "}
            <svg className="footer__logo" viewBox="0 0 303.15 84" role="img" aria-label="Tipsona">
              <use href="#logo" />
            </svg>
          </div>
          <div className="footer__bottom">
            <span>© 2026 Tipsona</span>{" "}
            <nav aria-label="Legal">
              <a href="/terms/">Terms</a>
              <a href="/privacy/">Privacy</a>
            </nav>
          </div>
        </div>
      </footer>
      <div className="toast" role="status" aria-live="polite" data-toast="" data-show="false">
        <span className="icon-tile">
          <svg className="i" aria-hidden="true">
            <use href="#i-spark" />
          </svg>
        </span>{" "}
        <span data-toast-msg="" />
      </div>
    </>
  );
}
