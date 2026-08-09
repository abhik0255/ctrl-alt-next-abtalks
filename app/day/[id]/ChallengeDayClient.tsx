"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BentoCard } from "@/components/bento/bento-card";
import { BentoSection } from "@/components/bento/bento-section";
import { ProgressBar } from "@/components/ui/progress-bar";
import {
  GitBranch,
  ExternalLink,
  Link2,
  CircleCheck,
  CheckCircle2,
  AlertCircle,
  Send,
  Home,
  ArrowRight,
  CalendarDays,
  FileText,
  Lightbulb,
  Code2,
  Trophy,
  Copy,
  Check,
} from "lucide-react";
import { getJourneyData } from "@/data/journey";
import { Navbar } from "@/components/layout/navbar";

interface DayData {
  day: number;
  title: string;
  summary: string;
  description: string;
  proof: {
    githubRepo: boolean;
    githubCommit: boolean;
    linkedinPost: boolean;
  };
}

interface ChallengeDayClientProps {
  day: DayData | undefined;
  dayNum: number;
}

/**
 * Challenge Day Client Component — ABTalks PS1
 *
 * Interactive challenge day page with proof submission.
 */

function ChallengeDayClient({ day, dayNum }: ChallengeDayClientProps) {
  const journey = getJourneyData();
  const progressPercent = journey.progressPercent;
  const shouldReduceMotion = useReducedMotion();

  if (!day) {
    return (
      <main className="min-h-screen bg-ivory-stillness">
        <Navbar variant="app" />
        <div className="flex items-center justify-center p-6">
          <BentoCard variant="default" padding="lg" className="max-w-md w-full text-center">
            <AlertCircle className="h-12 w-12 text-muted-gray mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-2">Day not found</h1>
            <p className="text-muted-foreground mb-6">
              No challenge found for day {dayNum}.
            </p>
            <Link href="/dashboard">
              <Button>Back to dashboard</Button>
            </Link>
          </BentoCard>
        </div>
      </main>
    );
  }

  const isCompleted = journey.currentDayNum > dayNum || (journey.currentDayNum === dayNum && journey.student.streak > 0);

  return (
    <motion.main
      className="min-h-screen bg-ivory-stillness"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Navbar variant="app" />
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Progress context header */}
        <motion.div
          className="mb-6 flex items-center justify-between"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Dashboard</span>
            <span className="text-soft-border">/</span>
            <span className="text-sm font-medium text-foreground">Day {day.day}</span>
          </div>
          <Badge variant="secondary" className="text-xs">
            {progressPercent}% complete
          </Badge>
        </motion.div>

        {/* 1. Challenge Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <BentoSection
            title={`Day ${day.day} of 60`}
            description={day.summary}
            variant="full"
            className="mb-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sage-drift/10">
                  <CalendarDays className="h-5 w-5 text-sage-drift" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">{day.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {isCompleted ? "Completed" : "In progress"}
                  </p>
                </div>
              </div>
              <ProgressBar
                value={journey.artifactsCreated}
                max={60}
                showLabel={false}
                showPercentage={true}
                size="sm"
                className="w-40 h-2"
              />
            </div>
          </BentoSection>
        </motion.div>

        {/* 2. Task Explanation */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
        >
          <BentoSection title="The Task" description="What to build and why it matters" variant="full" className="mb-6">
            <BentoCard variant="default" padding="lg">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-sage-drift" />
                    What to build
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{day.description}</p>
                </div>

                <div className="pt-4 border-t border-soft-border">
                  <h3 className="mb-2 text-lg font-semibold text-foreground flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-sage-drift" />
                    Why it matters
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This challenge builds a real portfolio artifact. Your GitHub repo and LinkedIn post
                    become visible proof of your skills — something recruiters can actually see and trust.
                  </p>
                </div>

                <div className="pt-4 border-t border-soft-border">
                  <h3 className="mb-2 text-lg font-semibold text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-sage-drift" />
                    Expected outcome
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CircleCheck className="h-4 w-4 text-sage-drift shrink-0" />
                      A working, deployed project you can show
                    </li>
                    <li className="flex items-center gap-2">
                      <CircleCheck className="h-4 w-4 text-sage-drift shrink-0" />
                      Clean, readable code on GitHub
                    </li>
                    <li className="flex items-center gap-2">
                      <CircleCheck className="h-4 w-4 text-sage-drift shrink-0" />
                      A LinkedIn post sharing what you learned
                    </li>
                  </ul>
                </div>
              </div>
            </BentoCard>
          </BentoSection>
        </motion.div>

        {/* 3. Build Guidance */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
        >
          <BentoSection title="Build Guidance" description="Student-friendly steps to complete the task" variant="full" className="mb-6">
            <BentoCard variant="default" padding="lg">
              <div className="space-y-4">
                {[
                  { step: 1, title: "Set up your repo", desc: "Create a new GitHub repository. Initialize with a README and .gitignore." },
                  { step: 2, title: "Build the project", desc: "Follow the task description. Keep it simple, make it work, commit often." },
                  { step: 3, title: "Deploy & test", desc: "Deploy to Vercel/Netlify. Test on mobile (390px) and desktop." },
                  { step: 4, title: "Write your LinkedIn post", desc: "Share what you built, what you learned, and link your repo." },
                  { step: 5, title: "Submit proof", desc: "Fill in the fields below and submit. Your artifact joins your portfolio." },
                ].map((item) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 + item.step * 0.05 }}
                    className="flex gap-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sage-drift text-white font-bold text-sm shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </BentoCard>
          </BentoSection>
        </motion.div>

        {/* 4. Proof Submission */}
        <BentoSection title="Submit Your Proof" description="Share your work — it becomes part of your portfolio" variant="full" className="mb-6">
          <ProofSubmissionForm day={day} isCompleted={isCompleted} shouldReduceMotion={shouldReduceMotion} />
        </BentoSection>

        {/* 5. Completion State (shown when submitted) */}
        {isCompleted && (
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
          >
            <BentoSection title="Challenge Complete" description="Your artifact is now part of your portfolio" variant="full" className="mb-6">
              <CompletionState day={day} shouldReduceMotion={shouldReduceMotion} />
            </BentoSection>
          </motion.div>
        )}

        {/* Quick actions */}
        <div className="flex flex-col gap-3 pt-6 border-t border-soft-border">
          <Link href="/dashboard">
            <Button variant="outline" className="w-full">
              <Home className="h-4 w-4 mr-2" />
              Back to dashboard
            </Button>
          </Link>
          {day.day < 60 && (
            <Link href={`/day/${day.day + 1}`}>
              <Button variant="ghost" className="w-full">
                {"Preview tomorrow's challenge"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.main>
  );
}

/* --- Proof Submission Form Component --- */
function ProofSubmissionForm({ day, isCompleted, shouldReduceMotion }: { day: DayData; isCompleted: boolean; shouldReduceMotion: boolean | null }) {
  const [formData, setFormData] = useState({
    githubRepo: "",
    githubCommit: "",
    linkedinPost: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateUrl = (url: string, type: string): string | null => {
    if (!url.trim()) return `${type} URL is required`;
    try {
      new URL(url);
      return null;
    } catch {
      return `Please enter a valid ${type} URL`;
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (day.proof.githubRepo) newErrors.githubRepo = validateUrl(formData.githubRepo, "GitHub repo") || "";
    if (day.proof.githubCommit) newErrors.githubCommit = validateUrl(formData.githubCommit, "GitHub commit") || "";
    if (day.proof.linkedinPost) newErrors.linkedinPost = validateUrl(formData.linkedinPost, "LinkedIn post") || "";

    if (Object.values(newErrors).some((v) => v)) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 800)); // mock submission delay
    setIsSubmitting(false);
    setSubmitted(true);
    setErrors({});
  };

  if (isCompleted || submitted) {
    return null; // CompletionState renders separately
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-5"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
    >
      {day.proof.githubRepo && (
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.4 }}
        >
          <label htmlFor="githubRepo" className="block mb-1 text-sm font-medium text-foreground">
            GitHub Repository URL
          </label>
          <input
            id="githubRepo"
            type="url"
            value={formData.githubRepo}
            onChange={(e) => handleChange("githubRepo", e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.githubRepo ? "border-red-500 focus:ring-red-500" : "border-soft-border focus:ring-sage-drift"
            } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors`}
            placeholder="https://github.com/username/repo"
            required
            disabled={isSubmitting}
          />
          {errors.githubRepo && <p className="mt-1 text-sm text-red-600">{errors.githubRepo}</p>}
        </motion.div>
      )}

      {day.proof.githubCommit && (
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.45 }}
        >
          <label htmlFor="githubCommit" className="block mb-1 text-sm font-medium text-foreground">
            GitHub Commit URL
          </label>
          <input
            id="githubCommit"
            type="url"
            value={formData.githubCommit}
            onChange={(e) => handleChange("githubCommit", e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.githubCommit ? "border-red-500 focus:ring-red-500" : "border-soft-border focus:ring-sage-drift"
            } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors`}
            placeholder="https://github.com/username/repo/commit/abc123"
            required
            disabled={isSubmitting}
          />
          {errors.githubCommit && <p className="mt-1 text-sm text-red-600">{errors.githubCommit}</p>}
        </motion.div>
      )}

      {day.proof.linkedinPost && (
        <motion.div
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
        >
          <label htmlFor="linkedinPost" className="block mb-1 text-sm font-medium text-foreground">
            LinkedIn Post URL
          </label>
          <input
            id="linkedinPost"
            type="url"
            value={formData.linkedinPost}
            onChange={(e) => handleChange("linkedinPost", e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.linkedinPost ? "border-red-500 focus:ring-red-500" : "border-soft-border focus:ring-sage-drift"
            } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors`}
            placeholder="https://linkedin.com/posts/username_..."
            required
            disabled={isSubmitting}
          />
          {errors.linkedinPost && <p className="mt-1 text-sm text-red-600">{errors.linkedinPost}</p>}
        </motion.div>
      )}

      <Button type="submit" className="w-full" size="lg" isLoading={isSubmitting}>
        Submit Proof
        <Send className="h-4 w-4 ml-2" />
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Your submission becomes a portfolio artifact. No fake stats — just your work, visible.
      </p>
    </motion.form>
  );
}

/* --- Completion State Component --- */
function CompletionState({ day, shouldReduceMotion }: { day: DayData; shouldReduceMotion: boolean | null }) {
  const journey = getJourneyData();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  // For demo purposes, we'll use safe demo URLs since we don't have real submitted data
  // In a real app, these would come from the submitted form data
  const demoGithubRepo = "https://example.com/demo-repository";
  const demoGithubCommit = "https://example.com/demo-commit";
  const demoLinkedinPost = "https://example.com/demo-linkedin";

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="text-center py-8"
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sage-drift/10">
          <CircleCheck className="h-8 w-8 text-sage-drift" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Portfolio Artifact Created! 🎉</h2>
        <p className="text-muted-foreground">
          Your proof has been recorded. This artifact is now part of your public portfolio.
        </p>
      </motion.div>

      <BentoCard variant="default" padding="lg">
        <h3 className="mb-4 text-lg font-semibold text-foreground flex items-center gap-2">
          <FileText className="h-5 w-5 text-sage-drift" />
          Your Portfolio Artifact
        </h3>
        <div className="space-y-3 text-sm">
          {day.proof.githubRepo && (
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}
              className="flex items-center gap-3 p-3 bg-warm-parchment rounded-lg"
            >
              <GitBranch className="h-5 w-5 text-sage-drift shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground">GitHub Repository</p>
                <a
                  href={demoGithubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-drift hover:underline text-sm truncate block"
                >
                  {demoGithubRepo}
                </a>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <ExternalLink className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <button
                  type="button"
                  onClick={() => handleCopy(demoGithubRepo, "githubRepo")}
                  className="p-2 rounded-lg text-muted-foreground hover:text-sage-drift hover:bg-sage-drift/10 transition-colors"
                  aria-label={copiedField === "githubRepo" ? "Copied!" : "Copy GitHub repository URL"}
                >
                  {copiedField === "githubRepo" ? (
                    <Check className="h-4 w-4 text-sage-drift" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </motion.div>
          )}
          {day.proof.githubCommit && (
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.25 }}
              className="flex items-center gap-3 p-3 bg-warm-parchment rounded-lg"
            >
              <Code2 className="h-5 w-5 text-sage-drift shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground">GitHub Commit</p>
                <a
                  href={demoGithubCommit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-drift hover:underline text-sm truncate block"
                >
                  {demoGithubCommit}
                </a>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <ExternalLink className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <button
                  type="button"
                  onClick={() => handleCopy(demoGithubCommit, "githubCommit")}
                  className="p-2 rounded-lg text-muted-foreground hover:text-sage-drift hover:bg-sage-drift/10 transition-colors"
                  aria-label={copiedField === "githubCommit" ? "Copied!" : "Copy GitHub commit URL"}
                >
                  {copiedField === "githubCommit" ? (
                    <Check className="h-4 w-4 text-sage-drift" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </motion.div>
          )}
          {day.proof.linkedinPost && (
            <motion.div
              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
              className="flex items-center gap-3 p-3 bg-warm-parchment rounded-lg"
            >
              <Link2 className="h-5 w-5 text-sage-drift shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground">LinkedIn Post</p>
                <a
                  href={demoLinkedinPost}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage-drift hover:underline text-sm truncate block"
                >
                  {demoLinkedinPost}
                </a>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <ExternalLink className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <button
                  type="button"
                  onClick={() => handleCopy(demoLinkedinPost, "linkedinPost")}
                  className="p-2 rounded-lg text-muted-foreground hover:text-sage-drift hover:bg-sage-drift/10 transition-colors"
                  aria-label={copiedField === "linkedinPost" ? "Copied!" : "Copy LinkedIn post URL"}
                >
                  {copiedField === "linkedinPost" ? (
                    <Check className="h-4 w-4 text-sage-drift" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </BentoCard>

      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.35 }}
      >
        <p className="text-center text-lg font-semibold text-foreground">
          Day {day.day} complete — {60 - day.day} challenges to go
        </p>
        <ProgressBar
          value={journey.artifactsCreated}
          max={60}
          showLabel={false}
          showPercentage={true}
          size="lg"
          className="h-4"
        />
        <p className="text-center text-sm text-muted-foreground">
          Portfolio artifacts: {journey.artifactsCreated} of 60
        </p>
      </motion.div>

      <motion.div
        className="pt-4 border-t border-soft-border space-y-3"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.4 }}
      >
        <p className="text-center text-sm text-muted-foreground">
          {"What's next?"}
        </p>
        <div className="flex flex-col gap-3">
          <Link href="/dashboard">
            <Button variant="outline" className="w-full">
              <Home className="h-4 w-4 mr-2" />
              View your dashboard
            </Button>
          </Link>
          {day.day < 60 && (
            <Link href={`/day/${day.day + 1}`}>
              <Button className="w-full">
                Continue to Day {day.day + 1}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ChallengeDayClient;