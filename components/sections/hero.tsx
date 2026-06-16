"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import { PrimaryCta, GhostCta } from "@/components/cta";

const EASE = [0.22, 0.61, 0.36, 1] as const;

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <motion.span
      className="block overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </motion.span>
  );
}

export function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 lg:pt-0 lg:pb-0"
    >
      <span id="hero" className="absolute top-0" aria-hidden="true" />

      {/* Full-height immersive image, bleeding to the right edge (desktop) */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block">
        <motion.div
          className="relative h-full w-full"
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <Image
            src="/images/hero-logoped.jpg"
            alt="Логопед на занятии с ребёнком"
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
          {/* Blend the photo's left edge into the cream background */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <motion.span
            className="eyebrow inline-flex items-center gap-3 text-primary/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <span className="h-px w-8 bg-primary/40" />
            Логопед для детей · от 3 лет
          </motion.span>

          <h1 className="mt-7 font-display text-[2.7rem] font-extrabold leading-[1.04] tracking-tight text-foreground sm:text-6xl lg:text-[4.4rem]">
            <Line delay={0.15}>Помогаю детям</Line>
            <Line delay={0.28}>говорить уверенно</Line>
            <Line delay={0.41}>
              <span className="shimmer-text shimmer-text--slow">
                и с удовольствием
              </span>
            </Line>
          </h1>

          <motion.p
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.6 }}
          >
            Индивидуальные занятия, которые проходят легко и в игре. Ставлю звуки,
            развиваю речь и готовлю к школе — бережно, по собственной программе для
            каждого ребёнка.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.75 }}
          >
            <PrimaryCta>Записаться на консультацию</PrimaryCta>
            <GhostCta href="#services">Смотреть услуги</GhostCta>
          </motion.div>

          {/* Social proof — avatar stack instead of badge chips */}
          <motion.div
            className="mt-12 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.95 }}
          >
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
                <span className="font-semibold text-foreground">200+ семей</span> уже
                доверили мне речь ребёнка
              </p>
            </div>
          </motion.div>

          {/* Mobile / tablet image */}
          <motion.div
            className="mt-12 lg:hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.05 }}
          >
            <div className="overflow-hidden rounded-[2rem] shadow-soft-lg ring-1 ring-white/50">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/hero-logoped.jpg"
                  alt="Логопед на занятии с ребёнком"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#stats"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
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
