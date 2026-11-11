import { MenuLinks, NavBarLinks, type NavLink } from "@/components/layout/nav-links";

type NavProductProps = {
  product: string;
  cta: string;
  ctaHref: string;
  links: NavLink[];
};

export function NavProduct({ product, cta, ctaHref, links }: NavProductProps) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="nav" data-nav="">
        <div className="nav__bar">
          <span className="brand">
            <a className="brand__home" href="/" aria-label="Tipsona home">
              <svg className="logo" viewBox="0 0 303.15 84" aria-hidden="true">
                <use href="#logo" />
              </svg>
            </a>{" "}
            <a className="brand__product" href="#top">
              {product}
            </a>
          </span>{" "}
          <nav className="nav__links" aria-label="Main">
            <ul>
              <NavBarLinks links={links} />
            </ul>
          </nav>
          <div className="nav__actions">
            <a className="btn btn--ink btn--sm" href={ctaHref}>
              {cta}
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
          <MenuLinks links={links} />
        </ul>
        <div className="mobile-menu__foot">
          <a className="btn btn--flame btn--block" href={ctaHref}>
            {cta}
            <svg className="i i-go" aria-hidden="true">
              <use href="#i-arrow-right" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
