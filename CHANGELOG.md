# CHANGELOG.md

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Changed
- Phase9B final UX polish:
  - Fixed dashboard text rendering issues
  - Fixed timeline milestone styling
  - Added student onboarding experience
  - Added centered global ABTalks navigation
  - Improved demo artifact behavior
  - Improved mobile judge experience

### Added
- **Phase 8: P0 User Flow Verification & Navigation Cleanup** (Session: 2026-08-08):
  - Removed dead navigation routes `/community` and `/share` from dashboard
  - Connected progress sharing action to current challenge day submission workflow
  - Cleaned unused imports and fixed JSX entity escaping
  - Zero impact on Phase 7B animations, accessibility, responsive layout, Bento design
- Engineering foundation documentation (CLAUDE.md, PROMPTS.md, README.md, CHANGELOG.md)
- Documentation structure (Docs/requirements.md, Docs/architecture.md, Docs/decisions.md, Docs/development-workflow.md)
- `.gitignore` — stack-independent ignore rules (foundation checkpoint, Session: 2026-08-08-04)
- Scaffolded Next.js 15 application (App Router, TypeScript, Tailwind CSS v4, shadcn/ui radix-nova, Framer Motion, Lucide React) — Session: 2026-08-08-07
- Placeholder pages: `/` (landing), `/dashboard`, `/day/[id]`
- Mock data layer: `data/student.ts`, `data/challenges.ts` (incl. Day 12 "Build Your Portfolio Hero"), `data/achievements.ts`
- Component directories `components/ui/` and `components/bento/` (Bento-ready)
- README — added setup instructions and scaffolded route table
- **Design System Foundation (Phase 4)**:
  - Custom color palette: Ivory Stillness, Warm Parchment, Sage Drift, Charcoal, Muted Gray, Soft Border (warm, calm, intelligent, premium)
  - Bento components: `BentoCard`, `BentoGrid`, `BentoSection` (18px radius, mobile-first, subtle borders/shadows)
  - Shared UI components: `Button` (5 variants), `Badge` (6 variants), `ProgressBar`
  - Typography setup: Inter font family, fluid type scale, responsive line heights
  - Globals.css: Design tokens, semantic color aliases, dark mode support, reduced motion
  - Layout.tsx: Inter font with variable injection
- **Landing Page Implementation (Phase 4.5)**:
  - Full landing page with mobile-first design (390px target)
  - Hero section with headline, CTA, value proposition
  - Trust/value section explaining 60-day portfolio builder
  - How it works section with 3-step process
  - Portfolio-over-streak comparison
  - 60-day journey preview with visual progress bar
  - Motivation section
  - Footer
  - Responsive layout (mobile first, desktop secondary)
- **Landing page compliance refinement (Phase 4.5)**: removed fabricated social proof and invented figures (fake statistics, testimonial, user) per task constraints; replaced with honest 60-day program framing; wired primary CTAs to `/dashboard`; re-verified lint + build (Session: 2026-08-08-10)
- **Dashboard Implementation (Phase 5)**:
  - Current streak with flame icon
  - Today's task as primary action (links to /day/12)
  - Challenge progress with visual progress bar (day X of 60, % complete)
  - Overall completion tracking
  - Student standing / achievements section
  - Portfolio mindset section reinforcing 60 artifacts outcome
  - Mobile-first responsive layout (390px target)
  - Uses Bento components, UI primitives, design tokens, Lucide icons
- **Challenge Day Implementation (Phase 6)**:
  - Dynamic /day/[id] route with /day/12 working
  - Challenge header with day context and progress
  - Task explanation: what to build, why it matters, expected outcome
  - Build guidance with 5 student-friendly steps
  - Proof submission form: GitHub repo/commit + LinkedIn post URLs
  - Validation states with helpful error messages
  - Completion state with submitted proof display
  - Next-step guidance (dashboard / tomorrow preview)
  - Mobile-first 390px design, portfolio-over-homework framing
  - Uses existing Bento components, UI primitives, design tokens, Lucide icons
- **Portfolio Journey Experience (Phase 7A)**:
  - Centralized journey data source (data/journey.ts)
  - "Your Portfolio in 60 Days" timeline with milestones and artifact cards
  - Weekly progress grid with GitHub/LinkedIn artifact indicators
  - Locked and unlocked achievements with progress bars
  - Missed-day recovery demo state (toggle On Track / Missed Day)
  - Unified progress data across dashboard and challenge day
  - Single source of truth for journey state — no duplicated values
- **Team contribution & AI workflow documentation** (Session: 2026-08-08-1550):
  - `CONTRIBUTORS.md` — team CTRL ALT NEXT, contributor roles and responsibilities (Abhi Kashyap — lead developer; Anuj Kumar — review/validation support)
  - `Docs/ai-workflow.md` — AI tool usage (Claude Code, ChatGPT) and the human review workflow
- **Responsive Polish, Animation System & Accessibility (Phase 7B)** (Session: 2026-08-08-1740, commit `5f74666`):
  - Fixed portfolio timeline overflow and responsive behavior across desktop/mobile
  - Improved dashboard desktop layout and Bento composition
  - Premium Framer Motion animations across landing, dashboard, and challenge day pages
  - prefers-reduced-motion accessibility support (useReducedMotion)
  - Improved UI transitions, hover states, and page entry animations
  - Cleaned component structure (removed unused imports/state) while maintaining existing functionality

### Changed
- `CLAUDE.md` rewritten to distinguish confirmed requirements, project decisions, proposed defaults, and unresolved questions (Session: 2026-08-08-02)
- `Docs/requirements.md` — all requirements downgraded to TBD; only hackathon constraints confirmed
- `Docs/architecture.md` — all content marked as template/TBD; no invented architecture
- `Docs/decisions.md` — kept pure template; no ADRs created
- `Docs/development-workflow.md` — all stack-specific commands and conventions marked as proposed/TBD
- `PROMPTS.md` — added session log entry for corrections phase
- `CHANGELOG.md` — added corrections phase to [Unreleased]
- `Docs/requirements.md` — placeholder replaced with confirmed PS1 requirements (Session: 2026-08-08-04)
- `CLAUDE.md` — confirmed PS1 requirements moved into Confirmed Requirements; 320px proposal removed (evaluator target is 390px)
- `README.md` — PS1 requirements documented; added route map and status
- `Docs/decisions.md` — ADR-001 (main-only branching) and ADR-002 (single repo with `Docs/`) recorded as project workflow decisions
- `Docs/architecture.md` — added project context and confirmed route map; kept as TBD template
- `PROMPTS.md` — logged read-only audit session and foundation documentation checkpoint session
- `Docs/decisions.md` — recorded ADR-003 (technology stack) and product decisions PD-01 (mock Day 12 task) / PD-02 (achievements)
- `Docs/architecture.md` — technology stack marked decided (ADR-003); open architecture questions resolved
- `README.md` — added decided technology stack
- `CLAUDE.md` — proposed technology defaults marked as decided (ADR-003) for stack items
- `PROMPTS.md` — logged stack and product decision session
- `app/globals.css` — complete design system overhaul (Session: 2026-08-08-08): custom color palette, Bento components, typography
- `app/layout.tsx` — Inter font injection via Next.js metadata API
- `README.md` — Team section lists contributors (Abhi Kashyap, Anuj Kumar) and links to CONTRIBUTORS.md / ai-workflow.md (Session: 2026-08-08-1550)
- `PROMPTS.md` — logged team contribution & AI workflow documentation session (Session: 2026-08-08-1550)

### Fixed
- Responsive consistency fixes between dashboard and challenge day pages.
- Fixed Day14 portfolio timeline milestone square highlight rendering issue.
- Improved mobile viewport consistency across primary hackathon routes.
- Student identity fallbacks removed (no fake "Aarav Mehta" or "Abhi Kashyap" in UI)
- Dashboard conditional rendering — only shows Navbar + OnboardingModal until profile exists
- Navbar consistency across all routes (centered branding, landing actions only on `/`)
- Day12 artifact links use safe demo URLs (no external redirects)

### Added
- **Phase9B: Final Bug Fixes, Navigation Polish & Demo Readiness** (Session: 2026-08-09):
  - Added student onboarding modal with name validation (alphabets + spaces only)
  - Added localStorage-backed student profile hook with initials generation
  - Added shared centered ABTalks Navbar (landing + app variants)
  - Fixed JSX entity rendering issues across all pages
  - Fixed Day14 milestone visual regression (oval highlight fix)
  - Replaced external GitHub/LinkedIn placeholder links with safe Example.com demo URLs
  - Improved mobile-first 390px experience across all routes
- **Phase9A: Pre-Submission UX Improvements** (Session: 2026-08-09):
  - Added first-day onboarding state with zero streak and zero artifacts
  - Added dynamic challenge routing using journey.currentDayNum
  - Added student identity display (avatar initials, name, cohort)
  - Added artifact preview with clickable GitHub, commit, and LinkedIn links
  - Added copy-to-clipboard functionality for proof URLs
  - Improved demo scenario handling (ontrack, missed, firstday)
  - Preserved Phase7B animations, responsiveness, and accessibility

### Validation
- `npm run lint` — passed ✅
- `npm run build` — passed ✅ (6 pages compiled: /, /_not-found, /dashboard, /day/[id])
- TypeScript validation passed ✅
- 390px mobile viewport testing completed ✅
- Responsive consistency verified across landing, dashboard, and challenge day
- Accessibility: prefers-reduced-motion, semantic HTML, keyboard navigation ✅

---

## Release Template

```markdown
## [X.Y.Z] - YYYY-MM-DD

### Added
- Feature descriptions

### Changed
- Changes to existing functionality

### Deprecated
- Soon-to-be removed features

### Removed
- Removed features

### Fixed
- Bug fixes

### Security
- Vulnerability fixes
```