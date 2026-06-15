import React from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Blob } from "@/components/decor";

const REVIEWS = [
  {
    text: "Ребёнок начал говорить гораздо лучше уже через месяц занятий. Спасибо за терпение и подход!",
    name: "Мария",
    role: "мама Ивана, 4 года",
    avatar: "/images/avatar-1.jpg",
  },
  {
    text: "Дочка с удовольствием ходит на занятия, они проходят в игровой форме и очень эффективно!",
    name: "Елена",
    role: "мама Софии, 5 лет",
    avatar: "/images/avatar-2.jpg",
  },
  {
    text: "Профессионал своего дела! Звук «р» поставили быстро, и результат закрепился. Очень довольны!",
    name: "Алексей",
    role: "папа Артёма, 6 лет",
    avatar: "/images/avatar-3.jpg",
  },
];

export function Reviews() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-secondary/40 py-24 sm:py-28"
    >
      <Blob color="coral" variant={2} className="-left-24 top-16 h-72 w-72" opacity={0.2} />
      <Blob color="sky" variant={1} className="-right-24 bottom-10 h-72 w-72" opacity={0.22} />

      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="Отзывы родителей"
          subtitle="Самая лучшая оценка моей работы — это успехи детей"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-[1.8rem] bg-card p-7 shadow-soft ring-1 ring-border/60 transition-all duration-500 ease-fluid hover:-translate-y-1.5 hover:shadow-soft-lg">
                <Quote className="h-8 w-8 text-primary/30" strokeWidth={1.6} />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground/90">
                  {r.text}
                </blockquote>
                <div className="mt-6 flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border/60 pt-5">
                  <span className="relative h-11 w-11 overflow-hidden rounded-full ring-2 ring-card">
                    <Image
                      src={r.avatar}
                      alt={r.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm font-semibold text-foreground">
                      {r.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {r.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex items-center justify-center gap-2">
            <span className="h-2 w-6 rounded-full bg-primary" />
            <span className="h-2 w-2 rounded-full bg-primary/30" />
            <span className="h-2 w-2 rounded-full bg-primary/30" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
