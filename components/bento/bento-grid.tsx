"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

/**
 * BentoGrid — A responsive grid container for Bento components.
 * Features:
 * - Mobile-first: 1 column on mobile
 * - Responsive: 2 columns on small, 3+ on larger screens
 * - Consistent gap between items
 */
export interface BentoGridProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  columns?: 1 | 2 | 3 | 4 | "auto";
  gap?: "none" | "sm" | "md" | "lg";
}

const columnClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  auto: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
};

const gapClasses = {
  none: "gap-0",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
};

export function BentoGrid({
  className,
  columns = "auto",
  gap = "md",
  ...props
}: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid",
        columnClasses[columns],
        gapClasses[gap],
        className
      )}
      {...props}
    />
  );
}

BentoGrid.displayName = "BentoGrid";
