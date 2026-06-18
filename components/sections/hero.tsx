"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ChevronDown,
  Star,
  GraduationCap,
  Heart,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { PrimaryCta, GhostCta } from "@/components/cta";
import { HeroDecor } from "@/components/hero-decor";

const EASE = [0.22, 0.61, 0.36, 1] as const;

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

const FEATURES: { icon: LucideIcon; title: string; sub: string }[] = [
  { icon: GraduationCap, title: "Высшее педагогическое", sub: "образование" },
  { icon: Heart, title: "Индивидуальный подход", sub: "к каждому ребёнку" },
  { icon: ShieldCheck, title: "Современные методики", sub: "с доказанной эффективностью" },
  { icon: Sparkles, title: "Удобный формат", sub: "онлайн и очно" },
];

/* The portrait with its glow, blob and a soft fade at the bottom. */
function Portrait() {
  return (
    <>
      {/* soft glow */}
      <div
        className="absolute left-1/2 top-[42%] -z-10 h-[80%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[90px]"
        aria-hidden="true"
      />
      {/* warm blob */}
      <div
        className="absolute left-1/2 top-[44%] -z-10 h-[68%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-[46%_54%_48%_52%/54%_46%_54%_46%] bg-[hsl(20_32%_20%)]"
        aria-hidden="true"
      />
      <HeroDecor />
      <div
        className="relative h-full w-full"
        style={{
          maskImage: "linear-gradient(to bottom, #000 78%, transparent 99%)",
          WebkitMaskImage: "linear-gradient(to bottom, #000 78%, transparent 99%)",
        }}
      >
        <Image
          src="/images/hero-portrait-2.png"
          alt="Логопед — Анна Светлова"
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 720px"
          className="object-contain object-bottom drop-shadow-[0_28px_55px_rgba(0,0,0,0.55)]"
        />
      </div>
    </>
  );
}

export function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-12 lg:pt-0 lg:pb-0"
    >
      <span id="hero" className="absolute top-0" aria-hidden="true" />

      {/* Desktop portrait — large, anchored to the bottom-right, bleeding to edges */}
      <motion.div
        className="absolute bottom-0 right-0 hidden h-[92%] w-[50%] xl:w-[48%] lg:block"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
      >
        <Portrait />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8">
        <div className="max-w-[40rem]">
          <motion.span
            className="eyebrow inline-flex items-center gap-3 text-primary"
            {...fromLeft(0)}
          >
            <span className="h-px w-10 bg-primary/50" />
            Логопед для детей · онлайн и очно
          </motion.span>

          <h1 className="mt-6 font-display text-[2.3rem] font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-[3.2rem] sm:leading-[1.05] lg:text-[3.6rem] xl:text-[4.1rem]">
            <Line delay={0.15}>Ваш ребёнок заговорит</Line>
            <Line delay={0.32}>
              <span className="text-primary">чисто и уверенно</span>
            </Line>
          </h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            {...fromLeft(0.6)}
          >
            Не ждите, пока «само пройдёт». Поставлю звуки, запущу речь и подготовлю
            к школе — по программе под вашего ребёнка. Первый разбор речи и план
            занятий — бесплатно.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            {...fromLeft(0.74)}
          >
            <PrimaryCta>Записаться бесплатно</PrimaryCta>
            <GhostCta href="#process">Как это работает</GhostCta>
          </motion.div>

          <motion.div className="mt-9 flex items-center gap-4" {...fromLeft(0.9)}>
            <div className="flex -space-x-3">
              {["/images/avatar-1.jpg", "/images/avatar-2.jpg", "/images/avatar-3.jpg"].map(
                (src) => (
                  <span
                    key={src}
                    className="relative h-11 w-11 overflow-hidden rounded-full ring-[3px] ring-background"
                  >
                    <Image src={src} alt="" fill sizes="44px" className="object-cover" />
                  </span>
                )
              )}
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">200+ детей</span> уже
                заговорили чисто на моих занятиях
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4"
            {...fromLeft(1.05)}
          >
            {FEATURES.map((f) => (
              <div key={f.title} className="flex flex-col items-start gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full text-primary ring-1 ring-primary/30">
                  <f.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <span className="text-[13px] font-semibold leading-tight text-foreground">
                  {f.title}
                  <span className="block font-normal text-muted-foreground">
                    {f.sub}
                  </span>
                </span>
              </div>
            ))}
          </motion.div>

          {/* Mobile portrait */}
          <motion.div
            className="relative mt-10 h-[26rem] w-full lg:hidden"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.5 }}
          >
            <Portrait />
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#stats"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground lg:flex"
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
