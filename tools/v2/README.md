# v2 outreach toolkit (in use from 10 Nov 2026, approved by Ethan 9 Nov)

Replaces the v1 files in `tools/` for the daily run. v1 stays for reference only.

## Per-day workflow (in a scratch work dir)
1. `leads.py` in the format of `leads_example.py`, `apps.js` in the format of `apps_example.js` (same slugs).
2. `APPS=./apps.js node <repo>/tools/v2/rec.js` writes `out/<slug>/raw.webm` and `poster.png` (the lock screen with the notification).
3. `ffmpeg -i raw.webm -c:v libx264 -pix_fmt yuv420p -crf 26 -preset slow -movflags +faststart app-concept.mp4` in each `out/<slug>/`.
4. `python3 <repo>/tools/v2/gen.py` writes `site/mockups/<slug>/` and `drafts.json` (to, subject, body, htmlBody). No path edits needed.

## Email rules (gen.py enforces the shape; the wording is yours)
- Only pitch a lead when you can name one specific hassle or detail from their own site (a paper form, a card to collect, renewing by phone, checking back for news). No "I came across X and liked...". If you can't find one, skip the lead.
- `opener` leads with that detail, neutrally, then the mockup payoff in one line. `subject` names their thing, never "An app idea for".
- Whole email about 100 to 130 words. One Gaffer line, no feature list, no prices, no call, no TLLV. Website lines only for `dated_site=True`.
- Every fact in opener, video and page must come from their site. Do not invent prices, times, discounts or animal names.

## Video config rules (`apps.js`)
- `lock`: the notification is the first frame and the poster, so make it the single most tempting moment for this business, written as their customer would receive it.
- 3 screens, 3 to 4 steps. One step should tap something and change state (`tap` selector plus `done` selector on a `.swap` block) so it feels like a working app.
- Captions speak to the owner and name the benefit. Keep each under about 60 characters.
- Tab icons: today, pass, perks, book, shop, camera (line icons in template.html; add more there if needed). No emoji anywhere.
- `mono` is the app-icon letter(s), `vars` the brand colours taken from their site.
- Check a contact sheet of every video before deploying.

## Page
`mockup-page-template.html` has one-tap mailto reply buttons and a who-made-this block that uses `site/img/gaffer-icon.png`.
