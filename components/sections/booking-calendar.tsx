"use client";

import React, { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, CalendarCheck, Clock } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";

const WEEKDAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const TIME_SLOTS = ["10:00", "11:30", "13:00", "15:00", "16:30", "18:00"];
const MONTHS = [
  "январь", "февраль", "март", "апрель", "май", "июнь",
  "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь",
];

export function BookingCalendar() {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [view, setView] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selected, setSelected] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const year = view.getFullYear();
  const month = view.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7; // Mon = 0
  const isCurrentMonth =
    year === today.getFullYear() && month === today.getMonth();

  const cells: (number | null)[] = [
    ...Array(firstWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const pick = (day: number) => {
    setSelected(new Date(year, month, day));
    setConfirmed(false);
  };

  const sameDay = (a: Date | null, day: number) =>
    !!a && a.getFullYear() === year && a.getMonth() === month && a.getDate() === day;

  return (
    <section id="booking" className="relative px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Запись онлайн"
          title="Выберите удобную дату"
          subtitle="Отметьте день и время — и я свяжусь с вами для подтверждения. Так быстрее, чем созваниваться."
        />

        <Reveal className="mt-14">
          <div className="grid gap-6 rounded-[2rem] bg-card/70 p-6 ring-1 ring-white/10 backdrop-blur-sm sm:p-8 lg:grid-cols-[1.4fr_1fr]">
            {/* Calendar */}
            <div className="lg:border-r lg:border-border/60 lg:pr-8">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold capitalize text-foreground">
                  {MONTHS[month]} {year}
                </h3>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Предыдущий месяц"
                    disabled={isCurrentMonth}
                    onClick={() => setView(new Date(year, month - 1, 1))}
                    className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-foreground ring-1 ring-border/60 transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Следующий месяц"
                    onClick={() => setView(new Date(year, month + 1, 1))}
                    className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-foreground ring-1 ring-border/60 transition-colors hover:bg-accent"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-7 gap-1 text-center">
                {WEEKDAYS.map((w) => (
                  <div
                    key={w}
                    className="pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {w}
                  </div>
                ))}
                {cells.map((day, i) => {
                  if (day === null) return <div key={`e-${i}`} />;
                  const date = new Date(year, month, day);
                  const past = date < today;
                  const active = sameDay(selected, day);
                  return (
                    <button
                      key={day}
                      type="button"
                      disabled={past}
                      onClick={() => pick(day)}
                      className={[
                        "mx-auto grid h-11 w-11 place-items-center rounded-full text-sm font-medium transition-all duration-200",
                        past
                          ? "cursor-not-allowed text-muted-foreground/30"
                          : active
                            ? "bg-primary text-primary-foreground shadow-glow"
                            : "text-foreground hover:bg-accent",
                      ].join(" ")}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time + confirm */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Clock className="h-4 w-4 text-primary" strokeWidth={1.8} />
                Время занятия
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {TIME_SLOTS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => {
                      setTime(t);
                      setConfirmed(false);
                    }}
                    className={[
                      "rounded-xl px-2 py-2.5 text-sm font-medium ring-1 transition-all duration-200",
                      time === t
                        ? "bg-primary text-primary-foreground ring-primary"
                        : "bg-secondary text-foreground ring-border/60 hover:ring-primary/50",
                    ].join(" ")}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="mt-auto pt-6">
                {confirmed ? (
                  <div className="flex items-start gap-3 rounded-2xl bg-mint/15 p-4 ring-1 ring-mint/30">
                    <CalendarCheck className="mt-0.5 h-5 w-5 shrink-0 text-mint" strokeWidth={1.8} />
                    <p className="text-sm text-foreground">
                      Вы выбрали{" "}
                      <span className="font-semibold">
                        {selected?.getDate()} {MONTHS[selected!.getMonth()]}
                      </span>{" "}
                      в <span className="font-semibold">{time}</span>. Это
                      демо-запись — в рабочей версии заявка придёт логопеду.
                    </p>
                  </div>
                ) : (
                  <button
                    type="button"
                    disabled={!selected || !time}
                    onClick={() => setConfirmed(true)}
                    className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-primary text-base font-semibold text-primary-foreground shadow-glow ring-1 ring-primary/30 transition-all duration-300 ease-fluid hover:bg-[hsl(12_78%_56%)] disabled:cursor-not-allowed disabled:bg-secondary disabled:text-muted-foreground disabled:shadow-none disabled:ring-border/60"
                  >
                    <CalendarCheck className="h-5 w-5" strokeWidth={1.8} />
                    {selected && time ? "Записаться на это время" : "Выберите дату и время"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
