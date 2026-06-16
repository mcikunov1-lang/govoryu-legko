"use client";

import React from "react";
import Image from "next/image";
import { Reveal, Parallax } from "@/components/motion";

export function Band() {
  return (
    <section className="full-bleed relative my-8 flex min-h-[72vh] items-center justify-center overflow-hidden">
      {/* Parallax photo */}
      <Parallax distance={70} className="absolute inset-0">
        <div className="absolute inset-0 scale-125">
          <Image
            src="/images/band-children.jpg"
            alt="Счастливые дети"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Parallax>

      {/* Scrims for legibility */}
      <div className="absolute inset-0 bg-foreground/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-foreground/60" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="eyebrow inline-flex items-center gap-3 text-white/70">
            <span className="h-px w-8 bg-white/40" />
            Моя миссия
            <span className="h-px w-8 bg-white/40" />
          </span>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 font-display text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-[3.4rem]">
            Каждый ребёнок заслуживает
            <br className="hidden sm:block" /> быть{" "}
            <span className="shimmer-text">услышанным</span>
          </p>
        </Reveal>
        <Reveal delay={220}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Помогаю детям обрести голос, уверенность и настоящую радость общения —
            шаг за шагом, в игре и с поддержкой.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <a
            href="#contact"
            className="mt-9 inline-flex h-14 items-center rounded-full bg-white px-8 text-base font-semibold text-foreground shadow-soft-lg transition-transform duration-300 ease-fluid hover:scale-[1.03] active:scale-[0.98]"
          >
            Записаться на консультацию
          </a>
        </Reveal>
      </div>
    </section>
  );
}
