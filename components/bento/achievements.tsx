"use client";

import { BentoCard } from "@/components/bento/bento-card";
import { BentoSection } from "@/components/bento/bento-section";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Badge } from "@/components/ui/badge";
import { Award, Lock, CheckCircle2, Clock } from "lucide-react";
import {
  getAchievementsWithProgress,
  getNextAchievement,
  type AchievementWithProgress,
  type DemoScenario,
} from "@/data/journey";

interface AchievementsProps {
  demoState?: DemoScenario;
}

function AchievementItem({ achievement }: { achievement: AchievementWithProgress }) {
  const unlocked = achievement.unlocked;
  const hasProgress = achievement.progress !== undefined && achievement.progress > 0;

  return (
    <div
      className={`flex items-start gap-3 p-3 rounded-lg transition-all ${
        unlocked
          ? "bg-warm-parchment border border-soft-border"
          : "bg-ivory-stillness border border-soft-border opacity-80"
      }`}
    >
      <div
        className={`flex h-8 w-8 items-center justify-center rounded-lg shrink-0 ${
          unlocked ? "bg-award/10 text-award" : "bg-muted-gray/10 text-muted-gray"
        }`}
      >
        {unlocked ? <CheckCircle2 className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h4 className={`font-medium text-sm ${unlocked ? "text-foreground" : "text-muted-foreground"}`}>
            {achievement.name}
          </h4>
          {unlocked ? (
            <Badge variant="success" className="text-xs">
              Unlocked
            </Badge>
          ) : (
            <Badge variant="outline" className="text-xs">
              Locked
            </Badge>
          )}
        </div>
        <p className={`mt-0.5 text-xs ${unlocked ? "text-muted-foreground" : "text-muted-foreground/80"}`}>
          {achievement.description}
        </p>
        {hasProgress && !unlocked && (
          <div className="mt-2 space-y-1">
            <div className="flex items-center justify-between text-[10px] text-muted-foreground">
              <span>Progress toward unlock</span>
              <span>{achievement.progress}%</span>
            </div>
            <ProgressBar
              value={achievement.progress ?? 0}
              max={100}
              showLabel={false}
              showPercentage={false}
              size="sm"
              className="h-1.5"
            />
            {achievement.daysUntilUnlock !== undefined && achievement.daysUntilUnlock > 0 && (
              <p className="text-[10px] text-sage-drift flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {achievement.daysUntilUnlock} day{achievement.daysUntilUnlock === 1 ? "" : "s"} to unlock
              </p>
            )}
          </div>
        )}
        {unlocked && achievement.unlockedAt && (
          <p className="mt-1 text-[10px] text-muted-foreground">
            Unlocked {new Date(achievement.unlockedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        )}
      </div>
    </div>
  );
}

export function Achievements({ demoState = "ontrack" }: AchievementsProps) {
  const achievementsWithProgress = getAchievementsWithProgress(demoState);
  const nextAchievement = getNextAchievement(demoState);

  return (
    <BentoSection
      title="Achievements"
      description="Milestones on your 60-day journey"
      variant="full"
      className="mb-6"
    >
      <BentoCard variant="default" padding="lg">
        <div className="space-y-4">
          {/* Next achievement highlight */}
          {nextAchievement && (
            <div className="p-3 rounded-lg bg-sage-drift/5 border border-sage-drift/20">
              <div className="flex items-center gap-2 mb-1">
                <Award className="h-4 w-4 text-sage-drift" />
                <span className="text-sm font-medium text-sage-drift">Next Achievement</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">{nextAchievement.achievement.name}</p>
                  <p className="text-xs text-muted-foreground">{nextAchievement.achievement.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-sage-drift">{nextAchievement.message}</p>
                  {nextAchievement.achievement.progress !== undefined && (
                    <p className="text-xs text-muted-foreground">
                      {nextAchievement.achievement.progress}% to unlock
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* All achievements list */}
          <div className="space-y-2">
            {achievementsWithProgress.map((achievement, idx) => (
              <AchievementItem key={idx} achievement={achievement} />
            ))}
          </div>

          <div className="pt-2 border-t border-soft-border">
            <p className="text-center text-xs text-muted-foreground">
              {achievementsWithProgress.filter((a) => a.unlocked).length} of{" "}
              {achievementsWithProgress.length} achievements unlocked
            </p>
          </div>
        </div>
      </BentoCard>
    </BentoSection>
  );
}