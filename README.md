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
- All five app detail pages are implemented. Privacy policy architecture is prepared; approved policy content is still pending. Do not add dead legal links.
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

Lullaby Room now includes five developer-supplied screenshots (home, player, timer, mix and library), proportionally resized from 1206 × 2622 PNG to 852 × 1852 WebP at quality 90, without cropping. Resonance Room also includes five developer-supplied screenshots (home, sound detail, player, timer and welcome), resized proportionally from 1179 × 2556 PNG to 854 × 1852 WebP at quality 90 without cropping. Coloring Book & Learn uses the official App Store 2.0.0 icon (512 × 512 PNG) and five iPhone screenshots in US storefront order (1600 × 736 WebP, uncropped). The landscape gallery shows two images on desktop and a partial next image on narrower screens. Sách Hay includes five developer-supplied screenshots (home, book detail, reader settings, highlight and library), resized proportionally from 1242 × 2688 to 856 × 1852 WebP at quality 90 without cropping. All five apps now have real screenshot galleries; no screenshot assets remain pending. Supply consistent portrait exports (recommended **1170 × 2532 px**, or the original native ratio); optimized WebP delivery around **856 × 1852 px** is sufficient for the current gallery. Suggested paths/subjects:

| App | Expected files under `assets/screenshots/<app>/` |
| --- | --- |
| `lullaby-room` (supplied) | `home.webp`, `player.webp`, `timer.webp`, `mix.webp`, `library.webp` |
| `resonance-room` (supplied) | `home.webp`, `sound-detail.webp`, `player.webp`, `timer.webp`, `welcome.webp` |
| `coloring-book` (supplied) | `iphone-01.webp` through `iphone-05.webp` |
| `sach-hay` (supplied) | `home.webp`, `book-detail.webp`, `reader.webp`, `highlight.webp`, `library.webp` |

These subjects are suggestions for supplied assets, not product feature claims. Pending galleries request no nonexistent files. Add the real screenshots to the app’s `detail.screenshots` array, matching labels and alt text to the actual screens. All four social previews reuse the complete existing banners; optional 1200 × 630 compositions may be supplied later for precise social framing.

## Privacy Policy System V1

Lullaby Room Privacy Policy and Terms of Use have been imported from the existing developer-supplied documents on 2026-10-29. The original effective date (October 23, 2026), introduction and full section contents are preserved. Literary Room Privacy Policy has also been imported from its developer-supplied source. Sách Hay still requires approved policy content. Coloring Book & Learn legal documents are imported as described below. Resonance Room legal documents are imported as described below. These repository changes have not been deployed.

Files:

- `templates/privacy.html.template`: reusable source template, not a published HTML entry point. It contains substitution tokens, no legal declarations. Policies are rendered as complete static HTML for store reviewers and crawlers; JavaScript is not required.
- `privacy.css`: document layout scoped to privacy pages, reusing the existing design tokens and shared header/footer. The 850px outer container with existing 36px side padding provides a 778px reading area.
- `data/apps.json`: optional `privacyPolicyUrl`, configured for Literary Room, Lullaby Room, Resonance Room and Coloring Book & Learn; null for Sách Hay; separate from policy text.
- `app-detail.js` / `app-detail.css`: render an optional legal link only when a policy URL is explicitly configured; external HTTPS links open with `noopener noreferrer`. Existing marketing sections remain unchanged.

### Planned policy routes and status

| App | Future URL | Status |
| --- | --- | --- |
| Literary Room | `https://xassetss.github.io/privacy/literary-room/` | Imported from developer-supplied source |
| Lullaby Room | `https://xassetss.github.io/privacy/lullaby-room/` | Imported from developer-supplied source |
| Resonance Room | `https://xassetss.github.io/privacy/resonance-room/` | Imported from developer-supplied source |
| Coloring Book & Learn | `https://xassetss.github.io/privacy/coloring-book/` | Imported from developer-supplied source |
| Sách Hay | `https://xassetss.github.io/privacy/sach-hay/` | Approved content required |

### Prepare and publish an approved policy

1. Obtain the exact approved text, language, app identity and effective/last-updated date. Ask for any existing policy URLs already registered in App Store Connect or Google Play Console; none were found locally. Preserve those URLs until an approved replacement is ready. The repository cannot establish the store console settings.
2. Keep policy text independent of `data/apps.json`. Use `templates/privacy.html.template` to author a fully static `privacy/<app-slug>/index.html` **only after content approval**. Do not create empty public policy routes or publish the template as an index page.
3. Replace every token: `LANG`, `APP_NAME_HTML`, `APP_SLUG`, `META_DESCRIPTION_HTML`, `UPDATED_ISO` (YYYY-MM-DD), `UPDATED_DISPLAY_HTML`, `COPYRIGHT_YEAR`, and `APPROVED_POLICY_SECTIONS_HTML`. Escape text/attribute values as HTML; use trusted, reviewed semantic HTML for the policy sections. No tokens should remain. Adjust the navigation labels for the approved language when appropriate.
4. Use one h1 already supplied by the template, h2 section headings and optional h3 subsections. Add only the approved, applicable sections. Include approved contact information using `mailto:xassets.info@gmail.com` where specified. The shared header/footer already use this contact address. Use `rel="noopener noreferrer"` for any external links opening in a new tab.
5. Review the complete text and static HTML, metadata, dates, mobile/desktop layout, keyboard navigation, direct route/refresh, asset paths and contact links. Check policy content with JavaScript disabled. Then set that app's `privacyPolicyUrl` to `privacy/<app-slug>/` or the preserved approved external HTTPS URL. Do not change console URLs or existing links automatically.
6. Deploy final policy pages only after explicit content approval. No build step or backend is needed.

### Information required before publication

For **each app separately**, supply approved policy text and any existing registered policy URL. Confirm actual data collected/processed, purpose and recipients, local storage, SDK/service names and their policy URLs, advertising/tracking and consent, purchases, retention/deletion procedures, children's audience and safeguards if applicable, security, international processing/privacy rights and request procedures, policy-change wording, responsible developer identity, contact information, language, and last-updated date. Include only topics that apply to that app. No common SDK list, “no personal data” statement, legal basis or jurisdiction is assumed.


### Lullaby Room legal documents

- `privacy/lullaby-room/index.html`: full static Privacy Policy, canonical `/privacy/lullaby-room/`.
- `terms/lullaby-room/index.html`: full static Terms of Use, canonical `/terms/lullaby-room/`.
- Both reuse `privacy.css`, shared branding and contact address. Their text is readable without JavaScript. Related-document links point internally. The App Detail legal navigation supports `privacyPolicyUrl` and `termsOfUseUrl` independently.
- Source documents supplied by the developer: [Privacy Policy](https://sunshinesing.github.io/lullaby-room-privacy-policy.html) and [Terms of Use](https://sunshinesing.github.io/lullaby-room-terms-of-use.html). Source URLs are recorded here for provenance only; app navigation uses the copied local pages. No store console URLs were changed.
- Imported policy section HTML is preserved verbatim. Only surrounding presentation, metadata and navigation are adapted. The source calls its date “Effective date”, so it remains labeled that way instead of inventing a new last-updated date.


### Literary Room Privacy Policy

`privacy/literary-room/index.html` imports the full introduction and all 12 sections from the [developer-supplied policy](https://api.tiemsach.io.vn/policy), preserving the effective and last-updated date of October 1, 2026. Content is static and readable without JavaScript. App navigation uses `privacy/literary-room/`, not the source URL. Source wording refers to Android/Google Play; it is preserved without inventing iOS-specific declarations. No Terms of Use document was supplied for Literary Room, so no terms link is shown for it. Contact remains available in the shared xAssets header/footer.


### Resonance Room legal documents

Imported [Privacy Policy](https://sunshinesing.github.io/resonance_room_privacy_policy.html) and [Terms of Use](https://sunshinesing.github.io/resonance_room_terms_of_use.html) into `privacy/resonance-room/index.html` and `terms/resonance-room/index.html`. Full source content and effective date October 19, 2026 are retained in static HTML. The terms' relative policy link is repaired to the local policy route; the now-resolved deployment instruction to update that link is removed. App Detail links point internally and store console URLs are untouched.

Source issue requiring developer attention: Terms section 12 still states that the developer's legal jurisdiction should be confirmed before publication. This wording is preserved, with no jurisdiction invented. The privacy source also uses conditional wording about analytics/diagnostic integrations; no SDK declarations are added or inferred. Shared site contact is `xassets.info@gmail.com`. Changes have not been deployed.


### Coloring Book & Learn legal documents

The [Privacy Policy](https://xassetss.github.io/coloring-book-learn/privacy-policy.html) and [Terms of Use](https://xassetss.github.io/coloring-book-learn/term-of-use.html) are imported into `privacy/coloring-book/index.html` and `terms/coloring-book/index.html`. Both retain their full text and November 8, 2026 update date. The Terms link to the local Privacy Policy. The app detail page links to both local documents, and the original URLs remain unchanged.
