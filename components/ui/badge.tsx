"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

/**
 * Badge — A small, informative badge component.
 * Features:
 * - Warm, calm design matching ABTalks palette
 * - Variants: default, secondary, outline, success, warning, error
 * - Rounded pill shape
 */
export const badgeVariants = cva(
  "inline-flex items-center justify-center w-fit rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-drift focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-sage-drift text-white hover:bg-[oklch(0.68 0.06 145)]",
        secondary:
          "bg-warm-parchment text-charcoal hover:bg-[oklch(0.94 0.015 75)]",
        outline:
          "border border-soft-border text-charcoal hover:bg-muted",
        success:
          "bg-[oklch(0.72 0.13 150)] text-white hover:bg-[oklch(0.65 0.12 148)]",
        warning:
          "bg-[oklch(0.75 0.14 75)] text-charcoal hover:bg-[oklch(0.7 0.13 73)]",
        error:
          "bg-[oklch(0.58 0.2 25)] text-white hover:bg-[oklch(0.55 0.18 23)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, className }))}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";
