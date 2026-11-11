import { gsap } from "gsap";

import { $, $$, type Scope, site } from "../shared";

/* Depth: hero layers drift a few pixels with the pointer (mouse and trackpad only). */
export function pointerDepth(scope: Scope) {
  if (site.reduceMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  const hero = $(".hero") || $(".hub-hero");
  if (!hero || hero.getAttribute("data-depth-on")) return;
  hero.setAttribute("data-depth-on", "1");
  scope.add(() => hero.removeAttribute("data-depth-on"));
  const layers = $$("[data-depth]", hero).map((el) => ({
    d: parseFloat(el.getAttribute("data-depth")!),
    x: gsap.quickTo(el, "x", { duration: 1.2, ease: "power3.out" }),
    y: gsap.quickTo(el, "y", { duration: 1.2, ease: "power3.out" })
  }));
  scope.on<PointerEvent>(hero, "pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    layers.forEach((l) => {
      l.x(nx * l.d);
      l.y(ny * l.d);
    });
  });
  scope.on(hero, "pointerleave", () =>
    layers.forEach((l) => {
      l.x(0);
      l.y(0);
    })
  );
}

/** The page's opening sequence. `depth` runs once it finishes. */
export function heroIntro(depth: () => void) {
  const hero = $(".hero");
  const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.1 } });
  tl.fromTo(".nav__bar", { y: -24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9 }, 0);
  if (!hero) {
    /* Inner pages: reveal the page hero with a simple rise. */
    tl.fromTo("[data-intro]", { y: 26, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.08 }, 0.1);
    tl.fromTo(
      ".page-hero .ln__in",
      { yPercent: 130, y: 0 },
      { yPercent: 0, y: 0, stagger: 0.09, duration: 1.2, clearProps: "transform" },
      0.1
    );
    tl.fromTo(".page-hero .hl__bg", { scaleX: 0 }, { scaleX: 1, duration: 0.95, ease: "expo.inOut" }, 0.55);
    if ($(".hub-hero")) {
      /* home hero: avatars, tag chips and product icons pop in; the photo card's chips follow */
      tl.fromTo(
        ".hub-hero .avatars img",
        { scale: 0, rotation: -40 },
        { scale: 1, rotation: 0, stagger: 0.08, duration: 0.8, ease: "back.out(2.2)" },
        0.6
      )
        .fromTo(
          ".hub-tag",
          { scale: 0, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, stagger: 0.15, duration: 0.9, ease: "back.out(2.4)" },
          0.85
        )
        .fromTo(
          ".hub-bubbles .bubble",
          { scale: 0 },
          { scale: 1, stagger: 0.07, duration: 0.9, ease: "back.out(2)" },
          0.7
        )
        .fromTo(
          ".hero-card__photo",
          { clipPath: "inset(100% 0% 0% 0% round 20px)" },
          { clipPath: "inset(0% 0% 0% 0% round 20px)", duration: 1.4, ease: "expo.inOut" },
          0.35
        )
        .fromTo(".hero-card__photo img", { scale: 1.25 }, { scale: 1, duration: 1.9, ease: "expo.out" }, 0.35)
        .fromTo(
          ".hero-card__chip",
          { y: 30, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.16, duration: 0.9, ease: "back.out(1.8)" },
          1.05
        );
      tl.call(depth);
    }
    return;
  }
  tl.fromTo(".hero__badge", { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8 }, 0.1)
    .fromTo(
      ".hero__title .ln__in",
      { yPercent: 130, y: 0 },
      { yPercent: 0, y: 0, stagger: 0.1, duration: 1.25, clearProps: "transform" },
      0.15
    )
    .fromTo(".hl__bg", { scaleX: 0 }, { scaleX: 1, duration: 0.95, ease: "expo.inOut" }, 0.62)
    .fromTo(".hero__lede", { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, 0.55)
    .fromTo("#claim", { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, 0.66)
    .fromTo(".hero__proof", { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, 0.78)
    .fromTo(
      ".stage__portrait",
      { clipPath: "inset(100% 0% 0% 0%)", autoAlpha: 1 },
      { clipPath: "inset(0% 0% 0% 0%)", autoAlpha: 1, duration: 1.4, ease: "expo.inOut" },
      0.3
    )
    .fromTo(".stage__portrait img", { scale: 1.25 }, { scale: 1, duration: 1.8 }, 0.3)
    .fromTo(".stage__phone", { y: 140, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.3 }, 0.62)
    .fromTo(
      ".stage__phone .prod",
      { x: 24, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, stagger: 0.08, duration: 0.7 },
      1.05
    )
    .fromTo(
      ".stage__shape",
      { scale: 0, rotation: -120, x: 0, y: 0 },
      { scale: 1, rotation: 0, x: 0, y: 0, stagger: 0.09, duration: 1, ease: "back.out(2)" },
      0.95
    )
    .fromTo(
      ".hero .float-card",
      { scale: 0.6, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, stagger: 0.16, duration: 0.85, ease: "back.out(1.9)" },
      1.15
    )
    .fromTo(
      ".hero .avatars img",
      { scale: 0, rotation: -40 },
      { scale: 1, rotation: 0, stagger: 0.08, duration: 0.8, ease: "back.out(2.2)" },
      0.75
    )
    .fromTo(
      ".hero__sticker",
      { scale: 0, autoAlpha: 0, rotation: -30 },
      { scale: 1, autoAlpha: 1, rotation: 0, duration: 0.9, ease: "back.out(2.4)" },
      1.0
    )
    .fromTo(".stage__example", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 }, 1.4)
    .call(depth);
}
