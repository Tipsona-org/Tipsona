import { RESERVED_USERNAMES } from "@/content/reserved-usernames";

import { $, $$, refreshLater, type Scope, site, toast } from "./shared";

type TurnstileApi = {
  render: (el: Element, options: Record<string, unknown>) => string;
  reset: (id: string) => void;
  remove: (id: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
    tipsonaTurnstile?: () => void;
  }
}

/* ── Claim your link ────────────────────────────────────────────── */
/* Username rules from the TipStore PRD: lowercase, 3–30 characters, no
   spaces or special symbols, no reserved words. Availability is only
   known at sign-up, so this check never claims a name is free. */
const ICON = (name: string) => `<svg class="i" aria-hidden="true"><use href="#i-${name}"/></svg>`;

type Check = { state: "idle" } | { state: "ok" | "error"; msg: string };

function checkName(v: string): Check {
  if (!v) return { state: "idle" };
  if (v.length < 3) return { state: "error", msg: "Too short. Use at least 3 characters." };
  if (v.length > 30) return { state: "error", msg: "Too long. Use 30 characters or fewer." };
  if (RESERVED_USERNAMES.has(v)) {
    return { state: "error", msg: "“" + v + "” is a reserved word. Try another name." };
  }
  return { state: "ok", msg: "<b>tipstore.tipsona.co/" + v + "</b> fits the username rules." };
}

export function initClaim(scope: Scope, form: HTMLFormElement) {
  const input = $<HTMLInputElement>("input", form)!;
  const hint = $(".claim__hint", form)!;
  const field = $(".claim__field", form)!;
  const button = $<HTMLButtonElement>("button[type='submit']", form)!;
  const idleHint = hint.innerHTML;
  const buttonHTML = button.innerHTML;
  function render(res: Check) {
    if (res.state === "idle") {
      hint.removeAttribute("data-state");
      hint.innerHTML = idleHint;
      return;
    }
    hint.setAttribute("data-state", res.state);
    hint.innerHTML = ICON(res.state === "ok" ? "check-circle" : "x") + "<span>" + res.msg + "</span>";
  }
  /* Live preview: the hero claim form writes the name straight into the example storefront */
  const liveName = form.id === "claim" ? $("[data-live-name]") : null;
  const liveUrl = liveName?.closest("[data-live-url]");
  const liveLabel = $("[data-live-label]");
  const liveDefault = liveName ? liveName.textContent : "";
  scope.on(input, "input", () => {
    const clean = input.value.toLowerCase().replace(/\s+/g, "").replace(/[^a-z0-9]/g, "");
    if (clean !== input.value) input.value = clean;
    render(checkName(clean));
    if (liveName) {
      liveName.textContent = clean ? clean.slice(0, 30) : liveDefault;
      liveUrl?.classList.toggle("is-live", !!clean);
      if (liveLabel) {
        liveLabel.textContent = clean ? "Your storefront, live preview" : "Example storefront";
      }
    }
  });
  scope.on(form, "submit", (e) => {
    e.preventDefault();
    const v = input.value;
    const res = checkName(v);
    if (!v) {
      render({ state: "error", msg: "Type the name you want after tipstore.tipsona.co/" });
      input.focus();
    } else {
      render(res);
    }
    if (res.state !== "ok") {
      if (field.animate && !site.reduceMotion) {
        field.animate(
          [
            { transform: "translateX(0)" },
            { transform: "translateX(-8px)" },
            { transform: "translateX(7px)" },
            { transform: "translateX(-4px)" },
            { transform: "translateX(0)" }
          ],
          { duration: 380, easing: "ease-out" }
        );
      }
      return;
    }
    button.innerHTML = "Looks good" + ICON("check");
    const to = form.getAttribute("data-waitlist-url");
    if (to) {
      window.setTimeout(() => {
        location.href = to + "?product=tipstore&username=" + encodeURIComponent(v);
      }, 450);
      return;
    }
    toast("tipstore.tipsona.co/" + v + " fits the rules. Availability is confirmed when you sign up.");
    window.setTimeout(() => {
      button.innerHTML = buttonHTML;
    }, 3200);
  });
}

/* ── Waitlist form ──────────────────────────────────────────────── */
/* Prefills from the link (?product=tipstore&username=ada) and checks the
   required fields. Cloudflare Turnstile runs invisibly (a checkbox only
   appears if something looks off); the sign-up goes to /api/waitlist/,
   which verifies the Turnstile pass before saving it as a Resend contact. */
export function initWaitlist(scope: Scope) {
  const form = $<HTMLFormElement>("[data-waitlist]");
  if (!form) return;
  const done = $("[data-wl-done]")!;
  const err = $("[data-wl-error]", form)!;
  const params = new URLSearchParams(location.search);
  function showDone() {
    form!.hidden = true;
    done.hidden = false;
    done.focus({ preventScroll: true });
    refreshLater(); /* the page gets shorter: re-measure scroll animations */
  }
  if (params.get("joined")) {
    showDone();
    return;
  }
  const want = (params.get("product") || "").toLowerCase();
  $$<HTMLInputElement>("input[name='product']", form).forEach((c) => {
    if (c.value.toLowerCase() === want) c.checked = true;
  });
  const user = $<HTMLInputElement>("#wl-username", form)!;
  const u = (params.get("username") || "").toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 30);
  if (u) user.value = u;
  scope.on(user, "input", () => {
    const c = user.value.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (c !== user.value) user.value = c;
  });

  /* Turnstile: render once the Cloudflare script arrives; keep the latest pass */
  const box = $("[data-turnstile]", form);
  let widget: string | null = null;
  let token = "";
  const waiters: Array<(t: string) => void> = [];
  function gotToken(t: string) {
    token = t;
    waiters.splice(0).forEach((w) => w(t));
  }
  window.tipsonaTurnstile = function () {
    if (!box || !window.turnstile || widget !== null || !scope.alive) return;
    widget = window.turnstile.render(box, {
      sitekey: box.getAttribute("data-sitekey"),
      theme: "light",
      size: "flexible",
      appearance: "interaction-only",
      callback: gotToken,
      "expired-callback": () => {
        token = "";
      },
      "error-callback": () => {
        token = "";
      }
    });
  };
  if (window.turnstile) window.tipsonaTurnstile();
  scope.add(() => {
    if (widget !== null) window.turnstile?.remove(widget);
    delete window.tipsonaTurnstile;
  });
  function waitForToken(ms: number) {
    if (token) return Promise.resolve(token);
    return new Promise<string>((res) => {
      waiters.push(res);
      window.setTimeout(() => res(token), ms);
    });
  }

  function fail(msg: string, field?: HTMLElement) {
    err.textContent = msg;
    err.hidden = false;
    if (field) {
      field.setAttribute("aria-invalid", "true");
      field.focus();
    }
  }
  scope.on(form, "submit", (e) => {
    e.preventDefault();
    err.hidden = true;
    $$("[aria-invalid]", form).forEach((f) => f.removeAttribute("aria-invalid"));
    const name = $<HTMLInputElement>("#wl-name", form)!;
    const email = $<HTMLInputElement>("#wl-email", form)!;
    if (!name.value.trim()) return fail("Please add your name.", name);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      return fail("Please add a valid email address.", email);
    }
    if (user.value && user.value.length < 3) {
      return fail("Usernames need at least 3 characters, or leave it empty.", user);
    }
    $<HTMLInputElement>("input[name='products']", form)!.value = $$<HTMLInputElement>(
      "input[name='product']:checked",
      form
    )
      .map((c) => c.value)
      .join(", ");
    const btn = $<HTMLButtonElement>("button[type='submit']", form)!;
    const label = btn.innerHTML;
    btn.disabled = true;
    btn.textContent = "Joining…";
    waitForToken(10000)
      .then((t) => {
        if (!t) throw new Error("Please complete the security check above, then try again.");
        const data = new URLSearchParams();
        new FormData(form).forEach((v, k) => {
          if (k !== "product") data.append(k, String(v));
        });
        data.set("cf-turnstile-response", t);
        return fetch(form.getAttribute("action")!, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
          body: data.toString()
        }).then((r) =>
          r
            .json()
            .catch(() => ({}))
            .then((j: { ok?: boolean; error?: string }) => {
              if (!r.ok || !j.ok) {
                throw new Error(j.error || "Something went wrong. Please try again in a moment.");
              }
            })
        );
      })
      .then(showDone, (e2: Error) => {
        fail(e2.message || "Something went wrong. Please try again in a moment.");
        token = "";
        if (widget !== null) window.turnstile?.reset(widget); /* a pass works only once */
      })
      .then(() => {
        btn.disabled = false;
        btn.innerHTML = label;
      });
  });
}
