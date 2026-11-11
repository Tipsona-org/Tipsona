// Scroll scenes built for one section each (most of them on the TipStore page).
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import { $, $$, type ContextSafe, type Scope, site } from "../shared";

/* Chat messages turn into an order: pinned only on screens big enough to hold it. */
export function swapScene() {
  const sec = $("[data-swap]");
  if (!sec) return;
  const mm = gsap.matchMedia();
  mm.add("(min-width: 900px) and (min-height: 700px)", () => {
    sec.classList.add("is-scene");
    const msgs = $$(".msg", sec);
    const head = $(".chat__head", sec);
    const chat = $("[data-chat]", sec);
    const order = $("[data-order]", sec)!;
    const rows = $$(".tl-row", order);
    const before = $("[data-swap-before]", sec);
    const after = $("[data-swap-after]", sec);
    gsap.set(msgs, { autoAlpha: 0, y: 18, scale: 0.96 });
    gsap.set(order, { autoAlpha: 0, scale: 0.82, y: 50 });
    gsap.set(rows, { autoAlpha: 0, x: -16 });
    gsap.set(after, { autoAlpha: 0, y: 34 });

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: sec,
        start: "top top",
        end: () => "+=" + Math.round(window.innerHeight * 1.9),
        pin: true,
        scrub: 0.8,
        anticipatePin: 1
      }
    });
    msgs.forEach((m, i) => tl.to(m, { autoAlpha: 1, y: 0, scale: 1, duration: 0.5 }, i * 0.42));
    tl.to(msgs[msgs.length - 1], { x: 6, duration: 0.08, repeat: 5, yoyo: true, ease: "none" });
    tl.to({}, { duration: 0.35 });
    tl.to(msgs, {
      autoAlpha: 0,
      scale: 0.45,
      x: () => gsap.utils.random(-70, 70),
      y: () => gsap.utils.random(-50, 50),
      rotation: () => gsap.utils.random(-28, 28),
      duration: 0.65,
      stagger: { each: 0.035, from: "random" },
      ease: "power3.in"
    });
    tl.to(head, { autoAlpha: 0, duration: 0.3 }, "<");
    tl.to(chat, { autoAlpha: 0, scale: 0.94, duration: 0.45 }, ">-0.25");
    tl.to(before, { autoAlpha: 0, y: -34, duration: 0.5 }, "<");
    tl.to(order, { autoAlpha: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.5)" }, ">-0.15");
    tl.to(rows, { autoAlpha: 1, x: 0, stagger: 0.14, duration: 0.4 }, ">-0.35");
    tl.to(after, { autoAlpha: 1, y: 0, duration: 0.6 }, "<");
    tl.to({}, { duration: 0.7 });
    return () => sec.classList.remove("is-scene");
  });
}

/* How it works: each step card demos itself on a loop while it's on screen. */
export function stepsScene() {
  const rail = $("[data-rail]");
  if (rail) {
    gsap.to(rail, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { trigger: ".steps__list", start: "top 85%", end: "bottom 55%", scrub: 0.6 }
    });
  }

  function loopWhileVisible(el: Element, tl: gsap.core.Timeline) {
    ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      end: "bottom top",
      onToggle: (self) => {
        if (self.isActive) tl.play();
        else tl.pause();
      }
    });
  }

  const s1 = $("[data-step='claim']");
  if (s1) {
    const typed = $("[data-typed]", s1)!;
    const ok = $("[data-ok]", s1);
    const pop = $("[data-pop]", s1);
    const full = typed.getAttribute("data-typed")!;
    const o = { n: 0 };
    const t1 = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 1.4 });
    t1.set(o, { n: 0 })
      .set(typed, { textContent: "" })
      .set(ok, { scale: 0 })
      .set(pop, { y: 26, autoAlpha: 0 })
      .to(
        o,
        {
          n: full.length,
          duration: full.length * 0.13,
          ease: "none",
          onUpdate: () => {
            typed.textContent = full.slice(0, Math.round(o.n));
          }
        },
        0.3
      )
      .to(ok, { scale: 1, duration: 0.5, ease: "back.out(3)" })
      .to(pop, { y: 0, autoAlpha: 1, duration: 0.7, ease: "back.out(1.7)" }, "-=0.2")
      .to({}, { duration: 2.2 });
    loopWhileVisible(s1, t1);
  }

  const s2 = $("[data-step='upload']");
  if (s2) {
    const file = $("[data-drop]", s2);
    const bar = $("[data-bar]", s2);
    const pub = $("[data-pop]", s2);
    const t2 = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 1.2 });
    t2.set(file, { y: -70, rotation: -8, autoAlpha: 0 })
      .set(bar, { scaleX: 0 })
      .set(pub, { scale: 0 })
      .to(file, { y: 0, rotation: 0, autoAlpha: 1, duration: 0.9, ease: "bounce.out" }, 0.2)
      .to(bar, { scaleX: 1, duration: 1.3, ease: "power2.inOut" }, "-=0.1")
      .to(pub, { scale: 1, duration: 0.5, ease: "back.out(3)" })
      .to({}, { duration: 2.2 });
    loopWhileVisible(s2, t2);
  }

  const s3 = $("[data-step='paid']");
  if (s3) {
    const notes = $$("[data-note]", s3);
    const total = $("[data-count]", s3)!;
    const fmt = new Intl.NumberFormat("en-NG");
    const sums = [7500, 19500, 44500];
    const t3 = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 1.2 });
    t3.set(notes, { x: 40, autoAlpha: 0 });
    t3.call(() => {
      total.textContent = "₦0";
    });
    notes.forEach((n, i) => {
      t3.to(n, { x: 0, autoAlpha: 1, duration: 0.6, ease: "back.out(1.6)" }, 0.3 + i * 0.75);
      t3.call(
        () => {
          total.textContent = "₦" + fmt.format(sums[i]);
        },
        undefined,
        0.55 + i * 0.75
      );
    });
    t3.to({}, { duration: 2.4 });
    loopWhileVisible(s3, t3);
  }
}

/* Who it's for: the section pins and scrolling steps through the creator types. */
export function personasScene() {
  const root = $("[data-personas]");
  if (!root) return;
  const n = $$("[role='tab']", root).length;
  const mm = gsap.matchMedia();
  mm.add("(min-width: 900px) and (min-height: 700px)", () => {
    site.personaST = ScrollTrigger.create({
      trigger: root,
      start: "top top",
      pin: true,
      anticipatePin: 1,
      end: () => "+=" + Math.round(window.innerHeight * 0.5 * (n - 1)),
      onUpdate: (self) => {
        const i = Math.min(n - 1, Math.floor(self.progress * n));
        if (i !== site.personaIndex) site.selectPersona(i, false);
      }
    });
    return () => {
      site.personaST = null;
    };
  });
  gsap.from($$(".persona-tab", root), {
    y: 30,
    autoAlpha: 0,
    stagger: 0.06,
    duration: 0.9,
    ease: "expo.out",
    scrollTrigger: { trigger: root, start: "top 75%", once: true }
  });
}

export function bentoScene(scope: Scope) {
  const bars = $("[data-bars]");
  if (bars) {
    gsap.from($$("span", bars), {
      scaleY: 0,
      stagger: 0.07,
      duration: 0.9,
      ease: "back.out(1.5)",
      scrollTrigger: { trigger: bars, start: "top 88%", once: true }
    });
  }

  const packet = $("[data-packet]");
  if (packet) {
    const wire = packet.parentElement!;
    const tw = gsap.fromTo(
      packet,
      { x: 0, scale: 0.6 },
      {
        x: () => wire.offsetWidth,
        scale: 1,
        duration: 1.6,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 0.5,
        paused: true
      }
    );
    /* the wire's width changes with the layout: re-measure on refresh */
    const remeasure = () => tw.invalidate();
    ScrollTrigger.addEventListener("refresh", remeasure);
    scope.add(() => ScrollTrigger.removeEventListener("refresh", remeasure));
    ScrollTrigger.create({
      trigger: wire,
      start: "top bottom",
      end: "bottom top",
      onToggle: (self) => {
        if (self.isActive) tw.play();
        else tw.pause();
      }
    });
  }

  const themerPhone = $("[data-themer] .phone");
  if (themerPhone) {
    gsap.from(themerPhone, {
      y: 80,
      rotation: 10,
      autoAlpha: 0,
      duration: 1.3,
      ease: "expo.out",
      scrollTrigger: { trigger: themerPhone, start: "top 90%", once: true }
    });
  }

  $$(".lib-item").forEach((el, i) => {
    gsap.from(el, {
      x: -20,
      autoAlpha: 0,
      duration: 0.8,
      delay: i * 0.12,
      ease: "expo.out",
      scrollTrigger: { trigger: el, start: "top 92%", once: true }
    });
  });
}

/* The seller dashboard tilts up into place, then its chart draws itself. */
export function dashboardScene() {
  const d = $("[data-dash]");
  if (!d) return;
  const mm = gsap.matchMedia();
  mm.add("(min-width: 761px)", () => {
    gsap.fromTo(
      d,
      { rotationX: 26, y: 90, scale: 0.9, transformPerspective: 1700 },
      {
        rotationX: 0,
        y: 0,
        scale: 1,
        ease: "none",
        scrollTrigger: { trigger: "[data-dash-wrap]", start: "top 98%", end: "top 28%", scrub: 0.8 }
      }
    );
  });
  const line = $<SVGPathElement>("[data-line]", d)!;
  const len = line.getTotalLength ? line.getTotalLength() : 700;
  gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
  gsap.set($(".chart .area", d), { autoAlpha: 0 });
  gsap.set($$(".chart .pt, .chart .pt-last", d), { scale: 0, transformOrigin: "50% 50%" });
  gsap.set($("[data-chart-tip]", d), { autoAlpha: 0, y: 8 });
  const tl = gsap.timeline({ scrollTrigger: { trigger: d, start: "top 72%", once: true } });
  tl.from($$(".kpi", d), { y: 18, autoAlpha: 0, stagger: 0.08, duration: 0.8, ease: "expo.out" }, 0)
    .to(line, { strokeDashoffset: 0, duration: 1.7, ease: "power2.inOut" }, 0.2)
    .to($(".chart .area", d), { autoAlpha: 1, duration: 0.9 }, 1.1)
    .to($$(".chart .pt, .chart .pt-last", d), { scale: 1, stagger: 0.09, duration: 0.45, ease: "back.out(3)" }, 0.5)
    .to($("[data-chart-tip]", d), { autoAlpha: 1, y: 0, duration: 0.6, ease: "back.out(2)" }, 1.5)
    .from($$("[data-meter]", d), { scaleX: 0, stagger: 0.12, duration: 1, ease: "expo.out" }, 0.4)
    .from($$(".orders tbody tr", d), { autoAlpha: 0, x: -14, stagger: 0.07, duration: 0.55 }, 0.5);
}

/* Trust: the statement lights up word by word as you scroll. */
export function trustScene() {
  const el = $("[data-words]");
  if (el) {
    SplitText.create(el, {
      type: "words",
      wordsClass: "w",
      autoSplit: true,
      onSplit: (self) =>
        gsap.fromTo(
          self.words,
          { opacity: 0.14 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top 82%", end: "bottom 48%", scrub: true }
          }
        )
    });
  }
  const lock = $("[data-lock]");
  if (lock) {
    gsap.from($$(".tip", lock), {
      scale: 0,
      rotation: -60,
      stagger: 0.12,
      duration: 0.9,
      ease: "back.out(2)",
      scrollTrigger: { trigger: lock, start: "top 85%", once: true }
    });
  }
}

/* TipStore hero: the sale notification cycles through example orders. */
export function saleLoop(scope: Scope, contextSafe: ContextSafe) {
  const card = $("[data-sale-card]");
  if (!card) return;
  const mailCard = $(".fc-delivered");
  const amt = $("[data-sale-amt]")!;
  const prod = $("[data-sale-prod]")!;
  const mail = $("[data-sale-mail]")!;
  const sales = [
    ["₦7,500", "· Budget Planner", "Access link emailed"],
    ["₦12,000", "· Side-Hustle Guide", "Saved to their library"],
    ["₦25,000", "· Money Habits", "Receipt sent"]
  ];
  let i = 0;
  let timer: number | undefined;
  const next = contextSafe(() => {
    i = (i + 1) % sales.length;
    gsap
      .timeline()
      .to([card, mailCard], { scale: 0.86, autoAlpha: 0, duration: 0.28, ease: "power2.in", stagger: 0.08 })
      .add(() => {
        amt.textContent = sales[i][0];
        prod.textContent = sales[i][1];
        mail.textContent = sales[i][2];
      })
      .to([card, mailCard], { scale: 1, autoAlpha: 1, duration: 0.7, ease: "back.out(2)", stagger: 0.16 });
  });
  ScrollTrigger.create({
    trigger: ".hero",
    start: "top bottom",
    end: "bottom top",
    onToggle: (self) => {
      window.clearInterval(timer);
      if (self.isActive) timer = window.setInterval(next, 3800);
    }
  });
  scope.add(() => window.clearInterval(timer));
}
