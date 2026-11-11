import type { ReactNode } from "react";

import { CONTACT_EMAIL } from "@/config/site";

type HubCtaProps = {
  /** The headline; put the payoff in <em> */
  title: ReactNode;
  text: string;
  waitlist?: string;
};

/** The closing panel on Tipsona pages: waitlist and email. */
export function HubCta({ title, text, waitlist = "/waitlist/" }: HubCtaProps) {
  return (
    <section className="section cta" id="contact" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta__panel cta__panel--hub" data-reveal="">
          <span
            className="tip tip--star c-sun bg-shape"
            style={{ "--s": "clamp(90px,12vw,170px)", right: "-3%", top: "-6%" }}
            data-float=""
            aria-hidden="true"
          />{" "}
          <div className="cta__copy">
            <h2 className="cta__title" id="cta-title" data-split="">
              {title}
            </h2>
            <p>{text}</p>
            <div className="cta__btns">
              <a className="btn btn--ink" href={waitlist}>
                Join the waitlist
                <svg className="i i-go" aria-hidden="true">
                  <use href="#i-arrow-right" />
                </svg>
              </a>{" "}
              <a className="btn btn--cream" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
