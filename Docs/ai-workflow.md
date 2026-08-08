# AI-Assisted Development Workflow — ABTalks PS1

> **Team**: CTRL ALT NEXT
> **Purpose**: Explain how AI tools were used during the development of this project, and how human review was applied to AI-generated output.

---

## Overview

ABTalks PS1 was developed using an AI-assisted workflow. AI tools were used to accelerate analysis, implementation, and validation, but **no AI output was accepted without human review**. This document describes the tools used and the review process that governed every change.

The working relationship behind this workflow is documented in `CONTRIBUTORS.md`.

---

## AI Tools Used

### Claude Code

Used as the primary implementation assistant. Claude Code was responsible for:

- **Repository analysis** — reviewing the codebase, documentation, git history, and design system before changes
- **Code implementation assistance** — implementing application features and pages against confirmed requirements
- **Validation reports** — running lint, build, and producing honest reports of what changed, what was verified, and what remained
- **Refactoring suggestions** — identifying reuse opportunities, simplification, and consistency with the design system

### ChatGPT

Used as a planning and review aid. ChatGPT was responsible for:

- **Prompt preparation** — drafting and refining prompts for AI-assisted workflows
- **Architecture discussions** — providing an independent perspective on technical decisions and trade-offs
- **Feature prioritization** — helping weigh which features to build first
- **Review assistance** — providing a secondary review of approach and output

---

## Human Review Process

Every change went through the following workflow. AI output was **always reviewed before acceptance** — it was never merged unreviewed.

### The 7-Step Workflow

1. **Requirement understanding**
   Read and confirm requirements from `Docs/requirements.md`, the confirmed PS1 brief, and prior decisions in `Docs/decisions.md`.

2. **Prompt preparation**
   Prepare the prompt for the AI tool (Claude Code for implementation; ChatGPT for planning/review). Team members drafted and refined prompts to keep scope tight and aligned with confirmed requirements.

3. **Claude Code implementation**
   Claude Code implements the change against the prompt, following the established design system and code patterns, and inspects before modifying.

4. **Lint / build validation**
   Run quality gates (`npm run lint`, `npm run build`) and report results honestly.

5. **Human review by team members**
   Implementation reports and diffs were reviewed by team members. Anuj Kumar reviewed Claude Code implementation reports; Abhi Kashyap reviewed implementation quality and repository state.

6. **Decision approval**
   Any design or architecture decision surfaced during implementation was discussed and approved before proceeding. Confirmed decisions were recorded in `Docs/decisions.md`.

7. **Git commit and push**
   After approval, the change was committed to `main` and pushed. Commits were made only after review, never on unreviewed AI output.

---

## Guardrails

- **No fabricated history**: AI usage and development history in `PROMPTS.md` reflect real sessions only.
- **Inspect before modify**: Existing code and patterns were read before any edit.
- **One logical feature at a time**: Each change was scoped and verified before the next began.
- **Honest validation**: Reports state what passed and what failed — no inflated results.
- **Human approval gate**: No AI-generated change was committed without review by a team member.

---

## Related Documents

- `CONTRIBUTORS.md` — who did what and how contributors worked together
- `PROMPTS.md` — the honest, chronological log of every AI-assisted session
- `Docs/development-workflow.md` — the development process this AI workflow supports
- `Docs/decisions.md` — architecture and product decisions recorded as ADRs
