"use client";

import { BentoCard } from "@/components/bento/bento-card";
import { BentoSection } from "@/components/bento/bento-section";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";
import {
  CheckCircle2,
  Circle,
  Clock,
  Flag,
  Sparkles,
  Flame,
  Target,
  Building2,
  TrendingUp,
  Trophy,
  ChevronRight,
} from "lucide-react";
import { JourneyDay, getJourneyData, getCurrentDayChallenge } from "@/data/journey";

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  sparkles: Sparkles,
  flame: Flame,
  target: Target,
  "building-2": Building2,
  "trending-up": TrendingUp,
  trophy: Trophy,
};

function IconFromLib({ icon, className }: { icon: string; className?: string }) {
  const Icon = iconMap[icon] || Flag;
  return <Icon className={className} />;
}

function ArtifactCard({ day, isCompact = false }: { day: JourneyDay; isCompact?: boolean }) {
  const completed = day.state === "completed";
  const current = day.state === "current";
  const missed = day.state === "missed";

  const baseClasses = `
    flex flex-col items-center gap-2 p-3 rounded-lg border transition-all
    ${completed ? "bg-warm-parchment border-soft-border" : "bg-ivory-stillness border-soft-border"}
    ${current ? "ring-2 ring-sage-drift" : ""}
    ${missed ? "border-amber-300 bg-amber-50" : ""}
  `;

  return (
    <div className={baseClasses}>
      <div className="flex items-center justify-center gap-1.5 mb-1">
        <span className="text-xs font-medium text-foreground">Day {day.day}</span>
        {completed && <CheckCircle2 className="h-3 w-3 text-sage-drift" />}
        {current && <Circle className="h-3 w-3 text-sage-drift" />}
        {missed && <Clock className="h-3 w-3 text-amber-600" />}
      </div>
      {!isCompact && (
        <p className="text-[11px] text-center text-muted-foreground line-clamp-1 px-1">
          {day.title}
        </p>
      )}
      {completed && day.artifactCard && (
        <div className="flex items-center justify-center gap-1.5">
          {day.artifactCard.hasGitHub && (
            <span className="flex h-5 w-5 items-center justify-center rounded bg-sage-drift/10 text-sage-drift" title="GitHub">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </span>
          )}
          {day.artifactCard.hasLinkedIn && (
            <span className="flex h-5 w-5 items-center justify-center rounded bg-sage-drift/10 text-sage-drift" title="LinkedIn">
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </span>
          )}
        </div>
      )}
      {missed && !isCompact && (
        <p className="text-[10px] text-center text-amber-700">Missed</p>
      )}
    </div>
  );
}

interface PortfolioTimelineProps {
  demoState?: "ontrack" | "missed";
}

export function PortfolioTimeline({ demoState = "ontrack" }: PortfolioTimelineProps) {
  const journey = getJourneyData(demoState);
  const currentDay = getCurrentDayChallenge();

  // Group days by week for compact display
  const weeks = Array.from({ length: 9 }, (_, i) => {
    const start = i * 7 + 1;
    const end = Math.min(start + 6, 60);
    return journey.days.filter((d) => d.day >= start && d.day <= end);
  });

  return (
    <BentoSection
      title="Your Portfolio in 60 Days"
      description="Every day, one artifact. Watch your portfolio grow."
      variant="full"
      className="mb-6"
    >
      <BentoCard variant="default" padding="lg">
        <div className="space-y-6">
          {/* Progress summary */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold text-foreground">
                {journey.artifactsCreated} of 60 artifacts created
              </p>
              <p className="text-sm text-muted-foreground">
                {journey.progressPercent}% complete • {60 - journey.currentDayNum} days to go
              </p>
            </div>
            <div className="w-32 text-right">
              <ProgressBar
                value={journey.artifactsCreated}
                max={60}
                showLabel={false}
                showPercentage={true}
                size="sm"
                className="h-2"
              />
            </div>
          </div>

          {/* Milestone timeline */}
          <div className="relative">
            <div className="absolute left-0 right-0 top-4 h-px bg-soft-border" />
            <div className="relative flex flex-wrap items-center justify-center gap-1.5 py-2 px-3">
              {journey.milestones.map((milestone, idx) => (
                <div
                  key={milestone.day}
                  className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                    !milestone.achieved && (idx === 0 || journey.milestones[idx - 1].achieved)
                      ? "ring-2 ring-sage-drift bg-sage-drift/5"
                      : ""
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all ${
                      milestone.achieved
                        ? "bg-sage-drift border-sage-drift text-white"
                        : "bg-ivory-stillness border-sage-drift text-sage-drift"
                    }`}
                  >
                    <IconFromLib
                      icon={milestone.icon}
                      className="h-4 w-4"
                    />
                  </div>
                  <p className="text-[10px] font-medium text-foreground text-center">
                    Day {milestone.day}
                  </p>
                  <p className="text-[9px] text-muted-foreground text-center">
                    {milestone.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Current artifact highlight */}
          {currentDay && (
            <div className="relative flex items-center gap-4 p-4 rounded-lg bg-sage-drift/5 border border-sage-drift/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sage-drift/10 shrink-0">
                <Sparkles className="h-6 w-6 text-sage-drift" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-sage-drift font-medium">Current Artifact</p>
                <h3 className="text-lg font-semibold text-foreground">{currentDay.title}</h3>
                <p className="text-sm text-muted-foreground">{currentDay.summary}</p>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0" />
            </div>
          )}

          {/* Weekly artifact grid */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-medium text-foreground">Weekly Progress</p>
              <span className="text-xs text-muted-foreground">Tap week to expand</span>
            </div>
            <div className="space-y-2">
              {weeks.map((weekDays, weekIdx) => {
                const completedInWeek = weekDays.filter((d) => d.state === "completed").length;
                const totalInWeek = weekDays.length;
                const hasCurrent = weekDays.some((d) => d.state === "current");

                return (
                  <div
                    key={weekIdx}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      hasCurrent
                        ? "bg-sage-drift/5 border border-sage-drift/20"
                        : "bg-warm-parchment/50 border border-soft-border"
                    }`}
                  >
                    <div className="w-20 text-right text-sm font-medium text-muted-foreground shrink-0">
                      Week {weekIdx + 1}
                    </div>
                    <div className="flex-1 flex items-center gap-1.5 overflow-x-auto pb-1">
                      {weekDays.map((day) => (
                        <ArtifactCard key={day.day} day={day} isCompact />
                      ))}
                    </div>
                    <div className="w-20 text-sm text-muted-foreground shrink-0">
                      {completedInWeek}/{totalInWeek}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 border-t border-soft-border">
            <Button className="w-full" size="lg" variant="outline">
              View my growing portfolio
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              60 days → Portfolio ready
            </p>
          </div>
        </div>
      </BentoCard>
    </BentoSection>
  );
}