#!/usr/bin/env python3
"""Build the SEO pages: the app cost guide and the "apps for <sector>" pages.

Run from the repo root:  python3 tools/build_pages.py
Writes site/app-cost/index.html, site/apps-for/index.html and
site/apps-for/<slug>/index.html, then rewrites site/sitemap.xml.
Edit the content below and re-run; the pages share site/pages.css.
"""
import html
import json
import os
from datetime import date

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "site")
BASE = "https://apps.reth.com"
TODAY = date.today().isoformat()

TIERS = {
    "starter": dict(name="Starter", was="£3,000", now="£2,250", n=2250,
                    sub="Your website content, as a polished iPhone app",
                    items=["Menus, services, prices and opening hours", "Bookings and links into your current systems",
                           "Maps, directions and tap-to-call", "Published on the App Store"]),
    "standard": dict(name="Standard", was="£6,000", now="£3,900", n=3900,
                     sub="For businesses with regulars, members or subscribers",
                     items=["Everything in Starter", "Customer accounts and logins", "Loyalty cards, memberships or passes",
                            "Push notifications for offers and reminders", "Android version or web app"]),
    "custom": dict(name="Custom", was="£12,000", now="£6,000", n=6000,
                   sub="When the app is part of how you run the business",
                   items=["Everything in Standard", "In-app payments and ordering", "Apple Watch and other devices",
                          "Integrations with your booking or stock systems"]),
}

SECTORS = [
    dict(
        slug="cafes", nav="Cafés",
        title="Apps for Cafés and Coffee Shops | High Street Apps",
        desc="A branded iPhone app for your café or coffee shop: digital loyalty card, order ahead, today's menu and offers. Built from your website, free concept first, from £2,250.",
        h1='An app for your <span class="hl">café.</span>', thin="Coffee shops, bakeries and tea rooms",
        lede="Swap the paper stamp card for one that lives on your regulars' phones, let them order ahead on the way in, and tell them when the cinnamon buns come out of the oven. It's built from the menu and opening hours you already have online.",
        app=dict(name="Tidewater Coffee", kicker="Good morning, Sam", accent="#2f4b3f", accent_ink="#fdf6e9", bg="#f5efe6",
                 card=dict(kind="stamps", small="Loyalty card", title="3 more for a free coffee", on=7, total=10),
                 rows=[("Order ahead", "Ready 8:12"), ("Today's bakes", "6 items"), ("Oat milk", "No charge")],
                 tabs=["Home", "Order", "Card", "Visit"], on=2),
        feats=[
            ("A loyalty card they can't lose", "Stamps are added at the counter in seconds, nobody forgets their card, and for the first time you can see who your regulars actually are."),
            ("Order ahead, skip the queue", "Customers order on the way and collect at the counter. Great for the commuter rush, when the queue is what loses you sales."),
            ("Your menu, always current", "Prices, specials and allergens come from the same place as your website, so you change them once and both update."),
            ("Offers that fill quiet hours", "Send a push message on a slow, rainy afternoon, or remind lapsed regulars they're one stamp off a free drink."),
            ("Find us, any branch", "Opening hours, directions and tap-to-call for each site, with holiday hours you can update yourself."),
            ("Subscriptions and gift cards", "Coffee subscriptions, bean deliveries or digital gift cards, if you want the app to bring in money between visits."),
        ],
        tier="standard",
        tier_why="Most cafés want the loyalty card and push messages, which is the Standard tier. If you only want your menu, hours and directions in an app, Starter covers it. Ordering and paying inside the app is Custom.",
        faqs=[
            ("Is an app worth it for a single café?", "It can be, if a big share of your takings comes from regulars. A loyalty card that brings each regular back one extra time a month usually covers the upkeep many times over. The free concept is there so you can judge it before spending anything."),
            ("Will it work with my till?", "Many card machines and tills can share orders and loyalty with an app. I'll check what yours supports while I make the free concept, and tell you plainly if it can't."),
            ("Will customers really download it?", "Regulars will, especially when the app is the loyalty card. A sign by the till and a free drink for downloading does most of the work."),
            ("How do I change the menu?", "The app reads the menu from the same source as your website, so you update it in one place. Upkeep also covers small changes, if you'd rather I did it."),
        ],
    ),
    dict(
        slug="gyms-and-climbing-walls", nav="Gyms & climbing walls",
        title="Apps for Gyms, Studios and Climbing Walls | High Street Apps",
        desc="A branded app for your gym, studio or climbing centre: membership pass, class and session booking, live busyness and new-route alerts. Free concept first, from £2,250.",
        h1='An app for your <span class="hl">gym.</span>', thin="Gyms, studios and climbing walls",
        lede="Members get their pass, bookings and what's on in one app with your name on it, instead of a generic booking platform. You get push messages that fill classes and bring lapsed members back.",
        app=dict(name="Crux Wall", kicker="Member · Peak plan", accent="#1d2a44", accent_ink="#ffd84d", bg="#eef0f4",
                 card=dict(kind="pass", small="Your pass", title="Scan at the desk", text="Valid all sites"),
                 rows=[("Intro to bouldering", "Sat 10:00"), ("New set on Wall 3", "Today"), ("How busy now", "Quiet")],
                 tabs=["Home", "Book", "Pass", "Routes"], on=2),
        feats=[
            ("Membership pass on their phone", "A scannable pass for check-in, so nobody is turned away for forgetting a card, and it works across every site."),
            ("Book classes and sessions", "Classes, inductions and courses, linked into the booking system you already use, so there's no second calendar to keep."),
            ("How busy is it right now?", "A live busyness meter helps members pick quieter times, which spreads the peak and keeps them coming back."),
            ("New routes and classes, pushed", "Tell members when a wall is reset, a class has spaces, or a coach adds an extra session."),
            ("Bring lapsed members back", "A friendly nudge after a few weeks away, or an offer to come back, sent to exactly the people who need it."),
            ("Waivers, inductions and kids' clubs", "Point new members to the right forms and kids' sessions before they arrive, so the desk queue moves faster."),
        ],
        tier="standard",
        tier_why="Member logins, passes and push messages put most gyms and climbing walls in Standard. Taking membership payments inside the app, or a deeper link with your booking system, is Custom.",
        faqs=[
            ("Will it work with my booking system?", "Most booking systems used by gyms and climbing walls either share their data or have booking links an app can open. I check yours while making the free concept."),
            ("My booking provider already has an app. Why have my own?", "Their app shows every gym that uses them, under their brand. Yours shows only you, with your routes, your classes and your offers, and the push messages come from you."),
            ("Can members pay for memberships in the app?", "Yes, on the Custom tier. Many places start with Standard and keep payments in their existing system."),
            ("Does it work on Android?", "Standard includes an Android version or a web app, so every member is covered."),
        ],
    ),
    dict(
        slug="farm-shops", nav="Farm shops",
        title="Apps for Farm Shops and Pick Your Own Farms | High Street Apps",
        desc="A branded app for your farm shop or PYO farm: veg box and pre-orders, what's in season, pick-your-own alerts, loyalty and directions. Free concept first, from £2,250.",
        h1='An app for your <span class="hl">farm shop.</span>', thin="Farm shops, PYO and veg box schemes",
        lede="Let customers know the moment the strawberries are ready, take Christmas turkey orders without a phone queue, and run your veg box scheme from one app with your farm's name on it.",
        app=dict(name="Hollow Lane Farm", kicker="Farm shop · Café · PYO", accent="#7a3e1d", accent_ink="#fff4e3", bg="#f7f1e6",
                 card=dict(kind="slots", small="This week's veg box", title="Choose your collection day", slots=["Thu", "Fri", "Sat"], on=1),
                 rows=[("Pick your own", "Open"), ("Butchery pre-orders", "By Thu"), ("Café", "Until 4pm")],
                 tabs=["Home", "Box", "Shop", "Visit"], on=1),
        feats=[
            ("What's in season, today", "Show what's on the shelves and in the fields, so a trip out is never wasted."),
            ("Pick your own alerts", "A push message the day the strawberries, pumpkins or sunflowers open, which is when you most need people to come."),
            ("Veg boxes and pre-orders", "Weekly boxes, butchery orders and Christmas pre-orders with a collection slot, without the phone ringing all day."),
            ("A loyalty card for regulars", "Points or stamps in the app, so weekly shoppers feel looked after and come to you before the supermarket."),
            ("Café, events and the farm itself", "Opening times, the café menu, seasonal events and directions down the lane, all in one place."),
            ("Easy to keep up to date", "It runs from the same content as your website, so busy weeks don't mean updating two places."),
        ],
        tier="standard",
        tier_why="Veg box accounts, loyalty and pick-your-own push alerts are Standard. A simple app with your hours, produce and directions is Starter. Paying for boxes or pre-orders inside the app is Custom.",
        faqs=[
            ("Can it take Christmas orders?", "Yes. Customers choose what they want and a collection slot. On Standard they reserve and pay as they do now; on Custom they can pay in the app."),
            ("We're a small team. Who keeps it updated?", "It reads from your website, so there's usually nothing extra to do. Upkeep covers small changes when you'd rather hand them over."),
            ("Is it worth it for a seasonal business?", "Seasonal is where push messages earn their keep: they bring people back for each new crop, not just once a year."),
            ("Does it need good signal?", "Key information like opening times and directions is saved on the phone, so it still works down a lane with patchy signal."),
        ],
    ),
    dict(
        slug="garden-centres", nav="Garden centres",
        title="Apps for Garden Centres and Nurseries | High Street Apps",
        desc="A branded app for your garden centre: loyalty club card, workshops and events, seasonal planting reminders, café and grotto booking. Free concept first, from £2,250.",
        h1='An app for your <span class="hl">garden centre.</span>', thin="Garden centres and nurseries",
        lede="Put your loyalty club on customers' phones, fill workshops and the Christmas grotto, and send a reminder when it's time to plant the bulbs they bought from you.",
        app=dict(name="Bramble & Bloom", kicker="Garden centre · Café", accent="#33582f", accent_ink="#f2f7e8", bg="#f1f3ea",
                 card=dict(kind="stamps", small="Club card · 340 points", title="£5 off at 500 points", on=7, total=10),
                 rows=[("Wreath workshop", "6 Dec"), ("Plant of the week", "Hellebore"), ("Book a café table", "Today")],
                 tabs=["Home", "Club", "Events", "Visit"], on=1),
        feats=[
            ("Your club card, in their pocket", "Points and member offers without a plastic card, and you can see what your members buy and when."),
            ("Workshops and events", "Wreath making, kids' clubs and talks with spaces shown and bookings taken, so they sell out sooner."),
            ("Seasonal reminders", "\"Time to plant your bulbs\" or \"protect pots from frost tonight\": helpful messages that also bring people back in."),
            ("Café and grotto booking", "Tables for Sunday lunch and Christmas grotto slots, the busiest bookings of your year."),
            ("Plant care guides", "Simple care tips for what they bought, which means fewer dead plants and more confident gardeners."),
            ("Hours, directions, departments", "Opening times, holiday hours, what's where and a map of the site."),
        ],
        tier="standard",
        tier_why="A loyalty club, member offers and push reminders are Standard. Taking payment for grotto tickets or workshops inside the app, or linking to your till's loyalty data, is Custom.",
        faqs=[
            ("We already have a plastic loyalty card. Can the app replace it?", "Often, yes. If your till system can share loyalty data, the app becomes the card. If not, the app can show the member number for scanning."),
            ("Can it sell grotto tickets?", "Yes. On Standard it links to your current ticketing; on Custom tickets are bought in the app."),
            ("Do older customers use apps?", "Many do, and the app is an extra, not a replacement. Everything still works in store as it does today."),
            ("Can we change offers ourselves?", "Yes, offers and events update from your website or a simple sheet, and upkeep covers anything bigger."),
        ],
    ),
    dict(
        slug="pubs-and-venues", nav="Pubs & venues",
        title="Apps for Pubs, Bars and Music Venues | High Street Apps",
        desc="A branded app for your pub, bar or venue: what's on, table booking, event tickets, menus and loyalty, with push messages that fill quiet nights. Free concept first, from £2,250.",
        h1='An app for your <span class="hl">pub.</span>', thin="Pubs, bars, clubs and music venues",
        lede="Quiz night, live music, Sunday roast: put what's on in front of your regulars, take table bookings, and send a message that fills the place on a quiet Tuesday.",
        app=dict(name="The Lantern", kicker="Freehouse · Kitchen · Garden", accent="#5a1f2b", accent_ink="#ffe9b8", bg="#f4efe9",
                 card=dict(kind="slots", small="Book a table · Fri", title="4 people", slots=["18:00", "18:30", "19:30", "20:00"], on=2),
                 rows=[("Quiz night", "Thu 8pm"), ("Live music", "Sat 9pm"), ("Sunday roast menu", "View")],
                 tabs=["Home", "Book", "What's on", "Menu"], on=2),
        feats=[
            ("What's on, always up to date", "Quiz nights, gigs, comedy and sport listings in one place, updated from your website."),
            ("Table booking", "Book a table in a few taps, linked to the booking system you already use."),
            ("Tickets for events", "Sell or reserve tickets for gigs and special nights, and show them at the door."),
            ("Fill the quiet nights", "A push message on a slow evening (two-for-one, a new guest ale, the match is on) goes straight to people nearby who already like you."),
            ("Menus and allergens", "Food and drink menus with allergens and prices, changed once and updated everywhere."),
            ("A reason to come back", "A loyalty card or regulars' club, so the people who keep you going get something back."),
        ],
        tier="standard",
        tier_why="Regulars' accounts, loyalty and push messages are Standard. A simple app with your menu, what's on and booking links is Starter. Selling tickets or taking payment in the app is Custom.",
        faqs=[
            ("Will it work with my table booking system?", "Most pub and restaurant booking systems can be linked from an app, and some share availability directly. I check yours in the free concept."),
            ("Do people really want an app for a pub?", "Your regulars do, if it gives them something: first word on gig tickets, a loyalty reward, or booking the good table on Sunday."),
            ("We're a music venue, not a pub. Does this fit?", "Yes. Listings, tickets and push alerts when a show goes on sale are exactly what a venue app is for."),
            ("Can the app send messages to everyone?", "Only to people who've said yes to notifications, and you choose when. Used sparingly, they're the most direct way to fill a quiet night."),
        ],
    ),
    dict(
        slug="attractions", nav="Attractions",
        title="Apps for Visitor Attractions, Zoos and Farm Parks | High Street Apps",
        desc="A branded app for your visitor attraction, zoo, farm park or gardens: annual pass, daily talk times, site map, trails and ticket booking. Free concept first, from £2,250.",
        h1='An app for your <span class="hl">attraction.</span>', thin="Wildlife parks, farm parks, gardens and days out",
        lede="Give visitors a map, today's feeding times and talks with reminders, and a home for their annual pass. Keep them on site longer and give them a reason to come back next season.",
        app=dict(name="Fernbrook Wildlife Park", kicker="Open today 10:00 to 17:00", accent="#0f5257", accent_ink="#e6fbf8", bg="#edf4f2",
                 card=dict(kind="pass", small="Annual pass", title="2 adults · 2 children", text="Show at the gate"),
                 rows=[("Otter feeding", "11:30"), ("Map: you are here", "Open"), ("Picnic areas", "4 nearby")],
                 tabs=["Home", "Today", "Map", "Pass"], on=3),
        feats=[
            ("Annual pass on the phone", "Members show their pass at the gate, renew in a tap, and you finally have a way to talk to them between visits."),
            ("Today's talks and feeding times", "A day planner with reminders 15 minutes before each talk, so visitors don't miss the bit they came for."),
            ("A map that knows where you are", "Find the toilets, the café and the next enclosure without unfolding a paper map in the rain."),
            ("Trails and things for kids", "Spotter sheets, quizzes and trails that keep families exploring, and keep them on site longer."),
            ("Tickets and events", "Book entry, seasonal events and experiences, linked to the ticketing you already use."),
            ("Updates when it matters", "Weather closures, new arrivals and seasonal events sent to the visitors who'll care."),
        ],
        tier="standard",
        tier_why="Annual passes, accounts and push reminders are Standard. A visitor guide with map, times and ticket links is Starter. Buying tickets in the app or linking deeply with your ticketing system is Custom. With only a few hundred pass holders, a digital pass in Apple Wallet or Google Wallet may be all you need: from £495 to set up, then £15 a month.",
        faqs=[
            ("Does the map need GPS on every path?", "No. The map is a drawn plan of your site; the phone's location simply shows where the visitor is on it."),
            ("Will it work with my ticketing system?", "Ticket links work with almost anything. A deeper link, so passes and tickets show up in the app automatically, depends on your provider, and I check that in the free concept."),
            ("What about signal on site?", "The map, times and pass are stored on the phone, so they work without signal."),
            ("Can we update talk times on the day?", "Yes, from a simple sheet or your website, and visitors see the change straight away."),
        ],
    ),
]


def esc(s):
    return html.escape(s, quote=True)


def head(title, desc, path, ld):
    url = BASE + path
    return f"""<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{esc(title)}</title>
<meta name="description" content="{esc(desc)}">
<link rel="canonical" href="{url}">
<meta name="theme-color" content="#1f6b4a">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="High Street Apps">
<meta property="og:locale" content="en_GB">
<meta property="og:url" content="{url}">
<meta property="og:title" content="{esc(title)}">
<meta property="og:description" content="{esc(desc)}">
<meta property="og:image" content="{BASE}/og.png">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,500;12..96,800&family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/pages.css">
<script type="application/ld+json">
{json.dumps(ld, ensure_ascii=False, indent=1)}
</script>
</head>
<body>
<header class="top">
  <div class="wrap">
    <a class="brand" href="/" aria-label="High Street Apps, home">
      <span class="brand-mark" aria-hidden="true">H</span>
      <span><b>High Street Apps</b><span class="label">By Ethan · UK</span></span>
    </a>
    <nav aria-label="Main">
      <a class="hide-s" href="/#work">Work</a>
      <a class="hide-s" href="/apps-for/">Who it's for</a>
      <a class="hide-s" href="/app-cost/">Prices</a>
      <a class="link" href="/#contact">Free concept</a>
    </nav>
  </div>
</header>
<main>
"""


def crumbs(items):
    parts = []
    for i, (name, path) in enumerate(items):
        if i == len(items) - 1:
            parts.append(f'<span aria-current="page">{esc(name)}</span>')
        else:
            parts.append(f'<a href="{path}">{esc(name)}</a>')
    return '<nav class="crumbs" aria-label="Breadcrumb">' + " / ".join(parts) + "</nav>"


def crumbs_ld(items):
    return {"@type": "BreadcrumbList", "itemListElement": [
        {"@type": "ListItem", "position": i + 1, "name": n, "item": BASE + p} for i, (n, p) in enumerate(items)]}


def cta(heading="Send me your website.", text="I'll reply within one working day, then send you a free concept of your app with a fixed quote. No calls, no obligation."):
    return f"""<section class="cta">
  <div class="wrap">
    <div class="label">Free concept</div>
    <h2 style="margin-top:18px">{heading}</h2>
    <p>{text}</p>
    <a class="btn" href="/#contact">Get your free concept <span aria-hidden="true">→</span></a>
  </div>
</section>
"""


def foot():
    links = "".join(f'<a href="/apps-for/{s["slug"]}/">{esc(s["nav"])}</a>' for s in SECTORS)
    return f"""</main>
<footer>
  <div class="wrap">
    <span>© 2026 High Street Apps · iPhone apps for UK businesses, made by Ethan</span>
    <nav class="flinks" aria-label="More pages"><a href="/app-cost/">What an app costs</a>{links}</nav>
  </div>
</footer>
</body>
</html>
"""


def receipt(key, pick=False):
    t = TIERS[key]
    lis = "".join(f"<li>{esc(i)}</li>" for i in t["items"])
    return f"""<div class="receipt">
  <div class="rh"><small>Quote · {t['name']}</small><h3>{t['name']}</h3><small>{esc(t['sub'])}</small></div>
  <ul>{lis}</ul>
  <div class="tot">
    <div class="row"><span>Was</span><span class="dots-l"></span><s>{t['was']}</s></div>
    <div class="big"><small>from</small>{t['now']}</div>
  </div>
</div>"""


def phone(a):
    c = a["card"]
    if c["kind"] == "stamps":
        extra = '<div class="dots">' + "".join(f'<i class="{"on" if i < c["on"] else ""}"></i>' for i in range(c["total"])) + "</div>"
    elif c["kind"] == "slots":
        extra = '<div class="slots">' + "".join(f'<span class="{"on" if i == c["on"] else ""}">{esc(s)}</span>' for i, s in enumerate(c["slots"])) + "</div>"
    else:
        extra = f'<div class="qr" aria-hidden="true"></div><p>{esc(c["text"])}</p>'
    rows = "".join(f"<div><b>{esc(r)}</b><span>{esc(v)}</span></div>" for r, v in a["rows"])
    tabs = "".join(f'<span class="{"on" if i == a["on"] else ""}">{esc(t)}</span>' for i, t in enumerate(a["tabs"]))
    style = f'--a:{a["accent"]};--a-ink:{a["accent_ink"]};--s-bg:{a["bg"]}'
    return f"""<figure style="margin:0">
  <div class="phone" role="img" aria-label="Example app screen for {esc(a['name'])}, a made-up business">
    <div class="screen" style="{style}">
      <div class="sb"><span>9:41</span><span>●●● ▮</span></div>
      <div class="ah"><small>{esc(a['kicker'])}</small><b>{esc(a['name'])}</b></div>
      <div class="hc"><small>{esc(c['small'])}</small><b>{esc(c['title'])}</b>{extra}</div>
      <div class="rows">{rows}</div>
      <div class="tabs">{tabs}</div>
    </div>
  </div>
  <figcaption class="phone-note">Example concept for a made-up business</figcaption>
</figure>"""


def faq_html(faqs):
    return '<div class="faq">' + "".join(
        f"<details><summary>{esc(q)}</summary><p>{esc(a)}</p></details>" for q, a in faqs) + "</div>"


def faq_ld(faqs):
    return {"@type": "FAQPage", "mainEntity": [
        {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faqs]}


PROVIDER = {"@type": "ProfessionalService", "@id": BASE + "/#business", "name": "High Street Apps", "url": BASE + "/"}


def sector_page(s):
    path = f"/apps-for/{s['slug']}/"
    cr = [("Home", "/"), ("Who it's for", "/apps-for/"), (s["nav"], path)]
    t = TIERS[s["tier"]]
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "Service", "name": s["title"].split(" | ")[0], "description": s["desc"], "url": BASE + path,
         "serviceType": "Mobile app development", "provider": PROVIDER,
         "areaServed": {"@type": "Country", "name": "United Kingdom"},
         "offers": {"@type": "Offer", "priceCurrency": "GBP", "price": t["n"], "description": f"{t['name']} tier, from {t['now']}"}},
        faq_ld(s["faqs"]), crumbs_ld(cr)]}
    feats = "".join(f"<div><b>{esc(h)}</b><p>{esc(p)}</p></div>" for h, p in s["feats"])
    others = "".join(f'<a href="/apps-for/{o["slug"]}/">{esc(o["nav"])}</a>' for o in SECTORS if o is not s)
    body = f"""<section class="phero" style="padding-top:20px">
  <div class="wrap">
    {crumbs(cr)}
    <div class="phero-grid">
      <div>
        <h1><span class="thin" style="display:block;font-size:.38em;letter-spacing:-.02em;margin-bottom:.35em">{esc(s['thin'])}</span>{s['h1']}</h1>
        <p class="lede">{esc(s['lede'])}</p>
        <div class="ctas"><a class="btn" href="/#contact">Get a free concept <span aria-hidden="true">→</span></a><a class="link" href="/app-cost/">What it costs</a></div>
      </div>
      {phone(s['app'])}
    </div>
  </div>
</section>
<section class="band">
  <div class="wrap">
    <div class="sh"><div class="label">What it does</div><div><h2>What your customers could do.</h2><p>Every app is built around your business, so this is a starting point. Your free concept shows the version that fits you.</p></div></div>
    <div class="feats">{feats}</div>
  </div>
</section>
<section>
  <div class="wrap">
    <div class="sh"><div class="label">Price</div><div><h2>Which tier fits.</h2></div></div>
    <div class="tier-grid">
      {receipt(s['tier'])}
      <div class="prose">
        <p>{esc(s['tier_why'])}</p>
        <p>Every quote is fixed before work starts. You pay half to start and half when the app is live on the App Store, and upkeep is from £100 a month.</p>
        <p><a class="link" href="/app-cost/">See the full breakdown of what an app costs</a></p>
      </div>
    </div>
  </div>
</section>
<section class="band">
  <div class="wrap">
    <div class="sh"><div class="label">Questions</div><div><h2>Things people ask.</h2></div></div>
    {faq_html(s['faqs'])}
  </div>
</section>
<section>
  <div class="wrap">
    <div class="sh" style="margin-bottom:24px"><div class="label">Other businesses</div><div><h2 style="font-size:clamp(28px,3.4vw,40px)">Apps for other high street businesses.</h2></div></div>
    <div class="more">{others}</div>
  </div>
</section>
"""
    return head(s["title"], s["desc"], path, ld) + body + cta() + foot()


def hub_page():
    path = "/apps-for/"
    cr = [("Home", "/"), ("Who it's for", path)]
    title = "Apps for UK Small Businesses, by Sector | High Street Apps"
    desc = "What a branded iPhone app could do for your café, gym, climbing wall, farm shop, garden centre, pub or visitor attraction. Free concept first, from £2,250."
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "CollectionPage", "name": title.split(" | ")[0], "url": BASE + path, "about": PROVIDER,
         "hasPart": [{"@type": "WebPage", "name": s["title"].split(" | ")[0], "url": f"{BASE}/apps-for/{s['slug']}/"} for s in SECTORS]},
        crumbs_ld(cr)]}
    cards = "".join(f"""<div><b><a class="link" href="/apps-for/{s['slug']}/">{esc(s['nav'])}</a></b><p>{esc(s['thin'])}. {esc(s['feats'][0][0])}, {esc(s['feats'][1][0].lower())} and more.</p></div>""" for s in SECTORS)
    body = f"""<section class="phero" style="padding-top:20px">
  <div class="wrap">
    {crumbs(cr)}
    <h1>Apps for the <span class="hl">high street.</span></h1>
    <p class="lede">I build iPhone apps for independent UK businesses, using what you already have online. Pick the one closest to yours to see what customers could do with it.</p>
  </div>
</section>
<section class="band">
  <div class="wrap"><div class="feats">{cards}</div>
  <p style="margin-top:32px;color:var(--muted)">Not on the list? Most of my concepts are for businesses like these, but anything with regulars, bookings or members can work. <a class="link" href="/#contact">Send me your website</a>.</p></div>
</section>
"""
    return head(title, desc, path, ld) + body + cta() + foot()


COST_FAQS = [
    ("Is there a cheaper way to get an app?", "DIY app builders cost from around £30 to £100 a month, but you build it yourself from a template and it looks like every other app made with the same tool. They suit some businesses. If all you need is a membership card or season ticket on the phone, a digital pass in Apple Wallet or Google Wallet costs from £495 to set up and £15 a month. If you want an app that feels like yours and someone to look after it, a fixed-price build is usually better value over a few years."),
    ("Why are agency quotes so much higher?", "Agencies carry account managers, project managers and office costs, and often quote by the day. I design and build every app myself and quote one fixed price, which is where most of the difference comes from."),
    ("Do I own the app?", "It's published on the App Store under your own business name, using your own Apple developer account."),
    ("Do I need an Android app too?", "Roughly half of UK smartphones are iPhones, and iPhone owners tend to use apps the most, so iPhone is a sensible place to start. Standard and Custom include an Android version or a web app so nobody is left out."),
    ("What does the free concept include?", "A short video of your app made with your own content and branding, plus a fixed quote. If you don't want to go ahead, you pay nothing."),
    ("Can I start small and add features later?", "Yes. Plenty of businesses start on Starter and add loyalty, accounts or payments once they can see the app working."),
]


def cost_page():
    path = "/app-cost/"
    cr = [("Home", "/"), ("What an app costs", path)]
    title = "How Much Does an App Cost for a UK Small Business? (2026) | High Street Apps"
    desc = "Real prices for a small business iPhone app in the UK: from £2,250 for a simple app, £3,900 with loyalty and accounts, £6,000 with payments, plus running costs explained."
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "Article", "headline": "How much does an app cost for a UK small business?", "url": BASE + path,
         "datePublished": "2026-11-09", "dateModified": TODAY, "inLanguage": "en-GB",
         "author": {"@type": "Person", "name": "Ethan"}, "publisher": PROVIDER, "image": BASE + "/og.png"},
        faq_ld(COST_FAQS), crumbs_ld(cr)]}
    receipts = receipt("starter") + receipt("standard") + receipt("custom")
    body = f"""<section class="phero" style="padding-top:20px">
  <div class="wrap">
    {crumbs(cr)}
    <h1><span class="thin">What does an app</span><br><span class="hl">cost?</span></h1>
    <p class="lede">For a UK small business, a well-made iPhone app built around your existing website costs from <b>£2,250</b> for a simple app, <b>£3,900</b> with customer accounts and a loyalty card, and <b>£6,000</b> with ordering and payments. Then from <b>£100 a month</b> to keep it running. Here's what's behind those numbers.</p>
    <p class="label" style="margin-top:22px">By Ethan · Updated November 2026</p>
  </div>
</section>
<section class="band">
  <div class="wrap">
    <div class="sh"><div class="label">The short answer</div><div><h2>Three kinds of app, three prices.</h2><p>These are my early-client prices, which are up to 50% off while I take on my first few business clients.</p></div></div>
    <div class="tbl-wrap"><table class="tbl">
      <thead><tr><th>What the app does</th><th>Good for</th><th>From</th></tr></thead>
      <tbody>
        <tr><td>Your menu, services, hours, bookings links, maps and tap-to-call</td><td>Cafés, shops, venues, local services</td><td>£2,250</td></tr>
        <tr><td>Everything above, plus customer logins, a loyalty card or membership pass, and push notifications</td><td>Gyms, climbing walls, farm shops, garden centres, pubs</td><td>£3,900</td></tr>
        <tr><td>Everything above, plus ordering and payments in the app, Apple Watch, or links into your booking or stock system</td><td>Order ahead, subscriptions, bespoke tools</td><td>£6,000</td></tr>
      </tbody>
    </table></div>
    <div class="prose" style="margin-top:28px">
      <h3>Not ready for a full app?</h3>
      <p>A <b>digital pass</b> is a membership card, season ticket or loyalty card that your customers add to Apple Wallet or Google Wallet straight from an email, with nothing to download. It costs from <b>£495</b> to set up, including your design and sending passes to your current members, then <b>£15 a month</b> to keep it running and issue new ones. It suits clubs, gardens and attractions with a few hundred members.</p>
    </div>
  </div>
</section>
<section>
  <div class="wrap">
    <div class="sh"><div class="label">What moves the price</div><div><h2>Why one app costs more than another.</h2></div></div>
    <div class="prose">
      <p>Most of the cost of an app is the number of things it has to do on its own, rather than just show. Showing your menu is simple. Remembering who a customer is, how many stamps they have and what they ordered last time takes more building and more testing.</p>
      <h3>Things that add to the price</h3>
      <ul>
        <li><b>Customer accounts.</b> As soon as people log in, the app needs somewhere safe to keep their details.</li>
        <li><b>Taking payments.</b> Ordering and paying in the app means more screens, more testing and Apple's rules on payments.</li>
        <li><b>Linking to your other systems.</b> Tills, booking systems and stock systems each work differently. Some are easy to connect, some aren't.</li>
        <li><b>Android as well as iPhone.</b> A second platform means a second app to build and test, or a web app alongside.</li>
        <li><b>Content that doesn't exist yet.</b> If your menu, photos or prices aren't online, they need to be written or gathered first.</li>
      </ul>
      <h3>Things that keep it down</h3>
      <ul>
        <li><b>Using what's already on your website.</b> My apps are built from the content you already keep up to date.</li>
        <li><b>Keeping the booking system you have.</b> Linking to it costs far less than building a new one.</li>
        <li><b>Starting small.</b> Launch with the features you'll use every week and add the rest later.</li>
      </ul>
    </div>
  </div>
</section>
<section class="band">
  <div class="wrap">
    <div class="sh"><div class="label">Running costs</div><div><h2>What it costs each year.</h2><p>The build is a one-off. These are the costs that carry on.</p></div></div>
    <div class="tbl-wrap"><table class="tbl">
      <thead><tr><th>Cost</th><th>What it's for</th><th>Price</th></tr></thead>
      <tbody>
        <tr><td>Upkeep</td><td>Hosting, security and bug fixes, updates for each new iOS release, App Store management and small changes</td><td>from £100/month</td></tr>
        <tr><td>Apple developer account</td><td>Paid to Apple so the app is listed under your own business name</td><td>£79/year</td></tr>
        <tr><td>Google Play account</td><td>Only if you have an Android app; a one-off fee paid to Google</td><td>about £20 once</td></tr>
        <tr><td>Website upkeep</td><td>Optional, if I also look after your website</td><td>+£50/month</td></tr>
      </tbody>
    </table></div>
  </div>
</section>
<section>
  <div class="wrap">
    <div class="sh"><div class="label">The quotes</div><div><h2>What each tier includes.</h2><p>Every quote is fixed before work starts. You pay half to start and half when your app is live.</p></div></div>
    <div class="receipts">{receipts}</div>
  </div>
</section>
<section class="band">
  <div class="wrap">
    <div class="sh"><div class="label">Is it worth it?</div><div><h2>A quick way to check.</h2></div></div>
    <div class="prose">
      <p>Work out what one extra visit from a regular is worth to you, then how many extra visits a year the app needs to bring in to pay for itself.</p>
      <p>For example, a café with a £5 average spend that gets 40 regulars to come in one extra time a month takes about £2,400 more a year. That covers a Starter app in the first year, before counting anything else the app does.</p>
      <p>Your own numbers will be different, which is why the first step is a free concept and a fixed quote rather than a sales call.</p>
      <p>See what an app could do for <a class="link" href="/apps-for/cafes/">cafés</a>, <a class="link" href="/apps-for/gyms-and-climbing-walls/">gyms and climbing walls</a>, <a class="link" href="/apps-for/farm-shops/">farm shops</a>, <a class="link" href="/apps-for/garden-centres/">garden centres</a>, <a class="link" href="/apps-for/pubs-and-venues/">pubs and venues</a> and <a class="link" href="/apps-for/attractions/">visitor attractions</a>.</p>
    </div>
  </div>
</section>
<section>
  <div class="wrap">
    <div class="sh"><div class="label">Questions</div><div><h2>Things people ask about price.</h2></div></div>
    {faq_html(COST_FAQS)}
  </div>
</section>
"""
    return head(title, desc, path, ld) + body + cta("Get a fixed quote.", "Send me your website and I'll make you a free concept of your app, with one fixed price. No calls, no obligation.") + foot()


def write(rel, content):
    p = os.path.join(ROOT, rel)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, "w") as f:
        f.write(content)


def main():
    write("app-cost/index.html", cost_page())
    write("apps-for/index.html", hub_page())
    for s in SECTORS:
        write(f"apps-for/{s['slug']}/index.html", sector_page(s))
    urls = ["/", "/app-cost/", "/apps-for/"] + [f"/apps-for/{s['slug']}/" for s in SECTORS]
    sm = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    sm += "".join(f"  <url>\n    <loc>{BASE}{u}</loc>\n    <lastmod>{TODAY}</lastmod>\n  </url>\n" for u in urls)
    sm += "</urlset>\n"
    write("sitemap.xml", sm)
    print("built", len(urls) - 1, "pages")


if __name__ == "__main__":
    main()
