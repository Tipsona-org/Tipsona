type FooterProps = {
  /** One line above the address, written for the page it closes */
  pitch: string;
};

export function Footer({ pitch }: FooterProps) {
  return (
    <>
      <footer className="footer on-dark">
        <div
          className="ticker ticker--tab ticker--static"
          role="list"
          aria-label="What you can do with Tipsona"
        >
          <div className="ticker__tab">
            <span role="listitem">Sell digital products</span>
            <span className="sep" aria-hidden="true">
              <span className="tip tip--star c-flame" />
            </span>{" "}
            <span role="listitem">Work with brands</span>
            <span className="sep" aria-hidden="true">
              <span className="tip tip--star c-flame" />
            </span>{" "}
            <span role="listitem">Earn from your fans</span>
            <span className="sep sep--wide" aria-hidden="true">
              <span className="tip tip--star c-flame" />
            </span>{" "}
            <span role="listitem" className="wide">
              Local payments
            </span>
            <span className="sep sep--wide" aria-hidden="true">
              <span className="tip tip--star c-flame" />
            </span>{" "}
            <span role="listitem" className="wide">
              One creator identity
            </span>
          </div>
        </div>
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
                  <a href="#" aria-label="Tipsona on Instagram">
                    <svg className="i" aria-hidden="true">
                      <use href="#i-instagram" />
                    </svg>
                  </a>{" "}
                  <a href="#" aria-label="Tipsona on TikTok">
                    <svg className="i" aria-hidden="true">
                      <use href="#i-tiktok" />
                    </svg>
                  </a>{" "}
                  <a href="#" aria-label="Tipsona on X">
                    <svg className="i" aria-hidden="true">
                      <use href="#i-xsocial" />
                    </svg>
                  </a>{" "}
                  <a href="#" aria-label="Tipsona on LinkedIn">
                    <svg className="i" aria-hidden="true">
                      <use href="#i-linkedin" />
                    </svg>
                  </a>
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
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
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
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
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
