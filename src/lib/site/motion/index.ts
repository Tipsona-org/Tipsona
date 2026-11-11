/*
  Motion: GSAP + ScrollTrigger + SplitText, with Lenis smooth scrolling on
  mouse and trackpad. Never started when the viewer prefers reduced motion.
*/
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

import { type ContextSafe, type Scope, site } from "../shared";
import {
  counters,
  ctaScene,
  flowScene,
  floaters,
  footerScene,
  marquee,
  photoReveals,
  reveals,
  splitHeadings
} from "./effects";
import { heroIntro, pointerDepth } from "./intro";
import {
  bentoScene,
  dashboardScene,
  personasScene,
  saleLoop,
  stepsScene,
  swapScene,
  trustScene
} from "./scenes";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function initMotion(scope: Scope, contextSafe: ContextSafe) {
  const doc = document.documentElement;
  site.motionOn = true;
  scope.add(() => {
    site.motionOn = false;
  });

  if (site.finePointer) {
    const lenis = new Lenis({ lerp: 0.11, smoothWheel: true });
    const raf = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    site.lenis = lenis;
    scope.add(() => {
      gsap.ticker.remove(raf);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
      site.lenis = null;
    });
  }

  heroIntro(contextSafe(() => pointerDepth(scope)));
  doc.classList.add("motion-ready");

  const fontsReady = Promise.race([
    document.fonts?.ready ?? Promise.resolve(),
    new Promise((r) => window.setTimeout(r, 1500))
  ]);
  fontsReady.then(
    contextSafe(() => {
      if (!scope.alive) return;
      splitHeadings();
      reveals(scope, contextSafe);
      counters(contextSafe);
      marquee(scope);
      swapScene();
      stepsScene();
      personasScene();
      bentoScene(scope);
      dashboardScene();
      trustScene();
      ctaScene();
      flowScene();
      photoReveals();
      footerScene();
      floaters();
      saleLoop(scope, contextSafe);
      ScrollTrigger.refresh();
    })
  );
  scope.on(window, "load", () => ScrollTrigger.refresh());
}
