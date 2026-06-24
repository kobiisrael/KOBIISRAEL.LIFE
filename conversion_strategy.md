# KOBIISRAEL.COM — Conversion Strategy

> Canonical reference for turning serious visitors into the correct professional inquiry — without making the site feel commercial, desperate or generic.
> Convert through **trust, atmosphere, clarity and desire** — never through pressure.

---

## 1. Core principle

The site does not sell. It receives professional inquiries. Visitors should feel:
the work is serious · the archive has depth · the artist has history · the prints may be collectible · the inquiry process is professional · the website is safe to contact · the work is worth exploring slowly.

Forbidden patterns: sales funnels, pop-ups, discount language, fake scarcity, countdown timers, forced newsletter capture, aggressive "Buy Now" buttons, generic lead-gen copy.

## 2. Audiences (8)

| Audience | inquiry_type | Pathway hub |
| --- | --- | --- |
| Collectors | `collector` | `/prints` |
| Curators / museums | `curator` (`curatorial`, `museum`) | `/archive` |
| Galleries | `gallery` | `/cv` + `/prints` |
| Publishers / press | `press` / `publisher` | `/cv` + `/books` |
| Film programmers | `film_programmer` | `/moving` |
| Researchers / academics | `research` / `academic` | `/archive` |
| Book buyers | `book_inquiry` / `purchase` / `signed_copy` | `/books` |
| General viewers | `general` | `/` |

## 3. Visitor journey map

The full table (audience · entry · motivation · trust · next action · target · friction · fix) lives in `frontend/src/data/conversion.js → CONVERSION_JOURNEYS` and renders on `/conversion-review`.

## 4. Homepage flow (10 blocks)

1. Hero — **View Selected Works · Explore the Archive** (two CTAs only)
2. Conceptual Entry — emotional hook
3. Selected Works — first proof
4. Still & Moving Split — archive breadth
5. Featured Project (Cuba) — anchor project + Request Print Availability
6. Prints / Collector — quiet collector entry
7. Books — publication credibility
8. Credibility Strip + Artist Statement — CV credibility
9. Current Projects — living archive
10. Contact section — professional inquiry

The collector CTA appears **after** visual trust is established (not in the hero).

## 5–11. Audience pathways

Per-audience pathway, trust elements, safe CTAs, forbidden language and reassurance copy live in `data/conversion.js → AUDIENCE_PATHWAYS`. Each one is rendered as a card on `/conversion-review`.

Reassurance phrases reused across pathways:
- **Collector:** "Print availability, edition details, dimensions, condition and pricing are confirmed case by case before any sale or reservation."
- **Curator:** "Professional materials, archive details, screening information and exhibition-related requests are reviewed case by case."
- **Gallery:** "Gallery and representation-related inquiries may include exhibitions, print sales, archive development, viewing room proposals or professional collaboration."
- **Press:** "Please include the intended use, publication name, deadline, image requirements and rights request where relevant."
- **Film:** "Screening copies, excerpts, subtitles, technical details and installation formats are confirmed case by case."
- **Research:** "Archive and research inquiries should include the project, theme, publication, academic context or research purpose where relevant."
- **Book:** "Book availability, signed copy status, pricing and shipping information are confirmed before any order is arranged."

## 12. CTA placement map

Page-by-page CTA placement is the source of truth in `data/conversion.js → CTA_MAP`. The hero is intentionally restrained (two CTAs only). Each pathway card and section-level button **prefills** the inquiry form's `inquiry_type` so visitors never land on a generic form.

## 13. Form microcopy

Canonical copy is in `data/conversion.js → FORM_MICROCOPY`:
- before
- collector_note
- press_note
- film_note
- after_submit
- error
- privacy

## 14. Trust elements

CV · biography · selected exhibitions · selected publications · books · archive structure · project metadata · artwork metadata · print info placeholders · professional inquiry forms · legal placeholders · copyright notice · consistent design · fast loading · mobile polish · clear contact pathways.

**Never used:** fake testimonials, fake reviews, fake client logos, fake awards, fake press quotes, fake collector names, fake scarcity, fake availability.

## 15. Friction reduction

Each known friction has a documented fix in `data/conversion.js → FRICTION_REDUCTION`. Highlights:
- Unclear print availability → "Availability to be confirmed" markers everywhere.
- Unclear contact route → 9 pathway cards on `/contact` + section-level CTAs that prefill the form select.
- CV too dense → grouped sections.
- Old Wix links → 301 redirect map in `data/seo.js`.

## 16. Vocabulary

**Use** (`VOCABULARY.safe`): Request Print Availability, Request Artwork Details, Send Collector Inquiry, Price on Request, Availability to be Confirmed, Edition Details to be Confirmed, Professional Inquiry, Case by Case, Request Book Availability, Request Screening Information, Request Licensing Information.

**Avoid** (`VOCABULARY.forbidden`): Buy Now, Add to Cart, Only One Left, Last Chance, Investment Opportunity, Guaranteed Value, Museum Quality (unsupported), Rare Masterpiece (unsupported), Celebrity-owned (unapproved), Huge Demand, Act Now, Limited Time.

## 17. Newsletter strategy

- **Purpose:** occasional archive notes, project updates, book news, print availability and screening information.
- **Placement:** homepage footer, `/journal`, `/archive`, `/contact`.
- **Fields:** email + interest (6 options).
- **CTA:** Subscribe.
- **After-submit:** "Thank you. You will receive occasional archive notes and project updates."
- **Forbidden:** pop-ups, forced subscription before browsing, overpromised frequency.

## 18. Analytics conversion events

Tracking placeholders only — **no scripts loaded until privacy policy and cookie notice are reviewed.** Full event list in `data/conversion.js → ANALYTICS_EVENTS`.

## 19. Conversion dashboard

`/conversion-review` (noindex) renders:
1. Core principle
2. Audiences
3. Visitor journey map (searchable)
4. Homepage flow
5–11. Audience pathways
12. CTA placement map
13. Form microcopy
14. Trust elements
15. Friction reduction
16. Vocabulary (use vs avoid)
17. Newsletter strategy
18. Analytics events
19. Conversion status registry
20. Mobile checks
21. Accessibility checks
22. Safety review
23. Quality test
+ Inquiry routing reference

## 20. Mobile conversion checks

11 items in `MOBILE_CHECKS`. Verified at 390px in testing_agent iterations 13–19.

## 21. Accessibility conversion checks

10 items in `ACCESSIBILITY_CHECKS`: clear labels, keyboard-accessible buttons, accessible dropdowns, clear error messages, consent checkbox with visible label, descriptive CTA text, colour-independent status, mobile-ready forms, visible focus states, no essential CTA hidden inside images.

## 22. Professional safety review

All 13 risk areas in `SAFETY_REVIEW` are either **marked TBC** (`"To be confirmed by artist"`) or flagged **needs review** (e.g. unconfirmed celebrity collector claims, never published unconfirmed).

## 23. Final quality test (10 questions)

The site must answer "yes" to each of `QUALITY_TESTS`:
1. Can a collector understand how to ask about a print in under 30 seconds?
2. Can a curator find CV, projects and contact quickly?
3. Can a gallery understand the artist's seriousness without being oversold?
4. Can a journalist find biography, books and press route?
5. Can a film programmer find moving-image inquiry route?
6. Can a researcher enter the archive without getting lost?
7. Can a book buyer ask about availability clearly?
8. Can a general visitor move from homepage to deeper pages naturally?
9. Can every inquiry type reach the right form?
10. Does every CTA feel calm, credible and artist-appropriate?

## Final conversion goal

Make the site clearer, more trustworthy, more collector-ready, more curator-ready, more gallery-ready, more publisher-ready, more research-friendly, more commercially useful, more emotionally persuasive — and less generic, less passive, less confusing, less sales-heavy.

The site converts serious interest into professional inquiries **while preserving the dignity of the work.**
