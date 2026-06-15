"use client";

import React, { useState } from "react";
import { Check, Lock, Send, PartyPopper } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Blob, Dots } from "@/components/decor";

const PERKS = [
  "Первая консультация — бесплатно",
  "Подберём удобный формат занятий",
  "Ответим на все ваши вопросы",
];

export function Contact() {
  const [sent, setSent] = useState(false);

  // No backend wired up yet — just acknowledge locally.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative px-4 py-24 sm:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[hsl(24_70%_92%)] via-[hsl(18_75%_90%)] to-[hsl(350_60%_91%)] p-8 shadow-soft-lg ring-1 ring-white/50 sm:p-12 lg:p-16">
        <Blob color="coral" variant={0} className="-right-16 -top-16 h-64 w-64" opacity={0.4} />
        <Blob color="blush" variant={2} className="-bottom-16 -left-16 h-56 w-56" opacity={0.45} />
        <Dots className="bottom-8 right-10 hidden h-20 w-20 opacity-40 lg:block" />

        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          {/* Left copy */}
          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.9rem]">
                Запишитесь
                <br />
                на консультацию
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/70">
                Оставьте заявку, и я свяжусь с вами, чтобы ответить на все
                вопросы и подобрать удобное время.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <ul className="mt-8 flex flex-col gap-3.5">
                {PERKS.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow">
                      <Check className="h-4 w-4" strokeWidth={2.4} />
                    </span>
                    <span className="text-[15px] font-medium text-foreground/80">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Form card */}
          <Reveal delay={150}>
            <div className="rounded-[2rem] bg-card/90 p-6 shadow-soft-lg ring-1 ring-white/60 backdrop-blur-md sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-mint/30 text-[hsl(150_36%_36%)]">
                    <PartyPopper className="h-8 w-8" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                    Спасибо за заявку!
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                    Это демонстрационная форма. В рабочей версии заявка придёт
                    логопеду, и он свяжется с вами в ближайшее время.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field name="name" placeholder="Ваше имя" />
                    <Field name="phone" placeholder="Телефон" type="tel" />
                  </div>
                  <Field name="age" placeholder="Возраст ребёнка" />
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Опишите вашу проблему или задачу"
                    className="w-full resize-none rounded-2xl border border-border bg-background/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/80 outline-none transition-all duration-300 focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
                  />
                  <button
                    type="submit"
                    className="group mt-1 inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-b from-primary to-[hsl(12_68%_61%)] text-base font-semibold text-primary-foreground shadow-glow ring-1 ring-primary/30 transition-transform duration-300 ease-fluid hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Отправить заявку
                    <Send
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.8}
                    />
                  </button>
                  <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Lock className="h-3.5 w-3.5" strokeWidth={1.6} />
                    Ваши данные под защитой
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  placeholder,
  type = "text",
}: {
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/80 outline-none transition-all duration-300 focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
    />
  );
}
