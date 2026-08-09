# Ctrl Alt Next — ABTalks AI Hackathon (PS1)

## Project
- **Project name**: ABTalks Redesign (PS1)
- **Team**: CTRL ALT NEXT
- **Hackathon**: ABTalks AI Hackathon — Problem Statement 1 (PS1)
- **Repository**: ctrl-alt-next-abtalks
- **PS1**: Redesign ABTalks

## Purpose
We are redesigning ABTalks so that a student unfamiliar with the program can quickly understand it, trust it, and commit to the 60-day challenge. The prototype is mobile-first, targets a 390px evaluator viewport, and is built entirely with mock data (no auth, accounts, or backend).

## Required Routes
| Path | Purpose |
|------|---------|
| `/` | Landing page — explain ABTalks; build trust, clarity, and motivation to commit to the 60-day challenge |
| `/dashboard` | Student dashboard — current streak, today's task, challenge progress, overall completion, student standing/achievements |
| `/day/12` | Challenge day — read the task, submit proof of work (GitHub repo/commit + LinkedIn post), submit |

## Status
✅ **Production Complete** — All required routes implemented, mobile-first at 390px, accessible, demo-ready.

## Technology (Decided — ADR-003)
- **Next.js 15 (App Router)** · TypeScript · Tailwind CSS
- **shadcn/ui + custom Bento components** · Framer Motion · Lucide React
- **Deployment**: Vercel
- **Data**: local mock JSON only — no authentication, no database, no backend

## Team
- **Team Name**: CTRL ALT NEXT
- **Abhi Kashyap** — Lead Developer & Project Coordinator: project direction, technical architecture, application development and integration, AI-assisted workflow management, implementation review
- **Anuj Kumar** — Technical Reviewer & AI Workflow Support: prompt preparation (ChatGPT/Claude Code workflows), review of implementation reports, feedback on technical decisions and feature direction, validation of AI-generated output
- **AI Assistant**: Claude Code (Anthropic)
- **Persistent Memory**: Breeth MCP

> See `CONTRIBUTORS.md` for full contribution details and `Docs/ai-workflow.md` for how AI tools and human review operated.

## Documentation
| File | Purpose |
|------|---------|
| `CLAUDE.md` | Project instructions, standards, workflow rules |
| `PROMPTS.md` | Honest log of all Claude Code sessions |
| `CHANGELOG.md` | Version history and notable changes |
| `Docs/requirements.md` | Confirmed PS1 requirements |
| `Docs/architecture.md` | System architecture (TBD — stack not yet decided) |
| `Docs/decisions.md` | Architecture Decision Records (ADRs) |
| `Docs/development-workflow.md` | Development process and conventions |

## Project Presentation
- **Final Hackathon Presentation**: [ABTalks-60-Day-Challenge-Final-Presentation.pptx](./ABTalks-60-Day-Challenge-Final-Presentation.pptx)

## Getting Started

Requires Node.js 20+ (developed on Node 24 / npm 11).

```bash
npm install    # install dependencies
npm run dev    # start the dev server (http://localhost:3000)
npm run lint   # ESLint
npm run build  # production build
npm run start  # serve the production build
```

### Required routes (implemented)
| Path | Status |
|------|--------|
| `/` | Landing page — explains ABTalks, trust/value, motivation, CTA to dashboard |
| `/dashboard` | Student dashboard — onboarding, profile, streak, today's task, progress, achievements, portfolio mindset |
| `/day/12` | Challenge day — task "Build Your Portfolio Hero", proof submission (GitHub + LinkedIn), completion state |

### Stack (ADR-003)
Next.js 15 App Router · TypeScript · Tailwind CSS v4 · shadcn/ui (radix, nova preset) · Framer Motion · Lucide React. Deploy target: Vercel. Data: local mock files under `data/`.
