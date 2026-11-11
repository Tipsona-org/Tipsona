import { Fragment } from "react";

type TabTickerProps = {
  label: string;
  items: string[];
};

/** A ticker that sits in a light tab notched into the dark section below (Plerouse). */
export function TabTicker({ label, items }: TabTickerProps) {
  // doubled so one list always overflows the tab
  const doubled = [...items, ...items];
  // The second copy is hidden from screen readers as a whole, so only the first
  // copy hides its separators one by one.
  const list = (isCopy: boolean) =>
    doubled.map((x, n) => (
      <Fragment key={n}>
        <li>{x}</li>
        <li className="sep" aria-hidden={isCopy ? undefined : "true"}>
          <span className="tip tip--star c-flame" />
        </li>
      </Fragment>
    ));

  return (
    <section className="ticker ticker--tab" aria-label={label}>
      <div className="ticker__tab">
        <div className="ticker__track" data-marquee="">
          <ul className="ticker__list">{list(false)}</ul>
          <ul className="ticker__list" aria-hidden="true">
            {list(true)}
          </ul>
        </div>
      </div>
    </section>
  );
}
