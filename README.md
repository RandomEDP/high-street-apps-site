# High Street Apps site (apps.reth.com)

- `site/` is the deployed static site (Cloudflare Pages, no build command, build output directory `site`).
- `site/mockups/<slug>/` has one concept page per prospect (index.html, app-concept.mp4, poster.png).
- `tools/` is the daily lead-run toolkit: `template.html` + `rec.js` (phone mockup recorder), `gen2.py` + `leads2.py` (page and email generator), `mockup-page-template.html` (mockup page template).

Pushing to `main` deploys automatically.
