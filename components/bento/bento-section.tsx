"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

/**
 * BentoSection — A section wrapper for Bento layouts with optional header.
 * Features:
 * - Warm spacing and padding
 * - Optional header with title and description
 * - Consistent margin for stacking sections
 */
export interface BentoSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  variant?: "default" | "inset" | "full";
  padding?: "none" | "sm" | "md" | "lg";
  sectionPadding?: "none" | "sm" | "md" | "lg";
}

export function BentoSection({
  children,
  className,
  title,
  description,
  variant = "default",
  sectionPadding = "md",
  ...props
}: BentoSectionProps) {
  const sectionPaddingClasses = {
    none: "py-0",
    sm: "py-3",
    md: "py-4",
    lg: "py-6",
  };

  return (
    <section
      className={cn(
        "w-full",
        sectionPaddingClasses[sectionPadding],
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "w-full",
          variant === "full" && "p-4 sm:p-6",
          variant !== "default" && "rounded-[1.5rem]"
        )}
      >
        {(title || description) && (
          <div className="mb-4 sm:mb-6">
            {title && (
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-1 text-sm sm:text-base text-muted-foreground">
                {description}
              </p>
            )}
          </div>
        )}
        <div
          className={cn(
            "w-full",
            variant === "inset" && "p-4 sm:p-6 bg-card rounded-[1.5rem]"
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

BentoSection.displayName = "BentoSection";
