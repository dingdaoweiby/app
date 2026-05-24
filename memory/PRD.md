# Supernova Education — Homepage Style Demo (v2 · Collegiate)

## Original Problem Statement (verbatim)
> 这个是我的网站，但是现在的排版啊，页面啊，字体呀，颜色搭配呀，设计感都太差了。
> 我希望的是更加学院风，然后更艺术一些……让家长学生看着很安心、专业的感觉。

## v1 Feedback (User, in Chinese)
- v1 太女性化 / 太艺术 — reject the literary-magazine ivory + Cormorant direction
- Want classic collegiate (Princeton / Yale / Columbia brand-book), masculine, reassuring
- **English only** (Chinese site will be a separate locale with language toggle)
- Palette inspired by University of Florida (orange + navy) + Columbia (white + light blue)
- Drop the warm ivory background

## v2 Design System (locked candidate)
- **Archetype:** Classic Collegiate Brand Book — Princeton / Yale / Columbia prospectus
- **Typography:**
  - Display: **Playfair Display** (500–700) — substantial, confident serif headlines
  - Body: **Source Serif 4** — modern academic serif
  - Utility / Labels / Numbers: **IBM Plex Mono** — institutional, archival catalogue feel
- **Palette:**
  - Paper (background) `#FFFFFF`
  - Bone (cards / closing CTA) `#F5F7FA`
  - Columbia Mist (marquee strip) `#EEF3F8`
  - **Navy** (primary) `#0A2342`
  - Navy Deep `#061634`
  - Steel (secondary text) `#4A5A75`
  - **Burnt Orange** (UF accent) `#C75B12` — used SPARINGLY for labels, numbers, accents
  - Hairline `#D7DCE3`
- **Conventions:**
  - Section markers: `§ I · Track Record`, `§ II · Approach` — archival numbering
  - Stat labels: `Figure 01`, `Figure 02` — annual-report style
  - Image captions: `Plate I — The Reading Room · № 001` — book-plate style
  - Pillars: Roman numerals **I · II · III** in burnt orange
  - Mini shield crest next to the logo
- **Rhythm:** Alternating white / navy / white / navy sections for institutional weight

## What's in the Demo (single homepage)
1. Sticky nav with shield crest · EN/中文 language toggle stub
2. Hero — massive navy serif headline + Plate I academic photo
3. Navy stats strip — 4 figures with orange labels
4. Columbia-mist school marquee
5. The Ivy League Class of 2026 — numbered honor roll
6. Navy "Three Convictions" pillars block (I · II · III)
7. Student Stories — featured (drop cap, Columbia ED) + 3 side cards
8. Manifesto block — dark navy with subtle background
9. Closing CTA on bone surface
10. Navy footer with full contact + language toggle

## Backlog (after style approval)
- P0 — Build out the remaining pages: Approach, full Track Record, Methodology, Student Stories index/detail, Contact form
- P0 — Bring the 中文 site online with proper i18n routing
- P1 — Replace Unsplash images with **commissioned campus / archival photography** for authenticity
- P1 — Replace placeholder shield with a custom **Supernova crest** (subtle wordmark / Latin motto)
- P1 — Scroll-reveal motion and smoother section transitions
- P2 — CMS so admissions team can update outcomes each cycle
- P2 — SEO meta, OG, structured data (EducationalOrganization)

## Next Actions
1. Confirm v2 style direction (palette / typography / section rhythm)
2. Iterate: too dark? too sparse? want a softer light-blue accent zone? More serif weight?
3. Once locked → expand to multi-page site + 中文 locale
