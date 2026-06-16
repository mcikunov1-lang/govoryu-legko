import React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  accent = false,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Render the title in the coral accent colour. */
  accent?: boolean;
  align?: "center" | "left" | "right";
  className?: string;
}) {
  const alignClass =
    align === "center"
      ? "items-center text-center"
      : align === "right"
        ? "items-end text-right"
        : "items-start text-left";

  return (
    <div className={cn("flex flex-col", alignClass, className)}>
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "eyebrow inline-flex items-center gap-3 text-primary",
              align === "right" && "flex-row-reverse"
            )}
          >
            <span className="h-px w-10 bg-primary/50" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={90}>
        <h2
          className={cn(
            "mt-5 font-display text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl md:text-[3.6rem]",
            accent ? "text-primary" : "text-foreground"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={170}>
          <p
            className={cn(
              "mt-5 text-balance text-lg leading-relaxed text-muted-foreground",
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
