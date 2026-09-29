#!/usr/bin/env python3
"""Assemble the static pages in site/ from src/.

Each page in src/pages starts with a front-matter comment (key: value lines).
The builder wraps the page body with the shared partials and fills {{tokens}}.

    python3 scripts/build-pages.py
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
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
        "plans": plans_html(),
        "title": meta["title"],
        "description": meta["description"],
        "footer_pitch": meta.get("footer_pitch", ""),
        "preload": f'<link rel="preload" href="{{{{root}}}}assets/img/{pre}" as="image" fetchpriority="high">\n' if pre else "",
        "pricing_current": ' aria-current="page"' if meta.get("current") == "pricing" else "",
    }
    for k, v in tokens.items():
        html = html.replace("{{" + k + "}}", v)
    # path tokens last, since the snippets above use them too
    for k in ("root", "home", "pricing", "hubhome"):
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
