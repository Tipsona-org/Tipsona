import { MenuLinks, NavBarLinks, type NavLink } from "@/components/layout/nav-links";

/** The same menu on every Tipsona page; the logo is the way home. */
const HUB_LINKS: NavLink[] = [
  { label: "Products", href: "/products/" },
  { label: "Why Tipsona", href: "/why-tipsona/" },
  { label: "TipStore", href: "/tipstore/" },
  { label: "Tipper", href: "/tipper/" },
  { label: "Community", href: "/community/" }
];

type NavHubProps = {
  /** Where the logo goes: "" on the home page itself, otherwise "/" */
  home: string;
  /** This page's route, highlighted in the menu */
  current?: string;
};

export function NavHub({ home, current }: NavHubProps) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="nav" data-nav="">
        <div className="nav__bar">
          <a className="brand" href={`${home}#top`} aria-label="Tipsona, home">
            <svg className="logo" viewBox="0 0 303.15 84" aria-hidden="true">
              <use href="#logo" />
            </svg>
          </a>{" "}
          <nav className="nav__links" aria-label="Main">
            <ul>
              <NavBarLinks links={HUB_LINKS} current={current} />
            </ul>
          </nav>
          <div className="nav__actions">
            <a className="btn btn--ink btn--sm" href="/waitlist/">
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
          <MenuLinks links={HUB_LINKS} current={current} />
        </ul>
        <div className="mobile-menu__foot">
          <a className="btn btn--flame btn--block" href="/waitlist/">
            Join the waitlist
            <svg className="i i-go" aria-hidden="true">
              <use href="#i-arrow-right" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
