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
- Email contact currently uses `xassets.info@gmail.com` and can be changed.
- Google Fonts are used; fallback fonts work without network.

## Suggested Codex workflow

Treat the current HTML/CSS as the visual baseline. Keep the xAssets brand logo, soft off-white editorial aesthetic, lavender accents, app grid, and mobile responsive design. Add production app artwork, per-app detail pages and legal pages in later iterations. Maintain `data/apps.json` as the source of truth for app metadata.

## App Detail V1

Literary Room is available at `/apps/literary-room/` (local preview: http://127.0.0.1:8091/apps/literary-room/). The same directory URL works on direct navigation and refresh on GitHub Pages. Homepage banner and title links lead to this page; store links retain their external destinations. All five apps now link to their dedicated detail pages.

- `apps/literary-room/index.html`: static SEO/social metadata and existing header/footer markup.
- `app-detail.js`: shared six-section renderer using `data/apps.json`; optional platforms and image fallbacks are data-driven.
- `app-detail.css`: scoped layout using the existing typography, palette and store button styles. Homepage styles/layout are unchanged.
- Add another app by supplying its `detail`, `tagline`, `introduction`, `slug`, and `detailUrl` in the same JSON and a small HTML entry point with its own metadata and `body[data-app]`. Reuse the shared renderer/styles. Keep any future unfinished entries unlinked.

### Literary Room screenshots

All five developer-supplied feature screenshots are integrated in the “A closer look” gallery. The original 1284 × 2778 PNGs are resized proportionally to **856 × 1852 WebP**, quality 90, with no cropping. Embedded headings and the full phone frame are preserved.

- `assets/screenshots/literary-room/home.webp` — Discover Classic Books
- `assets/screenshots/literary-room/book-detail.webp` — Find Your Next Great Read
- `assets/screenshots/literary-room/reader.webp` — A Beautiful Place to Read
- `assets/screenshots/literary-room/library.webp` — Read at Your Own Pace
- `assets/screenshots/literary-room/reminder.webp` — Your Books, Always With You

Gallery metadata lives in `detail.screenshots` with `src`, `label`, `alt`, `width`, and `height`. Images retain contain sizing, lazy loading and error fallbacks. The horizontal gallery supports touch scrolling, keyboard focus and scroll snapping. No screenshots remain pending for this release.

Social metadata reuses the full existing 1440 × 900 Literary Room banner. Social services may crop a 16:10 image; a dedicated **1200 × 630 px** composition at `assets/banners/literary-room-social.webp` is recommended for precise social framing. No additional crop is generated automatically. Update the static OG/Twitter image metadata when that asset is supplied.


### Additional app detail pages

The shared renderer now supports all five apps, with per-app section headings, screenshot subjects and lightweight inline feature icons. Sách Hay uses Vietnamese body content. The Homepage layout and store destinations remain unchanged.

- `/apps/lullaby-room/` — App Store and Google Play
- `/apps/resonance-room/` — Google Play only; iOS remains pending
- `/apps/coloring-book/` — App Store only
- `/apps/sach-hay/` — App Store only

Each route has static canonical, description, OG and Twitter metadata, local artwork and a no-JavaScript store-link fallback. Introductory copy describes the established purpose of each app; no unverified timers, offline support, subscriptions or health outcomes are claimed.

Lullaby Room now includes five developer-supplied screenshots (home, player, timer, mix and library), proportionally resized from 1206 × 2622 PNG to 852 × 1852 WebP at quality 90, without cropping. Resonance Room also includes five developer-supplied screenshots (home, sound detail, player, timer and welcome), resized proportionally from 1179 × 2556 PNG to 854 × 1852 WebP at quality 90 without cropping. Coloring Book & Learn includes five developer-supplied landscape screenshots, resized from 2688 × 1242 to 1600 × 739 WebP at quality 90 without cropping. Its data-driven landscape gallery shows two images on desktop and a partial next image on narrower screens. Sách Hay includes five developer-supplied screenshots (home, book detail, reader settings, highlight and library), resized proportionally from 1242 × 2688 to 856 × 1852 WebP at quality 90 without cropping. All five apps now have real screenshot galleries; no screenshot assets remain pending. Supply consistent portrait exports (recommended **1170 × 2532 px**, or the original native ratio); optimized WebP delivery around **856 × 1852 px** is sufficient for the current gallery. Suggested paths/subjects:

| App | Expected files under `assets/screenshots/<app>/` |
| --- | --- |
| `lullaby-room` (supplied) | `home.webp`, `player.webp`, `timer.webp`, `mix.webp`, `library.webp` |
| `resonance-room` (supplied) | `home.webp`, `sound-detail.webp`, `player.webp`, `timer.webp`, `welcome.webp` |
| `coloring-book` (supplied) | `elephant.webp`, `airplane.webp`, `numbers.webp`, `collections.webp`, `drawings.webp` |
| `sach-hay` (supplied) | `home.webp`, `book-detail.webp`, `reader.webp`, `highlight.webp`, `library.webp` |

These subjects are suggestions for supplied assets, not product feature claims. Pending galleries request no nonexistent files. Add the real screenshots to the app’s `detail.screenshots` array, matching labels and alt text to the actual screens. All four social previews reuse the complete existing banners; optional 1200 × 630 compositions may be supplied later for precise social framing.
