# Requirements — ABTalks PS1

> **Status**: ✅ **CONFIRMED** — The requirements below come from the ABTalks hackathon briefing (PS1) as provided in our project context, or are our own prototype decisions. Nothing here is invented. Anything not listed must not be implemented without team confirmation.

---

## 1. Official Hackathon Requirements

Source: ABTalks AI Hackathon — Problem Statement 1 (PS1), team briefing.

- PS1 is **Redesign ABTalks**.
- Required routes (exact paths): `/`, `/dashboard`, `/day/12`.
- The evaluator uses a **390px mobile viewport**.
- **Mobile-first** is required; desktop is secondary.
- The landing page must be understandable to a student unfamiliar with ABTalks and provide trust, clarity, and motivation to commit to the 60-day challenge.
- The dashboard must include essentials such as current streak, today's task, challenge progress, overall completion, and student standing/achievements.
- The Challenge Day must allow the student to read the task, understand what to build, submit proof of work, provide a GitHub repository/commit, provide a LinkedIn post, and submit.
- Handle first day / no streak, missed day, and empty profile.
- Include at least one thoughtful idea improving the student experience.
- Authentication, real user accounts, production database, recruiter dashboard, and admin panel are out of scope.
- Mock data is acceptable.
- Technology stack is not prescribed by the hackathon.
- Submission requires a public GitHub repository, a live working demo, and an AI usage log.
- Development history and AI usage must be genuine and correspond to the implemented project.

---

## 2. Functional Requirements (Our Prototype)

Derived from PS1 for our prototype. These are our own requirement IDs.

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| FR-001 | `/` landing page explains ABTalks to a student unfamiliar with it and builds trust, clarity, and motivation to commit to the 60-day challenge | Critical | 🔲 Not started |
| FR-002 | `/dashboard` shows current streak, today's task, challenge progress, overall completion, and student standing/achievements | Critical | 🔲 Not started |
| FR-003 | `/day/12` lets the student read the task, understand what to build, submit proof of work, provide a GitHub repository/commit and a LinkedIn post, and submit | Critical | 🔲 Not started |
| FR-004 | Handle the first-day / no-streak state | High | 🔲 Not started |
| FR-005 | Handle the missed-day state | High | 🔲 Not started |
| FR-006 | Handle the empty-profile state | High | 🔲 Not started |
| FR-007 | Include at least one thoughtful student-experience improvement | High | 🔲 Not started |
| FR-008 | Use mock data for the demo (no real backend) | High | 🔲 Not started |

---

## 3. UX Requirements

| ID | Requirement | Status |
|----|-------------|--------|
| UX-001 | Mobile-first: design and test at the 390px evaluator viewport before desktop | 🔲 Not started |
| UX-002 | Desktop is secondary; must still work but is not the primary target | 🔲 Not started |
| UX-003 | Polished and accessible (production-quality UI) | 🔲 Not started |
| UX-004 | Demo-ready at any point during the hackathon | 🔲 Not started |

---

## 4. Technical Constraints (Explicitly Stated by the Hackathon)

- Technology stack is **not prescribed** — we choose it.
- **Mock data is acceptable** — no real backend required.
- **Authentication, real user accounts, production database, recruiter dashboard, and admin panel are out of scope.**
- Submission requires a **public GitHub repository**, a **live working demo**, and a **genuine AI usage log**.

---

## 5. Out-of-Scope Items (Do Not Build)

- Authentication / sign-in / sign-up
- Real user accounts
- Production database / persistence
- Recruiter dashboard
- Admin panel

---

## 6. Edge Cases (Must Handle)

- First day / no streak
- Missed day
- Empty profile

---

## 7. Submission Requirements

- Public GitHub repository
- Live working demo
- AI usage log (`PROMPTS.md`) that reflects real sessions
- Genuine development history and commits corresponding to the implemented project

---

## 8. Live Steer Challenge Consideration

Top teams may face a **Live Steer Challenge**: an unseen feature to be implemented in ~20 minutes using the AI tools used during the hackathon. Design implication: keep the prototype simple, well-structured, and buildable with the same AI tooling so an unseen feature can be added quickly.

---

## 9. Open Questions (Not Yet Resolved)

- ABTalks branding/design guidelines (if any are published)
- Accessibility conformance level (proposed: WCAG 2.1 AA — not confirmed)
- Whether `/day/12` should be a standalone page or generated from a shared day-page pattern (our implementation choice)
- Any additional scoring criteria if published by ABTalks
