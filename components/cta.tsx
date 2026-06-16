import React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* Primary call-to-action: rounded pill with a nested "button-in-button" arrow. */
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
        "group inline-flex h-14 items-center gap-3 rounded-full bg-gradient-to-b from-primary to-[hsl(12_68%_60%)] py-2 pl-7 pr-2.5 text-base font-semibold text-primary-foreground shadow-glow ring-1 ring-primary/30 transition-all duration-300 ease-fluid hover:scale-[1.02] active:scale-[0.98]",
        className
      )}
    >
      {children}
      <span className="grid h-10 w-10 place-items-center rounded-full bg-white/20 transition-transform duration-300 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
      </span>
    </a>
  );
}

/* Secondary, quieter link styled as a ghost pill. */
export function GhostCta({
  children,
  href = "#about",
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
        "inline-flex h-14 items-center rounded-full border border-border bg-card/60 px-7 text-base font-semibold text-foreground backdrop-blur-sm transition-all duration-300 ease-fluid hover:border-primary/40 hover:bg-card",
        className
      )}
    >
      {children}
    </a>
  );
}
