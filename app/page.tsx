"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BentoCard } from "@/components/bento/bento-card";
import { BentoGrid } from "@/components/bento/bento-grid";
import { BentoSection } from "@/components/bento/bento-section";
import {
  CalendarDays,
  GitBranch,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Building2,
  Code2,
  Share2,
} from "lucide-react";

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

function Navbar() {
  return (
    <nav className="w-full border-b border-soft-border bg-ivory-stillness/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sage-drift text-white">
            <Code2 className="h-5 w-5" />
          </div>
          <span className="font-semibold text-foreground">ABTalks</span>
        </div>
        <div className="flex gap-3">
          <Link href="#how-it-works">
            <Button variant="ghost" size="sm">
              How it works
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button size="sm">Start the challenge</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ivory-stillness py-12 sm:py-16">
      {/* Decorative background elements */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-warm-parchment opacity-50 blur-3xl" />
      <div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-sage-drift opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Badge variant="secondary" className="mb-4">
          60-day public building challenge
        </Badge>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Build your portfolio, <br className="hidden sm:block" />
          <span className="text-sage-drift">one day at a time</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          A 60-day public building challenge. Each day, one small build.
          After 60 days, a public portfolio that speaks for you.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/dashboard">
            <Button size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              Start the challenge
            </Button>
          </Link>
          <Link href="#how-it-works">
            <Button variant="outline" size="lg">
              Learn more
            </Button>
          </Link>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          No experience required. Day 1 is designed to be a gentle start.
        </p>
      </div>
    </section>
  );
}

function ValueSection() {
  return (
    <BentoSection
      title="Why students join"
      description="The value exchange: 60 small builds = one impressive public portfolio"
      padding="md"
      className="bg-warm-parchment/50"
    >
      <BentoGrid columns={1} gap="lg">
        {/* Card 1: What happens */}
        <BentoCard variant="default" padding="lg">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sage-drift text-white">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-1 text-lg font-semibold">You build daily</h3>
              <p className="text-muted-foreground">
                Each day, a focused task you can finish in one sitting. No
                theoretical fluff — just ship real work.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 2: Proof of work */}
        <BentoCard variant="default" padding="lg">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warm-parchment text-sage-drift">
              <GitBranch className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-1 text-lg font-semibold">GitHub + LinkedIn</h3>
              <p className="text-muted-foreground">
                Each day, submit proof: your GitHub repo/commit link and a
                LinkedIn post. These become your portfolio artifacts.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* Card 3: The result */}
        <BentoCard variant="default" padding="lg">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sage-drift text-white">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-1 text-lg font-semibold">Portfolio in 60 days</h3>
              <p className="text-muted-foreground">
                60 days = 60 artifacts. A public portfolio recruiters can see,
                share, and trust more than any resume.
              </p>
            </div>
          </div>
        </BentoCard>
      </BentoGrid>
    </BentoSection>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Start day 1",
      description: "A gentle onboarding task designed to be achievable.",
      icon: <CheckCircle2 className="h-5 w-5" />,
    },
    {
      number: "02",
      title: "Build & share",
      description: "Complete your task, commit to GitHub, share on LinkedIn.",
      icon: <Share2 className="h-5 w-5" />,
    },
    {
      number: "03",
      title: "Grow your portfolio",
      description: "Watch your work accumulate into a visible public portfolio.",
      icon: <Building2 className="h-5 w-5" />,
    },
  ];

  return (
    <section id="how-it-works" className="bg-ivory-stillness py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            How it works
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Three simple steps, repeated for 60 days
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-[50px] top-0 bottom-0 hidden sm:block h-full w-0.5 bg-soft-border" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-6 sm:gap-8">
                <div className="relative flex h-24 w-24 flex-col items-center justify-center rounded-xl bg-card shadow-sm sm:h-32 sm:w-32">
                  <span className="absolute -top-2 -left-2 rounded-lg bg-sage-drift px-2 py-1 text-xs font-bold text-white">
                    {step.number}
                  </span>
                  <div className="mt-2 text-sage-drift">{step.icon}</div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/dashboard">
              <Button variant="outline" size="lg">
                See full challenge schedule
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioBuilderSection() {
  return (
    <BentoSection
      title="Portfolio, not just a streak"
      description="Streaks are nice. A portfolio that proves your skills? That's life-changing."
      variant="full"
      padding="md"
      className="bg-sage-drift text-white"
    >
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <h3 className="mb-4 text-2xl font-semibold">Traditional tracking</h3>
          <ul className="space-y-3">
            {[
              "Keeps you accountable",
              "Shows consistency",
              "But feels like homework",
              "No visible proof of skills",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sage-drift/90">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-2xl font-semibold">ABTalks approach</h3>
          <ul className="space-y-3">
            {[
              "Daily accountability",
              "Visible progress tracking",
              "Momentum that compounds day over day",
              "Real portfolio for recruiters",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-lg bg-white/10 p-6">
        <p className="text-lg leading-relaxed">
          60 days of small builds becomes a public record of your growth —
          visible, shareable, and impossible to fake.
        </p>
      </div>
    </BentoSection>
  );
}

function JourneyPreviewSection() {
  return (
    <section className="bg-ivory-stillness py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Your 60-day journey
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            From day 1 to day 60 — watch your portfolio grow
          </p>
        </div>

        {/* Visual journey bar */}
        <div className="relative mb-12 rounded-xl bg-white p-6 shadow-sm">
          <div className="mb-6 grid grid-cols-4 gap-4 text-center sm:grid-cols-6">
            {[
              { label: "Start", percent: 0 },
              { label: "Day 15", percent: 25 },
              { label: "Day 30", percent: 50 },
              { label: "Day 45", percent: 75 },
              { label: "Day 60", percent: 100 },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div
                  className={`mb-2 h-1.5 w-full rounded-full ${
                    i <= 2 ? "bg-sage-drift" : "bg-soft-border"
                  }`}
                />
                <div className="text-xs font-medium text-foreground">
                  {item.label}
                </div>
                <div className="text-[10px] text-muted-foreground">
                  {item.percent}% complete
                </div>
              </div>
            ))}
          </div>

          {/* Progress markers */}
          <div className="grid grid-cols-6 gap-1 text-center text-[10px] font-medium text-sage-drift">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="py-1">
                <div className="mx-auto mb-1 h-2 w-2 rounded-full bg-sage-drift" />
                <span>Build</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="text-2xl font-bold text-sage-drift">60</div>
            <div className="text-sm text-muted-foreground">days</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="text-2xl font-bold text-sage-drift">1</div>
            <div className="text-sm text-muted-foreground">build per day</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <div className="text-2xl font-bold text-sage-drift">2</div>
            <div className="text-sm text-muted-foreground">proofs: GitHub + LinkedIn</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MotivationSection() {
  return (
    <BentoSection
      title="Ready to start?"
      description="Your first day is designed to be achievable. No experience required."
      variant="full"
      padding="md"
      className="bg-warm-parchment text-center"
    >
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-sage-drift/10 p-3">
          <CalendarDays className="h-8 w-8 text-sage-drift" />
        </div>
        <h3 className="mb-3 text-2xl font-bold text-foreground">
          60 days. <span className="text-sage-drift">One build at a time.</span>
        </h3>
        <p className="mb-6 text-lg text-muted-foreground">
          Your journey starts with a single commit. Show up on day one and
          watch your work compound into a portfolio.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/dashboard">
            <Button size="lg">Start the challenge</Button>
          </Link>
          <Link href="#how-it-works">
            <Button variant="outline" size="lg">
              See what to expect
            </Button>
          </Link>
        </div>
      </div>
    </BentoSection>
  );
}

function Footer() {
  return (
    <footer className="border-t border-soft-border bg-ivory-stillness py-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-4">
          <div className="col-span-1 sm:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sage-drift text-white">
                <Code2 className="h-5 w-5" />
              </div>
              <span className="font-semibold text-foreground">ABTalks</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A 60-day public building challenge. Build your portfolio, one day
              at a time.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-foreground">Program</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-sage-drift">Overview</Link></li>
              <li><Link href="#" className="hover:text-sage-drift">Curriculum</Link></li>
              <li><Link href="#" className="hover:text-sage-drift">Cohorts</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-sage-drift">FAQ</Link></li>
              <li><Link href="#" className="hover:text-sage-drift">Community</Link></li>
              <li><Link href="#" className="hover:text-sage-drift">Blog</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-soft-border text-center text-sm text-muted-foreground">
          <p>© 2026 ABTalks. Mock prototype for PS1 hackathon.</p>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-ivory-stillness">
      <Navbar />
      <main>
        <HeroSection />
        <ValueSection />
        <HowItWorksSection />
        <PortfolioBuilderSection />
        <JourneyPreviewSection />
        <MotivationSection />
      </main>
      <Footer />
    </div>
  );
}
