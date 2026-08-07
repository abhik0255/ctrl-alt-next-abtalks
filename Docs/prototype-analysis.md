# ABTalks PS1 Prototype Analysis

> **Status**: Analysis only. Product + UX audit for the rebuild of ABTalks PS1.
> **Team**: CTRL ALT NEXT
> **Reference prototype**: "Momentum Tracker" — https://momentum-tracker-120.preview.emergentagent.com (Emergent build #120)
> **Date**: 2026-08-08
> **Scope**: Product + UX analysis. **No application code was created** in this phase.

---

## 0. Method & Observability

We attempted to audit the reference prototype at three levels:

1. **Static fetch** of `/`, `/dashboard`, `/day/12` — all return a generic loading shell. The app is a **client-side-rendered SPA** whose content loads inside an iframe from Emergent's hosting platform (`app.emergent.sh/loading-preview`).
2. **Data probes** — `robots.txt` (Emergent default content-signal template), `sitemap.xml` (returns the loading shell), and common JSON/API endpoints (`/api/*`, `/data.json`) all resolve to the SPA catch-all or 404. No public data is exposed.
3. **External indexes** — the preview is private (`x-robots-tag: noindex, nofollow`); the Wayback Machine and web search have no snapshot of it.

**Consequence**: the prototype's *internal UI details cannot be directly observed*. Where we refer to what the prototype "does", we state it as either an *observable fact* (URL, name, route set, hosting model) or an *inferred design assumption* (marked explicitly). We do **not** fabricate screenshots, copy, or specific UI critiques about the prototype. The analysis below is therefore grounded in the **confirmed PS1 requirement set** (`Docs/requirements.md`) — the only authoritative reference available — plus established habit/streak UX principles.

The original ABTalks program also has **no findable public reference material** (web searches returned no authoritative sources). We do not invent ABTalks statistics, curriculum, branding, or history. Everything about "the original experience" is either taken from the confirmed hackathon briefing or marked as a design assumption.

---

## 1. Executive Summary

The reference prototype ("Momentum Tracker") frames the product as a **streak/momentum tool**. That framing is directionally right for retention, but it leads to a classic risk: **the product becomes about "not breaking the streak" instead of "what I'm building toward."**

For a student who has never heard of ABTalks, the single most important job is **answering three questions in the first 5 seconds**:
1. *What is this?* — a 60-day public-building challenge.
2. *Why should I care?* — every day produces a real artifact (GitHub repo/commit + LinkedIn post) that compounds into a visible portfolio recruiters can see.
3. *Can I do this?* — trust + low friction to start; the first day is achievable.

Our rebuild should reframe the product from **"momentum tracker" → "60-day portfolio builder"**. Streaks stay, but as a *feedback loop*, not the headline. The headline is the **value exchange**: 60 small builds = one impressive public portfolio. This reframing is our main differentiator and it is directly testable on the landing page and dashboard.

**Direction**: three screens, one job each, zero friction, honest states. Mobile-first at 390px.

---

## 2. Current Prototype Review

### Observable facts (verified)
- **Name**: Momentum Tracker (subdomain `momentum-tracker-120` → Emergent agent build #120).
- **Architecture**: single-page application; every route serves a loading shell; app content renders in an iframe hosted on Emergent's platform.
- **Route set**: `/`, `/dashboard`, `/day/12` all resolve (SPA catch-all), consistent with the PS1 required routes.
- **Visibility**: private preview (`noindex, nofollow`); no public API or data files.

### Inferred design assumptions (NOT verified — cannot see the UI)
- The product is a streak dashboard with a daily "challenge day" page and a landing page, built to the same PS1 brief.
- Landing likely leads with the 60-day challenge + a sign-up/start CTA.
- Dashboard likely shows a streak counter, today's task, and some progress visualization.
- Day page likely shows the task and a submission form.

### Typical risks we must check in our own build (do not attribute to the prototype)
- **Form fatigue**: proof-of-work flows that ask for many fields before showing any reward discourage completion.
- **Dashboard overload**: showing "everything" (streak + progress + achievements + standing) at once dilutes the one action that matters today.
- **Generic landing**: stock "challenge!" copy that does not convince a skeptic in 5 seconds.
- **Unhandled edge states**: blank first-day, missed-day guilt, empty profile — if these render as empty/error screens, the demo breaks precisely in the states judges probe.

### Requirement alignment
The prototype *targets* the same confirmed requirements we do. Alignment with FR-001…FR-008 cannot be verified without rendering the app; our build must guarantee them.

---

## 3. Original ABTalks Review

### Observed facts (from the confirmed hackathon briefing only)
- ABTalks runs a **60-day challenge** for students.
- Each day the student gets a **task to build** something.
- The student must **submit proof of work**: a **GitHub repository/commit** and a **LinkedIn post**.
- Progress is framed around **streaks** and days.
- PS1 requires a **redesign** — implying the current experience is functional but not compelling.

### Design assumptions (unverified; marked as such)
- Likely a cohort-based program (start/end aligned), common in student-build challenges.
- Daily tasks probably escalate or follow a curriculum path (we have no authoritative content, so our mock day-12 task must be clearly mock).
- "Standing/achievements" suggests some form of leaderboard or milestone system.

### What we must NOT do
- Do not invent ABTalks statistics, founder history, curriculum details, or brand assets.
- Do not fabricate day-task content as if it were ABTalks' real curriculum — mark all sample task copy as *mock*.

### Improvement opportunities (opportunity framing, not claims about the current product)
- Make the **value of 60 days concrete**: "60 artifacts → 1 portfolio." The current brief emphasizes mechanics (streaks, submissions); the emotional payoff is underweighted.
- Make **proof-of-work feel like publishing, not homework**: the LinkedIn post + GitHub link are assets, not chores.
- Make **day one trivial** to start and **day N** feel like progress on a journey, not a ledger.

---

## 4. Requirement Comparison

| Area | Current Prototype | Hackathon Requirement | Improvement Needed |
|------|-------------------|----------------------|--------------------|
| Landing experience | SPA; content not statically observable | `/` must be understandable to a student unfamiliar with ABTalks; build trust, clarity, motivation to commit (FR-001) | Lead with the 3 questions (what / why / can I). Show the value exchange (60 builds → portfolio). One clear CTA to the challenge. |
| Mobile UX | Unknown | 390px evaluator viewport; mobile-first, desktop secondary (UX-001/002) | Design at 390px first. Thumb-reachable actions, no hover dependencies, touch targets ≥44px. |
| Dashboard | Unknown | Streak, today's task, challenge progress, overall completion, standing/achievements (FR-002) | Hierarchy: *today's task* is the action; streak + progress are supporting evidence; achievements are reward. Not a flat data dump. |
| Challenge day | Unknown | Read task, understand what to build, submit proof (GitHub repo/commit + LinkedIn post), submit (FR-003) | Task → "what to build" → evidence fields → submit, in one calm scroll. Clear success state after submit. |
| Motivation loop | Streak/momentum framing (by name) | At least one thoughtful student-experience idea (FR-007) | Reframe: streak is feedback, portfolio is the payoff. Add streak-protect/missed-day kindness + "your future portfolio" preview. |
| Progress tracking | Unknown | Challenge progress + overall completion (FR-002) | A 60-day path visual (grid/ring) that reads instantly; "day 12 of 60" plus % complete. |
| Proof submission | Unknown | GitHub repo/commit + LinkedIn post + submit (FR-003) | Minimal fields, clear labels, validation that guides, and a "published" confirmation. |
| Edge cases | Unknown | First day/no streak, missed day, empty profile (FR-004/005/006) | Humane empty states with a next step, never a blank screen or a guilt message. |
| Visual design | Unknown | Polished, production-quality (UX-003) | Cohesive mobile-first design system, purposeful color, one accent, consistent type. |
| Accessibility | Unknown | Production-quality + accessible (UX-003); WCAG 2.1 AA proposed | Semantic HTML, keyboard support, focus states, contrast ≥4.5:1, reduced-motion, readable at 390px. |

---

## 5. Strengths To Keep

- **Streak/momentum framing** — it is the correct retention mechanic; keep it as a feedback loop.
- **Daily build tasks** — a concrete "do this today" anchor reduces decision fatigue.
- **GitHub + LinkedIn proof** — ties the challenge to real, public artifacts; this is the unique value, not a chore.
- **60-day container** — a bounded, achievable-feeling arc (versus an open-ended goal).
- **Three-route simplicity** — matches the brief exactly and keeps the demo easy to steer live.

---

## 6. Problems To Fix

1. **Value proposition is underweighted.** Mechanics (streaks, submissions) lead; the *reason* (compounding portfolio, recruiter-visible) is missing. Fix on the landing page.
2. **Dashboard overload risk.** Too many metrics at once kills the "what do I do today?" answer. Fix with hierarchy + one primary action.
3. **Submission form fatigue.** Multi-field, boring "submit homework" flows lower completion. Fix with calm, minimal fields and a rewarding success state.
4. **Edge-case blindness.** No-streak, missed-day, and empty-profile states are exactly where demos break. Fix with designed, humane empty states.
5. **Accessibility as an afterthought.** A polished demo fails if it can't be keyboard-navigated or fails contrast at 390px. Fix by building it in, not auditing at the end.
6. **Generic landing.** "Join the challenge!" copy does not convince a skeptic. Fix with a concrete, scannable 5-second pitch.

---

## 7. Recommended Final Direction

**Product vision**: *A 60-day public-building challenge. Each day, one small build. After 60 days, a public portfolio that speaks for the student.*

**Positioning vs. the reference**: where "Momentum Tracker" says *keep your streak*, we say *build your portfolio, one day at a time*. Same mechanic, stronger story, clearer payoff — and a story that a stranger understands in seconds.

**Core loop**:
1. **Land** (`/`): understand the challenge, trust it, and commit.
2. **Dashboard** (`/dashboard`): see today's task, your streak, and your progress on the 60-day path.
3. **Day page** (`/day/12`): read the task, build, publish proof (GitHub + LinkedIn), and mark the day done.
4. **Loop**: the streak grows, the 60-day path fills, and the accumulated artifacts become visible as a portfolio.

**Flagship student-experience idea (FR-007)**: the **"Your Portfolio in 60 Days" view** — a section that shows each completed day as an artifact card (GitHub + LinkedIn) stacking into a timeline, so the student sees their work *becoming* a portfolio in real time. It is motivating, demo-impressive, and cheap to mock. Secondary: a **missed-day mercy state** ("you missed day X — resume today, no guilt") and a **tomorrow preview** on the day page.

---

## 8. Features Priority

### P0 — Must have
- Route `/`: landing — 5-second value prop, how it works (3 steps), trust cues, CTA to start.
- Route `/dashboard`: today's task (primary), current streak, challenge progress (day X of 60 + % complete), overall completion, standing/achievements.
- Route `/day/12`: read task → understand what to build → submit proof (GitHub repo, commit link, LinkedIn post) → submit → success state.
- Edge cases: first day/no streak, missed day, empty profile — designed empty states with a next step.
- Mock data layer (student, days 1–60, task for day 12, achievements).
- 390px mobile-first layout; desktop secondary but non-broken.
- Semantic HTML, keyboard navigation, focus states, 4.5:1 contrast, reduced-motion.

### P1 — Should have (if time allows; pick the highest-impact)
- **Portfolio-in-60-days artifact timeline** (flagship idea; see §7).
- Missed-day mercy state + "resume today" call to action.
- Tomorrow preview on the day page.
- Celebration on submit (subtle, reduced-motion-safe).
- Achievements/standing rendered with real mock data (not hard-coded decoration).

### P2 — Avoid unless time allows
- Animations beyond subtle transitions.
- Extra routes beyond the required three.
- PWA/offline, i18n, complex state management.
- Anything requiring auth, persistence, or a backend (out of scope by the brief).

---

## 9. Design Principles

1. **One job per screen.** Each of the three screens answers one question; one primary action per screen.
2. **Mobile-first at 390px.** Design the phone experience first; desktop inherits.
3. **Clarity beats decoration.** Real information hierarchy over ornament; every decorative choice must serve trust or motivation.
4. **Humane states.** Empty, missed, and no-streak states guide the student forward instead of punishing or blanking.
5. **Accessibility by default.** Semantic structure, keyboard operability, contrast, and reduced-motion from the first component — not a final audit.
6. **Portfolio over streak.** Progress is shown as assets accumulated, not just days survived.
7. **Demo-ready and steerable.** Self-contained, small, mock-data-driven modules so a live-steer feature can be added in ~20 minutes with the same AI tooling.
8. **Honest data.** All task/curriculum copy is clearly mock; nothing is presented as real ABTalks content.

---

## 10. Blockers / Open Questions

- **No authoritative ABTalks reference material is publicly available** (web searches returned nothing). Our "original experience" analysis rests on the confirmed briefing only. If the team has the ABTalks site/brief/curriculum, we should re-run this analysis against it.
- **The Emergent prototype cannot be rendered for audit** (private JS SPA). Its internal UX is unobservable; if the team can view it, capture screenshots and re-audit §2 against them.
- **Day-12 task content**: we need a mock task that reads realistically without pretending to be ABTalks' real curriculum (team decision on the mock theme).
- **Achievements/standing**: define a small mock achievement set (e.g., first build, 7-day streak, 30-day half-way, full-60) — team to confirm flavor.
- Stack decision still pending (separate phase) — this analysis is stack-agnostic.
