"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <a href="#hero" className={cn("flex items-center gap-2.5", className)}>
      <span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-primary to-[hsl(18_82%_72%)] shadow-glow">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 3v-3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
            fill="white"
            fillOpacity="0.95"
          />
          <circle cx="9" cy="11" r="1.15" fill="hsl(12 70% 67%)" />
          <circle cx="12.5" cy="11" r="1.15" fill="hsl(12 70% 67%)" />
          <circle cx="16" cy="11" r="1.15" fill="hsl(12 70% 67%)" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] font-bold tracking-tight",
            dark ? "text-white" : "text-foreground"
          )}
        >
          Говорю легко
        </span>
        <span
          className={cn(
            "mt-0.5 text-[11px] font-medium",
            dark ? "text-white/60" : "text-muted-foreground"
          )}
        >
          логопед для детей
        </span>
      </span>
    </a>
  );
}

const NAV_LINKS = [
  { label: "Обо мне", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Как проходят занятия", href: "#process" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:pt-4">
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-[1.4rem] px-4 py-2.5 transition-all duration-500 ease-fluid sm:px-5",
          scrolled
            ? "bg-card/80 shadow-soft ring-1 ring-border/70 backdrop-blur-xl"
            : "bg-card/40 ring-1 ring-white/10 backdrop-blur-md"
        )}
      >
        <BrandMark />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/70 transition-colors duration-300 hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden h-11 items-center whitespace-nowrap rounded-full bg-gradient-to-b from-primary to-[hsl(12_68%_56%)] px-6 text-sm font-semibold text-primary-foreground shadow-glow ring-1 ring-primary/30 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97] sm:inline-flex"
          >
            Записаться бесплатно
          </a>

          <button
            type="button"
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="relative grid h-11 w-11 place-items-center rounded-full bg-secondary text-foreground ring-1 ring-border/60 lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-fluid",
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1/2 block h-[2px] w-5 -translate-y-1/2 rounded-full bg-current transition-all duration-300",
                  open ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ease-fluid",
                  open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-background/85 px-6 pb-10 pt-28 backdrop-blur-2xl transition-all duration-500 ease-fluid lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "border-b border-border/60 py-4 font-display text-2xl font-semibold text-foreground transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              )}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className={cn(
            "mt-8 inline-flex h-14 items-center justify-center rounded-2xl bg-gradient-to-b from-primary to-[hsl(12_68%_56%)] text-base font-semibold text-primary-foreground shadow-glow transition-all duration-500",
            open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
          style={{ transitionDelay: open ? "560ms" : "0ms" }}
        >
          Записаться на бесплатную диагностику
        </a>
      </div>
    </header>
  );
}
