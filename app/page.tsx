"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GitBranch,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Building2,
  Share2,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";

/**
 * Landing Page — ABTalks PS1
 *
 * Purpose: A student unfamiliar with ABTalks should understand in 5 seconds:
 * 1. What: 60-day public building challenge
 * 2. Why: Daily builds become a visible portfolio (GitHub + LinkedIn)
 * 3. Can I start: Day 1 is achievable
 *
 * Positioning: Portfolio over streak — streaks are feedback, portfolio is the payoff
 */

function HeroSection() {
  return (
    <motion.section
      className="relative overflow-hidden bg-ivory-stillness py-12 sm:py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -left-20 top-20 w-96 h-96 rounded-full bg-sage-drift/10 blur-3xl" />
        <div className="absolute -right-20 bottom-20 w-96 h-96 rounded-full bg-ivory-stillness/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <Badge variant="secondary" className="mb-4">
            60-day public building challenge
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-4"
        >
          Build your portfolio, <br className="hidden sm:block" />
          <span className="text-sage-drift">one day at a time</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          A 60-day public building challenge. Each day, one small build. After 60 days, a public portfolio that speaks for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <Link href="/dashboard">
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                Start the challenge
              </Button>
            </motion.div>
          </Link>
          <Link href="#how-it-works">
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button variant="outline" size="lg">
                Learn more
              </Button>
            </motion.div>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.55 }}
          className="mt-6 text-sm text-muted-foreground"
        >
          No experience required. Day 1 is designed to be a gentle start.
        </motion.p>
      </div>
    </motion.section>
  );
}

function ValueSection() {
  return (
    <motion.section
      id="how-it-works"
      className="bg-ivory-stillness py-16 sm:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-center mb-4">How it works</h2>
          <p className="mt-3 text-lg text-muted-foreground text-center">
            Three simple steps, repeated for 60 days.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
        >
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="group relative p-6 rounded-lg border border-soft-border bg-card/50"
          >
            <motion.div
              className="absolute top-4 right-4"
              whileHover={{ rotate: 8 }}
              transition={{ duration: 0.2 }}
            >
              <CheckCircle2 className="h-6 w-6 text-sage-drift" />
            </motion.div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sage-drift text-white">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold text-sage-drift">Step 1</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Start day 1</h3>
            <p className="text-sm text-muted-foreground">
              A gentle onboarding task designed to be achievable. No experience needed.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="group relative p-6 rounded-lg border border-soft-border bg-card/50"
          >
            <motion.div
              className="absolute top-4 right-4"
              whileHover={{ rotate: 8 }}
              transition={{ duration: 0.2 }}
            >
              <Share2 className="h-6 w-6 text-sage-drift" />
            </motion.div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sage-drift text-white">
                <Share2 className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold text-sage-drift">Step 2</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Build & share</h3>
            <p className="text-sm text-muted-foreground">
              Complete your task, commit to GitHub, and share on LinkedIn.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="group relative p-6 rounded-lg border border-soft-border bg-card/50"
          >
            <motion.div
              className="absolute top-4 right-4"
              whileHover={{ rotate: 8 }}
              transition={{ duration: 0.2 }}
            >
              <Building2 className="h-6 w-6 text-sage-drift" />
            </motion.div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sage-drift text-white">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold text-sage-drift">Step 3</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Grow your portfolio</h3>
            <p className="text-sm text-muted-foreground">
              Watch your work accumulate into a visible public portfolio.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <Link href="/dashboard">
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button variant="outline" size="lg">
                See full challenge schedule
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

function FeatureCards() {
  const features = [
    {
      title: "You build daily",
      description: "Each day, a focused task you can finish in one sitting. No theoretical fluff — just ship real work.",
      icon: <TrendingUp className="h-6 w-6 text-sage-drift" />,
      accent: "bg-sage-drift/20 text-sage-drift",
    },
    {
      title: "GitHub + LinkedIn",
      description: "Each day, submit proof: your GitHub repo/commit link and a LinkedIn post. These become your portfolio artifacts.",
      icon: <GitBranch className="h-6 w-6 text-ivory-stillness" />,
      accent: "bg-ivory-stillness/10 text-ivory-stillness",
    },
    {
      title: "Portfolio in 60 days",
      description: "60 days = 60 artifacts. A public portfolio recruiters can see, share, and trust more than any resume.",
      icon: <Building2 className="h-6 w-6 text-ivory-stillness" />,
      accent: "bg-warm-parchment/50 text-ivory-stillness",
    },
  ];

  return (
    <motion.section
      id="features"
      className="bg-ivory-stillness py-16 sm:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">Why this approach</h2>
          <p className="mt-3 text-lg text-muted-foreground text-center">
            60 small builds = one impressive public portfolio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
              className="group relative p-6 rounded-lg border border-soft-border bg-card/50"
            >
              <div
                className={`flex items-center gap-3 mb-4 transition-all duration-200 group-hover:scale-105 group-hover:shadow-lg ${feature.accent}`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  {feature.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-sage-drift">{feature.title}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function PortfolioBuilderSection() {
  return (
    <motion.section
      id="portfolio"
      className="bg-ivory-stillness py-16 sm:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">Portfolio, not just a streak</h2>
          <p className="mt-3 text-lg text-muted-foreground text-center">
            {"Streaks are nice. A portfolio that proves your skills? That's life-changing."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="p-6 rounded-lg border border-soft-border bg-card/50"
          >
            <h3 className="text-lg font-semibold text-foreground mb-3">Stack your artifacts</h3>
            <p className="text-sm text-muted-foreground">
              Each completed day adds one artifact to your public portfolio:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>GitHub repository with your code</li>
              <li>LinkedIn post sharing your build</li>
              <li>Public record of your skills in action</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="p-6 rounded-lg border border-soft-border bg-card/50"
          >
            <h3 className="text-lg font-semibold text-foreground mb-3">60 artifacts in 60 days</h3>
            <p className="text-sm text-muted-foreground">
              {"After 60 days, you'll have a portfolio that speaks for itself. Recruiters can see real work, not just a resume."}
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 }}
        >
          <Link href="/dashboard">
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Button variant="outline" size="lg">
                See my growing portfolio
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-ivory-stillness">
      <Navbar variant="landing" />
      <HeroSection />
      <ValueSection />
      <FeatureCards />
      <PortfolioBuilderSection />
    </div>
  );
}
