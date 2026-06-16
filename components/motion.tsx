"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 0.61, 0.36, 1] as const;

/* -------------------------------------------------------------------------- */
/* Reveal — gentle, heavy fade-up + blur as the element enters the viewport.  */
/* Animates unconditionally (the brand explicitly wants motion on scroll).    */
/* -------------------------------------------------------------------------- */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 44,
  blur = true,
  duration = 0.9,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: blur ? "blur(12px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration, ease: EASE, delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Stagger — orchestrates children so they cascade in one after another.      */
/* -------------------------------------------------------------------------- */
export function Stagger({
  children,
  className,
  gap = 0.12,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 46, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE },
  },
};

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Parallax — drifts content against the scroll. Wrap an over-scaled image.   */
/* -------------------------------------------------------------------------- */
export function Parallax({
  children,
  className,
  distance = 70,
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Aurora — soft drifting colour orbs behind the whole page.                  */
/* -------------------------------------------------------------------------- */
export function Aurora() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute -left-40 top-[-10%] h-[42rem] w-[42rem] rounded-full opacity-50 blur-[120px] animate-float"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, hsl(12 80% 80%), transparent 65%)",
        }}
      />
      <div
        className="absolute right-[-15%] top-[20%] h-[38rem] w-[38rem] rounded-full opacity-40 blur-[120px] animate-float"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(350 80% 86%), transparent 65%)",
          animationDelay: "-3s",
        }}
      />
      <div
        className="absolute left-[10%] top-[55%] h-[36rem] w-[36rem] rounded-full opacity-35 blur-[130px] animate-float"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(150 50% 80%), transparent 65%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="absolute right-[5%] bottom-[-5%] h-[34rem] w-[34rem] rounded-full opacity-40 blur-[120px] animate-float"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(40 90% 82%), transparent 65%)",
          animationDelay: "-9s",
        }}
      />
    </div>
  );
}
