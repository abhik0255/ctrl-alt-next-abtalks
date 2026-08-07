# CHANGELOG.md

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added
- Engineering foundation documentation (CLAUDE.md, PROMPTS.md, README.md, CHANGELOG.md)
- Documentation structure (Docs/requirements.md, Docs/architecture.md, Docs/decisions.md, Docs/development-workflow.md)
- `.gitignore` — stack-independent ignore rules (foundation checkpoint, Session: 2026-08-08-04)
- Scaffolded Next.js 15 application (App Router, TypeScript, Tailwind CSS v4, shadcn/ui radix-nova, Framer Motion, Lucide React) — Session: 2026-08-08-07
- Placeholder pages: `/` (landing), `/dashboard`, `/day/[id]`
- Mock data layer: `data/student.ts`, `data/challenges.ts` (incl. Day 12 "Build Your Portfolio Hero"), `data/achievements.ts`
- Component directories `components/ui/` and `components/bento/` (Bento-ready)
- README — added setup instructions and scaffolded route table

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