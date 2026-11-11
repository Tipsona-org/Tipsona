import { gsap } from "gsap";

import { $, $$, type ContextSafe, type Scope, scrollToEl, site, toast } from "./shared";

/* ── Smooth anchor scrolling + placeholder links ────────────────── */
export function initAnchors(scope: Scope) {
  scope.on<MouseEvent>(document, "click", (e) => {
    const a = (e.target as Element).closest("a[href^='#']");
    if (!a) return;
    const id = a.getAttribute("href")!;
    if (id === "#") {
      e.preventDefault();
      toast("This is a design preview. That page goes live with the product.");
      return;
    }
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    if (id === "#claim") {
      scrollToEl(0);
      window.setTimeout(
        () => $<HTMLInputElement>("#claim-name")?.focus({ preventScroll: true }),
        site.lenis ? 1100 : 500
      );
      return;
    }
    if (id === "#top") {
      scrollToEl(0);
      return;
    }
    scrollToEl(target, 24);
  });
}

/* ── Navigation ─────────────────────────────────────────────────── */
export function initNav(scope: Scope) {
  const nav = $("[data-nav]");
  if (!nav) return;
  let lastY = window.scrollY;
  function onScroll() {
    const y = window.scrollY;
    nav!.classList.toggle("is-scrolled", y > 16);
    if (Math.abs(y - lastY) > 8) {
      nav!.classList.toggle("is-hidden", y > lastY && y > 360 && !site.menuOpen);
      lastY = y;
    }
  }
  scope.on(window, "scroll", onScroll, { passive: true });
  onScroll();

  const links = $$(".nav__links a[href^='#']");
  const map: Record<string, Element> = {};
  links.forEach((a) => {
    map[a.getAttribute("href")!.slice(1)] = a;
  });
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const link = map[entry.target.id] || null;
          links.forEach((l) => l.removeAttribute("aria-current"));
          if (link) link.setAttribute("aria-current", "true");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    Object.keys(map)
      .concat(["top"])
      .forEach((id) => {
        const el = document.getElementById(id);
        if (el) io.observe(el);
      });
    $$("main > section:not([id]), footer").forEach((el) => io.observe(el));
    scope.add(() => io.disconnect());
  }
}

export function initMenu(scope: Scope, contextSafe: ContextSafe) {
  const btn = $("[data-menu-toggle]");
  const menu = $("#mobile-menu");
  if (!btn || !menu) return;
  const reveal = contextSafe(() => {
    gsap.fromTo(
      $$("li, .mobile-menu__foot", menu),
      { y: 28, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, stagger: 0.05, duration: 0.7, ease: "expo.out" }
    );
  });
  function set(open: boolean) {
    site.menuOpen = open;
    menu!.hidden = !open;
    btn!.setAttribute("aria-expanded", String(open));
    btn!.querySelector("use")!.setAttribute("href", open ? "#i-x" : "#i-menu");
    btn!.querySelector(".sr-only")!.textContent = open ? "Close menu" : "Open menu";
    document.body.style.overflow = open ? "hidden" : "";
    if (site.lenis) {
      if (open) site.lenis.stop();
      else site.lenis.start();
    }
    if (open) {
      $("[data-nav]")?.classList.remove("is-hidden");
      if (!site.reduceMotion) reveal();
    }
  }
  scope.on(btn, "click", () => set(!site.menuOpen));
  scope.on<MouseEvent>(menu, "click", (e) => {
    if ((e.target as Element).closest("a")) set(false);
  });
  scope.on<KeyboardEvent>(document, "keydown", (e) => {
    if (e.key === "Escape" && site.menuOpen) {
      set(false);
      btn.focus();
    }
  });
  scope.on<MediaQueryListEvent>(window.matchMedia("(min-width: 1000px)"), "change", (m) => {
    if (m.matches && site.menuOpen) set(false);
  });
  scope.add(() => {
    if (site.menuOpen) set(false);
  });
}
