import type { Qa } from "@/content/faq";

/** The accordion: one native <details> per question, animated by initFaq. */
export function FaqList({ items }: { items: Qa[] }) {
  return (
    <div className="faq__list" data-faq="">
      {items.map(({ q, a }) => (
        <details className="qa" key={q}>
          <summary>
            {q}
            <span className="qa__icon" aria-hidden="true">
              <svg className="i">
                <use href="#i-plus" />
              </svg>
            </span>
          </summary>
          <div className="qa__body">
            <p>{a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
