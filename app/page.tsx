import Link from "next/link";

// Placeholder landing page. Final design pending — see Docs/prototype-analysis.md.
export default function LandingPage() {
  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-bold">ABTalks — 60-Day Build Challenge</h1>
      <p>Landing page placeholder — final design pending.</p>
      <ul className="list-disc pl-6">
        <li>What: a 60-day public building challenge for students.</li>
        <li>Why: 60 small builds become a public portfolio.</li>
        <li>Proof each day: GitHub repo/commit + LinkedIn post.</li>
      </ul>
      <p>
        <Link href="/dashboard">Go to dashboard →</Link>
      </p>
    </main>
  );
}
