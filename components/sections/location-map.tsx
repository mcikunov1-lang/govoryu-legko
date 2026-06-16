import React from "react";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";

const LAT = 45.0287;
const LNG = 38.9876;
const EMBED = `https://maps.google.com/maps?q=${LAT},${LNG}&z=15&hl=ru&output=embed`;
const OPEN = `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`;

const INFO = [
  { icon: MapPin, label: "Адрес", value: "Краснодар, парк «Краснодар» (Галицкого)" },
  { icon: Clock, label: "Время работы", value: "Пн–Сб, 09:00 – 19:00" },
  { icon: Phone, label: "Телефон", value: "+7 (900) 000-00-00" },
];

export function LocationMap() {
  return (
    <section id="location" className="relative px-5 pb-24 pt-16 sm:px-8 sm:pb-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          align="left"
          eyebrow="Как добраться"
          title="Где меня найти"
          subtitle="Занимаемся очно в уютном кабинете и онлайн. Нажмите на карту, чтобы построить маршрут."
        />

        <Reveal className="mt-14">
          <div className="overflow-hidden rounded-[2rem] ring-1 ring-white/10">
            <div className="grid lg:grid-cols-[1.6fr_1fr]">
              {/* Map */}
              <div className="relative min-h-[340px] lg:min-h-[460px]">
                <iframe
                  title="Карта — где найти логопеда"
                  src={EMBED}
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0, filter: "grayscale(0.2) contrast(1.05)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              {/* Info panel */}
              <div className="flex flex-col justify-between gap-8 bg-[hsl(20_18%_8%)] p-8 sm:p-10">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Кабинет логопеда
                  </h3>
                  <ul className="mt-7 flex flex-col gap-6">
                    {INFO.map((i) => (
                      <li key={i.label} className="flex items-start gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/12 text-primary">
                          <i.icon className="h-5 w-5" strokeWidth={1.7} />
                        </span>
                        <div>
                          <div className="text-xs uppercase tracking-wider text-muted-foreground">
                            {i.label}
                          </div>
                          <div className="mt-0.5 font-medium text-foreground">
                            {i.value}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={OPEN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2.5 rounded-2xl bg-primary text-base font-semibold text-primary-foreground shadow-glow ring-1 ring-primary/30 transition-all duration-300 ease-fluid hover:bg-[hsl(12_78%_56%)]"
                >
                  <Navigation className="h-5 w-5" strokeWidth={1.9} />
                  Открыть в Google Maps
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
