import type { ReactNode } from "react";

export type LegalSection = {
  /** Anchor for the contents list, e.g. "what-we-collect" */
  id: string;
  title: string;
  body: ReactNode;
};

type LegalDocumentProps = {
  /** The tab label above the title: "Legal", or "TipStore · Legal" */
  label?: string;
  title: string;
  lede: string;
  /** "14 November 2026" */
  updated: string;
  sections: LegalSection[];
};

/** Terms and Privacy: a page hero, then a numbered document with its contents beside it. */
export function LegalDocument({ label = "Legal", title, lede, updated, sections }: LegalDocumentProps) {
  return (
    <>
      <section className="page-hero grid-lines" id="top" aria-labelledby="page-title">
        <div
          className="container"
          style={{ display: "grid", gap: "26px", justifyItems: "start" }}
        >
          <p className="tab-label" data-intro="">
            <span className="tip tip--diamond c-blush" aria-hidden="true" />
            {label}
          </p>
          <h1 className="h1" id="page-title">
            <span className="ln">
              <span className="ln__in">{title}</span>
            </span>
          </h1>
          <p className="lede" data-intro="">
            {lede}
          </p>
          <p className="legal__updated" data-intro="">
            Last updated {updated}
          </p>
        </div>
      </section>
      <section className="section legal" aria-label={title}>
        <div className="container legal__grid">
          <nav className="legal__toc" aria-label="Contents">
            <p>Contents</p>
            <ol>
              {sections.map(({ id, title: heading }) => (
                <li key={id}>
                  <a href={`#${id}`}>{heading}</a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="legal__doc">
            {sections.map(({ id, title: heading, body }, n) => (
              <section key={id} aria-labelledby={id}>
                <h2 id={id}>
                  <span className="legal__n">{String(n + 1).padStart(2, "0")}</span>
                  {heading}
                </h2>
                {body}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
