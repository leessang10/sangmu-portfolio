# Sangmu Portfolio Website Design

- Date: 2026-02-25
- Status: Approved
- Owner: Lee Sangmu

## 1. Product Intent

This portfolio is prioritized for three goals in this exact order:
1. Hiring signal for recruiters and interviewers
2. Business collaboration signal for partners and clients
3. Personal brand archive

The site should communicate engineering credibility quickly, then provide project depth without forcing users to navigate many pages.

## 2. Scope (MVP)

### In Scope
- Single-page portfolio layout
- Four sections in order: Hero, Philosophy, Projects, Contact
- Six representative projects shown as summary cards
- Project details opened in a modal (problem, solution, outcome, links)
- Dark minimal visual direction
- Responsive layout for mobile, tablet, desktop
- Accessible modal behavior (focus trap, ESC close, explicit labels)

### Out of Scope (for MVP)
- CMS or database-backed content editing
- Blog, timeline, or separate project detail routes
- Automated screenshot ingestion pipeline
- Multilingual toggle

## 3. Architecture Decision

Chosen approach: **Single page + project detail modal**.

Why this approach:
- Keeps first impression fast and focused for hiring use-cases.
- Provides enough depth for collaboration-oriented review.
- Reduces implementation complexity versus multi-route architecture.

Page flow:
1. Hero section with identity and primary CTA
2. Philosophy section with engineering principles
3. Project grid (6 cards)
4. Contact and footer

Interaction flow:
- User clicks a project card.
- Modal opens with full details.
- User closes via close button, backdrop, or ESC.

## 4. Content Model

Create local static data (no backend) to keep editing simple.

### `portfolioProfile`
Fields:
- `name`
- `role`
- `headline`
- `intro`
- `philosophy[]`
- `contacts[]`

### `projects[]` (exactly 6 for MVP)
Fields:
- `id`
- `title`
- `period`
- `summary`
- `role`
- `stack[]`
- `contributions[]`
- `outcomes[]`
- `links[]` with `type: "github" | "live" | "docs"`
- `images[]` (optional)

Image rule:
- If `images[]` is empty, show a "capture coming soon" placeholder in the modal.

## 5. Section and Component Design

### HeroSection
- Name: Lee Sangmu
- One-line value proposition
- CTA buttons: jump to projects, jump to contact

### PhilosophySection
- 3-4 principle cards
- Focus: problem framing, maintainability, user value, team collaboration

### ProjectGridSection
- Six cards with: title, role, short summary, stack highlights
- External quick links when available

### ProjectDetailModal
- Full context: problem, solution, impact, links, captures
- Keyboard and screen-reader friendly behavior

### ContactSection + Footer
- Email and profile links
- Short final statement and last updated date

## 6. Visual Direction

Theme: **Dark minimal**.

Principles:
- High readability contrast
- One restrained accent color
- Strong typography hierarchy
- Light motion only for meaningful transitions

## 7. Candidate Project Set (from local repositories)

Planned representative six:
1. `backend-boilerplate` - production-ready NestJS boilerplate
2. `academic_gpt_project` - AI academic platform (NestJS + multi-clients)
3. `gapck_project` - large multi-app React monorepo + API servers
4. `jobs_project` - hiring platform ecosystem (NestJS + multi-frontends)
5. `anarme_project` - service + admin applications with backend API
6. `augment_holdem` - real-time game project (client/server architecture)

Notes:
- Most links exist and should be attached during content pass.
- Screenshots are expected to be added later; placeholders are supported in MVP.

## 8. Accessibility and Quality Requirements

Accessibility:
- Modal focus trap and focus return
- ESC key close support
- Click target and contrast compliance
- Semantic headings and landmark sections

Quality gates before completion:
- `npm run lint`
- `npm run build`
- Manual responsive check at mobile/tablet/desktop breakpoints

## 9. Risks and Mitigations

Risk: Inconsistent project metadata quality across repositories.
- Mitigation: Keep data in one file and normalize all project descriptions.

Risk: No screenshots at launch can reduce visual trust.
- Mitigation: Use clear placeholders and prioritize first screenshot upload for top 2 projects.

Risk: Modal complexity can introduce accessibility bugs.
- Mitigation: Implement keyboard behavior first and validate manually early.

## 10. Success Criteria

- Visitor can understand identity and strengths within 15 seconds.
- Visitor can open any project and access links in 1-2 clicks.
- Site works reliably on mobile and desktop.
- Content can be updated quickly from one data file.
