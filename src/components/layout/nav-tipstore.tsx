import { APP_LOGIN_URL } from "@/config/site";

type NavTipstoreProps = {
  /** The TipStore home page: "" on that page itself, otherwise "/tipstore/" */
  home: string;
  pricing: string;
  /** Marks the Pricing link as the current page */
  pricingCurrent?: boolean;
};

export function NavTipstore({ home, pricing, pricingCurrent }: NavTipstoreProps) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="nav" data-nav="">
        <div className="nav__bar">
          <span className="brand">
            <a className="brand__home" href={`${home}#top`} aria-label="TipStore home">
              <img
                className="logo logo--tipstore"
                src="/assets/img/tipstore-logo.svg"
                width="927"
                height="254"
                alt=""
              />
            </a>{" "}
            <a className="brand__product brand__by" href="/">
              by Tipsona
            </a>
          </span>{" "}
          <nav className="nav__links" aria-label="Main">
            <ul>
              <li>
                <a href={`${home}#product`}>
                  <span className="tip tip--square c-lilac" aria-hidden="true" />
                  Product
                </a>
              </li>
              <li>
                <a href={`${home}#how`}>
                  <span className="tip tip--star c-sun" aria-hidden="true" />
                  How it works
                </a>
              </li>
              <li>
                <a href={`${home}#creators`}>
                  <span className="tip tip--circle c-flame" aria-hidden="true" />
                  Who it’s for
                </a>
              </li>
              <li>
                <a href={pricing} aria-current={pricingCurrent ? "page" : undefined}>
                  <span className="tip tip--pill c-mint" aria-hidden="true" />
                  Pricing
                </a>
              </li>
              <li>
                <a href={`${home}#faq`}>
                  <span className="tip tip--diamond c-blush" aria-hidden="true" />
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
          <div className="nav__actions">
            <a className="nav__login" href={APP_LOGIN_URL}>
              Log in
            </a>{" "}
            <a className="btn btn--ink btn--sm" href="/waitlist/?product=tipstore">
              Join the waitlist
              <svg className="i i-go" aria-hidden="true">
                <use href="#i-arrow-right" />
              </svg>
            </a>{" "}
            <button
              className="nav__toggle"
              type="button"
              aria-expanded="false"
              aria-controls="mobile-menu"
              data-menu-toggle=""
            >
              <svg className="i" aria-hidden="true">
                <use href="#i-menu" />
              </svg>{" "}
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
      </header>
      <div className="mobile-menu" id="mobile-menu" hidden>
        <ul>
          <li>
            <a className="mm-link" href={`${home}#product`}>
              Product <span className="tip tip--square c-lilac" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a className="mm-link" href={`${home}#how`}>
              How it works <span className="tip tip--star c-sun" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a className="mm-link" href={`${home}#creators`}>
              Who it’s for <span className="tip tip--circle c-flame" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a className="mm-link" href={pricing}>
              Pricing <span className="tip tip--pill c-mint" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a className="mm-link" href={`${home}#faq`}>
              FAQ <span className="tip tip--diamond c-blush" aria-hidden="true" />
            </a>
          </li>
        </ul>
        <div className="mobile-menu__foot">
          <a className="btn btn--flame btn--block" href="/waitlist/?product=tipstore">
            Join the waitlist
            <svg className="i i-go" aria-hidden="true">
              <use href="#i-arrow-right" />
            </svg>
          </a>{" "}
          <a className="btn btn--ghost btn--block" href={APP_LOGIN_URL}>
            Log in
          </a>
        </div>
      </div>
    </>
  );
}
