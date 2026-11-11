import { gsap } from "gsap";

import { $, $$, type ContextSafe, refreshLater, type Scope, scrollToEl, site, toast } from "./shared";

/* ── Personas tabs ──────────────────────────────────────────────── */
export function initPersonas(scope: Scope) {
  const root = $("[data-personas]");
  if (!root) return;
  const tabs = $$("[role='tab']", root);
  const panels = $$("[role='tabpanel']", root);
  panels.forEach((p) => {
    p.hidden = false;
  });
  site.selectPersona = (i, focus) => {
    site.personaIndex = i;
    tabs.forEach((t, j) => {
      const on = j === i;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      if (on && focus) t.focus();
    });
    panels.forEach((p, j) => p.classList.toggle("is-active", j === i));
    const active = tabs[i];
    const list = active.parentElement!;
    if (list.scrollWidth > list.clientWidth) {
      list.scrollTo({ left: active.offsetLeft - 24, behavior: site.reduceMotion ? "auto" : "smooth" });
    }
  };
  function go(i: number, focus: boolean) {
    const st = site.personaST;
    if (st) {
      const y = st.start + (st.end - st.start) * (i / (tabs.length - 1)) + 2;
      site.selectPersona(i, focus);
      scrollToEl(y);
    } else {
      site.selectPersona(i, focus);
    }
  }
  tabs.forEach((t, i) => {
    scope.on(t, "click", () => go(i, false));
    scope.on<KeyboardEvent>(t, "keydown", (e) => {
      const n = tabs.length;
      let next: number | null = null;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % n;
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + n) % n;
      if (e.key === "Home") next = 0;
      if (e.key === "End") next = n - 1;
      if (next !== null) {
        e.preventDefault();
        go(next, true);
      }
    });
  });
  scope.add(() => {
    site.selectPersona = () => {};
  });
}

/* ── Storefront theme playground ────────────────────────────────── */
export function initThemer(scope: Scope) {
  const root = $("[data-themer]");
  if (!root) return;
  const store = $("[data-themed-store]", root)!;
  const phone = store.closest<HTMLElement>(".phone")!;
  function bump() {
    if (!phone.animate || site.reduceMotion) return;
    phone.animate([{ transform: "scale(1)" }, { transform: "scale(.965)" }, { transform: "scale(1)" }], {
      duration: 420,
      easing: "cubic-bezier(.34,1.56,.64,1)"
    });
  }
  const themeBtns = $$("[data-theme-btn]", root);
  themeBtns.forEach((b) => {
    scope.on(b, "click", () => {
      themeBtns.forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      store.setAttribute("data-theme", b.getAttribute("data-theme-btn")!);
      bump();
    });
  });
  const accentBtns = $$("[data-accent]", root);
  accentBtns.forEach((b) => {
    scope.on(b, "click", () => {
      accentBtns.forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      store.style.setProperty("--sa", b.getAttribute("data-accent"));
      store.style.setProperty("--sa-ink", b.getAttribute("data-accent-ink"));
      bump();
    });
  });
}

/* ── Billing period toggle ──────────────────────────────────────── */
function swapText(el: HTMLElement, text: string) {
  if (el.textContent === text) return;
  if (!el.animate || site.reduceMotion) {
    el.textContent = text;
    return;
  }
  const out = el.animate(
    [
      { transform: "translateY(0)", opacity: 1 },
      { transform: "translateY(-35%)", opacity: 0 }
    ],
    { duration: 140, easing: "ease-in" }
  );
  out.onfinish = () => {
    el.textContent = text;
    el.animate(
      [
        { transform: "translateY(35%)", opacity: 0 },
        { transform: "translateY(0)", opacity: 1 }
      ],
      { duration: 320, easing: "cubic-bezier(.34,1.56,.64,1)" }
    );
  };
}

export function initBilling(scope: Scope) {
  $$("[data-billing]").forEach((group) => {
    const btns = $$("[role='radio']", group);
    function set(period: string, focus = false) {
      btns.forEach((b) => {
        const on = b.getAttribute("data-period") === period;
        b.setAttribute("aria-checked", String(on));
        b.tabIndex = on ? 0 : -1;
        if (on && focus) b.focus();
      });
      const yearly = period === "year";
      $$("[data-price-month]").forEach((el) =>
        swapText(el, el.getAttribute(yearly ? "data-price-year" : "data-price-month")!)
      );
      $$("[data-per]").forEach((el) => {
        el.textContent = yearly ? "/year" : "/month";
      });
      $$("[data-note-month]").forEach((el) => {
        el.textContent = el.getAttribute(yearly ? "data-note-year" : "data-note-month");
      });
      $$("[data-billing]").forEach((g) => {
        if (g === group) return;
        $$("[role='radio']", g).forEach((b) => {
          const on = b.getAttribute("data-period") === period;
          b.setAttribute("aria-checked", String(on));
          b.tabIndex = on ? 0 : -1;
        });
      });
    }
    btns.forEach((b) => scope.on(b, "click", () => set(b.getAttribute("data-period")!)));
    scope.on<KeyboardEvent>(group, "keydown", (e) => {
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].indexOf(e.key) === -1) return;
      e.preventDefault();
      const cur = btns.findIndex((b) => b.getAttribute("aria-checked") === "true");
      const step = e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 1;
      const next = btns[(cur + step + btns.length) % btns.length];
      set(next.getAttribute("data-period")!, true);
    });
  });
}

/* ── FAQ accordion (native <details>, animated) ─────────────────── */
export function initFaq(scope: Scope) {
  $$<HTMLDetailsElement>(".qa").forEach((d) => {
    const summary = $("summary", d)!;
    const body = $(".qa__body", d)!;
    scope.on(summary, "click", (e) => {
      refreshLater();
      if (site.reduceMotion || !body.animate) return;
      e.preventDefault();
      if (d.open) {
        const h = body.offsetHeight;
        const a = body.animate(
          [
            { height: h + "px", opacity: 1 },
            { height: "0px", opacity: 0 }
          ],
          { duration: 300, easing: "cubic-bezier(.65,0,.35,1)" }
        );
        d.classList.add("is-closing");
        a.onfinish = () => {
          d.open = false;
          d.classList.remove("is-closing");
        };
      } else {
        d.open = true;
        const h2 = body.offsetHeight;
        body.animate(
          [
            { height: "0px", opacity: 0 },
            { height: h2 + "px", opacity: 1 }
          ],
          { duration: 440, easing: "cubic-bezier(.16,1,.3,1)" }
        );
      }
    });
  });
}

/* ── Small utilities ────────────────────────────────────────────── */
/* Design-system page: list every icon in the sprite, and play the motion demos. */
export function initDesignSystem(scope: Scope, contextSafe: ContextSafe) {
  const grid = $("[data-icon-grid]");
  if (grid) {
    grid.innerHTML = $$("symbol[id^='i-']")
      .map(
        (s) =>
          '<div class="ds-icon"><svg class="i" aria-hidden="true"><use href="#' +
          s.id +
          '"/></svg><span>' +
          s.id.slice(2) +
          "</span></div>"
      )
      .join("");
  }
  $$("[data-motion-demos] button").forEach((b) => {
    const play = contextSafe(() => {
      const ball = $(".ball", b);
      const track = $(".track", b);
      const ease = b.getAttribute("data-ease")!;
      if (!ball || !track) return;
      const dur = ease.indexOf("power2") === 0 ? 1.6 : ease.indexOf("back") === 0 ? 0.8 : 1.1;
      gsap.fromTo(ball, { x: 0 }, { x: track.offsetWidth - 44, duration: dur, ease });
    });
    scope.on(b, "click", play);
  });
}

export function initCopy(scope: Scope) {
  $$("[data-copy]").forEach((b) => {
    scope.on(b, "click", () => {
      const text = b.getAttribute("data-copy")!;
      const label = $("span", b)!;
      function done(ok: boolean) {
        label.textContent = ok ? "Copied" : "Select";
        toast(ok ? "Copied " + text : "Select the address and press Ctrl or Cmd + C.");
        window.setTimeout(() => {
          label.textContent = "Copy";
        }, 2200);
      }
      function selectFallback() {
        const node = b.previousElementSibling!;
        const range = document.createRange();
        range.selectNodeContents(node);
        const sel = window.getSelection()!;
        sel.removeAllRanges();
        sel.addRange(range);
        done(false);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => done(true), selectFallback);
      } else {
        selectFallback();
      }
    });
  });
}

export function initCountdown(scope: Scope) {
  const el = $("[data-countdown]");
  if (!el) return;
  let t = parseInt(el.getAttribute("data-countdown")!, 10);
  const pad = (n: number) => (n < 10 ? "0" : "") + n;
  scope.interval(() => {
    if (document.hidden) return;
    t = t <= 0 ? 599 : t - 1;
    el.textContent = pad(Math.floor(t / 60)) + ":" + pad(t % 60);
  }, 1000);
}

export function initStickers(scope: Scope) {
  $$("[data-sticker]").forEach((el) => {
    let ox = 0;
    let oy = 0;
    let sx = 0;
    let sy = 0;
    let dragging = false;
    scope.on<PointerEvent>(el, "pointerdown", (e) => {
      dragging = true;
      el.setPointerCapture(e.pointerId);
      sx = e.clientX - ox;
      sy = e.clientY - oy;
      el.style.zIndex = "6";
    });
    scope.on<PointerEvent>(el, "pointermove", (e) => {
      if (!dragging) return;
      ox = e.clientX - sx;
      oy = e.clientY - sy;
      el.style.translate = ox + "px " + oy + "px";
    });
    const stop = () => {
      dragging = false;
    };
    scope.on(el, "pointerup", stop);
    scope.on(el, "pointercancel", stop);
  });
}
