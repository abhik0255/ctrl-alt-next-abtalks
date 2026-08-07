import Link from "next/link";
import { student } from "@/data/student";
import { getChallengeDay } from "@/data/challenges";
import { achievements } from "@/data/achievements";

// Placeholder dashboard. Renders mock data to prove the data layer compiles.
// Final design pending — see Docs/prototype-analysis.md.
export default function DashboardPage() {
  const today = getChallengeDay(student.currentDay);
  const unlocked = achievements.filter((a) => a.unlocked).length;

  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Student: {student.name}</p>
      <p>
        Current streak: {student.streak} day{student.streak === 1 ? "" : "s"}
      </p>
      <p>
        Today (day {student.currentDay}): {today ? today.title : "No task"}
      </p>
      <p>
        Progress: {student.totalCompleted} of 60 days ·{" "}
        {Math.round((student.totalCompleted / 60) * 100)}% complete
      </p>
      <p>Standing: {student.standing}</p>
      <p>
        Achievements unlocked: {unlocked} of {achievements.length}
      </p>
      <p>
        <Link href={`/day/${student.currentDay}`}>
          Open today&apos;s challenge →
        </Link>
      </p>
    </main>
  );
}
