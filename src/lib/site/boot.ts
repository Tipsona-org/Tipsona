/*
  Tipsona: site interactions and motion.
  Everything here is progressive: the page is complete without it.
*/
import { initClaim, initWaitlist } from "./forms";
import { initMotion } from "./motion";
import { initAnchors, initMenu, initNav } from "./navigation";
import { $$, clearTimers, type ContextSafe, refreshLater, type Scope, site } from "./shared";
import {
  initBilling,
  initCopy,
  initCountdown,
  initDesignSystem,
  initFaq,
  initPersonas,
  initStickers,
  initThemer
} from "./widgets";

export function boot(scope: Scope, contextSafe: ContextSafe) {
  site.reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  site.finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  site.menuOpen = false;
  site.personaIndex = 0;
  scope.add(clearTimers);

  initAnchors(scope);
  initNav(scope);
  initMenu(scope, contextSafe);
  $$<HTMLFormElement>("[data-claim]").forEach((form) => initClaim(scope, form));
  initWaitlist(scope);
  /* Any change in page height (a form swapping to its thank-you card, a font
     loading late) re-measures the scroll animations, so none get stuck. */
  if (window.ResizeObserver) {
    let lastH = 0;
    const ro = new ResizeObserver(() => {
      const h = document.documentElement.scrollHeight;
      if (Math.abs(h - lastH) > 40) {
        lastH = h;
        refreshLater();
      }
    });
    ro.observe(document.body);
    scope.add(() => ro.disconnect());
  }
  initPersonas(scope);
  initThemer(scope);
  initBilling(scope);
  initFaq(scope);
  initCopy(scope);
  initDesignSystem(scope, contextSafe);
  initCountdown(scope);
  initStickers(scope);
  if (!site.reduceMotion) initMotion(scope, contextSafe);
  else document.documentElement.classList.remove("motion");
}
