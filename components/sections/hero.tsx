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

      {/* Desktop: full-height video with a wave-cut inner edge, zooming in on load */}
      <motion.div
        className="wave-mask-left pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block"
        initial={{ scale: 1.14, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
      >
        <HeroVideo className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <motion.span
            className="eyebrow inline-flex items-center gap-3 text-primary"
            {...fromLeft(0)}
          >
            <span className="h-px w-10 bg-primary/50" />
            Логопед для детей · онлайн и очно
          </motion.span>

          <h1 className="mt-8 font-display text-[3rem] font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-7xl lg:text-[5rem]">
            <Line delay={0.15}>Ваш ребёнок</Line>
            <Line delay={0.3}>заговорит чисто</Line>
            <Line delay={0.45}>
              <span className="text-primary">в игре, без слёз</span>
            </Line>
          </h1>

          <motion.p
            className="mt-8 max-w-xl text-xl leading-relaxed text-muted-foreground"
            {...fromLeft(0.62)}
          >
            Не ждите, пока «само пройдёт». Поставлю звуки, запущу речь и подготовлю
            к школе — по программе под вашего ребёнка. Первый разбор речи и план
            занятий — бесплатно.
          </motion.p>

          <motion.div
            className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center"
            {...fromLeft(0.78)}
          >
            <PrimaryCta>Записаться бесплатно</PrimaryCta>
            <GhostCta href="#process">Как это работает</GhostCta>
          </motion.div>

          <motion.div className="mt-12 flex items-center gap-4" {...fromLeft(0.95)}>
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

          {/* Mobile / tablet: video with a wave-cut top edge */}
          <motion.div
            className="mt-12 lg:hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.05 }}
          >
            <div className="wave-mask-top relative aspect-[4/3] w-full overflow-hidden">
              <HeroVideo className="h-full w-full object-cover" />
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
