"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

/**
 * BentoCard — A flexible, warm card component for the design system.
 * Features:
 * - Subtle borders, soft shadows
 * - 18-24px border radius
 * - Mobile-first responsive layout
 * - Support for hover, active, and disabled states
 */
export interface BentoCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  variant?: "default" | "interactive" | "accent" | "minimal";
  padding?: "none" | "sm" | "md" | "lg";
  mobilePadding?: "none" | "sm" | "md" | "lg";
}

export function BentoCard({
  className,
  variant = "default",
  padding = "md",
  mobilePadding = "sm",
  ...props
}: BentoCardProps) {
  const paddingVariants = {
    none: "",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };

  const variants = {
    default: "bg-card text-card-foreground shadow-sm",
    interactive:
      "bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-300",
    accent: "bg-primary text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300",
    minimal: "bg-transparent text-foreground shadow-none",
  };

  return (
    <div
      className={cn(
        "rounded-[1.5rem] border shadow-sm",
        variants[variant],
        paddingVariants[padding],
        paddingVariants[mobilePadding],
        className
      )}
      {...props}
    />
  );
}

BentoCard.displayName = "BentoCard";
