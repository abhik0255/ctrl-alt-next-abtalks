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

## Superseded / Rejected Decisions

<!-- Move here when status changes -->
