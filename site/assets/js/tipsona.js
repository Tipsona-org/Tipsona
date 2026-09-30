/*
  Tipsona — site interactions and motion.
  Everything here is progressive: the page is complete without it.
  Plain DOM for UI behaviour; GSAP + ScrollTrigger + SplitText (+ Lenis on
  desktop) for motion, skipped entirely when the viewer prefers reduced motion.
*/
(function () {
  'use strict';

  var doc = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var lenis = null;
  var menuOpen = false;
  var personaIndex = 0;
  var personaST = null;
  var selectPersona = function () {};

  /* ── Toast ──────────────────────────────────────────────────────── */
  var toastEl = $('[data-toast]');
  var toastTimer;
  function toast(msg) {
    if (!toastEl) return;
    $('[data-toast-msg]', toastEl).textContent = msg;
    toastEl.setAttribute('data-show', 'true');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.setAttribute('data-show', 'false'); }, 4200);
  }

  /* ── Smooth anchor scrolling + placeholder links ────────────────── */
  function scrollToEl(target, offset) {
    var y = typeof target === 'number' ? target : target.getBoundingClientRect().top + window.scrollY - (offset || 0);
    if (lenis) lenis.scrollTo(y, { duration: 1.25 });
    else window.scrollTo({ top: y, behavior: reduceMotion ? 'auto' : 'smooth' });
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href');
    if (id === '#') {
      e.preventDefault();
      toast('This is a design preview. That page goes live with the product.');
      return;
    }
    var target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    if (id === '#claim') {
      scrollToEl(0);
      setTimeout(function () { var input = $('#claim-name'); if (input) input.focus({ preventScroll: true }); }, lenis ? 1100 : 500);
      return;
    }
    if (id === '#top') { scrollToEl(0); return; }
    scrollToEl(target, 24);
  });

  /* ── Navigation ─────────────────────────────────────────────────── */
  function initNav() {
    var nav = $('[data-nav]');
    if (!nav) return;
    var lastY = window.scrollY;
    function onScroll() {
      var y = window.scrollY;
      nav.classList.toggle('is-scrolled', y > 16);
      if (Math.abs(y - lastY) > 8) {
        nav.classList.toggle('is-hidden', y > lastY && y > 360 && !menuOpen);
        lastY = y;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    var links = $$('.nav__links a[href^="#"]');
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var link = map[entry.target.id] || null;
          links.forEach(function (l) { l.removeAttribute('aria-current'); });
          if (link) link.setAttribute('aria-current', 'true');
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      Object.keys(map).concat(['top']).forEach(function (id) { var el = document.getElementById(id); if (el) io.observe(el); });
      $$('main > section:not([id]), footer').forEach(function (el) { io.observe(el); });
    }
  }

  function initMenu() {
    var btn = $('[data-menu-toggle]');
    var menu = $('#mobile-menu');
    if (!btn || !menu) return;
    function set(open) {
      menuOpen = open;
      menu.hidden = !open;
      btn.setAttribute('aria-expanded', String(open));
      btn.querySelector('use').setAttribute('href', open ? '#i-x' : '#i-menu');
      btn.querySelector('.sr-only').textContent = open ? 'Close menu' : 'Open menu';
      document.body.style.overflow = open ? 'hidden' : '';
      if (lenis) { if (open) lenis.stop(); else lenis.start(); }
      if (open) {
        var nav = $('[data-nav]'); if (nav) nav.classList.remove('is-hidden');
        if (window.gsap && !reduceMotion) {
          window.gsap.fromTo($$('li, .mobile-menu__foot', menu), { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.05, duration: 0.7, ease: 'expo.out' });
        }
      }
    }
    btn.addEventListener('click', function () { set(!menuOpen); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menuOpen) { set(false); btn.focus(); }
    });
    window.matchMedia('(min-width: 1000px)').addEventListener('change', function (m) { if (m.matches && menuOpen) set(false); });
  }

  /* ── Claim your link ────────────────────────────────────────────── */
  /* Username rules from the TipStore PRD: lowercase, 3–30 characters, no
     spaces or special symbols, no reserved words. Availability is only
     known at sign-up, so this check never claims a name is free. */
  var RESERVED = ['admin', 'support', 'login', 'api', 'pricing', 'blog', 'help', 'dashboard', 'library'];
  var ICON = function (name) { return '<svg class="i" aria-hidden="true"><use href="#i-' + name + '"/></svg>'; };

  function checkName(v) {
    if (!v) return { state: 'idle' };
    if (v.length < 3) return { state: 'error', msg: 'Too short. Use at least 3 characters.' };
    if (v.length > 30) return { state: 'error', msg: 'Too long. Use 30 characters or fewer.' };
    if (RESERVED.indexOf(v) > -1) return { state: 'error', msg: '“' + v + '” is a reserved word. Try another name.' };
    return { state: 'ok', msg: '<b>tipstore.com/' + v + '</b> fits the username rules.' };
  }
  function initClaim(form) {
    var input = $('input', form);
    var hint = $('.claim__hint', form);
    var field = $('.claim__field', form);
    var button = $('button[type="submit"]', form);
    var idleHint = hint.innerHTML;
    var buttonHTML = button.innerHTML;
    function render(res) {
      if (res.state === 'idle') { hint.removeAttribute('data-state'); hint.innerHTML = idleHint; return; }
      hint.setAttribute('data-state', res.state);
      hint.innerHTML = ICON(res.state === 'ok' ? 'check-circle' : 'x') + '<span>' + res.msg + '</span>';
    }
    input.addEventListener('input', function () {
      var clean = input.value.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
      if (clean !== input.value) input.value = clean;
      render(checkName(clean));
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = input.value;
      var res = checkName(v);
      if (!v) {
        render({ state: 'error', msg: 'Type the name you want after tipstore.com/' });
        input.focus();
      } else {
        render(res);
      }
      if (res.state !== 'ok') {
        if (field.animate && !reduceMotion) field.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-8px)' }, { transform: 'translateX(7px)' }, { transform: 'translateX(-4px)' }, { transform: 'translateX(0)' }], { duration: 380, easing: 'ease-out' });
        return;
      }
      button.innerHTML = 'Looks good' + ICON('check');
      toast('tipstore.com/' + v + ' fits the rules. Availability is confirmed when you sign up.');
      setTimeout(function () { button.innerHTML = buttonHTML; }, 3200);
    });
  }

  /* ── Personas tabs ──────────────────────────────────────────────── */
  function initPersonas() {
    var root = $('[data-personas]');
    if (!root) return;
    var tabs = $$('[role="tab"]', root);
    var panels = $$('[role="tabpanel"]', root);
    panels.forEach(function (p) { p.hidden = false; });
    selectPersona = function (i, focus) {
      personaIndex = i;
      tabs.forEach(function (t, j) {
        var on = j === i;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        if (on && focus) t.focus();
      });
      panels.forEach(function (p, j) { p.classList.toggle('is-active', j === i); });
      var active = tabs[i];
      var list = active.parentElement;
      if (list.scrollWidth > list.clientWidth) {
        list.scrollTo({ left: active.offsetLeft - 24, behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    };
    function go(i, focus) {
      if (personaST) {
        var n = tabs.length;
        var y = personaST.start + (personaST.end - personaST.start) * (i / (n - 1)) + 2;
        selectPersona(i, focus);
        scrollToEl(y);
      } else {
        selectPersona(i, focus);
      }
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { go(i, false); });
      t.addEventListener('keydown', function (e) {
        var n = tabs.length, next = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % n;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + n) % n;
        if (e.key === 'Home') next = 0;
        if (e.key === 'End') next = n - 1;
        if (next !== null) { e.preventDefault(); go(next, true); }
      });
    });
  }

  /* ── Storefront theme playground ────────────────────────────────── */
  function initThemer() {
    var root = $('[data-themer]');
    if (!root) return;
    var store = $('[data-themed-store]', root);
    var phone = store.closest('.phone');
    function bump() {
      if (!phone.animate || reduceMotion) return;
      phone.animate([{ transform: 'scale(1)' }, { transform: 'scale(.965)' }, { transform: 'scale(1)' }], { duration: 420, easing: 'cubic-bezier(.34,1.56,.64,1)' });
    }
    $$('[data-theme-btn]', root).forEach(function (b, _, all) {
      b.addEventListener('click', function () {
        all.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        store.setAttribute('data-theme', b.getAttribute('data-theme-btn'));
        bump();
      });
    });
    $$('[data-accent]', root).forEach(function (b, _, all) {
      b.addEventListener('click', function () {
        all.forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        store.style.setProperty('--sa', b.getAttribute('data-accent'));
        store.style.setProperty('--sa-ink', b.getAttribute('data-accent-ink'));
        bump();
      });
    });
  }

  /* ── Billing period toggle ──────────────────────────────────────── */
  function swapText(el, text) {
    if (el.textContent === text) return;
    if (!el.animate || reduceMotion) { el.textContent = text; return; }
    var out = el.animate([{ transform: 'translateY(0)', opacity: 1 }, { transform: 'translateY(-35%)', opacity: 0 }], { duration: 140, easing: 'ease-in' });
    out.onfinish = function () {
      el.textContent = text;
      el.animate([{ transform: 'translateY(35%)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 }], { duration: 320, easing: 'cubic-bezier(.34,1.56,.64,1)' });
    };
  }
  function initBilling() {
    $$('[data-billing]').forEach(function (group) {
      var btns = $$('[role="radio"]', group);
      function set(period, focus) {
        btns.forEach(function (b) {
          var on = b.getAttribute('data-period') === period;
          b.setAttribute('aria-checked', String(on));
          b.tabIndex = on ? 0 : -1;
          if (on && focus) b.focus();
        });
        var yearly = period === 'year';
        $$('[data-price-month]').forEach(function (el) { swapText(el, el.getAttribute(yearly ? 'data-price-year' : 'data-price-month')); });
        $$('[data-per]').forEach(function (el) { el.textContent = yearly ? '/year' : '/month'; });
        $$('[data-note-month]').forEach(function (el) { el.textContent = el.getAttribute(yearly ? 'data-note-year' : 'data-note-month'); });
        $$('[data-billing]').forEach(function (g) {
          if (g === group) return;
          $$('[role="radio"]', g).forEach(function (b) { var on = b.getAttribute('data-period') === period; b.setAttribute('aria-checked', String(on)); b.tabIndex = on ? 0 : -1; });
        });
      }
      btns.forEach(function (b) { b.addEventListener('click', function () { set(b.getAttribute('data-period')); }); });
      group.addEventListener('keydown', function (e) {
        if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].indexOf(e.key) === -1) return;
        e.preventDefault();
        var cur = btns.findIndex(function (b) { return b.getAttribute('aria-checked') === 'true'; });
        var step = (e.key === 'ArrowLeft' || e.key === 'ArrowUp') ? -1 : 1;
        var next = btns[(cur + step + btns.length) % btns.length];
        set(next.getAttribute('data-period'), true);
      });
    });
  }

  /* ── FAQ accordion (native <details>, animated) ─────────────────── */
  var refreshTimer;
  function refreshLater() {
    clearTimeout(refreshTimer);
    refreshTimer = setTimeout(function () { if (window.ScrollTrigger) window.ScrollTrigger.refresh(); }, 480);
  }
  function initFaq() {
    $$('.qa').forEach(function (d) {
      var summary = $('summary', d);
      var body = $('.qa__body', d);
      summary.addEventListener('click', function (e) {
        refreshLater();
        if (reduceMotion || !body.animate) return;
        e.preventDefault();
        if (d.open) {
          var h = body.offsetHeight;
          var a = body.animate([{ height: h + 'px', opacity: 1 }, { height: '0px', opacity: 0 }], { duration: 300, easing: 'cubic-bezier(.65,0,.35,1)' });
          d.classList.add('is-closing');
          a.onfinish = function () { d.open = false; d.classList.remove('is-closing'); };
        } else {
          d.open = true;
          var h2 = body.offsetHeight;
          body.animate([{ height: '0px', opacity: 0 }, { height: h2 + 'px', opacity: 1 }], { duration: 440, easing: 'cubic-bezier(.16,1,.3,1)' });
        }
      });
    });
  }

  /* ── Small utilities ────────────────────────────────────────────── */
  /* Design-system page: list every icon in the sprite, and play the motion demos. */
  function initDesignSystem() {
    var grid = $('[data-icon-grid]');
    if (grid) {
      grid.innerHTML = $$('symbol[id^="i-"]').map(function (s) {
        return '<div class="ds-icon"><svg class="i" aria-hidden="true"><use href="#' + s.id + '"/></svg><span>' + s.id.slice(2) + '</span></div>';
      }).join('');
    }
    $$('[data-motion-demos] button').forEach(function (b) {
      b.addEventListener('click', function () {
        var ball = $('.ball', b), track = $('.track', b), ease = b.getAttribute('data-ease');
        if (!window.gsap || !ball || !track) return;
        var dur = ease.indexOf('power2') === 0 ? 1.6 : (ease.indexOf('back') === 0 ? 0.8 : 1.1);
        window.gsap.fromTo(ball, { x: 0 }, { x: track.offsetWidth - 44, duration: dur, ease: ease });
      });
    });
  }

  function initCopy() {
    $$('[data-copy]').forEach(function (b) {
      b.addEventListener('click', function () {
        var text = b.getAttribute('data-copy');
        var label = $('span', b);
        function done(ok) {
          label.textContent = ok ? 'Copied' : 'Select';
          toast(ok ? 'Copied ' + text : 'Select the address and press Ctrl or Cmd + C.');
          setTimeout(function () { label.textContent = 'Copy'; }, 2200);
        }
        function selectFallback() {
          var node = b.previousElementSibling;
          var range = document.createRange(); range.selectNodeContents(node);
          var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(range);
          done(false);
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function () { done(true); }, selectFallback);
        } else {
          selectFallback();
        }
      });
    });
  }

  function initCountdown() {
    var el = $('[data-countdown]');
    if (!el) return;
    var t = parseInt(el.getAttribute('data-countdown'), 10);
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    setInterval(function () {
      if (document.hidden) return;
      t = t <= 0 ? 599 : t - 1;
      el.textContent = pad(Math.floor(t / 60)) + ':' + pad(t % 60);
    }, 1000);
  }

  function initStickers() {
    $$('[data-sticker]').forEach(function (el) {
      var ox = 0, oy = 0, sx = 0, sy = 0, dragging = false;
      el.addEventListener('pointerdown', function (e) {
        dragging = true;
        el.setPointerCapture(e.pointerId);
        sx = e.clientX - ox; sy = e.clientY - oy;
        el.style.zIndex = 6;
      });
      el.addEventListener('pointermove', function (e) {
        if (!dragging) return;
        ox = e.clientX - sx; oy = e.clientY - sy;
        el.style.translate = ox + 'px ' + oy + 'px';
      });
      var stop = function () { dragging = false; };
      el.addEventListener('pointerup', stop);
      el.addEventListener('pointercancel', stop);
    });
  }

  /* ================================================================
     Motion
     ================================================================ */
  function initMotion() {
    var gsap = window.gsap;
    var ST = window.ScrollTrigger;
    var Split = window.SplitText;
    if (!gsap || !ST) { doc.classList.remove('motion'); return; }
    gsap.registerPlugin(ST);
    if (Split) gsap.registerPlugin(Split);

    if (window.Lenis && finePointer) {
      lenis = new window.Lenis({ lerp: 0.11, smoothWheel: true });
      lenis.on('scroll', ST.update);
      gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);
    }

    heroIntro(gsap);
    doc.classList.add('motion-ready');

    var fontsReady = Promise.race([
      document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve(),
      new Promise(function (r) { setTimeout(r, 1500); })
    ]);
    fontsReady.then(function () {
      splitHeadings(gsap, Split);
      reveals(gsap, ST);
      counters(gsap, ST);
      marquee(gsap, ST);
      swapScene(gsap, ST);
      stepsScene(gsap, ST);
      personasScene(gsap, ST);
      bentoScene(gsap, ST);
      dashboardScene(gsap, ST);
      trustScene(gsap, ST, Split);
      ctaScene(gsap, ST);
      flowScene(gsap);
      footerScene(gsap, ST);
      floaters(gsap, ST);
      saleLoop(gsap, ST);
      ST.refresh();
    });
    window.addEventListener('load', function () { ST.refresh(); });
  }

  function heroIntro(gsap) {
    var hero = $('.hero');
    var tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.1 } });
    tl.fromTo('.nav__bar', { y: -24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9 }, 0);
    if (!hero) {
      /* Inner pages: reveal the page hero with a simple rise. */
      tl.fromTo('[data-intro]', { y: 26, autoAlpha: 0 }, { y: 0, autoAlpha: 1, stagger: 0.08 }, 0.1);
      tl.fromTo('.page-hero .ln__in', { yPercent: 110, y: 0 }, { yPercent: 0, y: 0, stagger: 0.09, duration: 1.2, clearProps: 'transform' }, 0.1);
      tl.fromTo('.page-hero .hl__bg', { scaleX: 0 }, { scaleX: 1, duration: 0.95, ease: 'expo.inOut' }, 0.55);
      return;
    }
    tl.fromTo('.hero__badge', { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8 }, 0.1)
      .fromTo('.hero__title .ln__in', { yPercent: 110, y: 0 }, { yPercent: 0, y: 0, stagger: 0.1, duration: 1.25, clearProps: 'transform' }, 0.15)
      .fromTo('.hl__bg', { scaleX: 0 }, { scaleX: 1, duration: 0.95, ease: 'expo.inOut' }, 0.62)
      .fromTo('.hero__lede', { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, 0.55)
      .fromTo('#claim', { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, 0.66)
      .fromTo('.hero__proof', { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1 }, 0.78)
      .fromTo('.stage__portrait', { clipPath: 'inset(100% 0% 0% 0%)', autoAlpha: 1 }, { clipPath: 'inset(0% 0% 0% 0%)', autoAlpha: 1, duration: 1.4, ease: 'expo.inOut' }, 0.3)
      .fromTo('.stage__portrait img', { scale: 1.25 }, { scale: 1, duration: 1.8 }, 0.3)
      .fromTo('.stage__phone', { y: 140, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.3 }, 0.62)
      .fromTo('.stage__phone .prod', { x: 24, autoAlpha: 0 }, { x: 0, autoAlpha: 1, stagger: 0.08, duration: 0.7 }, 1.05)
      .fromTo('.stage__shape', { scale: 0, rotation: -120, x: 0, y: 0 }, { scale: 1, rotation: 0, x: 0, y: 0, stagger: 0.09, duration: 1, ease: 'back.out(2)' }, 0.95)
      .fromTo('.hero .float-card', { scale: 0.6, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, stagger: 0.16, duration: 0.85, ease: 'back.out(1.9)' }, 1.15)
      .fromTo('.hero .avatars img', { scale: 0, rotation: -40 }, { scale: 1, rotation: 0, stagger: 0.08, duration: 0.8, ease: 'back.out(2.2)' }, 0.75)
      .fromTo('.hero__sticker', { scale: 0, autoAlpha: 0, rotation: -30 }, { scale: 1, autoAlpha: 1, rotation: 0, duration: 0.9, ease: 'back.out(2.4)' }, 1.0)
      .fromTo('.stage__example', { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 }, 1.4);
  }

  function splitHeadings(gsap, Split) {
    if (!Split) return;
    $$('[data-split]').forEach(function (el) {
      Split.create(el, {
        type: 'lines', mask: 'lines', linesClass: 'split-line', autoSplit: true,
        onSplit: function (self) {
          return gsap.from(self.lines, {
            yPercent: 110, duration: 1.15, ease: 'expo.out', stagger: 0.09,
            scrollTrigger: { trigger: el, start: 'top 88%', once: true }
          });
        }
      });
    });
  }

  function reveals(gsap, ST) {
    var items = $$('[data-reveal]');
    if (!items.length) return;
    gsap.set(items, { y: 40, autoAlpha: 0 });
    ST.batch(items, {
      start: 'top 90%', once: true,
      onEnter: function (batch) {
        gsap.to(batch, { y: 0, autoAlpha: 1, duration: 1.05, ease: 'expo.out', stagger: 0.09, overwrite: true });
      }
    });
    /* safety net: anything already scrolled past gets shown */
    setTimeout(function () {
      items.forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight && getComputedStyle(el).visibility === 'hidden') gsap.to(el, { y: 0, autoAlpha: 1, duration: 0.6 });
      });
    }, 2500);
  }

  function counters(gsap, ST) {
    $$('[data-count]').forEach(function (el) {
      if (el.closest('[data-step]')) return; /* animated by its step */
      var to = parseFloat(el.getAttribute('data-count'));
      var dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
      var pre = el.getAttribute('data-prefix') || '';
      var suf = el.getAttribute('data-suffix') || '';
      var fmt = new Intl.NumberFormat('en-NG', { minimumFractionDigits: dec, maximumFractionDigits: dec });
      var obj = { v: 0 };
      var final = el.textContent;
      ST.create({
        trigger: el, start: 'top 92%', once: true,
        onEnter: function () {
          gsap.to(obj, {
            v: to, duration: 1.8, ease: 'power3.out',
            onUpdate: function () { el.textContent = pre + fmt.format(obj.v) + suf; },
            onComplete: function () { el.textContent = final; }
          });
        }
      });
    });
  }

  function marquee(gsap, ST) {
    var track = $('[data-marquee]');
    if (!track) return;
    var loop = gsap.to(track, { xPercent: -50, duration: 42, ease: 'none', repeat: -1 });
    var settle;
    ST.create({
      trigger: track, start: 'top bottom', end: 'bottom top',
      onToggle: function (self) { if (self.isActive) loop.play(); else loop.pause(); },
      onUpdate: function (self) {
        var dir = self.direction || 1;
        var boost = gsap.utils.clamp(1, 7, 1 + Math.abs(self.getVelocity()) / 260);
        gsap.to(loop, { timeScale: dir * boost, duration: 0.2, overwrite: true });
        clearTimeout(settle);
        settle = setTimeout(function () { gsap.to(loop, { timeScale: dir, duration: 1.2, ease: 'power2.out', overwrite: true }); }, 140);
      }
    });
  }

  function swapScene(gsap, ST) {
    var sec = $('[data-swap]');
    if (!sec) return;
    var mm = gsap.matchMedia();
    mm.add('(min-width: 900px) and (min-height: 700px)', function () {
      sec.classList.add('is-scene');
      var msgs = $$('.msg', sec);
      var head = $('.chat__head', sec);
      var chat = $('[data-chat]', sec);
      var order = $('[data-order]', sec);
      var rows = $$('.tl-row', order);
      var before = $('[data-swap-before]', sec);
      var after = $('[data-swap-after]', sec);
      gsap.set(msgs, { autoAlpha: 0, y: 18, scale: 0.96 });
      gsap.set(order, { autoAlpha: 0, scale: 0.82, y: 50 });
      gsap.set(rows, { autoAlpha: 0, x: -16 });
      gsap.set(after, { autoAlpha: 0, y: 34 });

      var tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
        scrollTrigger: { trigger: sec, start: 'top top', end: function () { return '+=' + Math.round(window.innerHeight * 1.9); }, pin: true, scrub: 0.8, anticipatePin: 1 }
      });
      msgs.forEach(function (m, i) { tl.to(m, { autoAlpha: 1, y: 0, scale: 1, duration: 0.5 }, i * 0.42); });
      tl.to(msgs[msgs.length - 1], { x: 6, duration: 0.08, repeat: 5, yoyo: true, ease: 'none' });
      tl.to({}, { duration: 0.35 });
      tl.to(msgs, {
        autoAlpha: 0, scale: 0.45,
        x: function () { return gsap.utils.random(-70, 70); },
        y: function () { return gsap.utils.random(-50, 50); },
        rotation: function () { return gsap.utils.random(-28, 28); },
        duration: 0.65, stagger: { each: 0.035, from: 'random' }, ease: 'power3.in'
      });
      tl.to(head, { autoAlpha: 0, duration: 0.3 }, '<');
      tl.to(chat, { autoAlpha: 0, scale: 0.94, duration: 0.45 }, '>-0.25');
      tl.to(before, { autoAlpha: 0, y: -34, duration: 0.5 }, '<');
      tl.to(order, { autoAlpha: 1, scale: 1, y: 0, duration: 0.8, ease: 'back.out(1.5)' }, '>-0.15');
      tl.to(rows, { autoAlpha: 1, x: 0, stagger: 0.14, duration: 0.4 }, '>-0.35');
      tl.to(after, { autoAlpha: 1, y: 0, duration: 0.6 }, '<');
      tl.to({}, { duration: 0.7 });
      return function () { sec.classList.remove('is-scene'); };
    });
  }

  function stepsScene(gsap, ST) {
    var rail = $('[data-rail]');
    if (rail) gsap.to(rail, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.steps__list', start: 'top 85%', end: 'bottom 55%', scrub: 0.6 } });

    function loopWhileVisible(el, tl) {
      ST.create({ trigger: el, start: 'top 88%', end: 'bottom top', onToggle: function (self) { if (self.isActive) tl.play(); else tl.pause(); } });
    }

    var s1 = $('[data-step="claim"]');
    if (s1) {
      var typed = $('[data-typed]', s1), ok = $('[data-ok]', s1), pop = $('[data-pop]', s1);
      var full = typed.getAttribute('data-typed');
      var o = { n: 0 };
      var t1 = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 1.4 });
      t1.set(o, { n: 0 })
        .set(typed, { textContent: '' })
        .set(ok, { scale: 0 })
        .set(pop, { y: 26, autoAlpha: 0 })
        .to(o, { n: full.length, duration: full.length * 0.13, ease: 'none', onUpdate: function () { typed.textContent = full.slice(0, Math.round(o.n)); } }, 0.3)
        .to(ok, { scale: 1, duration: 0.5, ease: 'back.out(3)' })
        .to(pop, { y: 0, autoAlpha: 1, duration: 0.7, ease: 'back.out(1.7)' }, '-=0.2')
        .to({}, { duration: 2.2 });
      loopWhileVisible(s1, t1);
    }

    var s2 = $('[data-step="upload"]');
    if (s2) {
      var file = $('[data-drop]', s2), bar = $('[data-bar]', s2), pub = $('[data-pop]', s2);
      var t2 = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 1.2 });
      t2.set(file, { y: -70, rotation: -8, autoAlpha: 0 })
        .set(bar, { scaleX: 0 })
        .set(pub, { scale: 0 })
        .to(file, { y: 0, rotation: 0, autoAlpha: 1, duration: 0.9, ease: 'bounce.out' }, 0.2)
        .to(bar, { scaleX: 1, duration: 1.3, ease: 'power2.inOut' }, '-=0.1')
        .to(pub, { scale: 1, duration: 0.5, ease: 'back.out(3)' })
        .to({}, { duration: 2.2 });
      loopWhileVisible(s2, t2);
    }

    var s3 = $('[data-step="paid"]');
    if (s3) {
      var notes = $$('[data-note]', s3);
      var total = $('[data-count]', s3);
      var fmt = new Intl.NumberFormat('en-NG');
      var sums = [7500, 19500, 44500];
      var t3 = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 1.2 });
      t3.set(notes, { x: 40, autoAlpha: 0 });
      t3.call(function () { total.textContent = '₦0'; });
      notes.forEach(function (n, i) {
        t3.to(n, { x: 0, autoAlpha: 1, duration: 0.6, ease: 'back.out(1.6)' }, 0.3 + i * 0.75);
        t3.call(function () { total.textContent = '₦' + fmt.format(sums[i]); }, null, 0.55 + i * 0.75);
      });
      t3.to({}, { duration: 2.4 });
      loopWhileVisible(s3, t3);
    }
  }

  function personasScene(gsap, ST) {
    var root = $('[data-personas]');
    if (!root) return;
    var n = $$('[role="tab"]', root).length;
    var mm = gsap.matchMedia();
    mm.add('(min-width: 900px) and (min-height: 700px)', function () {
      personaST = ST.create({
        trigger: root, start: 'top top', pin: true, anticipatePin: 1,
        end: function () { return '+=' + Math.round(window.innerHeight * 0.5 * (n - 1)); },
        onUpdate: function (self) {
          var i = Math.min(n - 1, Math.floor(self.progress * n));
          if (i !== personaIndex) selectPersona(i, false);
        }
      });
      return function () { personaST = null; };
    });
    gsap.from($$('.persona-tab', root), { y: 30, autoAlpha: 0, stagger: 0.06, duration: 0.9, ease: 'expo.out', scrollTrigger: { trigger: root, start: 'top 75%', once: true } });
  }

  function bentoScene(gsap, ST) {
    var bars = $('[data-bars]');
    if (bars) gsap.from($$('span', bars), { scaleY: 0, stagger: 0.07, duration: 0.9, ease: 'back.out(1.5)', scrollTrigger: { trigger: bars, start: 'top 88%', once: true } });

    var packet = $('[data-packet]');
    if (packet) {
      var wire = packet.parentElement;
      var tw = gsap.fromTo(packet, { x: 0, scale: 0.6 }, { x: function () { return wire.offsetWidth; }, scale: 1, duration: 1.6, ease: 'power2.inOut', repeat: -1, repeatDelay: 0.5, paused: true });
      /* the wire's width changes with the layout: re-measure on refresh */
      ST.addEventListener('refresh', function () { tw.invalidate(); });
      ST.create({ trigger: wire, start: 'top bottom', end: 'bottom top', onToggle: function (self) { if (self.isActive) tw.play(); else tw.pause(); } });
    }

    var themerPhone = $('[data-themer] .phone');
    if (themerPhone) gsap.from(themerPhone, { y: 80, rotation: 10, autoAlpha: 0, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: themerPhone, start: 'top 90%', once: true } });

    $$('.lib-item').forEach(function (el, i) {
      gsap.from(el, { x: -20, autoAlpha: 0, duration: 0.8, delay: i * 0.12, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true } });
    });
  }

  function dashboardScene(gsap, ST) {
    var d = $('[data-dash]');
    if (!d) return;
    var mm = gsap.matchMedia();
    mm.add('(min-width: 761px)', function () {
      gsap.fromTo(d, { rotationX: 26, y: 90, scale: 0.9, transformPerspective: 1700 }, {
        rotationX: 0, y: 0, scale: 1, ease: 'none',
        scrollTrigger: { trigger: '[data-dash-wrap]', start: 'top 98%', end: 'top 28%', scrub: 0.8 }
      });
    });
    var line = $('[data-line]', d);
    var len = line.getTotalLength ? line.getTotalLength() : 700;
    gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
    gsap.set($('.chart .area', d), { autoAlpha: 0 });
    gsap.set($$('.chart .pt, .chart .pt-last', d), { scale: 0, transformOrigin: '50% 50%' });
    gsap.set($('[data-chart-tip]', d), { autoAlpha: 0, y: 8 });
    var tl = gsap.timeline({ scrollTrigger: { trigger: d, start: 'top 72%', once: true } });
    tl.from($$('.kpi', d), { y: 18, autoAlpha: 0, stagger: 0.08, duration: 0.8, ease: 'expo.out' }, 0)
      .to(line, { strokeDashoffset: 0, duration: 1.7, ease: 'power2.inOut' }, 0.2)
      .to($('.chart .area', d), { autoAlpha: 1, duration: 0.9 }, 1.1)
      .to($$('.chart .pt, .chart .pt-last', d), { scale: 1, stagger: 0.09, duration: 0.45, ease: 'back.out(3)' }, 0.5)
      .to($('[data-chart-tip]', d), { autoAlpha: 1, y: 0, duration: 0.6, ease: 'back.out(2)' }, 1.5)
      .from($$('[data-meter]', d), { scaleX: 0, stagger: 0.12, duration: 1, ease: 'expo.out' }, 0.4)
      .from($$('.orders tbody tr', d), { autoAlpha: 0, x: -14, stagger: 0.07, duration: 0.55 }, 0.5);
  }

  function trustScene(gsap, ST, Split) {
    var el = $('[data-words]');
    if (el && Split) {
      Split.create(el, {
        type: 'words', wordsClass: 'w', autoSplit: true,
        onSplit: function (self) {
          return gsap.fromTo(self.words, { opacity: 0.14 }, { opacity: 1, stagger: 0.1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 82%', end: 'bottom 48%', scrub: true } });
        }
      });
    }
    var lock = $('[data-lock]');
    if (lock) gsap.from($$('.tip', lock), { scale: 0, rotation: -60, stagger: 0.12, duration: 0.9, ease: 'back.out(2)', scrollTrigger: { trigger: lock, start: 'top 85%', once: true } });
  }

  /* Numbered flows (Tipper, TipFix escrow): the rail fills as you scroll. */
  function flowScene(gsap) {
    $$('[data-flow]').forEach(function (flow) {
      var fill = $('[data-flow-fill]', flow);
      if (fill) gsap.fromTo(fill, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: flow, start: 'top 70%', end: 'bottom 60%', scrub: true } });
    });
  }

  function ctaScene(gsap, ST) {
    var phones = $$('.cta__phones .phone');
    if (!phones.length) return;
    gsap.from(phones, { y: 160, autoAlpha: 0, stagger: 0.12, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: '.cta__phones', start: 'top 85%', once: true } });
  }

  function footerScene(gsap, ST) {
    var w = $('[data-footer-word]');
    if (!w) return;
    gsap.from($('.footer__logo', w), { yPercent: 70, duration: 1.5, ease: 'expo.out', scrollTrigger: { trigger: w, start: 'top 95%', once: true } });
    gsap.from($$('[data-sticker]', w), { scale: 0, rotation: -40, stagger: 0.12, duration: 1, ease: 'back.out(2.2)', delay: 0.35, scrollTrigger: { trigger: w, start: 'top 90%', once: true } });
  }

  function floaters(gsap, ST) {
    $$('[data-float]').forEach(function (el, i) {
      var t = gsap.to(el, {
        y: gsap.utils.random(-16, 16), x: gsap.utils.random(-10, 10),
        duration: gsap.utils.random(2.6, 4.2), ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.6 + i * 0.2
      });
      ST.create({ trigger: el, start: 'top bottom', end: 'bottom top', onToggle: function (self) { if (self.isActive) t.resume(); else t.pause(); } });
    });
    if ($('.hero')) {
      var st = { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true };
      gsap.to('.stage__portrait', { yPercent: -7, ease: 'none', scrollTrigger: st });
      gsap.to('.stage__phone', { yPercent: -16, ease: 'none', scrollTrigger: st });
    }
  }

  function saleLoop(gsap, ST) {
    var card = $('[data-sale-card]');
    if (!card) return;
    var mailCard = $('.fc-delivered');
    var amt = $('[data-sale-amt]'), prod = $('[data-sale-prod]'), mail = $('[data-sale-mail]');
    var sales = [
      ['₦7,500', '· Budget Planner', 'Access link emailed'],
      ['₦12,000', '· Side-Hustle Guide', 'Saved to their library'],
      ['₦25,000', '· Money Habits', 'Receipt sent']
    ];
    var i = 0, timer = null;
    function next() {
      i = (i + 1) % sales.length;
      gsap.timeline()
        .to([card, mailCard], { scale: 0.86, autoAlpha: 0, duration: 0.28, ease: 'power2.in', stagger: 0.08 })
        .add(function () { amt.textContent = sales[i][0]; prod.textContent = sales[i][1]; mail.textContent = sales[i][2]; })
        .to([card, mailCard], { scale: 1, autoAlpha: 1, duration: 0.7, ease: 'back.out(2)', stagger: 0.16 });
    }
    ST.create({
      trigger: '.hero', start: 'top bottom', end: 'bottom top',
      onToggle: function (self) { clearInterval(timer); if (self.isActive) timer = setInterval(next, 3800); }
    });
  }

  /* ── Boot ───────────────────────────────────────────────────────── */
  function boot() {
    initNav();
    initMenu();
    $$('[data-claim]').forEach(initClaim);
    initPersonas();
    initThemer();
    initBilling();
    initFaq();
    initCopy();
    initDesignSystem();
    initCountdown();
    initStickers();
    if (!reduceMotion) initMotion();
    else doc.classList.remove('motion');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
