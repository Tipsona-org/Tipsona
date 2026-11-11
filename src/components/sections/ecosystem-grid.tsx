import { Fragment, type ReactNode } from "react";

import { ACCENT, PRODUCTS, type Product } from "@/content/products";

// Small product illustrations for the first-launch cards (decorative, example data)
const MINI_UI: Record<string, ReactNode> = {
  tipstore: (
    <span className="mini-ui">
      <span className="mini-url">
        <svg className="i">
          <use href="#i-lock" />
        </svg>
        tipstore.tipsona.co/yourname
      </span>{" "}
      <span className="mini-row">
        <span className="prod__thumb cover-sun">
          <svg className="i" style={{ "--acc": "var(--paper)" }}>
            <use href="#i-template" />
          </svg>
        </span>
        <span className="mini-row__t">
          <b>Budget Planner</b>
          <small>Template · PDF</small>
        </span>
        <b className="mini-row__p">₦7,500</b>
      </span>{" "}
      <span className="mini-btn">
        <span className="swap-a">Buy now</span>
        <span className="swap-b">
          <svg className="i">
            <use href="#i-check" />
          </svg>
          Payment verified
        </span>
      </span>
    </span>
  ),
  tipper: (
    <span className="mini-ui">
      <span className="mini-status">
        <b>Short-form UGC video</b>
        <span className="mini-swap">
          <span className="swap-a pill pill--success pill--dot">Escrow funded</span>
          <span className="swap-b pill pill--success pill--dot">Paid out</span>
        </span>
      </span>{" "}
      <span className="mini-check is-done">
        <svg className="i">
          <use href="#i-check" />
        </svg>
        Brand funds the campaign
      </span>{" "}
      <span className="mini-check is-done">
        <svg className="i">
          <use href="#i-check" />
        </svg>
        You apply with a pitch
      </span>{" "}
      <span className="mini-check mini-check--last">
        <svg className="i">
          <use href="#i-check" />
        </svg>
        Brand approves, you get paid
      </span>
    </span>
  ),
  tipstar: (
    <span className="mini-ui">
      <span className="mini-row">
        <span className="prod__thumb cover-lilac">
          <svg className="i" style={{ "--acc": "var(--paper)" }}>
            <use href="#i-users" />
          </svg>
        </span>
        <span className="mini-row__t">
          <b>Membership</b>
          <small>For your fans</small>
        </span>
        <span className="mini-join">
          <span className="swap-a">Join</span>
          <span className="swap-b">Joined</span>
        </span>
      </span>{" "}
      <span className="mini-row">
        <span className="prod__thumb cover-night">
          <svg className="i" style={{ "--acc": "var(--night-3)" }}>
            <use href="#i-lock" />
          </svg>
        </span>
        <span className="mini-row__t">
          <b>Exclusive content</b>
          <small>Members only</small>
        </span>
      </span>{" "}
      <span className="mini-chip">
        <svg className="i">
          <use href="#i-heart" />
        </svg>
        Send a donation
      </span>
    </span>
  )
};

const ART: Record<string, string> = {
  tipstore: "art-flame",
  tipper: "art-lilac",
  tipstar: "art-sun"
};

function GoIcon() {
  return (
    <svg className="i" aria-hidden="true">
      <use href="#i-arrow-right" />
    </svg>
  );
}

function ProductIcon({ product }: { product: Product }) {
  return (
    <span className={`icon-tile ${ACCENT[product.shape.split(" ")[1]]}`}>
      <svg className="i" aria-hidden="true">
        <use href={`#i-${product.icon}`} />
      </svg>
    </span>
  );
}

function Layer({ product }: { product: Product }) {
  return (
    <span className="eco-card__layer">
      <span className={`tip ${product.shape}`} aria-hidden="true" />
      {product.verb}
    </span>
  );
}

/**
 * Every Tipsona product. First-launch products get feature cards with an
 * illustration; everything coming later gets compact cards in one panel.
 * With `anchors` (the products page) cards jump to the details below them.
 * With `launchOnly` (the home page) only the first-launch cards show.
 */
export function EcosystemGrid({
  anchors = false,
  launchOnly = false
}: {
  anchors?: boolean;
  launchOnly?: boolean;
}) {
  const link = ({ id, name, page }: Product) => {
    if (anchors) return { href: `#${id}`, go: "Details" };
    if (page) return { href: page, go: `Visit ${name}` };
    return { href: `/products/#${id}`, go: "Learn more" };
  };

  return (
    <>
      <p className="eco-group">Launching first</p>
      <div className="launch-grid">
        {PRODUCTS.filter((p) => p.launchesFirst).map((p, n) => {
          const { href, go } = link(p);
          return (
            <Fragment key={p.id}>
              {n > 0 && " "}
              <a className="launch-card" href={href} data-reveal="">
                <span className={`launch-card__art ${ART[p.id]}`} aria-hidden="true">
                  {MINI_UI[p.id]}
                </span>{" "}
                <span className="launch-card__body">
                  <span className="launch-card__name">
                    <ProductIcon product={p} />
                    {p.name}
                  </span>{" "}
                  <Layer product={p} /> <span className="eco-card__line">{p.line}</span>{" "}
                  <span className="eco-card__go">
                    {go}
                    <GoIcon />
                  </span>
                </span>
              </a>
            </Fragment>
          );
        })}
      </div>
      {!launchOnly && (
        <div className="soon-panel" data-reveal="">
          <div className="soon-panel__head">
            <p className="eco-group eco-group--soon">Coming soon</p>
            <p className="soon-panel__note">More ways to earn, on the same account.</p>
          </div>
          <div className="soon-grid">
            {PRODUCTS.filter((p) => !p.launchesFirst).map((p, n) => {
              const { href, go } = link(p);
              return (
                <Fragment key={p.id}>
                  {n > 0 && " "}
                  <a className="soon-card" href={href}>
                    <span className="soon-card__top">
                      <ProductIcon product={p} />
                      <span className="soon-card__name">
                        {p.name}
                        <Layer product={p} />
                      </span>
                    </span>{" "}
                    <span className="eco-card__line">{p.line}</span>{" "}
                    <span className="eco-card__go">
                      {go}
                      <GoIcon />
                    </span>
                  </a>
                </Fragment>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
