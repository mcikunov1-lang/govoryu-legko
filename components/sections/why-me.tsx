import React from "react";
import { Heart, GraduationCap, Star, ShieldCheck, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/motion";

type Reason = {
  icon: LucideIcon;
  title: string;
  text: string;
  fg: string;
};

const REASONS: Reason[] = [
  {
    icon: Heart,
    title: "Подход к каждому",
    text: "Найду контакт даже с тем, кто стесняется и молчит. Ребёнок ждёт занятий с радостью.",
    fg: "text-blush",
  },
  {
    icon: GraduationCap,
    title: "Профильное образование",
    text: "Дипломированный логопед-дефектолог. Знаю, как и почему это работает.",
    fg: "text-mint",
  },
  {
    icon: Star,
    title: "Опыт и результат",
    text: "7+ лет практики и сотни детей, которые заговорили чисто и уверенно.",
    fg: "text-sun",
  },
  {
    icon: ShieldCheck,
    title: "Без пустых занятий",
    text: "Работающие приёмы и игры — каждое занятие приближает к результату.",
    fg: "text-sky",
  },
];

export function WhyMe() {
  return (
    <section id="why" className="relative px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Почему я"
          title="Почему мне доверяют детей"
          subtitle="Создаю тёплую атмосферу, в которой ребёнку хочется заниматься, а родителю — спокойно за результат."
        />

        <Stagger
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          gap={0.1}
        >
          {REASONS.map((r) => (
            <StaggerItem key={r.title} className="h-full">
              <div className="group flex h-full flex-col rounded-[1.8rem] border border-border/60 bg-card/60 p-7 backdrop-blur-sm transition-all duration-500 ease-fluid hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-soft">
                <span className={`${r.fg}`}>
                  <r.icon
                    className="h-8 w-8 transition-transform duration-500 ease-fluid group-hover:scale-110"
                    strokeWidth={1.4}
                  />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold text-foreground">
                  {r.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {r.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
