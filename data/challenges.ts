// MOCK DATA — 60-day challenge content.
// Clearly mock tasks for the prototype demo. These are NOT real ABTalks
// curriculum. Day 12 is the required route (/day/12) and is the one real
// sample task we ship; the rest are generic placeholders.

export type ProofFields = {
  githubRepo: boolean;
  githubCommit: boolean;
  linkedinPost: boolean;
};

export type ChallengeDay = {
  day: number;
  title: string;
  summary: string; // what to build, in one line
  description: string; // the task brief the student reads
  proof: ProofFields; // which proof fields are required
};

const DAY_12: ChallengeDay = {
  day: 12,
  title: "Build Your Portfolio Hero",
  summary: "Build a mobile-first hero section for your personal portfolio.",
  description:
    "Design and build the hero (landing header) of your personal portfolio — who you are, what you build, and one clear call to action. Make it readable at 390px. Ship it to a public GitHub repo, link your commit, and post a short update on LinkedIn.",
  proof: {
    githubRepo: true,
    githubCommit: true,
    linkedinPost: true,
  },
};

function mockDay(day: number): ChallengeDay {
  return {
    day,
    title: `Day ${day} — Mock Build Task`,
    summary: `MOCK task for day ${day}. Replace with real challenge content.`,
    description: `MOCK task brief for day ${day}. This is placeholder content, not real ABTalks curriculum.`,
    proof: {
      githubRepo: true,
      githubCommit: true,
      linkedinPost: true,
    },
  };
}

// All 60 days. Day 12 carries the real sample task; the rest are placeholders.
export const challengeDays: ChallengeDay[] = Array.from({ length: 60 }, (_, i) =>
  i + 1 === 12 ? DAY_12 : mockDay(i + 1),
);

export function getChallengeDay(day: number): ChallengeDay | undefined {
  return challengeDays.find((d) => d.day === day);
}
