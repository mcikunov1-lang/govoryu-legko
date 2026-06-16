"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Star } from "lucide-react";
import { PrimaryCta, GhostCta } from "@/components/cta";

const EASE = [0.22, 0.61, 0.36, 1] as const;

/* A headline line that slides in from the left edge. */
function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.span
      className="block"
      initial={{ opacity: 0, x: -90 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </motion.span>
  );
}

function fromLeft(delay: number) {
  return {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.9, ease: EASE, delay },
  };
}

function HeroVideo({ className }: { className?: string }) {
  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      playsInline
      poster="/images/hero-poster.jpg"
    >
      <source src="/video/hero.mp4" type="video/mp4" />
    </video>
  );
}

export function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 lg:pt-0 lg:pb-0"
    >
      <span id="hero" className="absolute top-0" aria-hidden="true" />

      {/* Animated wave clip-paths */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          {/* Desktop: wavy left edge */}
          <clipPath id="heroWave" clipPathUnits="objectBoundingBox">
            <path d="M1 0 L0.13 0 C0 0.17 0.26 0.33 0.1 0.5 C-0.06 0.67 0.26 0.83 0.13 1 L1 1 Z">
              <animate
                attributeName="d"
                dur="7s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0;0.5;1"
                keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
                values="M1 0 L0.13 0 C0 0.17 0.26 0.33 0.1 0.5 C-0.06 0.67 0.26 0.83 0.13 1 L1 1 Z;
                M1 0 L0.1 0 C0.26 0.17 0 0.33 0.16 0.5 C0.3 0.67 0 0.83 0.1 1 L1 1 Z;
                M1 0 L0.13 0 C0 0.17 0.26 0.33 0.1 0.5 C-0.06 0.67 0.26 0.83 0.13 1 L1 1 Z"
              />
            </path>
          </clipPath>

        </defs>
      </svg>

      {/* Desktop: full-height video with an animated wave edge */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[47%] xl:w-[53%] lg:block"
        initial={{ scale: 1.14, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
      >
        <div
          className="relative h-full w-full"
          style={{ clipPath: "url(#heroWave)", WebkitClipPath: "url(#heroWave)" }}
        >
          <HeroVideo className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/35 to-transparent" />
        </div>
      </motion.div>

      {/* Mobile: the video is the section background — text sits on top of it */}
      <motion.div
        className="absolute inset-0 lg:hidden"
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
      >
        <HeroVideo className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/88 to-background/98" />
        <div className="absolute inset-0 bg-background/35" />
      </motion.div>

      {/* Text — nudged in from the left edge, two-line headline */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:pl-24 lg:pr-0 xl:pl-32">
        <div className="max-w-[34rem] sm:max-w-xl lg:max-w-none">
          <motion.span
            className="eyebrow inline-flex items-center gap-3 text-primary"
            {...fromLeft(0)}
          >
            <span className="h-px w-10 bg-primary/50" />
            Логопед для детей · онлайн и очно
          </motion.span>

          <h1 className="mt-7 font-display text-[1.95rem] font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-[2.7rem] sm:leading-[1.08] lg:text-[3.3rem] lg:leading-[1.05] xl:text-[3.9rem]">
            <Line delay={0.15}>
              <span className="lg:whitespace-nowrap">Ваш ребёнок заговорит чисто</span>
            </Line>
            <Line delay={0.32}>
              <span className="text-primary">в игре без слёз</span>
            </Line>
          </h1>

          <motion.p
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            {...fromLeft(0.62)}
          >
            Не ждите, пока «само пройдёт». Поставлю звуки, запущу речь и подготовлю
            к школе — по программе под вашего ребёнка. Первый разбор речи и план
            занятий — бесплатно.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            {...fromLeft(0.78)}
          >
            <PrimaryCta>Записаться бесплатно</PrimaryCta>
            <GhostCta href="#process">Как это работает</GhostCta>
          </motion.div>

          <motion.div className="mt-11 flex items-center gap-4" {...fromLeft(0.95)}>
            <div className="flex -space-x-3">
              {["/images/avatar-1.jpg", "/images/avatar-2.jpg", "/images/avatar-3.jpg"].map(
                (src) => (
                  <span
                    key={src}
                    className="relative h-12 w-12 overflow-hidden rounded-full ring-[3px] ring-background"
                  >
                    <Image src={src} alt="" fill sizes="48px" className="object-cover" />
                  </span>
                )
              )}
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">200+ детей</span> уже
                заговорили чисто на моих занятиях
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.a
        href="#stats"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">листайте</span>
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
