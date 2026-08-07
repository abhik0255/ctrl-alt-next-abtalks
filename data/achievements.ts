// MOCK DATA — achievement set (product decision PD-02).
// Clearly mock. The unlocked flags reflect the mock student's state (day 12).

export type Achievement = {
  id: string;
  name: string;
  description: string;
  unlocked: boolean;
  unlockedAt: string | null; // ISO date when unlocked, or null if locked
};

export const achievements: Achievement[] = [
  {
    id: "first-build",
    name: "First Build",
    description: "Complete your first challenge day.",
    unlocked: true,
    unlockedAt: "2026-07-28",
  },
  {
    id: "consistency-builder",
    name: "Consistency Builder",
    description: "Keep a 7-day streak.",
    unlocked: true,
    unlockedAt: "2026-08-03",
  },
  {
    id: "halfway-mark",
    name: "Halfway Mark",
    description: "Reach day 30 of the 60-day challenge.",
    unlocked: false,
    unlockedAt: null,
  },
  {
    id: "portfolio-builder",
    name: "Portfolio Builder",
    description: "Publish 30 days of work as a public portfolio.",
    unlocked: false,
    unlockedAt: null,
  },
  {
    id: "challenge-complete",
    name: "Challenge Complete",
    description: "Complete all 60 days.",
    unlocked: false,
    unlockedAt: null,
  },
];

export function unlockedAchievements(): Achievement[] {
  return achievements.filter((a) => a.unlocked);
}
