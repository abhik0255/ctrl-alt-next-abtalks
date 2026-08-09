"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code2 } from "lucide-react";

interface NavbarProps {
  /**
   * "landing" — public marketing header: shows How it works + Start the challenge.
   * "app" — in-platform header: shows only the centered brand.
   */
  variant?: "landing" | "app";
}

/**
 * Navbar — Global ABTalks Header
 *
 * Shared across /, /dashboard, and /day/[id]. Branding is always centered.
 * On the landing page the header also surfaces the primary CTA actions;
 * inside the platform the header stays minimal so the student stays focused.
 */
export function Navbar({ variant = "app" }: NavbarProps) {
  const shouldReduceMotion = useReducedMotion();
  const showActions = variant === "landing";

  return (
    <motion.nav
      aria-label="Primary"
      className="w-full border-b border-soft-border bg-ivory-stillness/80 backdrop-blur-sm"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Left spacer — keeps the brand perfectly centered */}
        <div className="flex-1" aria-hidden="true" />

        {/* Centered brand */}
        <Link
          href="/"
          aria-label="ABTalks — back to home"
          className="group flex items-center gap-2"
        >
          <motion.div
            className="flex h-8 w-8 items-center justify-center rounded-full bg-sage-drift text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Code2 className="h-5 w-5" aria-hidden="true" />
          </motion.div>
          <span className="text-lg font-semibold text-foreground">ABTalks</span>
        </Link>

        {/* Right actions — landing only, hidden on small screens to keep the brand centered */}
        <div className="flex flex-1 justify-end gap-3">
          {showActions && (
            <>
              <Link href="#how-it-works" className="hidden sm:inline-flex">
                <Button variant="ghost" size="sm">
                  How it works
                </Button>
              </Link>
              <Link href="/dashboard" className="hidden sm:inline-flex">
                <Button size="sm">Start the challenge</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  );
}
