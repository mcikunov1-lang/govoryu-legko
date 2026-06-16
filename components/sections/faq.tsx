"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";

const FAQ = [
  {
    q: "С какого возраста можно начинать занятия?",
    a: "Чаще всего с 3 лет, но иногда полезна и более ранняя консультация. На первой встрече я подскажу оптимальное время именно для вашего ребёнка.",
  },
  {
    q: "Сколько длится одно занятие?",
    a: "Обычно 30–45 минут — в зависимости от возраста и задач. Малышам делаю занятия короче и динамичнее, чтобы сохранить интерес и внимание.",
  },
  {
    q: "Как быстро будет результат?",
    a: "Первые изменения родители часто замечают уже через 3–4 недели. Точные сроки зависят от речевой задачи, регулярности занятий и поддержки дома.",
  },
  {
    q: "Вы занимаетесь онлайн?",
    a: "Да, онлайн-занятия проходят так же эффективно, как очные. Нужны только устройство с камерой и спокойное место — всё остальное я подготовлю сама.",
  },
  {
    q: "Что взять на первую встречу?",
    a: "Ничего особенного — только хорошее настроение ребёнка. Все игры, карточки и материалы для занятия я приношу с собой.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-[1.6rem] border border-border/60 bg-card/60 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
      >
        <span className="font-display text-lg font-semibold text-foreground">
          {q}
        </span>
        <span
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/12 text-primary transition-transform duration-300 ease-fluid ${
            open ? "rotate-45" : ""
          }`}
        >
          <Plus className="h-5 w-5" strokeWidth={2} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 leading-relaxed text-muted-foreground">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="relative px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Вопросы и ответы"
          title="Частые вопросы"
          subtitle="Собрала то, что чаще всего спрашивают родители перед началом занятий."
        />
        <div className="mt-14 flex flex-col gap-4">
          {FAQ.map((item, i) => (
            <Reveal key={item.q} delay={i * 70}>
              <FaqItem q={item.q} a={item.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
