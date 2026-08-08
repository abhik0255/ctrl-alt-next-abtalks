"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BentoCard } from "@/components/bento/bento-card";
import { BentoGrid } from "@/components/bento/bento-grid";
import { BentoSection } from "@/components/bento/bento-section";
import { ProgressBar } from "@/components/ui/progress-bar";
import { PortfolioTimeline, Achievements, MissedDayRecovery } from "@/components/bento";
import {
  Flame,
  Home,
} from "lucide-react";
import { getJourneyData } from "@/data/journey";

/**
 * Dashboard Page — ABTalks PS1
 *
 * Purpose: Show the student their current state with one clear action:
 * - Today's task (primary)
 * - Current streak (supporting evidence)
 * - Challenge progress (supporting evidence)
 * - Portfolio timeline (core value prop)
 * - Overall completion & achievements (reward/portfolio mindset)
 *
 * Design: Portfolio > streak framing. Today's task is the action; everything else supports it.
 */

function DashboardPage() {
  const [demoState, setDemoState] = useState<"ontrack" | "missed">("ontrack");
  const journey = getJourneyData(demoState);

  return (
    <main className="min-h-screen bg-ivory-stillness">
      <div className="mx-auto max-w-md p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground">
            Dashboard
          </h1>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">
              Day {journey.currentDayNum} of 60
            </Badge>
            <Badge variant="outline">
              {journey.student.streak} day{journey.student.streak === 1 ? "" : "s"} streak
            </Badge>
          </div>
        </div>

        {/* Today's Task — Primary Action */}
        <BentoSection title="Today's Challenge" description="Your focus for today">
          <BentoCard variant="accent" className="mb-6 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-drift/20">
                <Home className="h-5 w-5 text-sage-drift" />
              </div>
              <div className="flex-1 space-y-2">
                <h2 className="text-xl font-semibold text-foreground">
                  Build Your Portfolio Hero
                </h2>
                <p className="text-muted-foreground">
                  Design and build the hero (landing header) of your personal portfolio
                </p>
                <p className="text-sm text-muted-foreground">
                  Design and build the hero (landing header) of your personal portfolio — who you are,
                  what you build, and one clear call to action. Make it readable at 390px. Ship it to a
                  public GitHub repo, link your commit, and post a short update on LinkedIn.
                </p>
                <div className="mt-4">
                  <Link href="/day/12">
                    <Button variant="outline" size="lg" className="w-full">
                      Open today&apos;s challenge
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </BentoCard>
        </BentoSection>

        {/* Portfolio Timeline — Core Value Prop */}
        <PortfolioTimeline demoState={demoState} />

        {/* Progress & Stats — Supporting Evidence */}
        <div className="grid gap-6 sm:grid-cols-2 mb-6">
          {/* Current Streak */}
          <BentoCard variant="default" className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sage-drift/10">
                <Flame className="h-4 w-4 text-sage-drift" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-foreground">
                  Current Streak
                </h3>
                <p className="text-sm text-muted-foreground">
                  {journey.student.streak} day{journey.student.streak === 1 ? "" : "s"} in a row
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Challenge Progress */}
          <BentoCard variant="default" className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">
                  Challenge Progress
                </h3>
                <Badge variant="secondary" className="text-xs">
                  {journey.progressPercent}%
                </Badge>
              </div>
              <ProgressBar
                value={journey.artifactsCreated}
                max={60}
                showLabel={false}
                showPercentage={true}
                size="lg"
                className="h-3"
              />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  {journey.artifactsCreated} of 60 days
                </span>
                <span>
                  {journey.progressPercent}% complete
                </span>
              </div>
            </div>
          </BentoCard>
        </div>

        {/* Missed Day Recovery State */}
        <MissedDayRecovery demoState={demoState} onToggle={setDemoState} />

        {/* Achievements & Portfolio Mindset — Reward */}
        <BentoGrid columns={1} gap="lg">
          {/* Achievements */}
          <Achievements demoState={demoState} />

          {/* Portfolio Mindset */}
          <BentoCard variant="default" className="p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground">
                  Your Portfolio
                </h3>
                <Badge variant="secondary" className="text-xs">
                  {journey.artifactsCreated} artifacts
                </Badge>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  Each completed challenge day adds one artifact to your public portfolio:
                </p>
                <ul className="space-y-1 pl-4 list-decimal text-sm text-muted-foreground">
                  <li>GitHub repository with your code</li>
                  <li>LinkedIn post sharing your build</li>
                  <li>Public record of your skills in action</li>
                </ul>
                <p className="mt-3 text-lg font-semibold text-foreground">
                  {journey.artifactsCreated} of 60 portfolio pieces complete
                </p>
                <p className="text-sm text-muted-foreground">
                  After 60 days, you&apos;ll have a portfolio that speaks for itself.
                </p>
              </div>
              <div className="mt-4">
                <ProgressBar
                  value={journey.artifactsCreated}
                  max={60}
                  showLabel={false}
                  showPercentage={true}
                  size="lg"
                  className="h-4"
                />
              </div>
            </div>
          </BentoCard>
        </BentoGrid>

        {/* Quick Actions */}
        <div className="mt-8 pt-6 border-t border-soft-border">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Need inspiration?
              </span>
              <Link href="#" className="text-sm text-sage-drift hover:underline">
                See what others are building
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Want to share your progress?
              </span>
              <Link href="#" className="text-sm text-sage-drift hover:underline">
                Share your journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardPage;