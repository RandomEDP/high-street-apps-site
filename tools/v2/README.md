# v2 mockup toolkit (proposal, not yet used by the daily run)

- `template.html` + `rec.js` + `apps_sample.js`: video that opens on a lock-screen notification, taps through one real action, uses line icons instead of emoji and ends on the ask. `APPS=./apps_sample.js node rec.js`, then convert `out/<slug>/raw.webm` with the same ffmpeg line as v1.
- `mockup-page-template.html`: landing page with one-tap reply buttons (mailto with the reply pre-written) and a short "who made this" block. Extra placeholder: `{{SUBJ}}` (URL-encoded email subject). Needs `site/img/gaffer-icon.png`.
