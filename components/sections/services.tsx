import React from "react";
import {
  BookOpen,
  GraduationCap,
  MessagesSquare,
  Waves,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/motion";

type Service = {
  icon: LucideIcon;
  title: string;
  text: string;
  age: string;
  fg: string;
};

const SERVICES: Service[] = [
  {
    icon: MessagesSquare,
    title: "Постановка звуков",
    text: "Поставлю «р», «л», шипящие и свистящие — ребёнка наконец будут понимать с первого раза.",
    age: "от 3 лет",
    fg: "text-mint",
  },
  {
    icon: BookOpen,
    title: "Развитие речи",
    text: "Словарный запас, связная речь и грамматика — ребёнок заговорит фразами, а не отдельными словами.",
    age: "от 3 лет",
    fg: "text-sun",
  },
  {
    icon: Waves,
    title: "Коррекция заикания",
    text: "Мягкие техники убирают запинки — речь становится плавной, а ребёнок спокойнее и увереннее.",
    age: "от 4 лет",
    fg: "text-sky",
  },
  {
    icon: GraduationCap,
    title: "Подготовка к школе",
    text: "Чтение, внимание и речь — ребёнок пойдёт в первый класс без логопедических проблем.",
    age: "от 5 лет",
    fg: "text-primary",
  },
];

export function Services() {
  return (
    <section id="services" className="relative px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="С чем помогаю"
          title="Услуги логопеда"
          subtitle="Найдём и решим конкретную речевую задачу вашего ребёнка — по индивидуальной программе и в комфортном темпе."
        />

        <Stagger
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          gap={0.1}
        >
          {SERVICES.map((s) => (
            <StaggerItem key={s.title} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border/60 bg-card/70 p-8 backdrop-blur-sm transition-all duration-500 ease-fluid hover:-translate-y-2 hover:border-primary/30 hover:shadow-soft-lg">
                {/* soft glow on hover */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <span className={`${s.fg}`}>
                  <s.icon
                    className="h-9 w-9 transition-transform duration-500 ease-fluid group-hover:-translate-y-1 group-hover:scale-110"
                    strokeWidth={1.4}
                  />
                </span>

                <h3 className="mt-7 font-display text-xl font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-border/60 pt-5">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {s.age}
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-primary opacity-0 transition-all duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:opacity-100"
                    strokeWidth={1.8}
                  />
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
