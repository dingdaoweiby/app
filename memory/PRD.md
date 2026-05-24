# Supernova Education — Full Multi-Page Build (v8)

## Original Problem Statement
> https://www.supernova-seed.com 这个是我的网站，但是现在的排版啊，页面啊，字体呀，颜色搭配呀，设计感都太差了。需要更加学院风、更艺术、让家长安心。

## Latest Iteration — Full Site Build
**User Direction (this round):**
- Remove Hero watermark (didn't like the crest texture)
- Remove Track Record honor roll from homepage
- Replace nav with program structure: K-12 · College ▾ · Graduate · Research · International · Contact
- College has dropdown with two sub-pages (Strategic Planning + Admissions Consulting)
- Add 4-stage Methodology flow on homepage AFTER Three Convictions
- Use simplified Page Header on all sub-pages (not full Hero)
- English only — no Chinese for now
- Optimize content from original site

## Locked Design System
- **Theme:** Old-money academic / editorial / Princeton–Yale–Columbia viewbook
- **Typography:** Playfair Display (headlines) · Source Serif 4 (body) · IBM Plex Mono (labels/numbers)
- **Palette:**
  - Paper white `#FFFFFF`
  - Columbia Mist `#EAF1F7`
  - Navy `#163E72` (Nav + Footer)
  - Burnt Orange `#C75B12` (accent — eyebrows, italic emphasis, numbers, hover)
  - Steel `#56698A`, Hairline `#D6DDE7`
- **Background pattern:** Alternating mist / white across content sections; navy bookends (Nav top + Footer bottom)

## Architecture
- React Router v7 — multi-page SPA
- All routes scroll-to-top on navigation
- Reusable: `Nav`, `Footer`, `PageHeader`, `PageCTA`, `ProgramSection`, `Marquee`, `Methodology`

## Routes (8 pages)
| Route | Page | Sections |
|---|---|---|
| `/` | Home | Hero · Stats · Marquee · Pillars · Methodology · Stories · CTA |
| `/k-12` | K-12 | Overview · ISEE/SSAT Prep · Private School Admissions |
| `/college/strategic-planning` | College — 9-11 | Why Early · Course Selection · ECs · Summer/Testing |
| `/college/admissions-consulting` | College — Senior Year | School List · Essays · Interviews · Decisions |
| `/graduate` | Graduate | Med School · PhD · MBA · DIY Support |
| `/research` | Research | 12-Month Arc · Fields Supported |
| `/international` | International | Visa · Homestay · Guardianship |
| `/contact` | Contact | 3 ways (Email/Phone/WeChat) · Studio · Next Steps |

## Content Highlights
- 4-stage Methodology (Diagnostic → Roadmap → Coaching → Decisions) with deliverable per stage
- Each program page = breadcrumb + Page Header + Overview card + 2–4 ProgramSection blocks + PageCTA + Footer
- Recent admits showcased on every program page in orange-bordered sidebar
- Contact page replaces traditional form with "Three Ways to Reach" + "What Happens Next" 4-step process

## Backlog / Future
- P1 — Replace Unsplash images with authentic Supernova photography
- P1 — Design proper Supernova crest (logo currently uses placeholder shield)
- P1 — Add subtle scroll-reveal animations
- P2 — Chinese locale (separate i18n route)
- P2 — Real contact form with email backend
- P2 — CMS for editing program content & student outcomes
- P2 — Blog / Insights section for SEO + parent education content

## Next Actions
1. Review the live site end-to-end (8 pages)
2. Edits requested per page (content, imagery, micro-copy)
3. After approval: image replacement + crest design + animations
