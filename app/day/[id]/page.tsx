import Link from "next/link";
import { getChallengeDay } from "@/data/challenges";

// Placeholder challenge-day page. Final design pending — see Docs/prototype-analysis.md.
export default async function DayPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const dayNum = Number(id);
  const day = getChallengeDay(dayNum);

  if (!day) {
    return (
      <main className="mx-auto max-w-md p-6">
        <h1 className="text-2xl font-bold">Day not found</h1>
        <p>No challenge found for day {id}.</p>
        <p>
          <Link href="/dashboard">Back to dashboard</Link>
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-md p-6">
      <p>
        Day {day.day} of 60
      </p>
      <h1 className="text-2xl font-bold">{day.title}</h1>
      <p>{day.summary}</p>

      <h2 className="text-lg font-semibold">The task</h2>
      <p>{day.description}</p>

      <h2 className="text-lg font-semibold">Submit proof of work</h2>
      <ul className="list-disc pl-6">
        {day.proof.githubRepo && <li>GitHub repository URL</li>}
        {day.proof.githubCommit && <li>GitHub commit URL</li>}
        {day.proof.linkedinPost && <li>LinkedIn post URL</li>}
      </ul>
      <p>(Submission form — final design pending)</p>

      <p>
        <Link href="/dashboard">Back to dashboard</Link>
      </p>
    </main>
  );
}
