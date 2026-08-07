// MOCK DATA — student profile.
// Clearly mock data for the prototype demo. This is NOT a real student or
// account (authentication and real accounts are out of scope for this project).

export type Student = {
  id: string;
  name: string;
  avatarInitials: string;
  cohort: string;
  startDate: string; // ISO date string
  currentDay: number; // the challenge day the student is on today
  streak: number; // consecutive completed days
  bestStreak: number;
  totalCompleted: number; // total days submitted
  daysMissed: number;
  standing: string; // student standing / rank label
};

export const student: Student = {
  id: "stu_mock_001",
  name: "Aarav Mehta",
  avatarInitials: "AM",
  cohort: "ABTalks Cohort — Mock 2026",
  startDate: "2026-07-28",
  currentDay: 12,
  streak: 12,
  bestStreak: 12,
  totalCompleted: 12,
  daysMissed: 0,
  standing: "Top 15% of cohort",
};

// Edge-case states (first day / no streak, missed day, empty profile) are UI
// concerns for the dashboard build phase; this mock profile represents the
// "active on day 12" happy path.
