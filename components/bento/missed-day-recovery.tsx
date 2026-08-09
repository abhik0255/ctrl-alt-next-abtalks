"use client";

import { BentoCard } from "@/components/bento/bento-card";
import { BentoSection } from "@/components/bento/bento-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertCircle, CheckCircle2, RotateCcw, ArrowRight } from "lucide-react";
import { getJourneyDataForScenario, getCurrentDayChallenge, type DemoScenario } from "@/data/journey";

interface MissedDayRecoveryProps {
  demoState: DemoScenario;
  onToggle: (state: DemoScenario) => void;
}

export function MissedDayRecovery({ demoState, onToggle }: MissedDayRecoveryProps) {
  const isMissed = demoState === "missed";
  const isFirstDay = demoState === "firstday";
  const journey = getJourneyDataForScenario(demoState);
  const currentDay = getCurrentDayChallenge();

  return (
    <>
      {/* Demo State Toggle - subtle, reachable */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Demo state:</span>
          <div className="flex items-center gap-1 bg-warm-parchment rounded-lg p-1">
            <button
              onClick={() => onToggle("ontrack")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                demoState === "ontrack"
                  ? "bg-sage-drift text-white shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-pressed={demoState === "ontrack"}
            >
              On Track
            </button>
            <button
              onClick={() => onToggle("missed")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                isMissed
                  ? "bg-amber-100 text-amber-800 shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-pressed={isMissed}
            >
              Missed Day
            </button>
            <button
              onClick={() => onToggle("firstday")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                isFirstDay
                  ? "bg-sage-drift/20 text-sage-drift shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-pressed={isFirstDay}
            >
              First Day
            </button>
          </div>
        </div>
      </div>

      {/* Missed Day Recovery Card */}
      {isMissed && (
        <BentoSection
          title="Missed Day 11?"
          description="Your journey isn't broken — recovery is part of the process"
          variant="full"
          className="mb-6"
        >
          <BentoCard variant="default" padding="lg" className="border-amber-200 bg-amber-50">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                  <AlertCircle className="h-5 w-5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">Day 11 was missed</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {"Life happens. One missed day doesn't erase your progress. Your streak pauses, but your portfolio keeps growing."}
                  </p>
                </div>
              </div>

              {/* What happens */}
              <div className="pt-2 border-t border-amber-200 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-sage-drift shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Your 12-day streak is preserved</p>
                    <p className="text-xs text-muted-foreground">
                      Streak pauses at 12, resumes from Day 12
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-sage-drift shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">11 artifacts still count</p>
                    <p className="text-xs text-muted-foreground">
                      Day 11 can be recovered anytime
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-sage-drift shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Day 12 ready to go</p>
                    <p className="text-xs text-muted-foreground">
                      Current task: {currentDay?.title ?? "Build Your Portfolio Hero"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-amber-200 space-y-3">
                <p className="text-sm font-medium text-foreground">What would you like to do?</p>
                <div className="flex flex-col gap-2">
                  <Button className="w-full justify-start gap-2" variant="outline" size="lg">
                    <RotateCcw className="h-4 w-4" />
                    Recover Day 11
                    <span className="text-xs text-muted-foreground">(submit proof later)</span>
                  </Button>
                  <Link href={`/day/${journey.currentDayNum}`}>
                    <Button className="w-full justify-start gap-2" size="lg">
                      Continue Day 12
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Reassurance */}
              <div className="pt-3 text-center">
                <p className="text-sm text-muted-foreground">
                  Many students miss a day. The ones who finish are the ones who come back.
                </p>
              </div>
            </div>
          </BentoCard>
        </BentoSection>
      )}
    </>
  );
}