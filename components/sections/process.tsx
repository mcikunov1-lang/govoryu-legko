import React from "react";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Blob } from "@/components/decor";

const STEPS = [
  {
    n: "01",
    title: "Диагностика",
    text: "Определяем уровень речевого развития и цели занятий.",
    ring: "ring-mint/50",
    bg: "bg-mint/25",
    fg: "text-[hsl(150_36%_34%)]",
  },
  {
    n: "02",
    title: "Планирование",
    text: "Составляем индивидуальную программу для ребёнка.",
    ring: "ring-sun/50",
    bg: "bg-sun/25",
    fg: "text-[hsl(38_70%_40%)]",
  },
  {
    n: "03",
    title: "Занятия",
    text: "Проводим интересные и игровые занятия в комфортной атмосфере.",
    ring: "ring-sky/50",
    bg: "bg-sky/25",
    fg: "text-[hsl(205_55%_40%)]",
  },
  {
    n: "04",
    title: "Результат",
    text: "Отслеживаем прогресс и корректируем программу.",
    ring: "ring-primary/40",
    bg: "bg-primary/15",
    fg: "text-primary",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-secondary/40 py-24 sm:py-28"
    >
      <Blob color="mint" variant={2} className="-right-24 top-12 h-72 w-72" opacity={0.28} />
      <Blob color="coral" variant={0} className="-left-24 bottom-0 h-72 w-72" opacity={0.22} />

      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Как проходят занятия"
          subtitle="Комфортная и эффективная работа в 4 шага"
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Steps */}
          <div className="relative">
            <span
              className="absolute left-[27px] top-8 bottom-8 hidden w-px bg-gradient-to-b from-border via-border to-transparent sm:block"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-7">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 110}>
                  <div className="flex items-start gap-5">
                    <span
                      className={`relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${s.bg} ${s.fg} font-display text-lg font-bold ring-4 ${s.ring} ring-offset-2 ring-offset-secondary/40`}
                    >
                      {s.n}
                    </span>
                    <div className="pt-1.5">
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {s.title}
                      </h3>
                      <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-muted-foreground">
                        {s.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Photo */}
          <Reveal delay={150} className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <Blob
                color="sun"
                variant={1}
                className="-left-10 -top-8 h-32 w-32"
                opacity={0.55}
              />
              <Blob
                color="blush"
                variant={0}
                className="-bottom-10 -right-8 h-36 w-36"
                opacity={0.5}
              />
              <div className="relative rounded-[2.2rem] bg-card/70 p-2.5 shadow-soft-lg ring-1 ring-border/60 backdrop-blur-sm">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.7rem]">
                  <Image
                    src="/images/lesson-process.jpg"
                    alt="Занятие по развитию речи и артикуляции"
                    fill
                    sizes="(max-width: 1024px) 90vw, 520px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
