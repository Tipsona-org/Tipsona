#!/usr/bin/env python3
"""Assemble the static pages in site/ from src/.

Each page in src/pages starts with a front-matter comment (key: value lines).
The builder wraps the page body with the shared partials and fills {{tokens}}.

    python3 scripts/build-pages.py
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = "https://tipsona.netlify.app/"
SRC = ROOT / "src"
OUT = ROOT / "site"

I = lambda name, extra="": f'<svg class="i"{extra} aria-hidden="true"><use href="#i-{name}"/></svg>'

# ── Who it's for: facts from PRD chapter 2.2 ──────────────────────────────
PERSONAS = [
    ("Creators", "video-creators.webp", "Two video creators setting up a camera on a tripod outdoors",
     ["YouTubers", "Designers", "Writers", "Photographers", "Musicians", "Digital artists"],
     ["LUTs", "Lightroom presets", "Design templates", "E-books", "Stock photos", "Fonts", "Icons", "Audio packs"],
     "Monetize an existing audience through digital product sales."),
    ("Educators", "educator.webp", "A smiling teacher leaning against a wall covered in handwritten notes",
     ["Teachers", "Tutors", "Online instructors", "Subject experts", "Academic professionals"],
     ["Courses", "Lesson notes", "Practice questions", "Worksheets", "Study guides", "Examination materials"],
     "Package educational content into products students can purchase online."),
    ("Coaches", "coach.webp", "A career coach in a pinstripe blazer against a warm wooden wall",
     ["Career coaches", "Life coaches", "Relationship coaches", "Mindset coaches", "Business coaches"],
     ["Coaching frameworks", "Workbooks", "Programs", "Templates", "Video lessons"],
     "Scale beyond one-on-one coaching by selling reusable digital resources."),
    ("Consultants", "consultant.webp", "A consultant smiling while working on a laptop in a bright office",
     ["Marketing", "HR", "Legal", "Financial", "Strategy"],
     ["SOP templates", "Audit checklists", "Consulting frameworks", "Business documents", "Proposal templates"],
     "Turn consulting expertise into scalable digital products."),
    ("Trainers", "trainer.webp", "Two fitness trainers flexing and laughing in bright sportswear",
     ["Tech trainers", "Fitness trainers", "Corporate trainers", "Public speaking trainers", "Sales trainers"],
     ["Training manuals", "Exercise plans", "Video programs", "Certifications", "Slide decks"],
     "Sell training materials outside live sessions."),
    ("Digital entrepreneurs", "entrepreneur.webp", "A digital entrepreneur working on a laptop at a desk",
     ["SaaS founders", "Agency owners", "Newsletter operators", "Digital publishers", "Indie makers"],
     ["SaaS templates", "Digital toolkits", "Premium resources", "Guides", "Private downloads"],
     "Build recurring online revenue using digital products."),
]


def personas_html():
    out = []
    for n, (name, img, alt, who, sells, goal) in enumerate(PERSONAS):
        active = ' is-active' if n == 0 else ''
        hidden = '' if n == 0 else ' hidden'
        tags = lambda xs: "".join(f"<li>{x}</li>" for x in xs)
        out.append(f'''      <div class="persona{active}" id="pp-{n}" role="tabpanel" aria-labelledby="pt-{n}"{hidden}>
        <figure class="persona__photo"><img src="../assets/img/{img}" width="900" height="1125" loading="lazy" alt="{alt}"></figure>
        <div class="persona__card">
          <p class="persona__goal">{goal}</p>
          <div class="persona__group"><p class="persona__label">Who</p><ul class="tags">{tags(who)}</ul></div>
          <div class="persona__group"><p class="persona__label">What they sell</p><ul class="tags tags--solid">{tags(sells)}</ul></div>
        </div>
      </div>''')
    return "\n".join(out)


# ── Plans: facts from PRD Module 10 and chapter 13. Prices are placeholders. ──
PLANS = [
    dict(name="Free", shape="tip--circle c-flame", tagline="Designed for creators getting started.",
         suits="First-time creators, students, hobbyists and small digital businesses.",
         price="₦0", per="free plan", note="Every creator can start for free.",
         intro=None,
         items=["Your storefront", "Product uploads and sales", "Limited products", "Limited storage",
                "Basic analytics", "Standard transaction fee"],
         cta=("btn--ghost", "Start for free")),
    dict(name="Pro", shape="tip--star c-sun", tagline="Designed for creators building a sustainable business.",
         suits="Coaches, consultants, trainers, educators and full-time creators.",
         price=None, per="", note="Monthly or yearly billing.",
         intro="Everything in Free, plus:",
         items=["Unlimited products", "Increased storage", "Advanced analytics", "Coupons",
                "Lower transaction fees", "Priority support"],
         cta=("btn--flame", "Choose Pro"), featured=True),
    dict(name="Business", shape="tip--arch c-night", tagline="Designed for larger businesses and professional teams.",
         suits="Agencies, companies, training organizations and large educational brands.",
         price=None, per="", note="Monthly or yearly billing.",
         intro="Everything in Pro, plus:",
         items=["Team members", "White-label branding options", "Highest storage allocation",
                "Dedicated support", "Advanced reporting"],
         soon="Custom domain (future release)",
         cta=("btn--ink", "Choose Business")),
]


def plans_html():
    cards = []
    for p in PLANS:
        feat = p.get("featured")
        cls = "plan plan--featured on-dark" if feat else "plan"
        if p["price"]:
            price = f'<p class="plan__price"><span class="plan__amt">{p["price"]}</span><span class="plan__per">{p["per"]}</span></p>'
        else:
            price = '<p class="plan__price"><span class="plan__amt plan__amt--tbc">Price TBC</span><span class="ph-tag">Placeholder</span></p>'
        intro = f'<p class="plan__intro">{p["intro"]}</p>' if p["intro"] else ""
        items = "".join(f'<li>{I("check")}{x}</li>' for x in p["items"])
        if p.get("soon"):
            items += f'<li class="soon">{I("clock")}{p["soon"]}</li>'
        btn, label = p["cta"]
        cards.append(f'''      <article class="{cls}" data-reveal>
        <div class="plan__head">
          <p class="plan__name"><span class="tip {p["shape"]}" aria-hidden="true"></span>{p["name"]}</p>
          <p class="plan__for">{p["tagline"]}</p>
        </div>
        <div>
          {price}
          <p class="plan__note">{p["note"]}</p>
        </div>
        {intro}<ul>{items}</ul>
        <p class="plan__suits"><b>Suits</b> {p["suits"]}</p>
        <a class="btn {btn} btn--block plan__cta" href="{{{{home}}}}#claim">{label}</a>
      </article>''')
    return '    <div class="plans">\n' + "\n".join(cards) + "\n    </div>"



# ── Tipsona products (facts from the Tipsona pitch document, written for creators)
# (id, name, what you do with it, one-liner, available first?, tip shape, icon, own page)
# Products outside the first launch wave are labelled "Coming soon".
PRODUCTS = [
    ("tipstore", "TipStore", "Sell", "Sell digital products from your own storefront.", True, "tip--arch c-flame", "store", "tipstore/"),
    ("tipper", "Tipper", "Work with brands", "Get matched with brands for paid UGC work, with escrow-protected payouts.", True, "tip--circle c-lilac", "briefcase", "tipper/"),
    ("tipstar", "TipStar", "Earn every month", "Memberships, donations and exclusive content for your fans.", True, "tip--star c-sun", "heart", None),
    ("tipfix", "TipFix", "Fix problems", "Payouts, contracts, escrow and the small problems of running a digital business.", False, "tip--diamond c-blush", "wrench", "tipfix/"),
    ("tiplaunch", "TipLaunch", "Raise funds", "Crowdfunding and community-backed capital for your projects.", False, "tip--pill c-mint", "rocket", None),
    ("tipmarket", "TipMarket", "Get discovered", "A marketplace where audiences discover creators, products and projects.", False, "tip--square c-lilac", "compass", None),
    ("tipads", "TipAds", "Earn from ads", "Brand distribution through sponsored content, placements and campaigns.", False, "tip--tri c-flame", "megaphone", None),
    ("tipai", "TipAI", "Get help", "An AI assistant that understands your Tipsona business and helps you run it.", False, "tip--star c-lilac", "spark", None),
    ("tipinsights", "TipInsights", "See what works", "One picture of your audience, content, sales, memberships and brand deals.", False, "tip--square c-sun", "chart", None),
]
ACC = {"c-flame": "acc-flame", "c-lilac": "acc-lilac", "c-sun": "acc-sun", "c-blush": "acc-blush", "c-mint": "acc-mint"}


# Small product illustrations for the first-launch cards (decorative, example data)
MINI_UI = {
    "tipstore": """<span class="mini-url"><svg class="i"><use href="#i-lock"/></svg>tipstore.com/yourname</span>
          <span class="mini-row"><span class="prod__thumb cover-sun"><svg class="i" style="--acc:var(--paper)"><use href="#i-template"/></svg></span><span class="mini-row__t"><b>Budget Planner</b><small>Template · PDF</small></span><b class="mini-row__p">₦7,500</b></span>
          <span class="mini-btn"><span class="swap-a">Buy now</span><span class="swap-b"><svg class="i"><use href="#i-check"/></svg>Payment verified</span></span>""",
    "tipper": """<span class="mini-status"><b>Short-form UGC video</b><span class="mini-swap"><span class="swap-a pill pill--success pill--dot">Escrow funded</span><span class="swap-b pill pill--success pill--dot">Paid out</span></span></span>
          <span class="mini-check is-done"><svg class="i"><use href="#i-check"/></svg>Brand funds the campaign</span>
          <span class="mini-check is-done"><svg class="i"><use href="#i-check"/></svg>You apply with a pitch</span>
          <span class="mini-check mini-check--last"><svg class="i"><use href="#i-check"/></svg>Brand approves, you get paid</span>""",
    "tipstar": """<span class="mini-row"><span class="prod__thumb cover-lilac"><svg class="i" style="--acc:var(--paper)"><use href="#i-users"/></svg></span><span class="mini-row__t"><b>Membership</b><small>For your fans</small></span><span class="mini-join"><span class="swap-a">Join</span><span class="swap-b">Joined</span></span></span>
          <span class="mini-row"><span class="prod__thumb cover-night"><svg class="i" style="--acc:var(--night-3)"><use href="#i-lock"/></svg></span><span class="mini-row__t"><b>Exclusive content</b><small>Members only</small></span></span>
          <span class="mini-chip"><svg class="i"><use href="#i-heart"/></svg>Send a donation</span>""",
}
ART = {"tipstore": "art-flame", "tipper": "art-lilac", "tipstar": "art-sun"}


def eco_grid(on_products_page):
    """First-launch products get one look (feature cards with an illustration);
    everything coming later gets another (compact cards in one panel)."""
    def link(pid, name, page):
        if on_products_page:
            return f"#{pid}", "Details"
        if page:
            return "{{root}}" + page, f"Visit {name}"
        return "{{root}}products.html#" + pid, "Learn more"
    go_icon = '<svg class="i" aria-hidden="true"><use href="#i-arrow-right"/></svg>'
    launch, soon = [], []
    for pid, name, verb, line, first, shape, icon, page in PRODUCTS:
        href, go = link(pid, name, page)
        acc = ACC[shape.split()[1]]
        if first:
            launch.append(f"""      <a class="launch-card" href="{href}" data-reveal>
        <span class="launch-card__art {ART[pid]}" aria-hidden="true"><span class="mini-ui">
          {MINI_UI[pid]}
        </span></span>
        <span class="launch-card__body">
          <span class="launch-card__name"><span class="icon-tile {acc}"><svg class="i" aria-hidden="true"><use href="#i-{icon}"/></svg></span>{name}</span>
          <span class="eco-card__layer"><span class="tip {shape}" aria-hidden="true"></span>{verb}</span>
          <span class="eco-card__line">{line}</span>
          <span class="eco-card__go">{go}{go_icon}</span>
        </span>
      </a>""")
        else:
            soon.append(f"""        <a class="soon-card" href="{href}">
          <span class="soon-card__top"><span class="icon-tile {acc}"><svg class="i" aria-hidden="true"><use href="#i-{icon}"/></svg></span><span class="soon-card__name">{name}<span class="eco-card__layer"><span class="tip {shape}" aria-hidden="true"></span>{verb}</span></span></span>
          <span class="eco-card__line">{line}</span>
          <span class="eco-card__go">{go}{go_icon}</span>
        </a>""")
    return ('    <p class="eco-group">Launching first</p>\n'
            '    <div class="launch-grid">\n' + "\n".join(launch) + "\n    </div>\n"
            '    <div class="soon-panel" data-reveal>\n'
            '      <div class="soon-panel__head"><p class="eco-group eco-group--soon">Coming soon</p><p class="soon-panel__note">More ways to earn, on the same account.</p></div>\n'
            '      <div class="soon-grid">\n' + "\n".join(soon) + "\n      </div>\n    </div>")


def tab_ticker(spec, label):
    """A ticker that sits in a light tab notched into the dark section below (Plerouse)."""
    items = [x.strip() for x in spec.split(";") if x.strip()] * 2  # doubled so one list always overflows the tab
    def lis(hidden):
        sep = '<li class="sep"{}><span class="tip tip--star c-flame"></span></li>'.format("" if hidden else ' aria-hidden="true"')
        return "".join(f"<li>{x}</li>{sep}" for x in items)
    return f"""<section class="ticker ticker--tab" aria-label="{label}">
  <div class="ticker__tab">
    <div class="ticker__track" data-marquee>
      <ul class="ticker__list">{lis(False)}</ul>
      <ul class="ticker__list" aria-hidden="true">{lis(True)}</ul>
    </div>
  </div>
</section>"""


# ── Product nav: "links: Label|href; Label|href" in the front matter ───────
SHAPES = ["tip--square c-lilac", "tip--star c-sun", "tip--circle c-flame", "tip--pill c-mint", "tip--diamond c-blush"]


def nav_links(spec):
    items = [x.split("|") for x in spec.split(";") if x.strip()]
    bar, menu = [], []
    for n, (label, href) in enumerate(items):
        label, href, shape = label.strip(), href.strip(), SHAPES[n % len(SHAPES)]
        bar.append(f'        <li><a href="{href}"><span class="tip {shape}" aria-hidden="true"></span>{label}</a></li>')
        menu.append(f'    <li><a class="mm-link" href="{href}">{label} <span class="tip {shape}" aria-hidden="true"></span></a></li>')
    return "\n".join(bar), "\n".join(menu)


# ── Assembly ───────────────────────────────────────────────────────────────
def front_matter(text):
    m = re.match(r"\s*<!--(.*?)-->\s*", text, re.S)
    meta = {}
    for line in m.group(1).strip().splitlines():
        k, _, v = line.partition(":")
        meta[k.strip()] = v.strip()
    return meta, text[m.end():]


def partial(name):
    return (SRC / "partials" / f"{name}.html").read_text()


def build(page):
    meta, body = front_matter(page.read_text())
    nav = partial(f"nav-{meta.get('nav', 'tipstore')}")
    html = partial("head") + partial("logo") + "\n" + nav + "\n\n" + body + "\n" + partial("footer") + "\n</body>\n</html>\n"
    pre = meta.get("preload")
    tokens = {
        "personas": personas_html(),
        "ecosystem_grid": eco_grid(meta.get("grid") == "anchors"),
        "tab_ticker": tab_ticker(meta.get("ticker", ""), meta.get("ticker_label", "What Tipsona offers")),
        "plans": plans_html(),
        "title": meta["title"],
        "description": meta["description"],
        "footer_pitch": meta.get("footer_pitch", ""),
        "preload": f'<link rel="preload" href="{{{{root}}}}assets/img/{pre}" as="image" fetchpriority="high">\n' if pre else "",
        "pricing_current": ' aria-current="page"' if meta.get("current") == "pricing" else "",
        # absolute URLs for link previews (placeholder domain until the real one is chosen)
        "site": SITE,
        "canonical": SITE + re.sub(r"(^|/)index\.html$", r"\1", str(page.relative_to(SRC / "pages"))),
        "robots": '<meta name="robots" content="noindex">\n' if meta.get("robots") == "noindex" else "",
    }
    if "links" in meta:
        tokens["navlinks"], tokens["menulinks"] = nav_links(meta["links"])
    for k, v in tokens.items():
        html = html.replace("{{" + k + "}}", v)
    # other front-matter values (product name, CTA), then path tokens last,
    # since the snippets above use them too
    paths = ("root", "home", "pricing", "hubhome")
    for k, v in meta.items():
        if k not in paths:
            html = html.replace("{{" + k + "}}", v)
    for k in paths:
        html = html.replace("{{" + k + "}}", meta.get(k, ""))
    left = re.findall(r"\{\{\w+\}\}", html)
    assert not left, f"{page}: unfilled tokens {left}"
    dest = OUT / page.relative_to(SRC / "pages")
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(html)
    print("built", dest.relative_to(ROOT))


if __name__ == "__main__":
    for page in sorted((SRC / "pages").rglob("*.html")):
        build(page)
