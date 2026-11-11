import type Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const $ = <T extends Element = HTMLElement>(s: string, c: ParentNode = document) =>
  c.querySelector<T>(s);
export const $$ = <T extends Element = HTMLElement>(s: string, c: ParentNode = document) =>
  Array.from(c.querySelectorAll<T>(s));

/** Wraps a function so GSAP records what it creates (useGSAP's contextSafe). */
export type ContextSafe = <F extends (...args: never[]) => unknown>(fn: F) => F;

/** Everything a page wires up, undone in one call when the page unmounts. */
export class Scope {
  alive = true;
  private cleanups: Array<() => void> = [];

  on<E extends Event = Event>(
    target: EventTarget,
    type: string,
    fn: (e: E) => void,
    options?: AddEventListenerOptions | boolean
  ) {
    target.addEventListener(type, fn as EventListener, options);
    this.add(() => target.removeEventListener(type, fn as EventListener, options));
  }

  interval(fn: () => void, ms: number) {
    const id = window.setInterval(fn, ms);
    this.add(() => window.clearInterval(id));
  }

  add(cleanup: () => void) {
    this.cleanups.push(cleanup);
  }

  dispose() {
    this.alive = false;
    this.cleanups.splice(0).reverse().forEach((fn) => fn());
  }
}

/** State shared between the interactions and the motion. */
export const site = {
  reduceMotion: false,
  finePointer: false,
  motionOn: false,
  lenis: null as Lenis | null,
  menuOpen: false,
  personaIndex: 0,
  personaST: null as ScrollTrigger | null,
  selectPersona: (() => {}) as (i: number, focus: boolean) => void
};

let toastTimer: number | undefined;
export function toast(msg: string) {
  const el = $("[data-toast]");
  if (!el) return;
  $("[data-toast-msg]", el)!.textContent = msg;
  el.setAttribute("data-show", "true");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => el.setAttribute("data-show", "false"), 4200);
}

export function scrollToEl(target: Element | number, offset = 0) {
  const y =
    typeof target === "number"
      ? target
      : target.getBoundingClientRect().top + window.scrollY - offset;
  if (site.lenis) site.lenis.scrollTo(y, { duration: 1.25 });
  else window.scrollTo({ top: y, behavior: site.reduceMotion ? "auto" : "smooth" });
}

/** Re-measure scroll animations once the page has settled after a layout change. */
let refreshTimer: number | undefined;
export function refreshLater() {
  window.clearTimeout(refreshTimer);
  refreshTimer = window.setTimeout(() => {
    if (site.motionOn) ScrollTrigger.refresh();
  }, 480);
}

export function clearTimers() {
  window.clearTimeout(toastTimer);
  window.clearTimeout(refreshTimer);
}
