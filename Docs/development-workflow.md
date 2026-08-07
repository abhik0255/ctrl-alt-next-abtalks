# Development Workflow — ABTalks PS1

## Overview
This document defines the development process for the hackathon project. The workflow emphasizes incremental delivery, quality gates, and honest documentation.

> **Status**: ⚠️ **TEMPLATE** — Testing tools, commands, and conventions are not yet confirmed. They will be populated as ADRs in `Docs/decisions.md`. Sections marked `TBD` await team confirmation.

---

## Workflow Cycle

```
Research → Plan → Implement → Test → Review → Document → Commit → Push
```

Each feature follows this complete cycle. No shortcuts.

---

## Phase Details

### 1. Research
- Read existing code, documentation, and requirements
- Search for patterns in the codebase (`grep`, `Explore` agent)
- Check `Docs/requirements.md` for relevant requirements
- Check `Docs/architecture.md` for relevant architecture
- Check `Docs/decisions.md` for prior decisions
- Query Breeth for relevant context (`search_graph`, `get_entity_view`)
- **Output**: Clear understanding of the problem and constraints

### 2. Plan
- Define the feature scope (one logical feature)
- Identify files to create/modify
- Identify tests needed
- Check for existing components to reuse
- Write a brief plan in the session (or use `EnterPlanMode` for complex features)
- **Output**: Implementation plan with file list and test strategy

### 3. Implement
- **Mobile-first**: Build and test at the confirmed minimum viewport first
- **Accessibility by default**: Semantic HTML, ARIA, focus styles from the start
- **TypeScript strict**: No `any` without justification comment
- Follow existing patterns in the codebase
- Colocate component, styles, tests
- **Output**: Working code for the feature

### 4. Test
Run tests appropriate to the confirmed stack (commands TBD after ADRs):
```bash
# TBD: lint command
# TBD: typecheck command
# TBD: test commands

# Accessibility audit
# TBD: a11y command
```
- All must pass before commit
- Fix failures before proceeding
- **Output**: Green test suite

### 5. Review
- Self-review: Read your own diff (`git diff`)
- Check against requirements in `Docs/requirements.md`
- Check against architecture in `Docs/architecture.md`
- Check accessibility manually (keyboard nav, screen reader)
- Check mobile viewport (TBD widths after confirmation)
- **Output**: Confidence the feature is correct and complete

### 6. Document
Update all relevant documentation:
- `Docs/decisions.md` — Add ADR for any architectural choice
- `Docs/architecture.md` — Update diagrams if structure changed
- `Docs/requirements.md` — Mark requirements as done/verified
- `PROMPTS.md` — Log this session (see template)
- `CHANGELOG.md` — Add entry under [Unreleased]
- Component stories (if applicable — stack TBD)
- Code comments for complex logic
- **Output**: Documentation current with implementation

### 7. Commit
- **One logical change per commit**
- Commit format: TBD (Conventional Commits proposed, not confirmed)
- Pre-commit hooks: TBD (lint + typecheck + tests proposed)
- **Output**: Commit on `main` (branching strategy proposed, not confirmed — see below)

### 8. Push
- Push after each completed feature (or at session end)
- Verify CI passes on GitHub
- **Output**: Code on remote, CI green

---

## Session Discipline

### At Session Start
1. Read `CLAUDE.md`
2. Check `git status`
3. Review `Docs/requirements.md` for current priorities
4. Query Breeth: `list_groups` → `get_director_profile` → `search_graph`
5. Check for uncommitted work to continue

### During Session
- Work in small, verifiable increments
- Commit after each logical feature
- Update `PROMPTS.md` in real-time or at session end

### At Session End
1. Run full test suite
2. Summarize in `PROMPTS.md`:
   - What changed
   - What remains
   - Blockers / open questions
3. Commit any uncommitted work (or stash)
4. Push if CI-ready
5. Note next session's starting point

---

## Quality Gates (Non-Negotiable When Stack Is Confirmed)

> **Status**: ⚠️ Commands and tools to be confirmed via ADRs. Current table is **proposed**.

| Gate | Proposed Command | Must Pass |
|------|-------------------|-----------|
| Lint | `npm run lint` | ✅ |
| TypeCheck | `npm run typecheck` | ✅ |
| Unit Tests | `npm run test:unit` | ✅ |
| Component Tests | `npm run test:component` | ✅ |
| E2E Tests | `npm run test:e2e` | ✅ (for user flows) |
| A11y Audit | `npm run test:a11y` | ✅ |

---

## Branching Strategy

> **Status**: ⚠️ **PROPOSED** — `main`-only branching is a proposal (D-01 provisional). To be confirmed by the team via ADR.

- Single branch: `main` only (proposed)
- No feature branches (proposed — for hackathon speed)
- Commit directly to `main` after quality gates
- If experiment needed: `git stash` or temporary commit with `chore: wip` reverted later

---

## Emergency / Hotfix Process
If demo breaks:
1. `git log --oneline -5` — find last good commit
2. `git revert <bad-commit>` or fix forward
3. Run quality gates
4. Push immediately

---

## AI-Assisted Development Rules

### When Using Claude Code
- **Inspect before modify**: Read files before editing
- **One feature at a time**: Complete the cycle before starting next
- **Report changes**: Summarize what changed, what remains
- **Honest logging**: `PROMPTS.md` reflects actual session
- **Breeth for memory**: Record decisions, preferences, context

### When Using Other AI Tools
- Same rules apply
- Log in `PROMPTS.md` with tool name

---

## File Organization Conventions

> **Status**: ⚠️ **TEMPLATE** — Actual directory structure to be confirmed after framework decision (ADR). Below is a proposed structure for a Next.js project.

```
src/
├── app/                    # App Router (if Next.js)
├── components/             # Reusable components
├── lib/                    # Utilities, clients, helpers
├── hooks/                  # Custom hooks
├── types/                 # Shared TypeScript types
└── styles/                # Design tokens, global styles
```

---

## Naming Conventions

> **Status**: ⚠️ **PROPOSED** — To be confirmed via ADR.

| Artifact | Convention | Example |
|----------|------------|---------|
| Components | PascalCase | `Button.tsx`, `UserCard.tsx` |
| Hooks | camelCase + `use` | `useAuth.ts`, `useDebounce.ts` |
| Utilities | camelCase | `formatDate.ts`, `cn.ts` |
| Types | PascalCase + `Type`/`Props` | `ButtonProps`, `UserType` |
| Constants | UPPER_SNAKE_CASE | `MAX_RETRIES`, `API_BASE_URL` |
| Test Files | `.test.ts` / `.spec.ts` | `Button.test.tsx` |
| Stories | `.stories.tsx` | `Button.stories.tsx` |

---

## Definition of Done (Per Feature)

> **Note**: Testing and linting items TBD until stack is confirmed.

- [ ] Requirements traced to `Docs/requirements.md`
- [ ] Implemented mobile-first (confirmed viewport)
- [ ] Accessible (keyboard, screen reader, contrast)
- [ ] Type-safe (TypeScript strict, if confirmed)
- [ ] Unit tests for logic (tool TBD)
- [ ] Component tests for UI (tool TBD)
- [ ] E2E test for user flow (tool TBD, if applicable)
- [ ] Lint + typecheck pass
- [ ] Self-reviewed diff
- [ ] Documentation updated
- [ ] `PROMPTS.md` logged
- [ ] Committed
- [ ] Pushed, CI green

---

## Hackathon-Specific Reminders

- **Demo-ready at all times**: Every commit should be presentable
- **Time-box**: If a feature takes >2 hours, reconsider scope
- **Reuse over build**: Check existing components first
- **Mock when blocked**: Use mock data for demo continuity
- **Document decisions fast**: ADR in 5 minutes, not 5 hours