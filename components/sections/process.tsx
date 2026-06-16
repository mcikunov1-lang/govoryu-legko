import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, Parallax, Stagger, StaggerItem } from "@/components/motion";

const STEPS = [
  {
    n: "01",
    title: "Диагностика",
    text: "Определяю уровень речевого развития и цели занятий.",
    fg: "text-[hsl(150_36%_36%)]",
  },
  {
    n: "02",
    title: "Планирование",
    text: "Составляю индивидуальную программу под вашего ребёнка.",
    fg: "text-[hsl(38_70%_42%)]",
  },
  {
    n: "03",
    title: "Занятия",
    text: "Провожу интересные игровые занятия в тёплой атмосфере.",
    fg: "text-[hsl(205_55%_42%)]",
  },
  {
    n: "04",
    title: "Результат",
    text: "Отслеживаю прогресс и корректирую программу вместе с вами.",
    fg: "text-primary",
  },
];

export function Process() {
  return (
    <section id="process" className="relative px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Как всё устроено"
          title="Как проходят занятия"
          subtitle="Комфортная и эффективная работа в четыре шага — без стресса для ребёнка и родителей."
        />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">
          {/* Photo */}
          <Reveal className="order-1 lg:order-none">
            <div className="overflow-hidden rounded-[2.4rem] shadow-soft-lg ring-1 ring-white/50">
              <Parallax distance={48} className="relative aspect-[5/4] w-full">
                <div className="absolute inset-0 scale-110">
                  <Image
                    src="/images/lesson-process.jpg"
                    alt="Занятие по развитию речи и артикуляции"
                    fill
                    sizes="(max-width: 1024px) 90vw, 560px"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-transparent" />
              </Parallax>
            </div>
          </Reveal>

          {/* Steps */}
          <Stagger className="flex flex-col" gap={0.13}>
            {STEPS.map((s, i) => (
              <StaggerItem key={s.n}>
                <div
                  className={`flex items-start gap-6 py-6 ${
                    i !== STEPS.length - 1 ? "border-b border-border/60" : ""
                  }`}
                >
                  <span
                    className={`font-display text-4xl font-extrabold leading-none ${s.fg}`}
                  >
                    {s.n}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-sm leading-relaxed text-muted-foreground">
                      {s.text}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
