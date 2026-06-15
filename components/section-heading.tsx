import React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";
import { Sprout } from "@/components/decor";

export function SectionHeading({
  title,
  subtitle,
  shimmer = false,
  className,
}: {
  title: string;
  subtitle?: string;
  shimmer?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <Reveal>
        <Sprout className="mb-3 text-primary/70" />
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={cn(
            "font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.9rem]",
            shimmer && "shimmer-text"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <p className="mt-4 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
