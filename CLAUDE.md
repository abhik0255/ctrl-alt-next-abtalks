# CLAUDE.md — Project Instructions for ABTalks PS1 Hackathon

## Project Purpose
Building a solution for **ABTalks AI Hackathon — Problem Statement 1 (PS1)**.
Team: **Ctrl Alt Next**.
Repository: **ctrl-alt-next-abtalks**.

---

## What Is Confirmed

### Confirmed Hackathon Requirements
> Source: ABTalks hackathon briefing (PS1), as provided in project context. Full detail in `Docs/requirements.md`.
- PS1 is **Redesign ABTalks**.
- Required routes (exact paths): `/`, `/dashboard`, `/day/12`.
- Evaluator viewport: **390px mobile**. **Mobile-first** is required; desktop is secondary.
- Landing page (`/`): understandable to a student unfamiliar with ABTalks; provides trust, clarity, and motivation to commit to the 60-day challenge.
- Dashboard (`/dashboard`): current streak, today's task, challenge progress, overall completion, and student standing/achievements.
- Challenge Day (`/day/12`): read the task, understand what to build, submit proof of work, provide GitHub repository/commit and LinkedIn post, and submit.
- Handle: first day / no streak, missed day, empty profile.
- Include at least one thoughtful idea improving the student experience.
- Mock data is acceptable.
- Out of scope: authentication, real user accounts, production database, recruiter dashboard, admin panel.
- **Polished and accessible**: The final solution must be production-quality and accessible.
- **Demo-ready**: Must be presentable at any point during the hackathon.
- **Honest AI usage documentation**: All AI-assisted development must be honestly logged — no fabricated conversations, decisions, commits, or history.
- **Incremental delivery**: Working software after each logical feature.
- Submission: public GitHub repository, live working demo, and genuine AI usage log; development history must be genuine.
- **Live Steer Challenge**: top teams may face an unseen ~20-minute feature with the same AI tooling — keep the codebase simple to steer.

> **NOTE**: Anything NOT listed above is either a *Project Decision*, a *Proposed Default*, or an *Unresolved Question*. Do not treat other items as confirmed requirements unless they originate from ABTalks sources.

---

## Project Decisions

These are decisions made by the team (not imposed by the hackathon):

| # | Decision | Made By | Date | Rationale | ADR |
|---|----------|---------|------|-----------|-----|
| D-01 | Use `main` as the only branch | Team | 2026-08-08 | Hackathon speed; no feature branches | ADR-001 |
| D-02 | Single-repo structure with `Docs/` folder | Team | 2026-08-08 | Keeps everything in one place for easy navigation | ADR-002 |

> **Note**: D-01 and D-02 are **project workflow decisions**, not hackathon requirements. Recorded as ADR-001 and ADR-002 in `Docs/decisions.md`.

---

## Proposed Defaults (To Be Decided)

The following are **suggested defaults for evaluation only**. They become real decisions only when the team confirms them (recorded as ADRs in `Docs/decisions.md`). Do not implement based on these until confirmed.

### Technology Stack
| Area | Decision | Status |
|------|----------|--------|
| Framework | Next.js 15 (App Router) | ✅ Decided (ADR-003) |
| Language | TypeScript | ✅ Decided (ADR-003) |
| Styling | Tailwind CSS | ✅ Decided (ADR-003) |
| UI Components | shadcn/ui + custom Bento components | ✅ Decided (ADR-003) |
| Animation | Framer Motion | ✅ Decided (ADR-003) |
| Icons | Lucide React | ✅ Decided (ADR-003) |
| Data | Local mock JSON only | ✅ Decided (ADR-003) |
| Auth / DB / Backend | None | ✅ Decided (ADR-003, out of scope) |
| Deployment | Vercel | ✅ Decided (ADR-003) |
| State Mgmt | React Context + Server State | ⚠️ TBD |
| Forms | React Hook Form + Zod | ⚠️ TBD |
| Linting | ESLint (next/core-web-vitals) + Prettier | ⚠️ TBD |

### Testing
| Area | Proposed Default | Status |
|------|-----------------|--------|
| Unit tests | Vitest | ⚠️ TBD |
| Component tests | React Testing Library | ⚠️ TBD |
| E2E tests | Playwright | ⚠️ TBD |
| Accessibility audit | axe-core | ⚠️ TBD |
| Storybook | Optional | ⚠️ TBD |

### Workflow Specifics
| Area | Proposed Default | Status |
|------|-----------------|--------|
| Branch strategy | `main` only | ⚠️ TBD (D-01 provisional) |
| Commit format | Conventional Commits | ⚠️ TBD |
| Pre-commit hooks | lint + typecheck + tests | ⚠️ TBD |

---

## Unresolved Questions

> These need answers from the team or from ABTalks sources before we proceed beyond foundation.

### PS1 Requirements
- [ ] **What is the exact PS1 problem statement?** (paste from ABTalks materials)
- [ ] Are there specific AI/ML capabilities required by PS1?
- [ ] What data sources or APIs are available or required?
- [ ] Are there scoring criteria from ABTalks?

### Technical
- [ ] Which framework/language? (Next.js/TypeScript proposed)
- [ ] Which styling approach? (Tailwind v4 proposed)
- [ ] Do we need a database? If so, which?
- [ ] Real-time features needed? (WebSockets, SSE)
- [ ] Authentication required? (NextAuth, Clerk, custom)
- [ ] File upload or processing needed?
- [ ] Internationalization needed?
- [ ] Offline/PWA requirements?

### Workflow
- [ ] Confirm: Conventional Commits format?

---

## Rules of Engagement

| Rule | Description |
|------|-------------|
| **Inspect before modify** | Read existing code before editing; understand patterns first |
| **Incremental features** | Implement one logical feature at a time; verify it works |
| **Report changes** | After each task: summarize what changed, what remains, any blockers |
| **Document decisions** | Every architectural/technical choice → `Docs/decisions.md` |
| **No invented requirements** | Only implement what's in `Docs/requirements.md` or explicitly asked |
| **Mobile-first always** | Build and test mobile viewport first |
| **Accessibility by default** | Don't add a11y later; bake it in |
| **Test before commit** | Lint, typecheck, unit, component, e2e as applicable |
| **Honest AI log** | `PROMPTS.md` reflects reality, not aspiration |

---

## AI Usage Logging Rules (MANDATORY)

1. **Every Claude Code session** must be recorded in `PROMPTS.md` with:
   - Date / session identifier
   - Objective
   - Actual prompt or concise prompt summary
   - Result / outcome
   - Files changed
   - Tests performed
   - Related commit hash (if any)
2. **Never fabricate** conversations, decisions, commits, or development history
3. **Breeth MCP** must capture:
   - Key decisions and rationale
   - User preferences and constraints
   - Technical context worth remembering
4. **Session summary** at end of each coding session: what changed, what remains

---

## Breeth Usage Rules

- Call `list_groups` at session start to confirm context
- Record decisions with `record_fact` (subject-predicate-object)
- Record context with `add_episode` (narrative, multi-clause)
- Query with `search_graph` before assuming
- Get director profile with `get_director_profile` for user preferences
- Wait for pipeline (`get_episode_task`) before reading back after writes

> **Status**: Breeth MCP is connected (team **CTRL ALT NEXT**, project `default`). Project context was seeded during the foundation documentation checkpoint on 2026-08-08. Re-query before assuming.

---

## Documentation Structure

| File | Purpose |
|------|---------|
| `CLAUDE.md` | This file — project instructions, standards, workflow rules |
| `PROMPTS.md` | Honest log of all Claude Code sessions |
| `README.md` | Project overview and documentation index |
| `CHANGELOG.md` | Version history and notable changes |
| `Docs/requirements.md` | PS1 requirements (functional, UX, technical, acceptance) |
| `Docs/architecture.md` | System architecture templates and decisions |
| `Docs/decisions.md` | Architecture Decision Records (ADRs) |
| `Docs/development-workflow.md` | Development process and conventions |

---

*This file is the source of truth for how we work. Update it when workflow evolves.*