# xAssets — Homepage V1.1

A responsive static homepage built with plain HTML, CSS and JavaScript. No build tools, framework, or backend required.

## Run locally

From the repository directory:

```bash
python3 -m http.server 8080
```

Open http://localhost:8080 in a browser. Do not open `index.html` directly with `file://` because browsers can block `fetch('data/apps.json')`.

## Project structure

- `index.html` — semantic homepage structure
- `styles.css` — all visual styles and responsive breakpoints
- `app.js` — app card rendering, local artwork and store buttons
- `data/apps.json` — app information and links; edit here when new apps launch
- `assets/xassets-logo.png` — official xAssets brand logo supplied by the owner

## Artwork status and replacement

Cards reserve a consistent 16:10 area. Missing artwork explicitly shows “Banner artwork pending”. The Resonance Room banner is supplied by the owner and integrated as a 1440 × 900 WebP (16:10), optimized from the 1586 × 992 PNG. The Lullaby Room banner is also supplied by the owner and integrated as a 1440 × 900 WebP, cropped slightly at the top and bottom from the 1536 × 1024 source to preserve the teddy and moon. The Literary Room banner is supplied by the owner and integrated as a 1440 × 900 WebP, preserving the books and warm reading-room composition. The Coloring Book & Learn banner is supplied by the owner and integrated as a 1440 × 900 WebP, preserving the crayons and coloring book composition. The Sách Hay banner is supplied by the owner and integrated as a 1440 × 900 WebP, preserving the open book and bright reading corner. All five banners are now integrated locally; no banner artwork remains pending.

Supply 1600 × 1000 WebP artwork, ideally under 250 KB each, with no text, app icons, store badges or watermarks. After adding each approved file, set its `bannerAvailable` field to `true` in `data/apps.json`. Pending paths are never requested, and failed banner loads retain the labeled placeholder.

All five official 512 × 512 PNG icons are stored in `assets/icons/`. Four were obtained from Apple's public US metadata lookup and Apple CDN on 2026-10-29, matched by the supplied App Store IDs. The website does not call metadata APIs at runtime. The Resonance Room icon was supplied by the owner and resized from 1024 × 1024 to 512 × 512, preserving transparency, at `assets/icons/resonance-room.png`. Failed icon loads also retain the symbol fallback.

`data/apps.json` remains the only app data source. `appStoreUrl` and `googlePlayUrl` are nullable; only non-null links render. Resonance Room's iOS URL remains null until release is confirmed. On confirmation, set it to `https://apps.apple.com/us/app/id6823435047`.

## Important launch notes

- Resonance Room App Store link is intentionally hidden until it is approved.
- Privacy/terms and individual app detail pages are not included in V1; don't add dead links.
- Store links are provided by the owner. Check links in the target region before launch.
- Email contact currently uses `cocoa.vnit@gmail.com` and can be changed.
- Google Fonts are used; fallback fonts work without network.

## Suggested Codex workflow

Treat the current HTML/CSS as the visual baseline. Keep the xAssets brand logo, soft off-white editorial aesthetic, lavender accents, app grid, and mobile responsive design. Add production app artwork, per-app detail pages and legal pages in later iterations. Maintain `data/apps.json` as the source of truth for app metadata.
