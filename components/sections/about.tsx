"use client";

import React from "react";
import Image from "next/image";
import { BadgeCheck, GraduationCap, Laptop, Puzzle } from "lucide-react";
import { Reveal, Parallax } from "@/components/motion";
import { PrimaryCta } from "@/components/cta";

const HIGHLIGHTS = [
  { icon: GraduationCap, text: "Высшее дефектологическое образование" },
  { icon: BadgeCheck, text: "Более 7 лет частной практики с детьми" },
  { icon: Laptop, text: "Занятия очно и онлайн по всему миру" },
  { icon: Puzzle, text: "Авторская игровая методика для каждого" },
];

export function About() {
  return (
    <section id="me" className="relative px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
        {/* Portrait */}
        <Reveal className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="absolute -inset-4 -z-10 rounded-[2.6rem] bg-gradient-to-br from-primary/15 via-blush/20 to-mint/15" />
          <div className="overflow-hidden rounded-[2.2rem] shadow-soft-lg ring-1 ring-white/50">
            <Parallax distance={36} className="relative aspect-[4/5] w-full">
              <div className="absolute inset-0 scale-110">
                <Image
                  src="/images/about-portrait.jpg"
                  alt="Портрет логопеда"
                  fill
                  sizes="(max-width: 1024px) 90vw, 440px"
                  className="object-cover"
                />
              </div>
            </Parallax>
          </div>
          {/* Signature chip */}
          <div className="absolute -bottom-6 -right-2 rounded-2xl bg-card px-5 py-3.5 shadow-soft ring-1 ring-border/60 sm:-right-6">
            <div className="font-display text-base font-bold text-foreground">
              Анна Светлова
            </div>
            <div className="text-xs text-muted-foreground">
              логопед-дефектолог
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-3 text-primary/80">
              <span className="h-px w-8 bg-primary/40" />
              Обо мне
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-foreground sm:text-5xl">
              Логопед, к которому
              <br />
              <span className="shimmer-text">тянутся дети</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Я убеждена: ребёнок раскрывается там, где ему тепло и интересно.
              Поэтому мои занятия — это не «уроки», а увлекательная игра, в которой
              незаметно ставятся звуки, расширяется словарный запас и появляется
              уверенность в себе.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              За каждым результатом стоит индивидуальная программа, бережный темп и
              честный диалог с родителями. Я рядом на всём пути — от первого звука до
              свободной, красивой речи.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {HIGHLIGHTS.map((h) => (
                <li key={h.text} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                    <h.icon className="h-4 w-4" strokeWidth={1.7} />
                  </span>
                  <span className="text-[15px] leading-snug text-foreground/85">
                    {h.text}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-10">
              <PrimaryCta>Познакомиться на консультации</PrimaryCta>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
