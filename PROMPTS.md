# PROMPTS.md — Claude Code Session Log

> **Rule**: Every session must be logged here honestly. No fabrication of conversations, decisions, commits, or history.

---

## Session Template

```markdown
## Session YYYY-MM-DD-HHMM — <short objective>

**Objective**: <what we're trying to achieve this session>

**Prompt(s)**:
> <actual prompt given to Claude, or concise summary if long>

**Result**: <what was accomplished, what failed, what was learned>

**Files Changed**:
- `path/to/file.ts` — <what changed>
- ...

**Tests Performed**:
- <test command> — <pass/fail/notes>

**Related Commit**: <commit hash or "uncommitted">

**Breeth Entries**: <any facts/episodes recorded>

**Blockers / Open Questions**: <anything needing clarification>

---

```

---

## Session Log

### Session 2026-08-08-07 — Application scaffolding (Next.js 15)

**Objective**: Scaffold the Next.js 15 application foundation using the decided stack (ADR-003). Create the required route structure, placeholder pages, mock data layer, and shadcn/ui configuration. No final UI design.

**Prompt(s)**:
> "We are entering Phase 3: Application Scaffolding. ... Initialize Next.js project using the decided stack. Configure TypeScript, Tailwind CSS, shadcn/ui, ESLint. Create structure: app/ (page.tsx, dashboard/page.tsx, day/[id]/page.tsx), components/ui/, components/bento/, data/ (student.ts, challenges.ts, achievements.ts), lib/utils.ts. Basic placeholder pages only — no final UI, no fake polished components, no unnecessary dependencies. Create initial mock data (clearly marked). Update README/CHANGELOG/PROMPTS. Do not commit yet."

**Result**:
- Scaffolded with `create-next-app@15.5.23` (Next 15.5.23 / React 19.1 / TS 5 / Tailwind v4 / ESLint 9) into a temp dir (repo root is non-empty), then moved files into the repo root. Kept our README.md and .gitignore; removed the scaffold's nested .git.
- Initialized shadcn/ui: `npx shadcn@latest init -b radix -p nova` (radix-nova preset, Lucide + Geist). Created `components.json`, `lib/utils.ts`, updated `app/globals.css` and fonts.
- Added `framer-motion@13` (decided in ADR-003).
- Created placeholder pages: `/` (landing), `/dashboard` (renders mock student data), `/day/[id]` (renders mock task; day 12 = "Build Your Portfolio Hero").
- Created mock data: `data/student.ts`, `data/challenges.ts` (60 days, day 12 real sample), `data/achievements.ts` (PD-02 set).
- Created empty `components/ui/` and `components/bento/` dirs (Bento-ready).
- Updated README (setup + route table), CHANGELOG, this log.

**Tests/Checks Performed**:
- `npm run lint` — passed (no errors)
- `npm run build` — passed; routes `/`, `/dashboard`, `/day/[id]` generated
- `npm view` — confirmed Next 15 vs 16 (ADR requires Next 15; pinned create-next-app@15.5.23)

**Related Commit**: uncommitted (per instructions — no commit yet)

**Breeth Entries**: None new (scaffold; stack/decisions already recorded in session 06).

**Blockers / Open Questions**:
- 3 npm audit warnings from fresh scaffold (unaddressed; not blocking)
- npm allow-scripts blocks postinstall scripts for `sharp` and `unrs-resolver` (non-blocking for scaffold; sharp only matters for next/image optimization at runtime)
- shadcn CLI now defaults to `radix-nova`; classic radix path used per ADR-003 intent
- Bento components and final UI are the next build phase

---

### Session 2026-08-08-06 — Record stack and product decisions (no code)

**Objective**: Record the technology stack decision (ADR-003) and product decisions (mock Day 12 task, achievements) in the documentation. No application code created.

**Prompt(s)**:
> "Continue ABTalks PS1 development from the current documentation phase. Before writing any application code: read and verify the docs; review project state; record the remaining product decisions. Create ADR-003 Technology Stack Decision: Next.js 15 App Router / TypeScript / Tailwind CSS / shadcn/ui + custom Bento components / Framer Motion / Lucide React / Vercel / local mock JSON only, no auth, no database, no backend. Also record Mock Day 12 task 'Build Your Portfolio Hero' and achievements (First Build, Consistency Builder, Halfway Mark, Portfolio Builder, Challenge Complete). Update Docs/architecture.md, Docs/decisions.md, README.md if needed, CHANGELOG.md, PROMPTS.md. Do not create app code. Show files changed, decisions created, git status. Stop and wait."

**Result**:
- `Docs/decisions.md` — added **ADR-003 (Technology Stack Decision, Accepted)** with context/decision/consequences/alternatives; added **PD-01** (mock Day 12 task: "Build Your Portfolio Hero") and **PD-02** (achievement set: First Build, Consistency Builder, Halfway Mark, Portfolio Builder, Challenge Complete)
- `Docs/architecture.md` — header updated (stack decided); project context now lists the decided stack; §7 table marked decided (ADR-003) including auth/db/backend = none; §9 open questions resolved by ADR-003, testing left TBD
- `README.md` — added "Technology (Decided — ADR-003)" section
- `CLAUDE.md` — proposed technology defaults updated: stack items now marked ✅ Decided (ADR-003); state mgmt, forms, linting remain TBD *(extra consistency update, flagged)*
- `CHANGELOG.md` — added decision entries under [Unreleased]
- `PROMPTS.md` — logged this session

**Tests/Checks Performed**:
- `git status` — only docs changed; confirmed no source code / package files
- Verified decisions recorded consistently across decisions.md, architecture.md, README.md, CLAUDE.md

**Related Commit**: uncommitted (per instructions — no commit this phase)

**Breeth Entries**: Recorded ADR-003 stack decision + product decisions (PD-01/PD-02) via `record_fact`; verified via `search_graph`.

**Blockers / Open Questions**:
- Testing tooling still TBD (deferred decision)
- Application scaffolding is the next phase
- Day-12 task and achievements content is mock, pending team flavor review

---

### Session 2026-08-08-08 — Design System Foundation (Phase 4)

**Objective**: Create the reusable visual foundation for ABTalks PS1 — design tokens, Bento components, shared UI components, and typography setup. No landing/dashboard/day pages; only the design system.

**Prompt(s)**:
> "Continue ABTalks PS1 development. We are entering Phase 4: Design System Foundation. Before modifying code: read CLAUDE.md, Docs/requirements.md, Docs/architecture.md, Docs/decisions.md, Docs/prototype-analysis.md. Goal: Create the reusable visual foundation before building pages. Do NOT build: landing page, dashboard page, day page. Only create the design system. Tasks: 1) Create design tokens in globals.css with color palette: Ivory Stillness, Warm Parchment, Sage Drift, Charcoal, Muted Gray, Soft Border — warm, calm, intelligent, premium feel. 2) Create Bento components (BentoCard, BentoGrid, BentoSection) with mobile-first, responsive, reusable variants, subtle borders, soft shadows, 18-24px radius. 3) Create Button, Badge, ProgressBar. 4) Add typography setup. 5) Verify lint + build. 6) Update PROMPTS.md and CHANGELOG.md."

**Result**:
- **Design tokens** (`app/globals.css`): Custom color palette (OKLCH values):
  - `--ivory-stillness`: 0.985 0.003 85 — soft off-white background
  - `--warm-parchment`: 0.96 0.015 75 — warm secondary background
  - `--sage-drift`: 0.72 0.06 145 — primary accent (calm sage)
  - `--charcoal`: 0.22 0.01 255 — primary text
  - `--muted-gray`: 0.55 0.01 260 — muted text
  - `--soft-border`: 0.88 0.008 80 — subtle borders
  - Dark mode with warm (not harsh) colors; semantic aliases mapped
  - Typography scale (fluid type using clamp), line heights, font weights

- **Bento components** (`components/bento/`):
  - `BentoCard`: Flexible card with 4 variants (default, interactive, accent, minimal), 4 padding options, 18px radius
  - `BentoGrid`: Mobile-first responsive grid (1→2→3→4 columns), configurable gaps
  - `BentoSection`: Section wrapper with optional header (title/description), 3 variants (default, inset, full)
  - All mobile-first with responsive padding

- **Shared UI components** (`components/ui/`):
  - `Button`: 5 variants (primary/sage, secondary/parchment, outline, ghost, link), 4 sizes, loading state
  - `Badge`: 6 variants (default/sage, secondary/parchment, outline, success, warning, error), pill shape
  - `ProgressBar`: 3 sizes, customizable value/label/percentage, accessible ARIA attributes

- **Typography** (`app/layout.tsx`): Inter font family (variable) via Next.js metadata API; antialiased rendering

- **Verification**:
  - `npm run lint` — passed (0 errors)
  - `npm run build` — passed; all routes generated successfully

**Files Changed**:
- `app/globals.css` — Complete design system overhaul with custom color palette, typography scale, dark mode, utilities
- `app/layout.tsx` — Inter font injection with metadata configuration
- `components/bento/bento-card.tsx` — New: BentoCard component
- `components/bento/bento-grid.tsx` — New: BentoGrid component
- `components/bento/bento-section.tsx` — New: BentoSection component
- `components/bento/index.ts` — New: Barrel exports
- `components/ui/button.tsx` — New: Button component with 5 variants
- `components/ui/badge.tsx` — New: Badge component with 6 variants
- `components/ui/progress-bar.tsx` — New: ProgressBar component
- `components/ui/index.ts` — New: Barrel exports

**Tests/Checks Performed**:
- `npm run lint` — passed with 0 errors, 0 warnings (fixed unused imports/variables)
- `npm run build` — passed (6 pages generated: `/`, `/_not-found`, `/dashboard`, `/day/[id]`)

**Related Commit**: uncommitted (per instructions — no commit yet)

**Breeth Entries**: None new (design system foundation)

**Blockers / Open Questions**:
- None — design system foundation is complete and verified

### Session 2026-08-08-05 — Product & UX audit (analysis only, no code)

**Objective**: Perform a product + UX audit of the Emergent reference prototype and the original ABTalks experience; produce a comparison against the confirmed PS1 requirements; recommend the final direction and feature priorities; document in `Docs/prototype-analysis.md`. **No application code was created.**

**Prompt(s)**:
> "PROJECT PHASE: PRODUCT ANALYSIS ONLY. Do NOT write application code. Do NOT create React components. Do NOT install packages. ... Read CLAUDE.md, PROMPTS.md, Docs/requirements.md, Docs/decisions.md, README.md. Perform a PRODUCT + UX AUDIT: analyze the current Emergent prototype, the original ABTalks experience (observed facts vs design assumptions vs improvements), build a requirement comparison table, identify differentiators, recommend final product vision / core features / things to remove / things not worth building. Create Docs/prototype-analysis.md with the specified structure. Update PROMPTS.md. Do NOT commit."

**Result**:
- Attempted to audit the Emergent prototype (`momentum-tracker-120.preview.emergentagent.com`) via static fetch, data probes, and external indexes. Result: it is a **private, client-rendered SPA** (content loads in an iframe from Emergent's platform; `noindex, nofollow`; no public data endpoints). Internal UI is **not statically observable** — recorded honestly rather than fabricated.
- Confirmed via web search that **no authoritative public reference material exists** for the original ABTalks program; analysis is grounded in the confirmed hackathon briefing only, with assumptions explicitly marked.
- Created `Docs/prototype-analysis.md` (Executive Summary, Method & Observability, Current Prototype Review, Original ABTalks Review, Requirement Comparison, Strengths To Keep, Problems To Fix, Recommended Final Direction, Features Priority P0/P1/P2, Design Principles, Blockers).
- Recommended direction: reframe from "Momentum Tracker / keep your streak" to "**60-day portfolio builder**" — streaks as feedback, the compounding public portfolio (GitHub + LinkedIn artifacts) as the payoff. Flagship FR-007 idea: a "Your Portfolio in 60 Days" artifact timeline.
- No application/source code, components, or packages were created.

**Tests/Checks Performed**:
- `curl` probes of `/`, `/dashboard`, `/day/12`, `robots.txt`, `sitemap.xml`, `/api/*`, `/data.json` (all SPA catch-all or 404)
- Wayback Machine + web searches for prototype and ABTalks reference material (no snapshots/authoritative results)

**Related Commit**: uncommitted (per instructions — no commit this phase)

**Breeth Entries**: None written this session (analysis-only; no new durable facts beyond what was already seeded). Project phase remains: foundation complete, application not started.

**Blockers / Open Questions**:
- No authoritative ABTalks material (see §10 of the analysis) — would re-run analysis if the team has the ABTalks site/brief/curriculum
- Emergent prototype internals unobservable — screenshots would enable a deeper §2 review
- Mock day-12 task theme and mock achievement set to be decided by the team
- Technology stack still pending (separate decision phase)

---

### Session 2026-08-08-04 — Foundation documentation checkpoint

**Objective**: Replace documentation placeholders with confirmed PS1 requirements; update CLAUDE.md, README.md, CHANGELOG.md; record ADR-001/ADR-002; add a stack-independent `.gitignore`; keep architecture as a template; log sessions honestly; seed Breeth with confirmed project context; validate; report; STOP before committing.

**Prompt(s)**:
> "We have completed the repository audit. Now perform the FOUNDATION DOCUMENTATION CHECKPOINT. You may modify documentation/configuration files, but DO NOT build any application/UI code yet. ..." — Full prompt instructed: read all docs first; replace `Docs/requirements.md` placeholder with confirmed PS1 requirements in clearly separated sections; update only confirmed info in `CLAUDE.md` (keep tech stack TBD, replace 320px with 390px); update README (no more "PS1 unknown"); add a CHANGELOG [Unreleased] entry; create a stack-independent `.gitignore`; convert D-01/D-02 into ADRs but do NOT make technology stack ADRs; keep architecture as template/TBD; log this session honestly (previous audit was read-only); seed Breeth with confirmed project context and verify; validate (git diff, no app code, no secrets, 390px, exact routes); report; STOP before committing.

**Result**:
- `Docs/requirements.md` — placeholder replaced with confirmed PS1 requirements: routes `/`, `/dashboard`, `/day/12`; 390px evaluator viewport; mobile-first; landing page purpose; dashboard requirements; challenge-day requirements; first-day/no-streak, missed-day, empty-profile states; GitHub + LinkedIn proof submission; thoughtful student-experience improvement; mock data allowed; out-of-scope (auth, real accounts, production DB, recruiter dashboard, admin panel); public GitHub repo; live demo; genuine AI log and history; Live Steer consideration.
- `CLAUDE.md` — confirmed requirements expanded into Confirmed Requirements section; 320px proposal removed (evaluator target is 390px); tech stack (Next.js, Tailwind, testing, Vercel, etc.) remains TBD; AI-logging rule kept; Breeth section updated to note connection and seeding.
- `README.md` — no longer claims PS1 requirements are unknown; added project name, team, PS1, purpose, required route map, status (foundation complete / app not started), documentation map.
- `CHANGELOG.md` — added foundation checkpoint entry under [Unreleased].
- `.gitignore` — created (stack-independent: node_modules, build output, env/secrets, OS/editor junk, caches, temp).
- `Docs/decisions.md` — ADR-001 (main-only branching) and ADR-002 (single repo with `Docs/`) recorded, marked as project workflow decisions, not hackathon requirements. No stack ADRs created.
- `Docs/architecture.md` — kept as template/TBD; added project context and confirmed route map; C4 diagrams remain unfilled placeholders.
- `PROMPTS.md` — logged this session and the prior read-only audit session.

**Tests/Checks Performed**:
- Inspected `git status` / `git diff` — no application code created; only docs + `.gitignore` changed
- Grepped for secret patterns — none added
- Verified required routes are exactly `/`, `/dashboard`, `/day/12`
- Verified 390px appears as the evaluator target and the 320px proposal was removed
- Verified requirements are internally consistent with the confirmed brief

**Related Commit**: uncommitted (per instructions — no git add/commit/push)

**Breeth Entries**: Recorded confirmed project context via `record_fact` (team, project, routes, viewport, scope, phase); verified writes via `search_graph`.

**Blockers / Open Questions**:
- Technology stack not yet chosen (separate decision phase required)
- Accessibility conformance level (proposed WCAG 2.1 AA) unconfirmed

---

### Session 2026-08-08-03 — Repository audit (read-only)

**Objective**: Perform a read-only audit of the entire repository and compare it against the confirmed PS1 requirements.

**Prompt(s)**:
> "Before doing any new work, perform a READ-ONLY audit of the current repository. IMPORTANT: Do not modify any files. Do not create anything. Do not commit. Do not push. ..." — inspect git state, all documentation, existing code/config, Breeth state; compare against the confirmed requirement list; produce an audit report with the exact required sections; STOP after the report.

**Result**:
- Confirmed the repo was documentation-only (8 files: CLAUDE.md, PROMPTS.md, README.md, CHANGELOG.md, 4 in Docs/), zero commits, `origin` → https://github.com/abhik0255/ctrl-alt-next-abtalks.git
- Confirmed no application code, no package.json, no config files existed
- Confirmed Breeth MCP connected (team CTRL ALT NEXT, project `default`, admin/write) with zero recorded memory
- Produced the audit report (repository state, documentation, app code, git state, Breeth state, confirmed requirements, decisions, proposed/TBD, conflicts, next steps)

**Tests/Checks Performed**:
- `git status`, `git branch -a`, `git remote -v`, `git log`
- Full file-tree scan and hidden/config-file scan
- Read all 8 documentation files
- `node --version` / `npm --version` (environment check)

**Related Commit**: none (read-only session — no files modified)

**Breeth Entries**: None written (read-only session)

**Blockers / Open Questions**: Stack undecided; PS1 requirements had not yet been written into `Docs/requirements.md` (addressed in checkpoint session 2026-08-08-04).

---

### Session 2026-08-08-02 — Correct assumptions in foundation docs

**Objective**: Refine the documentation foundation to clearly distinguish confirmed requirements, project decisions, proposed defaults, and unresolved questions — without inventing PS1 requirements or treating unconfirmed technology choices as requirements.

**Prompt(s)**:
> Do NOT modify the application or create any website code. In CLAUDE.md, clearly distinguish confirmed hackathon requirements, project decisions, proposed defaults, and unresolved questions. Do NOT treat Next.js 15, Tailwind v4, Vitest, RTL, Playwright, axe-core, Storybook, 320px, or main-only branching as confirmed requirements unless explicitly confirmed. Move those items to "Proposed/To Be Decided." Do not invent any PS1 requirements. Do not create ADRs for technology choices yet. Keep PROMPTS.md ready to record actual sessions from this point onward.

**Result**: 
- `CLAUDE.md` rewritten with four clear sections: Confirmed Requirements, Project Decisions, Proposed Defaults (To Be Decided), and Unresolved Questions. Assumptions downgraded from "standards" to "proposed defaults."
- `Docs/requirements.md` rewritten — all requirements marked ⚠️ TBD except confirmed hackathon constraints (mobile-first, accessible, demo-ready, honest AI logging).
- `Docs/architecture.md` rewritten — all diagrams and technology choices marked as TBD; no invented architecture.
- `Docs/decisions.md` kept as pure template — no ADRs created.
- `Docs/development-workflow.md` rewritten — all testing commands, stack-specific paths, and conventions marked as proposed/TBD.

**Files Changed**:
- `CLAUDE.md` — Major rewrite to distinguish confirmed vs. proposed vs. unresolved
- `Docs/requirements.md` — All requirements downgraded to TBD, marked what is confirmed
- `Docs/architecture.md` — All content marked as template/TBD, no invented architecture
- `Docs/decisions.md` — Confirmed no ADRs created; kept pure template
- `Docs/development-workflow.md` — All stack-specific commands and conventions marked as proposed/TBD
- `PROMPTS.md` — Added this session entry
- `CHANGELOG.md` — Added this session to [Unreleased]

**Tests Performed**:
- None (documentation-only changes)

**Related Commit**: uncommitted

**Breeth Entries**: None recorded (no Breeth setup confirmed for this project)

**Blockers / Open Questions**:
- Need the official PS1 problem statement from ABTalks
- Need team confirmation on technology stack
- Need team confirmation on branching strategy, testing tools, minimum mobile viewport
- Need team confirmation on accessibility standard (WCAG level)

---

<!-- Append new sessions above this line, newest first -->