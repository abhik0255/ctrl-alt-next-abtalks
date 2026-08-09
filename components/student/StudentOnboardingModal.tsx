"use client";

import { useState, FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { validateStudentName, getInitials } from "@/lib/student-profile";

interface StudentOnboardingModalProps {
  isOpen: boolean;
  onComplete: (name: string) => void;
}

/**
 * StudentOnboardingModal — First-time name entry for new students.
 * MANDATORY: cannot be dismissed; only closes on valid name submission.
 *
 * Design goals:
 * - Ivory background with Sage accent (ABTalks palette)
 * - Rounded Bento style (rounded-[1.5rem])
 * - Framer Motion entrance/exit animations
 * - Mobile-first responsive
 * - Accessible labels, keyboard-friendly
 * - Name validation: alphabets + spaces only
 */
export function StudentOnboardingModal({
  isOpen,
  onComplete,
}: StudentOnboardingModalProps) {
  const shouldReduceMotion = useReducedMotion();
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = !validateStudentName(name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    if (error) {
      setError(validateStudentName(value));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const err = validateStudentName(name);
    if (err) {
      setError(err);
      return;
    }
    setIsSubmitting(true);
    // Brief delay for UX feel
    await new Promise((r) => setTimeout(r, 300));
    setIsSubmitting(false);
    onComplete(name.trim());
  };

  if (!isOpen) return null;

  const initials = name ? getInitials(name) : "?";

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-title"
      aria-describedby="onboarding-desc"
    >
      {/* Backdrop — non-dismissible */}
      <motion.div
        className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <motion.div
        className="relative w-full max-w-sm bg-white rounded-[1.5rem] border border-soft-border shadow-xl p-6"
        initial={{ scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 10 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Branding — no close button */}
        <div className="flex flex-col items-center text-center mb-6">
          <motion.div
            className="flex h-14 w-14 items-center justify-center rounded-full bg-sage-drift text-white"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            <Lock className="h-7 w-7" aria-hidden="true" />
          </motion.div>
          <motion.h1
            id="onboarding-title"
            className="mt-4 text-2xl font-bold text-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
          >
            Welcome to ABTalks
          </motion.h1>
          <motion.p
            id="onboarding-desc"
            className="mt-2 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
          >
            Your journey starts with your identity
          </motion.p>
        </div>

        {/* Form — mandatory name entry */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
        >
          <div className="space-y-2">
            <label
              htmlFor="student-name"
              className="block text-sm font-medium text-foreground"
            >
              Enter your name
            </label>
            <div className="relative">
              <input
                id="student-name"
                type="text"
                value={name}
                placeholder="Enter your name"
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
                  error
                    ? "border-red-500 focus:ring-red-500 focus:ring-offset-red-50"
                    : "border-soft-border focus:ring-sage-drift focus:ring-offset-background"
                }`}
                autoFocus
                disabled={isSubmitting}
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? "name-error" : undefined}
              />
              {error && (
                <motion.p
                  id="name-error"
                  className="absolute bottom-[-1.2rem] left-0 text-xs text-red-600"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  role="alert"
                >
                  {error}
                </motion.p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            isLoading={isSubmitting}
            disabled={!isValid}
          >
            Continue
          </Button>

          <motion.p
            className="text-center text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
          >
            Use alphabets and spaces only. No numbers or symbols.
          </motion.p>
        </motion.form>

        {/* Preview initials when typing */}
        {name.length >= 2 && !error && (
          <motion.div
            className="mt-6 pt-4 border-t border-soft-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
          >
            <p className="text-center text-xs text-muted-foreground mb-2">
              Your avatar initials:
            </p>
            <div className="flex justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-drift/10">
                <span className="text-sm font-semibold text-sage-drift">
                  {initials}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
