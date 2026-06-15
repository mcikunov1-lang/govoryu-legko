import React from "react";
import { Instagram, Send } from "lucide-react";
import { BrandMark } from "@/components/sections/header";

function VkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13.1 17.2c-5.1 0-8-3.5-8.2-9.3h2.6c.1 4.3 2 6.1 3.5 6.5V7.9h2.4v3.7c1.5-.2 3-1.8 3.6-3.7h2.4c-.4 2.4-2 4-3.1 4.6 1.1.5 3 1.9 3.7 4.7h-2.7c-.5-1.7-1.9-3-3.9-3.2v3.2h-.3Z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "ВКонтакте", Icon: VkIcon },
  { label: "Instagram", Icon: Instagram },
  { label: "Telegram", Icon: Send },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-12 sm:flex-row sm:justify-between">
        <BrandMark />

        <div className="flex items-center gap-3">
          {SOCIALS.map(({ label, Icon }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-foreground/70 ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
            >
              <Icon className="h-5 w-5" />
            </button>
          ))}
        </div>

        <div className="text-center text-xs leading-relaxed text-muted-foreground sm:text-right">
          © 2026 «Говорю легко». Все права защищены.
          <br />
          <button
            type="button"
            className="underline-offset-2 transition-colors hover:text-foreground hover:underline"
          >
            Политика конфиденциальности
          </button>
        </div>
      </div>
    </footer>
  );
}
