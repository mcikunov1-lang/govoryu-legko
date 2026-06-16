import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Stagger, StaggerItem } from "@/components/motion";

type Tile = { src: string; alt: string; span: string };

const TILES: Tile[] = [
  {
    src: "/images/hero-logoped.jpg",
    alt: "Логопед занимается с мальчиком",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Радостный ребёнок на занятии",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Уверенный малыш",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/lesson-process.jpg",
    alt: "Отработка артикуляции",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Счастливые дети",
    span: "col-span-2 row-span-1",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Совместное чтение",
    span: "col-span-2 row-span-1",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="surface-alt relative px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          align="left"
          eyebrow="Атмосфера"
          title="Моменты с занятий"
          subtitle="Тепло, игра и доверие — так выглядит работа, в которой ребёнок раскрывается и начинает говорить."
        />

        <Stagger
          className="mt-14 grid auto-rows-[120px] grid-cols-4 gap-3 sm:auto-rows-[150px] sm:gap-4"
          gap={0.08}
        >
          {TILES.map((t) => (
            <StaggerItem key={t.src} className={t.span}>
              <div className="group relative h-full w-full overflow-hidden rounded-[1.4rem] ring-1 ring-white/10">
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 600px"
                  className="object-cover transition-transform duration-700 ease-fluid group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
