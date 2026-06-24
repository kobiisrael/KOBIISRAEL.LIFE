# KOBIISRAEL.COM — Visual Identity & Design System

_Codified from the as-built site (iterations 2–18) on 24 June 2026. This is the canonical visual reference for the project. Updates should be made here first, then propagated to `tailwind.config.js`, `src/index.css` and component classes._

---

## 1. Visual identity — one-line brief

A serious artist archive that feels like a museum viewing room, a high-end monograph and a film still paused before memory disappears. Cinematic, quiet, premium, masculine without cliché, queer-coded without rainbow branding, restrained, sensual, timeless.

It must **not** look like: a generic portfolio template, a Wix template, a fashion brand, a corporate site, a stock-card e-commerce shop or an AI-generated layout.

## 2. Colour palette (as-built, Tailwind `ki.*`)

| Token              | Hex       | Use                                                        |
| ------------------ | --------- | ---------------------------------------------------------- |
| `ki-bg`            | `#0a0a09` | Off-black page background (warm, not pure black)           |
| `ki-surface`       | `#121211` | Alternating section background (slightly lifted)           |
| `ki-elevated`      | `#1a1a19` | Image placeholders, lightbox backdrops, card surfaces      |
| `ki-border`        | `#2a2a29` | Hairline borders, dividers, table gridlines                |
| `ki-fg`            | `#fdfcf9` | Warm white foreground text                                 |
| `ki-muted`         | `#a3a19a` | Captions, metadata labels, footnotes                       |
| `ki-beige`         | `#d9d3c7` | Soft archival beige — italic serif subtitles & accents     |
| `ki-red`           | `#8B1C1C` | Deep oxblood — Moving-image / film accents only            |
| `ki-gold`          | `#C19B54` | Aged gold — primary CTA borders, overlines, active states  |

### Colour rules
- **Default contrast**: `ki-fg` on `ki-bg`. Alternate sections use `ki-surface`.
- **Accent gold (`#C19B54`)** used sparingly: primary CTA borders, overline rules, active filter tabs, hover states. Never as a flood.
- **Oxblood red (`#8B1C1C`)** reserved for Moving / Film / Video signalling. Pairs with `#d97a7a` foreground text. Never used on Still or Books contexts.
- **No pure white backgrounds.** No rainbows. No neon. No gradients except the cinematic `ki-bg/85 → ki-bg/55 → ki-bg` hero overlay.

## 3. Typography system

Two font families only — loaded from Google Fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=Manrope:wght@300;400;500;600;700&display=swap');
```

| Family             | Use                                                                                       |
| ------------------ | ----------------------------------------------------------------------------------------- |
| **Playfair Display** | Editorial serif — H1, H2, H3, italic subtitles, pull quotes, project/book/film titles |
| **Manrope**          | Sans-serif — body text, metadata, captions, buttons, form inputs                       |

### Hierarchy

| Level     | Class                                          | Size (sm→lg)                  | Notes                                                |
| --------- | ---------------------------------------------- | ----------------------------- | ---------------------------------------------------- |
| **H1**    | `font-serif text-5xl sm:text-6xl lg:text-7xl`  | 48 → 60 → 72px                | Cinematic; tracking-tight; leading-[0.95] on hero    |
| **H1 hero** | `text-6xl sm:text-7xl lg:text-[9rem]`        | 60 → 72 → 144px               | Used only on Still, Moving, Journal, Contact heroes  |
| **H2**    | `font-serif text-3xl sm:text-4xl lg:text-5xl` | 30 → 36 → 48px                | tracking-tight; balanced line length                 |
| **H2 section** | `font-serif text-4xl sm:text-5xl lg:text-6xl` | 36 → 48 → 60px           | Used for major page sections                         |
| **H3**    | `font-serif text-xl` or `text-2xl`             | 20 → 24px                     | Project/book/card titles                             |
| **Subtitle (italic)** | `font-serif italic text-xl sm:text-2xl text-ki-beige/90` | 20→24px      | Always italic; always `ki-beige/90`                  |
| **Body**  | `text-base md:text-lg leading-relaxed text-ki-fg/80` | 16 → 18px              | Long-form prose, intros                              |
| **Body small** | `text-sm text-ki-fg/75 leading-relaxed`    | 14px                          | Card descriptions                                    |
| **Caption / metadata** | `text-[10px] uppercase tracking-[0.22em–0.28em] text-ki-muted` | 10px | Always uppercase, always letter-spaced               |
| **Overline** | `.overline` (custom utility)                | 11px                          | `text-[11px] uppercase tracking-[0.32em] text-ki-gold/90` |

### Typography rules
- Two fonts only — never add a third.
- No decorative, handwritten or display fonts.
- Italic Playfair Display is used **only** for subtitles, pull quotes and the "From [series]" framing line on Artwork records.
- Tracking-tight on all serif headings (`tracking-tight`).
- Letter-spaced uppercase (`tracking-[0.22em]+`) on all overlines, metadata labels and small captions.

## 4. Spacing & layout system

| Token                       | Use                                              |
| --------------------------- | ------------------------------------------------ |
| `.container-ki`             | Page max-width container with horizontal padding |
| Section vertical rhythm     | `py-24 md:py-32` (large) or `py-20 md:py-28`     |
| Hero vertical rhythm        | `min-h-screen` or `min-h-[78–80vh]` with `pt-40 pb-20` |
| Section dividers            | `border-b border-ki-border`                      |
| Card grid gap pattern       | `gap-px bg-ki-border border border-ki-border` (1px gridlines on card grids) |
| Content text column         | `max-w-2xl` (intro) or `max-w-3xl` (long body)   |
| Image + side panel split    | `lg:grid-cols-12 gap-12 lg:gap-20` (8/4 or 7/5)  |

### Layout rules
- Generous margins everywhere. Let images breathe.
- Contrast wide image areas with narrow text columns.
- Cards arranged on `gap-px` 1px gridlines, not heavy shadows.
- No masonry layouts.
- Alternating section backgrounds (`ki-bg` ↔ `ki-surface`) provide rhythm.

## 5. Image hierarchy

| Surface              | Aspect ratio  | Treatment                                             |
| -------------------- | ------------- | ----------------------------------------------------- |
| Page hero            | 21/9 or full-bleed `min-h-screen` | `object-cover opacity-55–70` + gradient overlay + `grain` |
| Featured project     | 4/5 or 5/6    | `opacity-85` + top→bottom `ki-bg/40` gradient         |
| Project card         | 4/5           | placeholder shows "Image · NN" overline               |
| Gallery (sequence)   | 4/5           | hover lifts opacity 0.9 → 1.0; click → lightbox       |
| Artwork detail       | 4/5 (default) | click-to-enlarge lightbox; `object-contain` in lightbox |
| Lightbox enlarged    | 3/2           | `object-contain` to preserve full image dignity       |
| Book cover           | 3/4           | "Cover · placeholder" until artist supplies           |
| Book spread          | 3/2           | grid of 6 placeholder blocks until artist supplies    |
| Moving-image still   | 16/9 (video)  | dark cinematic still, no autoplay, no sound          |
| Archive thumbnail    | 4/3           | smaller, contact-sheet density                        |

All image placeholders use `bg-ki-elevated border border-ki-border/60` with a centred `text-[10px] uppercase tracking-[0.28em] text-ki-muted/70` placeholder caption.

### Alt-text format
- `[Image type] by Kobi Israel, details to be confirmed.`
- If project known: `Image from [Project Title] by Kobi Israel, details to be confirmed.`

## 6. Button & CTA design

| Variant         | Class pattern                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------ |
| **Primary**     | `border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-7–10 py-4 text-xs uppercase tracking-[0.24em–0.28em] transition-colors duration-300` |
| **Secondary**   | `border border-ki-fg/30 text-ki-fg hover:border-ki-fg px-7–8 py-4 text-xs uppercase tracking-[0.24em–0.28em]` |
| **Moving / Film** | `border border-[#8B1C1C]/60 text-[#d97a7a] hover:border-[#d97a7a]` — only on moving-image contexts |
| **Text link**   | `text-[11px] uppercase tracking-[0.26em] text-ki-fg/85 hover:text-ki-gold transition-colors`           |
| **Active filter** | `border-ki-gold text-ki-gold bg-ki-gold/5`                                                           |

### CTA wording (approved)
View Selected Works · Explore the Archive · Request Print Availability · View Project · View Moving Image · Read Artist Statement · View CV · Send Professional Inquiry · Collector Inquiries · View Book · View Work · Read Note · Send Inquiry · Request Details

### CTA wording (forbidden — never use)
Buy Now · Shop Now · Add to Cart · Click Here · Let's Collaborate · Let's Work Together · Start Your Journey · Discover My Passion · Limited Time · Last Chance · Investment Opportunity · World-Class · Iconic · Masterpiece · Rare Masterpiece · Celebrity-Owned (unless approved) · Museum-Quality (unless supported)

## 7. Card system

All cards share the same skeleton:

```jsx
<li className="bg-ki-bg p-5–6 min-h-[160–260px] flex flex-col justify-between">
  <div>
    <div className="text-[10px] uppercase tracking-[0.26em–0.28em] text-ki-gold/90">[Category]</div>
    <h3 className="mt-3 font-serif text-lg–xl text-ki-fg tracking-tight">[Title]</h3>
    <p className="mt-3 text-sm text-ki-fg/70 leading-relaxed">[Body]</p>
  </div>
  <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.22em]">
    <span className="text-ki-muted">[Metadata]</span>
    <Link className="text-ki-fg/85 hover:text-ki-gold transition-colors">[CTA] →</Link>
  </div>
</li>
```

Cards live inside `gap-px bg-ki-border border border-ki-border` grids so hairlines do the visual separation work — no shadows.

## 8. Metadata block

Two-column `dl` pattern used on Project Metadata, Artwork Details, Print Records, Side Panels:

```jsx
<dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 text-sm border border-ki-border p-8">
  <div className="flex justify-between gap-4 border-b border-ki-border/60 pb-2">
    <dt className="uppercase tracking-[0.22em] text-[10px] text-ki-muted">[Label]</dt>
    <dd className="text-ki-fg/85 text-right">[Value or "To be confirmed by artist"]</dd>
  </div>
  …
</dl>
```

### Approved fallback strings
- `To be confirmed by artist` (default)
- `Price on request`
- `Availability to be confirmed`
- `Archive record only`
- `Edition details to be confirmed`

## 9. Forms

| Element          | Class pattern                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------- |
| Input / select   | `w-full bg-transparent border-b border-ki-border focus:border-ki-gold outline-none text-ki-fg placeholder:text-ki-muted py-3 transition-colors` |
| Label            | `text-[10px] uppercase tracking-[0.28em] text-ki-muted`                                                       |
| Textarea         | same as input + `resize-none`                                                                                 |
| Checkbox accent  | `accent-[#C19B54]` (the ki-gold hex)                                                                          |
| Required marker  | Native `required`; no asterisk decoration                                                                     |
| Submit (primary) | Primary button pattern                                                                                        |
| Success element  | `text-sm text-ki-gold/90 max-w-md leading-relaxed`                                                            |

### Form rules
- Underline-only inputs (no boxed fields).
- Consent checkbox always required for inquiry forms; submit blocked without consent (toast error).
- Standard after-submit message: "Thank you for your inquiry. Your message has been received and will be reviewed before reply. Availability, pricing, licensing terms, screenings and professional materials will be confirmed case by case."
- After successful submit, form fields cleared. `submitted` flag clears when user resumes typing.

## 10. Motion & interaction

Allowed:
- `transition-colors duration-300` on buttons, links, card hovers
- `animate-fade-up` with `animation-delay` 0.05–0.6s on hero entrance only
- Smooth anchor scroll (`scrollIntoView({ behavior: "smooth" })`)
- Image hover opacity 0.9 → 1.0
- Lightbox open/close (no fancy transitions)

Forbidden:
- Parallax, scroll-jacking, autoplay video w/ sound, spinners on idle, marquees, theatrical entrance animations, mouse trails, decorative cursors.

## 11. Mobile rules

- Navigation collapses cleanly via `Navbar.jsx` mobile menu.
- Cards stack vertically.
- Filters scroll horizontally inside `overflow-x-auto no-scrollbar` containers.
- All forms stack vertically at the `md` breakpoint.
- No horizontal page overflow (`document.documentElement.scrollWidth <= window.innerWidth`).
- Image placeholders preserve aspect ratio — no cropping of faces or bodies.
- Footer collapses from 4 columns → 1 column on mobile.

## 12. Accessibility visual rules

- Strong contrast: `ki-fg` on `ki-bg` ≈ 19:1. `ki-fg/75` on `ki-bg` ≈ 14:1. Captions at `ki-muted` ≈ 7:1.
- All inputs have associated `<label htmlFor>`.
- Lightbox traps Escape, ArrowLeft, ArrowRight; backdrop click closes.
- Filter tabs use `role="tab"` and `aria-selected`.
- No essential text hidden inside images.
- No colour-only status — every availability label is text-based.
- Focus states inherited from native browser ring; visible.

## 13. Copyright visual treatment

- Footer carries the spec line: "All images and works are copyright Kobi Israel unless otherwise stated. Reproduction, publication, copying, downloading, commercial use or redistribution is not permitted without written permission. Final copyright wording to be confirmed by artist."
- Discreet inline notice on artwork records: "Images are shown for viewing and archive reference only."
- **No watermarks** on artwork images by default.
- **No anti-theft right-click blocking** — accessibility-hostile.

## 14. Page-by-page visual direction (as-built)

| Page                  | Personality                                                                                              | Key visual moves                                                                              |
| --------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `/` (Home)            | Cinematic gateway. One powerful image; do not show everything.                                           | Full-bleed hero with `grain`; alternating bg sections; 7-card selected works grid             |
| `/still`              | Curated photography archive.                                                                              | Filtered project index; collector pathway sidebar; archive notes cards                        |
| `/moving`             | Cinematic, time-based. No YouTube vibes.                                                                 | Darkened cinematic stills; oxblood-red accents; format + duration metadata                    |
| `/projects/:slug`     | Refined monograph chapter.                                                                                | 13-section template: hero → summary → curatorial → image sequence (lightbox) → selected works → moving connection → books → prints → archive notes → history → metadata → related → inquiry |
| `/prints`             | Private gallery viewing room.                                                                             | Quiet collector copy, "Price on request", metadata panels, no shopping cart                   |
| `/prints/:slug`       | Premium artwork record.                                                                                   | Large image + side panel; 20-field metadata; click-to-enlarge lightbox; licensing pathway     |
| `/books`              | Artist-book table.                                                                                        | Warm cover placeholders; ISBN, publisher, format metadata; per-edition price tiers            |
| `/archive`            | Map of the work.                                                                                          | 12 category cards + searchable project index + library + inquiry form                         |
| `/cv`                 | Museum CV.                                                                                                | Text-led; clear biography → exhibitions → collections → awards → publications → materials     |
| `/journal`            | Literary archive.                                                                                         | Narrow reading column; featured notes; motifs; voice/film/sound cards; newsletter             |
| `/journal/:slug`      | Editorial writing entry.                                                                                  | Hero · title · meta · body · pull quote · image insert · related links                        |
| `/contact`            | Discreet inquiry desk.                                                                                    | 9 pathway cards → one calm form with conditional fields → 5 sectioned pathway emphasis blocks  |
| `/legal/:slug`        | Quiet legal placeholder.                                                                                  | Narrow column, "Final wording to be reviewed before launch"                                   |
| `/launch-checklist`   | Internal admin (noindex).                                                                                 | 5 sections × 43 items, square-bullet checklist                                                |
| `/migration-review`   | Internal admin (noindex).                                                                                 | 11 sections, source/target mapping table, redirect map, missing-content checklist             |
| 404                   | Cinematic, archival.                                                                                       | "Page Not Found" + 3 CTAs (Return Home, Explore Archive, Contact); preserves `project-not-found` testid for backward compat |

## 15. Visual consistency review (as-built, iteration 18 testing-agent verified)

| Check                            | Status |
| -------------------------------- | ------ |
| Same typography system on every page                   | ✅ Playfair + Manrope only, hierarchy enforced via component classes |
| Same colour palette                                    | ✅ `ki.*` tokens in `tailwind.config.js`, no off-palette inline hex values |
| Same button system                                     | ✅ Primary (gold border) / secondary (fg/30 border) / moving (red border) — three variants, all pages |
| Same card spacing                                      | ✅ `gap-px bg-ki-border` grid pattern repeated across all index pages |
| Same metadata styling                                  | ✅ Two-column `dl` with `border-b border-ki-border/60 pb-2` rows |
| Same form styling                                      | ✅ Underline inputs, gold accent checkbox, consent gate enforced on all inquiry forms |
| Same footer                                            | ✅ 4-column footer (`Footer.jsx`) on every page via `Layout.jsx`            |
| Same navigation                                        | ✅ `Navbar.jsx` with 10 NAV_ITEMS, mobile menu                              |
| Same mobile behaviour                                  | ✅ 390×844 verified clean on /, /contact, /journal, /projects, /prints, /launch-checklist, /legal, /migration-review |
| Same image treatment (placeholder + alt format)        | ✅ `bg-ki-elevated border-ki-border/60` placeholders; spec-format alt-text everywhere |

## 16. Design quality test (iteration-18 verdict)

| Test                                                            | Verdict |
| --------------------------------------------------------------- | ------- |
| Would it feel credible beside a museum artist archive?          | ✅ |
| Would a collector trust the print inquiry pathway?              | ✅ (no checkout, no fake scarcity, "Price on request" everywhere) |
| Would a curator quickly understand the work?                    | ✅ (CV + Archive + Projects + Migration content all sourced from artist's Wix) |
| Would a gallery feel the artist is serious?                     | ✅ |
| Would the design make the images feel more valuable?            | ✅ (`object-contain` in lightboxes, warm tones, restrained accents) |
| Would the archive feel deep but organised?                       | ✅ (searchable index, filters, motif cards, timeline) |
| Would the website still feel personal, intimate and strange?    | ✅ (Borges epigraph + verbatim Wix language + "still and moving diaries" thread) |
| Would the site avoid looking like a generic Wix portfolio?      | ✅ |
| Would the site avoid sounding or looking AI-generated?          | ✅ (verbatim artist language; restrained, not chatty) |

## 17. Source-of-truth file map

| Concern                                | File                                                              |
| -------------------------------------- | ----------------------------------------------------------------- |
| Colour tokens                          | `frontend/tailwind.config.js` (`theme.extend.colors.ki`)          |
| Font families                          | `frontend/src/index.css` (`@import` + `@layer base`)              |
| Container + custom utilities (`.overline`, `.grain`, `.container-ki`) | `frontend/src/index.css`              |
| Animations (`animate-fade-up`)         | `frontend/src/index.css`                                          |
| Hero copy options                      | `frontend/src/data/site.js` (`HERO_COPY_OPTIONS`)                 |
| Per-project verbatim content           | `frontend/src/data/site.js` (`STILL_PROJECTS`, `MOVING_WORKS`)    |
| Per-page testIds                       | `frontend/src/constants/testIds/home.js`                          |
| Reusable templates                     | `frontend/src/components/project/ProjectDetailTemplate.jsx`<br>`frontend/src/pages/ArtworkRecord.jsx` |
| Layout shell (nav + footer)            | `frontend/src/components/layout/{Layout,Navbar,Footer}.jsx`       |

## 18. What is intentionally NOT in the design system

- ❌ Light mode / theme toggle. The dark cinematic palette is the work.
- ❌ A logo mark separate from the wordmark "KOBI ISRAEL". Typography is the identity.
- ❌ Stock illustrations or decorative SVGs. Photography only.
- ❌ Decorative dividers. Hairline `ki-border` rules only.
- ❌ Loading spinners on idle. The site is text-led and fast.
- ❌ Hero video. Stills only.
- ❌ Cookie banner overlay design (legal review pending).
- ❌ Watermarks. Discreet copyright in footer + per-page notices only.

---

_Maintained alongside the codebase. Update this document first when adjusting any visual rule, then propagate to the relevant component/util/config file referenced in section 17._
