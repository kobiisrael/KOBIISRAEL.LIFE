# KOBIISRAEL.COM — SEO and Google Ranking Strategy

> Canonical reference for search performance, structured data, image SEO, redirects and launch readiness.
> Prepared as an artist-safe, restrained, Google Search Central–aligned plan. **No false claims, no invented facts, no keyword stuffing, no guaranteed ranking promises.**

## 0. Canonical setup

- **Canonical host:** `https://kobiisrael.life` (apex, no `www`). The CDN must 301 redirect `https://www.kobiisrael.life/*` → `https://kobiisrael.life/*`.
- **All meta + JSON-LD** use the constants in `frontend/src/lib/seo.js`.
- **Robots:** public pages → `index, follow`. Internal admin pages (`/migration-review`, `/launch-checklist`, `/seo-review`) and the legal placeholder pages → `noindex, nofollow`.
- **Sitemap:** `https://kobiisrael.life/sitemap.xml` lists 10 main pages + 12 project detail pages + 8 featured journal entries. Submit through Google Search Console after launch.
- **robots.txt:** allows `/`, disallows `/launch-checklist`, `/migration-review`, `/seo-review`.

## 1. Core SEO positioning

Kobi Israel is a photographer, filmmaker and visual artist. The site is the **official archive** of:

1. Still photography
2. Moving-image / film / video
3. Books, catalogues and publications
4. Limited edition prints
5. Artist texts and archive notes
6. CV, exhibitions, collections, publications and press history

**Primary themes (used naturally — never stuffed):**
`Kobi Israel`, `Kobi Israel photography`, `Kobi Israel photographer`, `Kobi Israel moving image`, `Kobi Israel artist archive`, `Kobi Israel limited edition prints`, `Kobi Israel books`, `Kobi Israel Cuba Love Story`, `queer photography`, `homoerotic photography`, `autobiographical photography`, `fine art photography prints`, `Israeli photographer London`, `photography and masculinity`, `photography and memory`, `artist film archive`, `visual diary photography`, `experimental filmmaker London`.

## 2. Search-intent map

| Intent group | Sample queries | Landing page |
| --- | --- | --- |
| Artist name | `Kobi Israel`, `Kobi Israel photographer`, `Kobi Israel CV` | `/`, `/cv` |
| Projects | `Cuba, Love Story`, `River of Three Crossings`, `Intimate Strangers` | `/projects/:slug` |
| Collector | `Kobi Israel prints`, `Kobi Israel limited edition prints`, `signed photography prints` | `/prints`, `/prints/:slug` |
| Curator / researcher | `Kobi Israel exhibitions`, `Kobi Israel publications`, `Kobi Israel moving image` | `/cv`, `/archive`, `/moving`, `/books` |
| Theme | `queer photography`, `photography and masculinity`, `autobiographical photography` | `/still`, `/projects/cuba-love-story`, `/journal` |

## 3. Page-level SEO map

The full table (Page · URL · Primary keyword · Secondary keywords · Intent · SEO Title · Meta · H1 · H2 · Internal links · Schema · Image notes · Status) lives in `frontend/src/data/seo.js` and is rendered on `/seo-review`.

## 4. URL structure

Lowercase, hyphenated, stable, no dates, no `/page1` fragments.
Canonical routes:
`/`, `/still`, `/moving`, `/projects`, `/projects/:slug`, `/prints`, `/prints/:slug`, `/books`, `/archive`, `/cv`, `/journal`, `/journal/:slug`, `/contact`, `/legal/:slug` (private), `/launch-checklist` (private), `/migration-review` (private), `/seo-review` (private).

## 5. SEO titles (≤ ~60 chars)

| Page | Title |
| --- | --- |
| Home | `Kobi Israel \| Photography, Moving Image and Prints` |
| Still | `Still Photography \| Kobi Israel` |
| Moving | `Moving Image \| Kobi Israel` |
| Projects | `Projects \| Kobi Israel` |
| Prints | `Limited Edition Prints \| Kobi Israel` |
| Books | `Books and Publications \| Kobi Israel` |
| Archive | `Archive \| Kobi Israel` |
| CV | `CV and Biography \| Kobi Israel` |
| Journal | `Journal and Archive Notes \| Kobi Israel` |
| Contact | `Contact \| Kobi Israel` |
| Project | `[Project Title] \| Kobi Israel` |
| Artwork | `[Artwork Title] \| Kobi Israel` |

No "world-famous / legendary / blue-chip / investment-grade" language is used anywhere.

## 6. Meta descriptions (≤ ~155 chars)

Each page sets a descriptive meta + Open Graph + Twitter card via `applyPageSeo()`. Patterns are stored in `data/seo.js` so any future copy review touches one file.

## 7. Heading rules

One `<h1>` per page. Section structure follows `H1 → H2 → H3` from the SEO map. No skipped levels, no decorative-only headings.

## 8. Internal linking

- Footer links to every main page on every page (10 destinations + 5 legal + 5 inquiry pathways).
- Each page implements the cluster pattern in `data/seo.js → SEO_CLUSTERS`.
- Project detail pages link back to `/still`, `/moving`, `/prints`, `/books`, `/journal`, `/contact`.
- No orphan pages; the homepage links to all 10 main sections plus the featured project `/projects/cuba-love-story`.

## 9. Image SEO

| Asset type | Alt-text pattern |
| --- | --- |
| Archive image | `Archive image by Kobi Israel, details to be confirmed.` |
| Project image | `Image from [Project Title] by Kobi Israel, details to be confirmed.` |
| Artwork image | `[Artwork Title], from [Project Title], by Kobi Israel, details to be confirmed.` |
| Book cover | `Book cover for [Book Title] by Kobi Israel, details to be confirmed.` |
| Video still | `Video still from [Moving Image Title] by Kobi Israel, details to be confirmed.` |

Helpers exposed: `defaultAlt`, `projectAlt(projectTitle)`, `artworkAlt(title, project)`, `bookCoverAlt(title)`, `videoStillAlt(title)` from `lib/seo.js`.
File names follow `kobi-israel-[project-slug]-[descriptive-detail].jpg`. High-resolution masters are not uploaded.

## 10. Structured data plan (JSON-LD)

Implemented via `setJsonLd(id, data)` so each page can add multiple non-conflicting blocks.

| Page | Schemas attached |
| --- | --- |
| Home | `WebSite`, `Person`, `BreadcrumbList` |
| Still / Moving / Prints / Books / Archive / Journal | `CollectionPage` (`Blog` for Journal) + `BreadcrumbList` |
| CV | `Person`, `ProfilePage`, `BreadcrumbList` |
| Contact | `ContactPage` + `BreadcrumbList` |
| Project detail | `CreativeWork` + `BreadcrumbList` |
| Artwork detail | `VisualArtwork` + `BreadcrumbList` |
| Journal entry | `Article` + `BreadcrumbList` |

Only fields that can be factually completed are included. No fake awards, no fake reviews, no fake prices, no fake addresses.

## 11. Artist entity SEO

- Canonical name: **Kobi Israel** (with **Yaqov Israel Grossi** as `alternateName`).
- Same `Person` schema is reused across `Home`, `CV`, `Contact`.
- Consistent biography, contact and social references will be added only when the artist supplies confirmed values.

## 12. Content clusters

| Cluster | Hub | Members |
| --- | --- | --- |
| Photography and Memory | `/still` | `/still`, `/archive`, `/journal`, `/projects/fragments-of-life`, `/journal/still-images-as-memory-objects` |
| Masculinity and Desire | `/projects/cuba-love-story` | `/projects/cuba-love-story`, `/projects/military-masculinity-archive`, `/projects/intimate-strangers`, `/journal/masculinity-as-performance`, `/prints` |
| Books and Publications | `/books` | `/books`, `/archive`, `/cv` |
| Moving Image and Film | `/moving` | `/moving`, `/projects/cuba-love-story`, `/projects/parisian-postcards`, `/contact` |
| Collectors and Prints | `/prints` | `/prints`, `/prints/:slug`, `/contact` |
| Archive and Research | `/archive` | `/archive`, `/cv`, `/journal`, `/contact` |

## 13. Wix → kobiisrael.life redirects (server-level)

Apply at Cloudflare / Vercel / Nginx — not in React.

| From | To | Code |
| --- | --- | --- |
| `https://kobiisrael.wixsite.com/kobiisrael` | `/` | 301 |
| `/still` | `/still` | 301 |
| `/moving` | `/moving` | 301 |
| `/limited-edition-prints` | `/prints` | 301 |
| `/books` | `/books` | 301 |
| `/cv` | `/cv` | 301 |
| `/contact` | `/contact` | 301 |
| `/projects` | `/projects` | 301 |
| `/archive` | `/archive` | 301 |
| `https://www.kobiisrael.life/*` | `https://kobiisrael.life/*` | 301 |

Authoritative copy lives in `data/seo.js → REDIRECT_MAP`.

## 14. Search Console + analytics (placeholders)

- Verify domain ownership in Google Search Console after DNS cut-over.
- Submit `https://kobiisrael.life/sitemap.xml`.
- Monitor: Coverage, Core Web Vitals, Performance (queries), Image search.
- Privacy-respecting analytics (e.g. Plausible / Fathom / GA4 with consent) only after the privacy + cookies pages are reviewed.

## 15. Content quality review

Every public page has been reviewed for: clear purpose, original content, accurate facts, internal links, semantic headings, descriptive metadata, no thin content, no duplicate text, no keyword stuffing, no false claims, no AI-sounding filler. Placeholders are clearly marked **"To be confirmed by artist"** so no placeholder is mistaken for fact.

## 16. Duplicate-content guardrails

Each page serves a single purpose:
- Home introduces.
- Still curates photography.
- Archive maps the whole body of work.
- Project pages explain specific bodies of work.
- Prints support collector inquiries.
- Artwork pages provide metadata records.
- Journal provides reflective notes.

The site uses distinct copy across pages; the only re-used assets are the navbar, footer and pathway cards (which is the expected pattern).

## 17. Google image search

For each important photograph: descriptive filename, accurate alt-text, nearby caption, project context, structured data (`VisualArtwork` for artworks, `ImageObject` references inside breadcrumbs/structured data), compressed web version. Master files remain off-limits until the artist approves a public-distribution policy.

## 18. Reputation / safe link-building

Confirmed-only outbound directions:
- Confirmed artist social profiles linked from the site footer once supplied.
- Publisher pages, gallery pages, press pages and exhibition pages linked to (and from, where possible) when references are confirmed.

Avoided: paid link schemes, fake directories, irrelevant guest posts, AI-generated link farms, fake press, fake reviews, fake awards.

## 19. Internal SEO dashboard

`/seo-review` (noindex) renders the SEO map, metadata detail, content clusters, redirects, noindex routes, image SEO rules, content calendar and launch checklist. Use it as the single source of truth during pre-launch QA.

## 20. Launch checklist (SEO-specific)

Tracked in `SEO_LAUNCH_CHECKLIST` (`data/seo.js`) and rendered on `/seo-review`. Cleared item-by-item before going live. The platform-level launch checklist remains at `/launch-checklist`.

## 21. Final SEO goal

Make `kobiisrael.com` (canonical: `kobiisrael.life`) **clear, crawlable, useful, fast, image-rich, artist-accurate and easy to understand**. The intent is to help the right audiences — collectors, curators, museums, researchers, press, programmers, readers — find Kobi Israel's photography, moving-image work, books, archive, limited edition prints, CV, project pages and inquiry pathways. Not to game search engines.
