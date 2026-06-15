"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, HeartHandshake, Sparkles, Target } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Blob, Dots } from "@/components/decor";

const FEATURES = [
  {
    icon: HeartHandshake,
    title: "Индивидуальный подход",
    sub: "к каждому ребёнку",
  },
  { icon: Target, title: "Эффективные методики", sub: "и игровые занятия" },
  { icon: Sparkles, title: "Видимый результат", sub: "уже после первых занятий" },
];

export function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 pb-16 pt-32 sm:pb-24 sm:pt-36 lg:pt-44"
    >
      <span id="hero" className="absolute -top-24" aria-hidden="true" />

      {/* Background decor */}
      <Blob color="peach" variant={0} className="-left-24 top-10 h-80 w-80" opacity={0.4} />
      <Blob color="blush" variant={2} className="-right-20 top-40 h-72 w-72" opacity={0.35} />
      <Dots className="left-6 top-44 hidden h-24 w-24 opacity-50 md:block" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
        {/* Left: copy */}
        <div className="relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Логопед для детей от 3 лет
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-6 font-display text-[2.55rem] font-extrabold leading-[1.06] tracking-tight text-foreground sm:text-6xl lg:text-[3.35rem] xl:text-[3.75rem]">
              Помогаю детям
              <br />
              говорить уверенно
              <br />
              <span className="shimmer-text">и с удовольствием</span>
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Индивидуальные занятия с логопедом, которые проходят легко, в
              игровой форме и дают результат, заметный с первых встреч.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 grid max-w-md grid-cols-1 gap-4 sm:grid-cols-3">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex flex-col items-start gap-2">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-card text-primary shadow-soft ring-1 ring-border/60">
                    <f.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className="text-sm font-semibold leading-tight text-foreground">
                    {f.title}
                  </span>
                  <span className="-mt-1 text-xs text-muted-foreground">
                    {f.sub}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex h-14 items-center gap-3 rounded-2xl bg-gradient-to-b from-primary to-[hsl(12_68%_61%)] pl-7 pr-3 text-base font-semibold text-primary-foreground shadow-glow ring-1 ring-primary/30 transition-transform duration-300 ease-fluid hover:scale-[1.02] active:scale-[0.98]"
              >
                Записаться на консультацию
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={380}>
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-mint/30 text-[hsl(150_36%_38%)]">
                ✓
              </span>
              Первая консультация — бесплатно!
            </p>
          </Reveal>
        </div>

        {/* Right: photo */}
        <Reveal delay={200} className="relative z-10">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <Blob
              color="coral"
              variant={1}
              className="-right-10 -top-10 h-40 w-40"
              opacity={0.55}
            />
            <Blob
              color="mint"
              variant={2}
              className="-bottom-12 -left-10 h-36 w-36"
              opacity={0.5}
            />

            {/* Double-bezel image card */}
            <div className="relative rounded-[2.2rem] bg-card/70 p-2.5 shadow-soft-lg ring-1 ring-border/60 backdrop-blur-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.7rem] sm:aspect-[5/5]">
                <Image
                  src="/images/hero-logoped.jpg"
                  alt="Логопед на занятии с ребёнком"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent" />
              </div>

              {/* Floating stat chip */}
              <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-soft ring-1 ring-border/60">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/12 text-primary">
                  <Sparkles className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div className="leading-tight">
                  <div className="font-display text-lg font-bold text-foreground">
                    7+ лет
                  </div>
                  <div className="text-xs text-muted-foreground">
                    практики с детьми
                  </div>
                </div>
              </div>
            </div>

            {/* Floating annotation chip */}
            <div className="absolute -right-2 top-8 hidden rotate-3 rounded-2xl bg-card px-4 py-2.5 shadow-soft ring-1 ring-border/60 sm:block">
              <span className="text-xs font-semibold text-foreground">
                Правильное
              </span>
              <span className="block text-[11px] text-muted-foreground">
                произношение звуков
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
