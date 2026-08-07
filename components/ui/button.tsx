"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { forwardRef } from "react";

/**
 * Button — A polished, accessible button component.
 * Features:
 * - Warm, calm design matching the ABTalks palette
 * - Multiple variants: primary, secondary, ghost, outline
 * - Loading state with spinner
 * - AsChild support for linking
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[0.75rem] text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-drift focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        primary:
          "bg-sage-drift text-white shadow-sm hover:bg-[oklch(0.68 0.06 145)] hover:shadow-md",
        secondary:
          "bg-warm-parchment text-charcoal shadow-sm hover:bg-[oklch(0.94 0.015 75)]",
        outline:
          "border border-soft-border bg-background text-charcoal shadow-sm hover:bg-muted hover:text-charcoal",
        ghost:
          "hover:bg-muted hover:text-charcoal text-charcoal",
        link: "text-sage-drift underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-[0.625rem] px-3 text-xs",
        lg: "h-11 rounded-[0.875rem] px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading, icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
        )}
        {!isLoading && icon && <span className="mr-2">{icon}</span>}
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";
