import React from "react";
import { Heart, GraduationCap, Star, ShieldCheck, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Blob } from "@/components/decor";

type Reason = {
  icon: LucideIcon;
  title: string;
  text: string;
  bg: string;
  fg: string;
};

const REASONS: Reason[] = [
  {
    icon: Heart,
    title: "Люблю детей",
    text: "Легко нахожу подход к каждому ребёнку.",
    bg: "bg-blush/40",
    fg: "text-[hsl(350_60%_55%)]",
  },
  {
    icon: GraduationCap,
    title: "Высшее образование",
    text: "Дипломированный специалист.",
    bg: "bg-mint/30",
    fg: "text-[hsl(150_36%_36%)]",
  },
  {
    icon: Star,
    title: "Опыт работы",
    text: "Более 7 лет практики с детьми.",
    bg: "bg-sun/30",
    fg: "text-[hsl(38_70%_42%)]",
  },
  {
    icon: ShieldCheck,
    title: "Проверенные методики",
    text: "Работаю с современными эффективными подходами.",
    bg: "bg-sky/30",
    fg: "text-[hsl(205_55%_42%)]",
  },
];

export function WhyMe() {
  return (
    <section id="why" className="relative overflow-hidden py-24 sm:py-28">
      <Blob color="peach" variant={2} className="-right-28 top-20 h-80 w-80" opacity={0.25} />

      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Почему родители выбирают меня"
          subtitle="Создаю тёплую атмосферу, в которой ребёнку хочется заниматься и расти"
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 90}>
              <div className="group flex flex-col items-center text-center">
                <span
                  className={`grid h-24 w-24 place-items-center rounded-[2rem] ${r.bg} ${r.fg} shadow-soft transition-transform duration-500 ease-fluid group-hover:-translate-y-1.5 group-hover:rotate-3`}
                >
                  <r.icon className="h-10 w-10" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold text-foreground">
                  {r.title}
                </h3>
                <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-muted-foreground">
                  {r.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
