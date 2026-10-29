# xAssets — Homepage V1

A responsive static homepage built with plain HTML, CSS and JavaScript. No build tools, framework, or backend required.

## Run locally

From the `xAssets-home` directory:

```bash
python3 -m http.server 8080
```

Open http://localhost:8080 in a browser. Do not open `index.html` directly with `file://` because browsers can block `fetch('data/apps.json')`.

## Project structure

- `index.html` — semantic homepage structure
- `styles.css` — all visual styles and responsive breakpoints
- `app.js` — app card rendering, store buttons and optional official icon lookup
- `data/apps.json` — app information and links; edit here when new apps launch
- `assets/xassets-logo.png` — official xAssets brand logo supplied by the owner

## Artwork behavior

The cards show tasteful **placeholder initials/symbols** until the official iOS icon is returned from Apple's public iTunes lookup endpoint. These placeholders are NOT official app icons. The lookup is client-side, so an internet connection is needed to display official artwork. For production, download and store your verified original icons in `assets/apps/` and replace the dynamic lookup with local images. Resonance Room is currently waiting for App Store review and deliberately uses a placeholder.

## Important launch notes

- Resonance Room App Store link is intentionally hidden until it is approved.
- Privacy/terms and individual app detail pages are not included in V1; don't add dead links.
- Store links are provided by the owner. Check links in the target region before launch.
- Email contact currently uses `cocoa.vnit@gmail.com` and can be changed.
- Google Fonts are used; fallback fonts work without network.

## Suggested Codex workflow

Treat the current HTML/CSS as the visual baseline. Keep the xAssets brand logo, soft off-white editorial aesthetic, lavender accents, app grid, and mobile responsive design. Add production app artwork, per-app detail pages and legal pages in later iterations. Maintain `data/apps.json` as the source of truth for app metadata.
