import React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  shimmer = true,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  shimmer?: boolean;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow inline-flex items-center gap-3 text-primary/80">
            <span className="h-px w-8 bg-primary/40" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={90}>
        <h2
          className={cn(
            "mt-5 font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-foreground sm:text-5xl md:text-[3.4rem]",
            shimmer && "shimmer-text"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={170}>
          <p
            className={cn(
              "mt-5 text-balance text-base leading-relaxed text-muted-foreground sm:text-lg",
              align === "center" ? "max-w-2xl" : "max-w-xl"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
