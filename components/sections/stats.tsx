"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { Stagger, StaggerItem } from "@/components/motion";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.7,
      ease: [0.22, 0.61, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const STATS = [
  { to: 7, suffix: "+", label: "лет практики с детьми" },
  { to: 200, suffix: "+", label: "семей доверили мне ребёнка" },
  { to: 4, suffix: "", label: "направления работы" },
  { to: 98, suffix: "%", label: "родителей видят результат" },
];

export function Stats() {
  return (
    <section id="stats" className="relative px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2.5rem] border border-white/50 bg-card/55 px-6 py-12 shadow-soft backdrop-blur-xl sm:px-12">
          <Stagger
            className="grid grid-cols-2 gap-y-10 sm:gap-x-6 lg:grid-cols-4"
            gap={0.14}
          >
            {STATS.map((s) => (
              <StaggerItem key={s.label} className="text-center">
                <div className="font-display text-5xl font-extrabold tracking-tight shimmer-text sm:text-6xl">
                  <Counter to={s.to} suffix={s.suffix} />
                </div>
                <div className="mx-auto mt-3 max-w-[12rem] text-sm leading-snug text-muted-foreground">
                  {s.label}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
