import { PERSONAS } from "@/content/personas";

/** One panel per creator type. The tabs that switch them are in the TipStore page. */
export function Personas() {
  return PERSONAS.map((p, n) => (
    <div
      key={p.name}
      className={n === 0 ? "persona is-active" : "persona"}
      id={`pp-${n}`}
      role="tabpanel"
      aria-labelledby={`pt-${n}`}
      hidden={n !== 0}
    >
      <figure className="persona__photo">
        <img src={`/assets/img/${p.image}`} width="900" height="1125" loading="lazy" alt={p.alt} />
      </figure>
      <div className="persona__card">
        <p className="persona__goal">{p.goal}</p>
        <div className="persona__group">
          <p className="persona__label">Who</p>
          <ul className="tags">
            {p.who.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
        <div className="persona__group">
          <p className="persona__label">What they sell</p>
          <ul className="tags tags--solid">
            {p.sells.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  ));
}
