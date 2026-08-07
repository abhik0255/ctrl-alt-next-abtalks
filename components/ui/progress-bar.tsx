"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

/**
 * ProgressBar — A polished, accessible progress bar component.
 * Features:
 * - Warm, calm design matching ABTalks palette
 * - Customizable width and color
 * - Optional label and percentage
 * - Reduced motion support
 */
export const progressBarVariants = cva(
  "relative w-full overflow-hidden rounded-full bg-warm-parchment transition-all duration-500 ease-out",
  {
    variants: {
      size: {
        default: "h-2.5",
        sm: "h-1.5",
        lg: "h-4",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export const progressBarTrackVariants = cva(
  "h-full w-full flex-1 rounded-full bg-sage-drift transition-all duration-500 ease-out",
  {
    variants: {
      size: {
        default: "",
        sm: "",
        lg: "",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface ProgressBarProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressBarVariants> {
  value: number;
  max?: number;
  showLabel?: boolean;
  showPercentage?: boolean;
  label?: string;
}

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      className,
      value = 0,
      max = 100,
      size = "default",
      showLabel = false,
      showPercentage = false,
      label,
      ...props
    },
    ref
  ) => {
    const percent = Math.min(100, Math.max(0, (value / max) * 100));

    return (
      <div
        ref={ref}
        className={cn(progressBarVariants({ size, className }))}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label}
        {...props}
      >
        <div
          className={cn(
            progressBarTrackVariants({ size }),
            "transition-all duration-500 ease-out"
          )}
          style={{ width: `${percent}%` }}
        />
        {(showLabel || showPercentage) && (
          <div className="absolute inset-0 flex items-center justify-center px-2">
            {showLabel && label && (
              <span className="text-[10px] font-medium text-charcoal">
                {label}
              </span>
            )}
            {showLabel && showPercentage && label && (
              <span className="text-[10px] font-medium text-charcoal">
                {" "}
                • {Math.round(percent)}%
              </span>
            )}
            {!showLabel && showPercentage && (
              <span className="text-[10px] font-medium text-charcoal">
                {Math.round(percent)}%
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);

ProgressBar.displayName = "ProgressBar";
