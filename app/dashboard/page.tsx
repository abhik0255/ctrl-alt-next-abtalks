"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BentoCard } from "@/components/bento/bento-card";
import { BentoSection } from "@/components/bento/bento-section";
import { ProgressBar } from "@/components/ui/progress-bar";
import { PortfolioTimeline, Achievements, MissedDayRecovery } from "@/components/bento";
import {
  Flame,
  Home,
  Sparkles,
  ArrowRight,
  Share2,
} from "lucide-react";
import { getJourneyData } from "@/data/journey";
import { motion } from "framer-motion";

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
    <motion.main
      className="min-h-screen bg-ivory-stillness"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center justify-between mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
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
        </motion.div>

        {/* Today's Task — Primary Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          <BentoSection title="Today's Challenge" description="Your focus for today">
            <BentoCard variant="accent" className="mb-6 p-6">
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
              >
                <motion.div
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-drift/20"
                  whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Home className="h-5 w-5 text-sage-drift" />
                </motion.div>
                <motion.div className="flex-1 space-y-2">
                  <motion.h2
                    className="text-xl font-semibold text-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    Build Your Portfolio Hero
                  </motion.h2>
                  <motion.p
                    className="text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    Design and build the hero (landing header) of your personal portfolio
                  </motion.p>
                  <motion.p
                    className="text-sm text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >
                    Design and build the hero (landing header) of your personal portfolio — who you are,
                    what you build, and one clear call to action. Make it readable at 390px. Ship it to a
                    public GitHub repo, link your commit, and post a short update on LinkedIn.
                  </motion.p>
                  <motion.div
                    className="mt-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                  >
                    <Link href="/day/12">
                      <motion.div
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          variant="outline"
                          size="lg"
                          className="w-full transition-all duration-200"
                        >
                          Open today&apos;s challenge
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </motion.div>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </BentoCard>
          </BentoSection>
        </motion.div>

        {/* Portfolio Timeline — Core Value Prop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
        >
          <PortfolioTimeline demoState={demoState} />
        </motion.div>

        {/* Progress & Stats — Supporting Evidence */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
        >
          {/* Current Streak */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.2, ease: "easeOut" }}
          >
            <BentoCard variant="default" className="p-4">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 0, 0, 0.02)" }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-sage-drift/10"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Flame className="h-4 w-4 text-sage-drift" />
                </motion.div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold text-foreground">
                    Current Streak
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {journey.student.streak} day{journey.student.streak === 1 ? "" : "s"} in a row
                  </p>
                </div>
              </motion.div>
            </BentoCard>
          </motion.div>

          {/* Challenge Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.4, ease: "easeOut" }}
          >
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
          </motion.div>
        </motion.div>

        {/* Missed Day Recovery State */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.6, ease: "easeOut" }}
        >
          <MissedDayRecovery demoState={demoState} onToggle={setDemoState} />
        </motion.div>

        {/* Achievements & Portfolio Mindset — Reward */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8, ease: "easeOut" }}
        >
          {/* Achievements */}
          <Achievements demoState={demoState} />

          {/* Portfolio Mindset */}
          <BentoCard variant="default" className="p-4">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.0 }}
            >
              <motion.div
                className="flex items-center justify-between mb-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 2.1 }}
              >
                <h3 className="text-lg font-semibold text-foreground">
                  Your Portfolio
                </h3>
                <Badge variant="secondary" className="text-xs">
                  {journey.artifactsCreated} artifacts
                </Badge>
              </motion.div>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2.2 }}
              >
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
              </motion.div>
              <motion.div
                className="mt-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 2.3 }}
              >
                <ProgressBar
                  value={journey.artifactsCreated}
                  max={60}
                  showLabel={false}
                  showPercentage={true}
                  size="lg"
                  className="h-4"
                />
              </motion.div>
            </motion.div>
          </BentoCard>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          className="mt-8 pt-6 border-t border-soft-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.5, ease: "easeOut" }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 2.6 }}
            >
              <span className="text-sm text-muted-foreground">
                Need inspiration?
              </span>
              <Link href="/community">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button size="sm" variant="outline">
                    <Sparkles className="h-4 w-4 mr-1" />
                    Community
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 2.7 }}
            >
              <span className="text-sm text-muted-foreground">
                Want to share your progress?
              </span>
              <Link href="/share">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button size="sm" variant="outline">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share your journey
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}

export default DashboardPage;