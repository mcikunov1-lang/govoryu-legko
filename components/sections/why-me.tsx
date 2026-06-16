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
    title: "Люблю детей",
    text: "Легко нахожу подход к каждому: где-то нужна игра, где-то — терпение и тёплая поддержка.",
    fg: "text-[hsl(350_62%_58%)]",
  },
  {
    icon: GraduationCap,
    title: "Высшее образование",
    text: "Дипломированный логопед-дефектолог. Постоянно учусь и обновляю свои методики.",
    fg: "text-[hsl(150_36%_38%)]",
  },
  {
    icon: Star,
    title: "Опыт работы",
    text: "Более 7 лет частной практики и сотни детей, которые заговорили чисто и уверенно.",
    fg: "text-[hsl(38_70%_44%)]",
  },
  {
    icon: ShieldCheck,
    title: "Проверенные методики",
    text: "Работаю по современным эффективным подходам и авторским игровым приёмам.",
    fg: "text-[hsl(205_55%_44%)]",
  },
];

export function WhyMe() {
  return (
    <section id="why" className="relative px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Почему я"
          title="Почему родители выбирают меня"
          subtitle="Создаю тёплую атмосферу, в которой ребёнку хочется заниматься, а родителю — спокойно."
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
