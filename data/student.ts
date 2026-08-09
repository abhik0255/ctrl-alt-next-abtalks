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

// Edge-case profile — brand-new student (day 1, no streak, empty portfolio).
// Represents the "first day / no streak / empty profile" state required by PS1.
export const firstDayStudent: Student = {
  id: "stu_mock_firstday",
  name: "Priya Sharma",
  avatarInitials: "PS",
  cohort: "ABTalks Cohort — Mock 2026",
  startDate: "2026-08-09",
  currentDay: 1,
  streak: 0,
  bestStreak: 0,
  totalCompleted: 0,
  daysMissed: 0,
  standing: "Just getting started",
};
