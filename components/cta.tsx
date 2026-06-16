import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* Primary CTA — coral pill with an animated light sweep and a sliding arrow. */
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
        "group relative inline-flex h-14 items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap rounded-full bg-gradient-to-br from-[hsl(18_86%_66%)] via-primary to-[hsl(8_72%_56%)] px-8 text-base font-semibold text-primary-foreground shadow-[0_12px_40px_-12px_hsl(14_82%_55%/0.8)] ring-1 ring-white/15 transition-all duration-300 ease-fluid hover:-translate-y-0.5 hover:shadow-[0_18px_48px_-12px_hsl(14_82%_55%/0.95)] active:translate-y-0",
        className
      )}
    >
      {/* light sweep */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-fluid group-hover:translate-x-full" />
      <span className="relative">{children}</span>
      <ArrowRight
        className="relative h-5 w-5 transition-transform duration-300 ease-fluid group-hover:translate-x-1"
        strokeWidth={2.2}
      />
    </a>
  );
}

/* Secondary CTA — quiet glass pill that lights up on hover. */
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
        "group inline-flex h-14 items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/[0.04] px-7 text-base font-semibold text-foreground backdrop-blur-sm transition-all duration-300 ease-fluid hover:border-primary/50 hover:bg-white/[0.08]",
        className
      )}
    >
      {children}
    </a>
  );
}
