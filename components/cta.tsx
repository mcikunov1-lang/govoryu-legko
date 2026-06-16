import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* Primary CTA — solid coral, larger, no gradient. */
export function PrimaryCta({
  children,
  href = "#contact",
  className,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex h-16 items-center justify-center gap-3 whitespace-nowrap rounded-full bg-primary px-9 text-lg font-semibold text-primary-foreground shadow-[0_14px_40px_-14px_hsl(14_82%_45%/0.9)] ring-1 ring-primary/40 transition-all duration-300 ease-fluid hover:-translate-y-0.5 hover:bg-[hsl(12_78%_56%)] active:translate-y-0",
        className
      )}
    >
      {children}
      <ArrowRight
        className="h-5 w-5 transition-transform duration-300 ease-fluid group-hover:translate-x-1"
        strokeWidth={2.4}
      />
    </a>
  );
}

/* Secondary CTA — quiet outline pill that lights up on hover. */
export function GhostCta({
  children,
  href = "#process",
  className,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex h-16 items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/[0.04] px-8 text-lg font-semibold text-foreground transition-all duration-300 ease-fluid hover:border-primary/50 hover:bg-white/[0.08]",
        className
      )}
    >
      {children}
    </a>
  );
}
