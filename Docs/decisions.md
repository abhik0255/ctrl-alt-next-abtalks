# Architecture Decision Records (ADRs) — ABTalks PS1

> **Status**: Active — two project workflow decisions recorded. **No technology stack decisions have been made** (framework, styling, testing, deployment, database, authentication are all still TBD and await a separate decision phase).

---

## ADR Template

```markdown
## ADR-XXX: <Short Title>

**Date**: YYYY-MM-DD
**Status**: Proposed | Accepted | Superseded | Rejected
**Deciders**: <names>
**Type**: <Project workflow decision | Technology decision | ...>
**Technical Story**: <link to issue/ticket if any>

### Context
What is the issue that we're seeing that is motivating this decision or change?

### Decision
What is the change that we're proposing and/or doing?

### Consequences
What becomes easier or more difficult to do because of this change?

#### Positive
- 

#### Negative
- 

#### Neutral
- 

### Alternatives Considered
| Alternative | Pros | Cons | Why Not Chosen |
|-------------|------|------|----------------|
|  |  |  |  |

### Links
- Related ADRs:
- Documentation:
- Implementation:
```

---

## Decision Index

| ADR | Title | Status | Date | Supersedes |
|-----|-------|--------|------|------------|
| ADR-001 | Use `main` as the only branch | Accepted | 2026-08-08 | — |
| ADR-002 | Single repository with `Docs/` folder | Accepted | 2026-08-08 | — |
| ADR-003 | Technology stack decision | Accepted | 2026-08-08 | — |

---

## Recorded Decisions

### ADR-001: Use `main` as the only branch

**Date**: 2026-08-08
**Status**: Accepted
**Deciders**: Team (CTRL ALT NEXT)
**Type**: Project workflow decision — **NOT a hackathon requirement**

#### Context
The hackathon is time-boxed and demo-driven. Feature branches add merge overhead that does not pay off at this speed, and there is no review process or CI gate that requires them.

#### Decision
Use `main` as the only branch. Commit directly to `main` after quality gates pass. Use `git stash` or a temporary `chore: wip` commit (reverted later) for experiments.

#### Consequences

##### Positive
- Fast iteration; no merge conflicts across branches
- Always demo-ready on `main`

##### Negative
- No isolation for risky experiments; a bad commit is on `main`

##### Neutral
- Teams may adopt a different strategy post-hackathon

#### Alternatives Considered
| Alternative | Pros | Cons | Why Not Chosen |
|-------------|------|------|----------------|
| Feature branches + PRs | Isolation, review | Slow, ceremony | Too slow for hackathon pace |
| Trunk-based with short-lived branches | Isolation for spikes | Still merge overhead | Unnecessary for a single developer |

#### Links
- Related ADRs: —
- Documentation: `Docs/development-workflow.md`
- Implementation: —

---

### ADR-002: Single repository with `Docs/` folder

**Date**: 2026-08-08
**Status**: Accepted
**Deciders**: Team (CTRL ALT NEXT)
**Type**: Project workflow decision — **NOT a hackathon requirement**

#### Context
The project is small and hackathon-sized. Keeping everything in one repository with a `Docs/` folder keeps documentation, code, and the AI usage log discoverable in one place for judges.

#### Decision
Use a single repository (`ctrl-alt-next-abtalks`) with all project documentation under `Docs/`.

#### Consequences

##### Positive
- Easy navigation; one place for docs, code, and logs

##### Negative
- Monorepo friction if scope grows (unlikely at this scope)

##### Neutral
- —

#### Alternatives Considered
| Alternative | Pros | Cons | Why Not Chosen |
|-------------|------|------|----------------|
| Separate docs repository | Clean separation | Extra repo to maintain | Overkill for this scope |

#### Links
- Related ADRs: —
- Documentation: `Docs/`
- Implementation: —

---

### ADR-003: Technology Stack Decision

**Date**: 2026-08-08
**Status**: Accepted
**Deciders**: Team (CTRL ALT NEXT)
**Type**: Technology decision

#### Context
The hackathon does not prescribe a stack. To start building we must lock one that is: (a) fast to build for a three-screen prototype, (b) able to produce a polished mobile-first UI at the 390px evaluator viewport, (c) simple and well-structured enough to steer an unseen Live Steer feature in ~20 minutes with the same AI tooling, and (d) cheap to deploy as a live working demo.

#### Decision
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI components**: shadcn/ui + custom Bento components
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Data**: local mock JSON only
- **No authentication. No database. No backend.**

#### Consequences

##### Positive
- Fast iteration with a unified, accessible component base (shadcn/ui)
- One-command deploy to Vercel for the live demo
- Small, well-known toolchain that Claude Code can scaffold and steer quickly
- Mock JSON keeps all edge-case states easy to model and demo

##### Negative
- No real persistence (acceptable — persistence is out of scope by the brief)
- Copy-in components (shadcn/ui) require keeping the design system consistent ourselves

##### Neutral
- shadcn/ui is source-copy, not a runtime dependency lock

#### Alternatives Considered
| Alternative | Pros | Cons | Why Not Chosen |
|-------------|------|------|----------------|
| Vite + React SPA | Simpler client app | Extra routing/deploy decisions; team proposal favored Next.js | Next.js App Router chosen |
| Plain CSS, no component lib | Fewer abstractions | Slower to reach polished/accessible primitives | shadcn/ui provides a11y out of the box |
| Supabase/Firebase backend | Real data | Adds auth/db scope the brief excludes | Out of scope by the brief |

#### Links
- Related ADRs: —
- Documentation: `Docs/architecture.md`, `Docs/requirements.md`
- Implementation: scaffolding (next phase)

---

## Product Decisions (2026-08-08)

Content/product decisions recorded with the stack decision. Not architecture ADRs — they define mock content for the prototype.

- **PD-01 — Mock Day 12 task** (for `/day/12`): **"Build Your Portfolio Hero"**. Clearly mock content, not real ABTalks curriculum.
- **PD-02 — Achievement set** (mock, for standing/achievements):
  - **First Build**
  - **Consistency Builder**
  - **Halfway Mark**
  - **Portfolio Builder**
  - **Challenge Complete**

---

## Superseded / Rejected Decisions

<!-- Move here when status changes -->
