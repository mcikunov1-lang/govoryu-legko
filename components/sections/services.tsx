import React from "react";
import {
  BookOpen,
  GraduationCap,
  MessagesSquare,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Blob } from "@/components/decor";

type Service = {
  icon: LucideIcon;
  title: string;
  text: string;
  age: string;
  tint: string;
  fg: string;
};

const SERVICES: Service[] = [
  {
    icon: MessagesSquare,
    title: "Постановка звуков",
    text: "Коррекция и постановка звуков любой сложности — от свистящих до «р» и «л».",
    age: "от 3 лет",
    tint: "bg-mint/25",
    fg: "text-[hsl(150_36%_36%)]",
  },
  {
    icon: BookOpen,
    title: "Развитие речи",
    text: "Расширение словарного запаса, развитие связной речи и грамматики.",
    age: "от 3 лет",
    tint: "bg-sun/25",
    fg: "text-[hsl(38_70%_42%)]",
  },
  {
    icon: Waves,
    title: "Коррекция заикания",
    text: "Мягкие и эффективные методики для преодоления заикания.",
    age: "от 4 лет",
    tint: "bg-sky/25",
    fg: "text-[hsl(205_55%_42%)]",
  },
  {
    icon: GraduationCap,
    title: "Подготовка к школе",
    text: "Развитие речи, внимания, памяти и навыков чтения и письма.",
    age: "от 5 лет",
    tint: "bg-primary/15",
    fg: "text-primary",
  },
];

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-28">
      <Blob color="blush" variant={1} className="-left-24 top-24 h-72 w-72" opacity={0.3} />
      <Blob color="sun" variant={0} className="-right-24 bottom-10 h-80 w-80" opacity={0.28} />

      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Услуги логопеда"
          subtitle="Помогаю решить различные речевые задачи и раскрыть потенциал вашего ребёнка"
          shimmer
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <article className="group relative flex h-full flex-col rounded-[1.8rem] bg-card p-7 shadow-soft ring-1 ring-border/60 transition-all duration-500 ease-fluid hover:-translate-y-1.5 hover:shadow-soft-lg">
                <span
                  className={`grid h-14 w-14 place-items-center rounded-2xl ${s.tint} ${s.fg} transition-transform duration-500 group-hover:scale-110`}
                >
                  <s.icon className="h-7 w-7" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
                <span className="mt-6 inline-flex w-fit items-center rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-primary">
                  {s.age}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
