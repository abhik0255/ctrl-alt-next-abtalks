import { getChallengeDay } from "@/data/challenges";
import ChallengeDayClient from "./ChallengeDayClient";

/**
 * Challenge Day Page (Server Component) — ABTalks PS1
 *
 * Fetches the day data and passes it to the client component.
 */

export default async function ChallengeDayPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const dayNum = Number(id);
  const day = getChallengeDay(dayNum);

  return <ChallengeDayClient day={day} dayNum={dayNum} />;
}