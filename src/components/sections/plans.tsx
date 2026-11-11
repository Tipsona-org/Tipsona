import { PLANS } from "@/content/plans";

function Icon({ name }: { name: string }) {
  return (
    <svg className="i" aria-hidden="true">
      <use href={`#i-${name}`} />
    </svg>
  );
}

/** The three TipStore plan cards. Every button leads to the claim form at `ctaHref`. */
export function Plans({ ctaHref }: { ctaHref: string }) {
  return (
    <div className="plans">
      {PLANS.map((p) => (
        <article
          key={p.name}
          className={p.featured ? "plan plan--featured on-dark" : "plan"}
          data-reveal=""
        >
          <div className="plan__head">
            <p className="plan__name">
              <span className={`tip ${p.shape}`} aria-hidden="true" />
              {p.name}
            </p>
            <p className="plan__for">{p.tagline}</p>
          </div>
          <div>
            {p.price ? (
              <p className="plan__price">
                <span className="plan__amt">{p.price}</span>
                <span className="plan__per">{p.per}</span>
              </p>
            ) : (
              <p className="plan__price">
                <span className="plan__amt plan__amt--tbc">Price TBC</span>
                <span className="ph-tag">Placeholder</span>
              </p>
            )}
            <p className="plan__note">{p.note}</p>
          </div>
          {p.intro && <p className="plan__intro">{p.intro}</p>}
          <ul>
            {p.items.map((x) => (
              <li key={x}>
                <Icon name="check" />
                {x}
              </li>
            ))}
            {p.soon && (
              <li className="soon">
                <Icon name="clock" />
                {p.soon}
              </li>
            )}
          </ul>
          <p className="plan__suits">
            <b>Suits</b> {p.suits}
          </p>{" "}
          <a className={`btn ${p.cta.variant} btn--block plan__cta`} href={ctaHref}>
            {p.cta.label}
          </a>
        </article>
      ))}
    </div>
  );
}
