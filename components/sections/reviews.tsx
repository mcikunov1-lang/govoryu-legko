import React from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/motion";

const REVIEWS = [
  {
    text: "Ребёнок начал говорить гораздо лучше уже через месяц занятий. Спасибо за терпение и тёплый подход к сыну!",
    name: "Мария",
    role: "мама Ивана, 4 года",
    avatar: "/images/avatar-1.jpg",
  },
  {
    text: "Дочка бежит на занятия с удовольствием — всё проходит в игровой форме и при этом очень эффективно.",
    name: "Елена",
    role: "мама Софии, 5 лет",
    avatar: "/images/avatar-2.jpg",
  },
  {
    text: "Профессионал своего дела! Звук «р» поставили быстро, и результат закрепился. Мы очень довольны.",
    name: "Алексей",
    role: "папа Артёма, 6 лет",
    avatar: "/images/avatar-3.jpg",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Отзывы"
          title="Что говорят родители"
          subtitle="Самая лучшая оценка моей работы — это счастливые дети и их успехи."
        />

        <Stagger className="mt-16 grid gap-5 md:grid-cols-3" gap={0.12}>
          {REVIEWS.map((r) => (
            <StaggerItem key={r.name} className="h-full">
              <figure className="flex h-full flex-col rounded-[2rem] border border-border/60 bg-card/70 p-8 backdrop-blur-sm transition-all duration-500 ease-fluid hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-soft-lg">
                <Quote className="h-9 w-9 text-primary/25" strokeWidth={1.4} />
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-foreground/90">
                  {r.text}
                </blockquote>
                <div className="mt-6 flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border/60 pt-5">
                  <span className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-card">
                    <Image
                      src={r.avatar}
                      alt={r.name}
                      fill
                      sizes="48px"
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
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
