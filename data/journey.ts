// CENTRALIZED JOURNEY DATA — ABTalks PS1
// Single source of truth for student journey, artifacts, and milestones.
// Used by landing, dashboard, and day pages.

import { challengeDays, type ChallengeDay, getChallengeDay } from "./challenges";
import { student } from "./student";
import { achievements, type Achievement } from "./achievements";

export type DayState = "completed" | "current" | "upcoming" | "missed";

export type JourneyDay = {
  day: number;
  title: string;
  summary: string;
  state: DayState;
  proofSubmitted?: {
    githubRepo: boolean;
    githubCommit: boolean;
    linkedinPost: boolean;
  };
  artifactCard?: {
    hasGitHub: boolean;
    hasLinkedIn: boolean;
  };
};

export type Milestone = {
  day: number;
  label: string;
  description: string;
  icon: string; // Lucide icon name
  achieved: boolean;
};

export type JourneyData = {
  student: typeof student;
  progressPercent: number;
  days: JourneyDay[];
  milestones: Milestone[];
  artifactsCreated: number;
  totalDays: number;
  currentDayNum: number;
};

// Milestone definitions
export const MILESTONES: Omit<Milestone, "achieved">[] = [
  {
    day: 1,
    label: "First Build",
    description: "Your journey begins",
    icon: "sparkles",
  },
  {
    day: 7,
    label: "Week One",
    description: "Consistency milestone",
    icon: "flame",
  },
  {
    day: 14,
    label: "Consistency Builder",
    description: "Two weeks strong",
    icon: "target",
  },
  {
    day: 30,
    label: "Halfway Mark",
    description: "Portfolio taking shape",
    icon: "building-2",
  },
  {
    day: 45,
    label: "Portfolio Builder",
    description: "Artifacts compounding",
    icon: "trending-up",
  },
  {
    day: 60,
    label: "Challenge Complete",
    description: "Portfolio ready",
    icon: "trophy",
  },
];

// Generate the complete journey
export function getJourneyData(demoState: "ontrack" | "missed" = "ontrack"): JourneyData {
  const currentDayNum = student.currentDay;
  const totalCompleted = demoState === "missed" ? student.totalCompleted - 1 : student.totalCompleted;
  const progressPercent = Math.round((totalCompleted / 60) * 100);

  const days: JourneyDay[] = challengeDays.map((challenge: ChallengeDay) => {
    const dayNum = challenge.day;
    let state: DayState = "upcoming";

    if (demoState === "missed" && dayNum === 11) {
      state = "missed";
    } else if (dayNum < currentDayNum) {
      state = "completed";
    } else if (dayNum === currentDayNum) {
      state = "current";
    }

    return {
      day: dayNum,
      title: challenge.title,
      summary: challenge.summary,
      state,
      proofSubmitted: state === "completed" ? challenge.proof : undefined,
      artifactCard:
        state === "completed"
          ? {
              hasGitHub: challenge.proof.githubRepo,
              hasLinkedIn: challenge.proof.linkedinPost,
            }
          : undefined,
    };
  });

  const milestones: Milestone[] = MILESTONES.map((m) => ({
    ...m,
    achieved: m.day <= totalCompleted,
  }));

  return {
    student,
    progressPercent,
    days,
    milestones,
    artifactsCreated: totalCompleted,
    totalDays: 60,
    currentDayNum,
  };
}

// Achievement with unlock progress
export type AchievementWithProgress = Achievement & {
  progress?: number; // 0-100 progress toward unlock
  daysUntilUnlock?: number;
};

export function getAchievementsWithProgress(
  demoState: "ontrack" | "missed" = "ontrack"
): AchievementWithProgress[] {
  const currentDayNum = demoState === "missed" ? student.currentDay : student.currentDay;
  const totalCompleted = demoState === "missed" ? student.totalCompleted - 1 : student.totalCompleted;

  return achievements.map((a) => {
    let progress: number | undefined;
    let daysUntilUnlock: number | undefined;

    if (!a.unlocked) {
      // Calculate based on achievement criteria
      switch (a.id) {
        case "consistency-builder": // 7-day streak
          progress = Math.min(100, Math.round((currentDayNum / 7) * 100));
          daysUntilUnlock = Math.max(0, 7 - currentDayNum);
          break;
        case "halfway-mark": // Day 30
          progress = Math.min(100, Math.round((currentDayNum / 30) * 100));
          daysUntilUnlock = Math.max(0, 30 - currentDayNum);
          break;
        case "portfolio-builder": // 30 artifacts
          progress = Math.min(100, Math.round((totalCompleted / 30) * 100));
          daysUntilUnlock = Math.max(0, 30 - totalCompleted);
          break;
        case "challenge-complete": // Day 60
          progress = Math.min(100, Math.round((currentDayNum / 60) * 100));
          daysUntilUnlock = Math.max(0, 60 - currentDayNum);
          break;
      }
    }

    return {
      ...a,
      progress,
      daysUntilUnlock,
    };
  });
}

// Get next achievement info
export function getNextAchievement(
  demoState: "ontrack" | "missed" = "ontrack"
): { achievement: AchievementWithProgress; message: string } | null {
  const achievementsWithProgress = getAchievementsWithProgress(demoState);
  const locked = achievementsWithProgress.filter((a) => !a.unlocked);

  if (locked.length === 0) return null;

  // Sort by daysUntilUnlock ascending
  locked.sort((a, b) => (a.daysUntilUnlock ?? 999) - (b.daysUntilUnlock ?? 999));
  const next = locked[0];

  if (next.daysUntilUnlock !== undefined && next.daysUntilUnlock > 0) {
    return {
      achievement: next,
      message: `${next.daysUntilUnlock} day${next.daysUntilUnlock === 1 ? "" : "s"} away`,
    };
  }

  return { achievement: next, message: "Almost there" };
}

// Current day's challenge
export function getCurrentDayChallenge(): ChallengeDay | undefined {
  const currentDayNum = student.currentDay;
  return getChallengeDay(currentDayNum);
}