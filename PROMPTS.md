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