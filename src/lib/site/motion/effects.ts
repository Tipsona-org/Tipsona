// Scroll effects any page can use, switched on by data attributes in the markup.
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import { $, $$, type ContextSafe, type Scope } from "../shared";

export function splitHeadings() {
  $$("[data-split]").forEach((el) => {
    SplitText.create(el, {
      type: "lines",
      mask: "lines",
      linesClass: "split-line",
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, {
          yPercent: 130,
          duration: 1.15,
          ease: "expo.out",
          stagger: 0.09,
          scrollTrigger: { trigger: el, start: "top 88%", once: true }
        })
    });
  });
}

export function reveals(scope: Scope, contextSafe: ContextSafe) {
  const items = $$("[data-reveal]");
  if (!items.length) return;
  gsap.set(items, { y: 40, autoAlpha: 0 });
  ScrollTrigger.batch(items, {
    start: "top 90%",
    once: true,
    onEnter: contextSafe((batch: Element[]) => {
      gsap.to(batch, { y: 0, autoAlpha: 1, duration: 1.05, ease: "expo.out", stagger: 0.09, overwrite: true });
    })
  });
  /* safety net: anything already scrolled past gets shown */
  const showMissed = contextSafe(() => {
    items.forEach((el) => {
      if (
        el.getBoundingClientRect().top < window.innerHeight &&
        getComputedStyle(el).visibility === "hidden"
      ) {
        gsap.to(el, { y: 0, autoAlpha: 1, duration: 0.6 });
      }
    });
  });
  const id = window.setTimeout(showMissed, 2500);
  scope.add(() => window.clearTimeout(id));
}

export function counters(contextSafe: ContextSafe) {
  $$("[data-count]").forEach((el) => {
    if (el.closest("[data-step]")) return; /* animated by its step */
    const to = parseFloat(el.getAttribute("data-count")!);
    const dec = parseInt(el.getAttribute("data-decimals") || "0", 10);
    const pre = el.getAttribute("data-prefix") || "";
    const suf = el.getAttribute("data-suffix") || "";
    const fmt = new Intl.NumberFormat("en-NG", { minimumFractionDigits: dec, maximumFractionDigits: dec });
    const obj = { v: 0 };
    const final = el.textContent;
    ScrollTrigger.create({
      trigger: el,
      start: "top 92%",
      once: true,
      onEnter: contextSafe(() => {
        gsap.to(obj, {
          v: to,
          duration: 1.8,
          ease: "power3.out",
          onUpdate: () => {
            el.textContent = pre + fmt.format(obj.v) + suf;
          },
          onComplete: () => {
            el.textContent = final;
          }
        });
      })
    });
  });
}

export function marquee(scope: Scope) {
  $$("[data-marquee]").forEach((track) => {
    const loop = gsap.to(track, { xPercent: -50, duration: 42, ease: "none", repeat: -1 });
    let settle: number | undefined;
    ScrollTrigger.create({
      trigger: track,
      start: "top bottom",
      end: "bottom top",
      onToggle: (self) => {
        if (self.isActive) loop.play();
        else loop.pause();
      },
      onUpdate: (self) => {
        const dir = self.direction || 1;
        const boost = gsap.utils.clamp(1, 7, 1 + Math.abs(self.getVelocity()) / 260);
        gsap.to(loop, { timeScale: dir * boost, duration: 0.2, overwrite: true });
        window.clearTimeout(settle);
        settle = window.setTimeout(() => {
          gsap.to(loop, { timeScale: dir, duration: 1.2, ease: "power2.out", overwrite: true });
        }, 140);
      }
    });
    scope.add(() => window.clearTimeout(settle));
  });
}

/* Photos share one reveal: a wipe from below while the image settles from a slight zoom. */
export function photoReveals() {
  $$(".thesis__img, [data-photo]").forEach((el) => {
    const st = { trigger: el, start: "top 88%", once: true };
    gsap.fromTo(
      el,
      { clipPath: "inset(100% 0% 0% 0% round 20px)" },
      { clipPath: "inset(0% 0% 0% 0% round 20px)", duration: 1.4, ease: "expo.inOut", scrollTrigger: st }
    );
    const img = $("img", el);
    if (img) {
      gsap.fromTo(img, { scale: 1.22 }, { scale: 1, duration: 1.9, ease: "expo.out", scrollTrigger: st });
    }
  });
}

/* Numbered flows (Tipper, TipFix escrow): the rail fills as you scroll. */
export function flowScene() {
  $$("[data-flow]").forEach((flow) => {
    const fill = $("[data-flow-fill]", flow);
    if (fill) {
      gsap.fromTo(
        fill,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: flow, start: "top 70%", end: "bottom 60%", scrub: true }
        }
      );
    }
  });
}

export function ctaScene() {
  const phones = $$(".cta__phones .phone");
  if (!phones.length) return;
  gsap.from(phones, {
    y: 160,
    autoAlpha: 0,
    stagger: 0.12,
    duration: 1.3,
    ease: "expo.out",
    scrollTrigger: { trigger: ".cta__phones", start: "top 85%", once: true }
  });
}

export function footerScene() {
  const w = $("[data-footer-word]");
  if (!w) return;
  gsap.from($(".footer__logo", w), {
    yPercent: 70,
    duration: 1.5,
    ease: "expo.out",
    scrollTrigger: { trigger: w, start: "clamp(top 95%)", once: true }
  });
  gsap.from($$("[data-sticker]", w), {
    scale: 0,
    rotation: -40,
    stagger: 0.12,
    duration: 1,
    ease: "back.out(2.2)",
    delay: 0.35,
    scrollTrigger: { trigger: w, start: "clamp(top 90%)", once: true }
  });
}

export function floaters() {
  $$("[data-float]").forEach((el, i) => {
    const t = gsap.to(el, {
      y: gsap.utils.random(-16, 16),
      x: gsap.utils.random(-10, 10),
      duration: gsap.utils.random(2.6, 4.2),
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1.6 + i * 0.2
    });
    ScrollTrigger.create({
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      onToggle: (self) => {
        if (self.isActive) t.resume();
        else t.pause();
      }
    });
  });
  if ($(".hero")) {
    const st = { trigger: ".hero", start: "top top", end: "bottom top", scrub: true };
    gsap.to(".stage__portrait", { yPercent: -7, ease: "none", scrollTrigger: st });
    gsap.to(".stage__phone", { yPercent: -16, ease: "none", scrollTrigger: st });
  }
}
