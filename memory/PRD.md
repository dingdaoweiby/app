# Supernova Education — Homepage Redesign Demo

## Original Problem Statement (verbatim, Chinese)
> https://www.supernova-seed.com/ 这个是我的网站，但是现在的排版啊，页面啊，字体呀，颜色搭配呀，设计感都太差了。我希望的是，因为它是一个教育网站嘛，嗯希望的是面向家长啊，然后学生能够更清晰一些，然后看上去呢更加，嗯学院风，嗯然后更艺术一些。

User asked to start with **homepage only** as a style/font/tone lock-down demo before redesigning the full site.

## Architecture
- Frontend: React (CRA + Tailwind) — pure presentational, no backend calls
- Single page: `/app/frontend/src/pages/Home.jsx`
- Components: Nav, Hero, StatsStrip, Marquee, TrackRecord, Pillars, StudentStories, Manifesto, ClosingCTA, Footer

## Design System (locked)
- **Archetype:** Old-Money Academic / Editorial Luxury
- **Typography:** Cormorant Garamond (EN headings + body) · Noto Serif SC (Chinese) · Chivo (small caps / utility)
- **Palette:**
  - Paper `#F9F8F6`
  - Alabaster `#F2EFE9`
  - Ink (Oxford Navy) `#1A1B26`
  - Graphite `#5C5F6A`
  - Academic Crimson `#8A1538`
  - Warm Ash hairline `#D8D1C7`
- **Layout:** asymmetric editorial grid, hairline borders, generous whitespace, left-aligned, drop caps, subtle paper grain overlay, bilingual EN+中文 treated as a design feature.

## What's been implemented (Jan 2026)
- [x] Sticky editorial nav with crimson accent
- [x] Hero with bilingual headline + ink-wash plate
- [x] 4-up stats strip with newspaper hairline dividers
- [x] Infinite school-name marquee (alabaster strip)
- [x] Ivy League Class of 2026 honor roll (numbered, 2-col layout with B&W library plate)
- [x] "Three things we believe" pillars (01/02/03 in crimson italic)
- [x] Student Stories — featured + 3 side cards, magazine-style
- [x] Dark Manifesto block with gothic arch image + cinematic overlay
- [x] Closing CTA + editorial footer with contact info, WeChat, Livingston NJ

## Backlog (after style approval)
- P0 — Build remaining pages: Approach, Track Record (full), Methodology, Student Stories (detail), Contact (form)
- P1 — Animated scroll reveals (Framer Motion / GSAP)
- P1 — i18n proper language toggle (currently both languages always visible)
- P2 — CMS layer so the team can edit student outcomes each season
- P2 — SEO meta, OG images, structured data (LocalBusiness + EducationalOrganization)
- P2 — Newsletter subscribe / parent resources blog

## Next Actions
1. Get user feedback on style/font/tone of the demo homepage
2. Iterate on direction (color tweak, font swap, etc.) if requested
3. Once locked → build out remaining site pages
