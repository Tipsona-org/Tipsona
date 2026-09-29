/*
  Tipsona icon set — one source of truth for every page.
  Grid: 24 × 24, stroke 1.75, round caps and joins, drawn in currentColor.
  Duotone: each product icon carries one "tip shape" accent behind the line work
  (arch = storefront, square = product, star = knowledge, pill = money,
  circle = people/insight, diamond = trust). Colour it with --acc on the <svg>.
  Usage: <svg class="i" aria-hidden="true"><use href="#i-store"/></svg>
*/
(function () {
  var A = 'style="fill:var(--acc,none);stroke:none"';
  var D = 'style="fill:currentColor;stroke:none"';
  var icons = {
    /* ── product icons (with accent shape) ─────────────────────────── */
    store:
      '<path ' + A + ' d="M7.6 20v-3.9a4.4 4.4 0 0 1 8.8 0V20z"/>' +
      '<path d="M4.25 10.6V19.4c0 .33.27.6.6.6h14.3c.33 0 .6-.27.6-.6v-8.8"/>' +
      '<path d="M3 9.6 4.7 4.5a.75.75 0 0 1 .71-.5h13.18c.32 0 .6.2.71.5L21 9.6"/>' +
      '<path d="M3 9.6a2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 0 0 4.5 0"/>' +
      '<path d="M9.6 20v-3.1a2.4 2.4 0 0 1 4.8 0V20"/>',
    file:
      '<rect ' + A + ' x="2.75" y="9.5" width="9.5" height="9.5" rx="2.4"/>' +
      '<path d="M14 3.5H7.6a2.1 2.1 0 0 0-2.1 2.1v12.8a2.1 2.1 0 0 0 2.1 2.1h8.8a2.1 2.1 0 0 0 2.1-2.1V8z"/>' +
      '<path d="M14 3.5V8h4.5M9 12.75h6M9 16.25h4"/>',
    upload:
      '<rect ' + A + ' x="2.75" y="9.5" width="9.5" height="9.5" rx="2.4"/>' +
      '<path d="M14 3.5H7.6a2.1 2.1 0 0 0-2.1 2.1v12.8a2.1 2.1 0 0 0 2.1 2.1h8.8a2.1 2.1 0 0 0 2.1-2.1V8z"/>' +
      '<path d="M14 3.5V8h4.5M12 17.25v-5.5M9.75 13.75 12 11.5l2.25 2.25"/>',
    bolt:
      '<path ' + A + ' d="M6.5 2.5c.35 2.55 1.95 4.15 4.5 4.5-2.55.35-4.15 1.95-4.5 4.5-.35-2.55-1.95-4.15-4.5-4.5 2.55-.35 4.15-1.95 4.5-4.5z"/>' +
      '<path d="M13.4 3.2 6 13.3a.5.5 0 0 0 .4.8h4.85l-.9 6.7 7.4-10.1a.5.5 0 0 0-.4-.8H12.5z"/>',
    card:
      '<rect ' + A + ' x="12" y="12.6" width="7.5" height="4.4" rx="2.2"/>' +
      '<rect x="3" y="5.5" width="18" height="13" rx="2.6"/>' +
      '<path d="M3 9.75h18M6.75 14.75h3"/>',
    naira:
      '<rect ' + A + ' x="2.5" y="8" width="11" height="8" rx="4"/>' +
      '<circle cx="12" cy="12" r="8.5"/>' +
      '<path d="M9.2 16.4V7.6l5.6 8.8V7.6M7.4 10.9h9.2M7.4 13.1h9.2"/>',
    chart:
      '<circle ' + A + ' cx="16.5" cy="15.5" r="4.25"/>' +
      '<path d="M4 4.5v14.9c0 .33.27.6.6.6H20"/>' +
      '<path d="m7.5 15 3.4-4.1 3 2.6L19 7.6M15.8 7.6H19v3.2"/>',
    wallet:
      '<rect ' + A + ' x="11.5" y="10.9" width="10" height="5.6" rx="2.8"/>' +
      '<path d="M17 5H6.2A2.2 2.2 0 0 0 4 7.2v10.3c0 .83.67 1.5 1.5 1.5h13a1.5 1.5 0 0 0 1.5-1.5V10a1.5 1.5 0 0 0-1.5-1.5H6.2A2.2 2.2 0 0 1 4 6.3"/>' +
      '<path d="M17 5v3.5"/><circle ' + D + ' cx="16.2" cy="13.75" r="1.15"/>',
    bank:
      '<rect ' + A + ' x="7" y="10" width="10" height="6.5" rx="1.6"/>' +
      '<path d="M3.5 9.25 12 4.5l8.5 4.75M5.25 9.75v7.5M9.75 9.75v7.5M14.25 9.75v7.5M18.75 9.75v7.5M3.5 20h17"/>',
    shield:
      '<rect ' + A + ' x="8.1" y="8.1" width="7.8" height="7.8" rx="1.7" transform="rotate(45 12 12)"/>' +
      '<path d="M12 3.4 5 6.2v5.1c0 4.35 2.9 7.8 7 9.2 4.1-1.4 7-4.85 7-9.2V6.2z"/>' +
      '<path d="m9.1 12.2 2.1 2.1 3.9-4.1"/>',
    lock:
      '<rect ' + A + ' x="9" y="12.5" width="6" height="6" rx="1.4" transform="rotate(45 12 15.5)"/>' +
      '<rect x="4.75" y="10.25" width="14.5" height="10.25" rx="2.6"/>' +
      '<path d="M8.25 10.25V7.75a3.75 3.75 0 0 1 7.5 0v2.5M12 14.25v2.5"/>',
    users:
      '<circle ' + A + ' cx="9" cy="8.5" r="4.75"/>' +
      '<circle cx="9" cy="8.5" r="3.4"/>' +
      '<path d="M3.4 19.6a5.6 5.6 0 0 1 11.2 0M15.6 5.3a3.4 3.4 0 0 1 0 6.4M17.6 14.3a5.6 5.6 0 0 1 3 5.3"/>',
    link:
      '<rect ' + A + ' x="3.8" y="9.4" width="16.4" height="5.2" rx="2.6" transform="rotate(-45 12 12)"/>' +
      '<path d="M10.1 13.9a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-.95.95"/>' +
      '<path d="M13.9 10.1a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l.95-.95"/>',
    mail:
      '<rect ' + A + ' x="12.5" y="11" width="7.5" height="6.75" rx="1.8"/>' +
      '<rect x="3" y="5.5" width="18" height="13" rx="2.6"/>' +
      '<path d="m4.2 7.6 6.9 5a1.5 1.5 0 0 0 1.8 0l6.9-5"/>',
    library:
      '<rect ' + A + ' x="2.5" y="8" width="8" height="12" rx="1.8"/>' +
      '<rect x="4" y="4.5" width="4.6" height="15" rx="1.1"/>' +
      '<rect x="10.2" y="4.5" width="4.6" height="15" rx="1.1"/>' +
      '<rect x="16" y="5.2" width="4.3" height="14.4" rx="1.1" transform="rotate(-13 18.1 12.4)"/>',
    palette:
      '<circle ' + A + ' cx="10" cy="10" r="5.5"/>' +
      '<path d="M12 3.5a8.5 8.5 0 1 0 0 17c1.15 0 1.85-.95 1.5-1.95l-.3-.85a1.5 1.5 0 0 1 1.42-2h2.1a3.78 3.78 0 0 0 3.78-3.78C20.5 7.3 16.7 3.5 12 3.5z"/>' +
      '<circle ' + D + ' cx="8" cy="11.2" r="1.15"/><circle ' + D + ' cx="10.4" cy="7.6" r="1.15"/><circle ' + D + ' cx="14.6" cy="7.8" r="1.15"/>',
    search:
      '<circle ' + A + ' cx="11" cy="11" r="4.6"/>' +
      '<circle cx="11" cy="11" r="6.6"/><path d="m20 20-4.3-4.3"/>',
    receipt:
      '<rect ' + A + ' x="8" y="9.5" width="8.5" height="8.5" rx="2"/>' +
      '<path d="M6.1 3.5h11.8c.33 0 .6.27.6.6v16a.35.35 0 0 1-.55.28L16 19l-2 1.4-2-1.4-2 1.4L8 19l-1.95 1.38a.35.35 0 0 1-.55-.28v-16c0-.33.27-.6.6-.6z"/>' +
      '<path d="M9 8.25h6M9 11.75h6M9 15.25h3.2"/>',
    download:
      '<rect ' + A + ' x="7" y="3" width="10" height="9.5" rx="2.2"/>' +
      '<path d="M12 4.25v10.5M7.75 10.5 12 14.75l4.25-4.25M4.5 16.25v2.25c0 .83.67 1.5 1.5 1.5h12c.83 0 1.5-.67 1.5-1.5v-2.25"/>',
    spark:
      '<path ' + A + ' d="M12 3c.62 4.6 3.4 7.38 8 8-4.6.62-7.38 3.4-8 8-.62-4.6-3.4-7.38-8-8 4.6-.62 7.38-3.4 8-8z"/>' +
      '<path d="M12 3c.62 4.6 3.4 7.38 8 8-4.6.62-7.38 3.4-8 8-.62-4.6-3.4-7.38-8-8 4.6-.62 7.38-3.4 8-8z"/>',
    template:
      '<rect ' + A + ' x="3.5" y="9" width="6.5" height="11" rx="1.4"/>' +
      '<rect x="3.5" y="4" width="17" height="16" rx="2.2"/><path d="M3.5 9h17M10 9v11"/>',
    video:
      '<path ' + A + ' d="M6 8.6v6.8a.5.5 0 0 0 .77.42l5.1-3.4a.5.5 0 0 0 0-.84l-5.1-3.4A.5.5 0 0 0 6 8.6z"/>' +
      '<rect x="3" y="6" width="13" height="12" rx="2.6"/>' +
      '<path d="m16 10.4 4.2-2.55a.5.5 0 0 1 .8.43v7.44a.5.5 0 0 1-.8.43L16 13.6"/>',
    book:
      '<rect ' + A + ' x="7.5" y="6.5" width="9" height="7" rx="1.6"/>' +
      '<path d="M4.5 5.6A1.6 1.6 0 0 1 6.1 4h13.4v13H6.1a1.6 1.6 0 0 0-1.6 1.6z"/>' +
      '<path d="M4.5 18.4c0 .88.72 1.6 1.6 1.6h13.4v-3"/>',
    headphones:
      '<rect ' + A + ' x="2.5" y="12" width="7" height="9" rx="2.4"/>' +
      '<path d="M4 15.25v-3.1a8 8 0 0 1 16 0v3.1"/>' +
      '<rect x="3.5" y="13.5" width="4.5" height="6.75" rx="1.8"/><rect x="16" y="13.5" width="4.5" height="6.75" rx="1.8"/>',
    clock:
      '<circle ' + A + ' cx="12" cy="12" r="5.5"/>' +
      '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    bell:
      '<circle ' + A + ' cx="16.5" cy="6.5" r="3.6"/>' +
      '<path d="M6 10.2a6 6 0 0 1 12 0c0 4.9 2 6.3 2 6.3H4s2-1.4 2-6.3M10 19.6a2.2 2.2 0 0 0 4 0"/>',
    share:
      '<rect ' + A + ' x="4" y="12" width="9" height="8.5" rx="2"/>' +
      '<path d="M12 14.75V4M8.25 7.5 12 3.75l3.75 3.75M8.5 10.5H7a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-1.5-1.5h-1.5"/>',
    chat:
      '<rect ' + A + ' x="3" y="6.5" width="11" height="6" rx="3"/>' +
      '<path d="M20 11.5a7.5 7.5 0 0 1-11.05 6.6L4.5 19.5l1.35-4.1A7.5 7.5 0 1 1 20 11.5z"/>',
    tag:
      '<rect ' + A + ' x="4" y="9.3" width="11" height="5.4" rx="2.7" transform="rotate(-45 9.5 12)"/>' +
      '<path d="M3.75 4.9v5.2c0 .4.16.78.44 1.06l8.4 8.4a1.5 1.5 0 0 0 2.12 0l4.9-4.9a1.5 1.5 0 0 0 0-2.12l-8.4-8.4a1.5 1.5 0 0 0-1.06-.44H4.9c-.64 0-1.15.52-1.15 1.15z"/>' +
      '<circle ' + D + ' cx="8" cy="8" r="1.2"/>',
    globe:
      '<circle ' + A + ' cx="12" cy="12" r="5.2"/>' +
      '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.3 2.4 3.4 5.2 3.4 8.5s-1.1 6.1-3.4 8.5c-2.3-2.4-3.4-5.2-3.4-8.5s1.1-6.1 3.4-8.5z"/>',
    home:
      '<rect ' + A + ' x="9" y="12" width="6" height="8" rx="1.4"/>' +
      '<path d="M4 10.4 12 4l8 6.4v8.8a.8.8 0 0 1-.8.8H15v-5.5H9V20H4.8a.8.8 0 0 1-.8-.8z"/>',
    box:
      '<rect ' + A + ' x="4" y="8" width="8" height="9" rx="1.6"/>' +
      '<path d="M12 3.5 20 7.5v9l-8 4-8-4v-9zM4 7.5l8 4 8-4M12 11.5v9"/>',
    bag:
      '<rect ' + A + ' x="6.5" y="12" width="11" height="6.5" rx="3.25"/>' +
      '<path d="M5.4 8h13.2l-1.1 12H6.5zM9 8V6.6a3 3 0 0 1 6 0V8"/>',
    sliders:
      '<circle ' + A + ' cx="16" cy="7" r="3.4"/>' +
      '<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>',
    copy:
      '<rect ' + A + ' x="4.5" y="4.5" width="8" height="8" rx="1.8"/>' +
      '<rect x="8.5" y="8.5" width="11" height="11" rx="2.2"/><path d="M15.5 8.5V6A1.5 1.5 0 0 0 14 4.5H6A1.5 1.5 0 0 0 4.5 6v8A1.5 1.5 0 0 0 6 15.5h2.5"/>',

    /* ── utility glyphs (no accent) ───────────────────────────────── */
    check: '<path d="m5 12.5 4.4 4.4L19 7.4"/>',
    'check-circle': '<circle cx="12" cy="12" r="8.5"/><path d="m8.3 12.2 2.5 2.5 4.9-5"/>',
    x: '<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
    minus: '<path d="M5 12h14"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    'arrow-right': '<path d="M4.5 12h15M13.5 6l6 6-6 6"/>',
    'arrow-up-right': '<path d="M7 17 17 7M8.5 7H17v8.5"/>',
    'arrow-down': '<path d="M12 4.5v15M6 13.5l6 6 6-6"/>',
    'chevron-down': '<path d="m6 9.5 6 6 6-6"/>',
    menu: '<path d="M4 8.5h16M4 15.5h16"/>',
    dot: '<circle ' + D + ' cx="12" cy="12" r="4"/>',
    trend: '<path d="m4 16 5-5 3.5 3.5L20 7M15 7h5v5"/>',
    paperclip: '<path d="m19.5 11.4-7.3 7.3a4.6 4.6 0 0 1-6.5-6.5l7.9-7.9a3 3 0 0 1 4.3 4.3l-7.9 7.9a1.5 1.5 0 0 1-2.1-2.1l7.3-7.3"/>',
    signal: '<path d="M4 18v-2M9 18v-5M14 18V9M19 18V5"/>',
    battery: '<rect x="3" y="7.5" width="16" height="9" rx="2.5"/><path d="M21 11v2"/><rect ' + D + ' x="5" y="9.5" width="10" height="5" rx="1.2"/>',

    /* ── ecosystem ─────────────────────────────────────────────────── */
    heart:
      '<circle ' + A + ' cx="15.5" cy="9" r="3.6"/>' +
      '<path d="M12 19.5s-7.5-4.4-7.5-10a4.1 4.1 0 0 1 7.5-2.3 4.1 4.1 0 0 1 7.5 2.3c0 5.6-7.5 10-7.5 10z"/>',
    rocket:
      '<rect ' + A + ' x="4" y="15.5" width="7" height="4" rx="2"/>' +
      '<path d="M14.5 4.5c2.7-.9 4.8-.9 5-.9 0 .2 0 2.3-.9 5l-6.3 6.3-3.2-3.2zM11.3 8.4H7.4l-2.4 2.4 3.8 1M15.6 12.7v3.9l-2.4 2.4-1-3.8"/><circle cx="15.9" cy="8.1" r="1.3"/>',
    megaphone:
      '<rect ' + A + ' x="5" y="13.5" width="5" height="6" rx="2.5"/>' +
      '<path d="M4 9.5v4c0 .55.45 1 1 1h3l8 4.5V4.5L8 9H5c-.55 0-1 .45-1 1zM8 14.5l1.2 5M19.5 9.5v3.5"/>',
    compass:
      '<path ' + A + ' d="m12 4.5 2.1 5.4L19.5 12l-5.4 2.1L12 19.5l-2.1-5.4L4.5 12l5.4-2.1z"/>' +
      '<circle cx="12" cy="12" r="8.5"/><path d="m15 9-1.9 4.1L9 15l1.9-4.1z"/>',
    wrench:
      '<circle ' + A + ' cx="7" cy="17" r="3.5"/>' +
      '<path d="M14.6 4.1a4.6 4.6 0 0 0-5.8 5.8l-5 5a2 2 0 0 0 2.8 2.8l5-5a4.6 4.6 0 0 0 5.8-5.8l-2.8 2.8-2.4-.4-.4-2.4z"/>',
    briefcase:
      '<rect ' + A + ' x="9" y="11" width="6" height="5" rx="1.5"/>' +
      '<rect x="3.5" y="7" width="17" height="12.5" rx="2.5"/><path d="M9 7V5.5c0-.55.45-1 1-1h4c.55 0 1 .45 1 1V7M3.5 12.5h17"/>',
    truck:
      '<circle ' + A + ' cx="17" cy="17.5" r="2.6"/>' +
      '<path d="M3 6.5h11v10H3zM14 9.5h3.5l3.5 3.5v3.5h-3M9.5 16.5h5"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
    pen:
      '<rect ' + A + ' x="4" y="16" width="9" height="4" rx="2"/>' +
      '<path d="m15.5 4.5 4 4L9 19H5v-4zM13 7l4 4M4 20.5h16"/>',
    loop:
      '<circle ' + A + ' cx="12" cy="12" r="3.5"/>' +
      '<path d="M19.5 12a7.5 7.5 0 0 1-12.8 5.3M4.5 12a7.5 7.5 0 0 1 12.8-5.3M17.3 3.5v3.2h-3.2M6.7 20.5v-3.2h3.2"/>',
    eye:
      '<circle ' + A + ' cx="12" cy="12" r="3.4"/>' +
      '<path d="M2.8 12S6 5.5 12 5.5 21.2 12 21.2 12 18 18.5 12 18.5 2.8 12 2.8 12z"/><circle cx="12" cy="12" r="2.2"/>',
    map:
      '<circle ' + A + ' cx="12" cy="9.5" r="3.2"/>' +
      '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.2"/>',

    /* ── social ───────────────────────────────────────────────────── */
    instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle ' + D + ' cx="17.1" cy="6.9" r="1.1"/>',
    tiktok: '<path d="M14.2 3.5v11.2a3.7 3.7 0 1 1-3.7-3.7"/><path d="M14.2 3.5a4.7 4.7 0 0 0 4.7 4.7"/>',
    xsocial: '<path d="M4.5 4h4.3l10.7 16h-4.3zM19.2 4l-6.3 7.1M4.8 20l6.3-7.1"/>',
    linkedin: '<rect x="3.5" y="3.5" width="17" height="17" rx="3.5"/><path d="M8 10.5V16M8 7.6v.01M11.6 16v-5.5M11.6 13.1a2.6 2.6 0 0 1 5.2 0V16"/>',
    youtube: '<rect x="2.5" y="5.5" width="19" height="13" rx="4.2"/><path ' + D + ' d="M10.3 9.3v5.4l4.6-2.7z"/>'
  };

  var out = '<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true" focusable="false">';
  for (var name in icons) {
    out += '<symbol id="i-' + name + '" viewBox="0 0 24 24">' + icons[name] + '</symbol>';
  }
  out += '</svg>';
  var mount = document.body || document.documentElement;
  mount.insertAdjacentHTML('afterbegin', out);
})();
