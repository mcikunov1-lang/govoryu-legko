import React from "react";

/* Faint dotted grid behind the hero portrait — the only decoration. */
export function HeroDecor() {
  return (
    <span
      className="pointer-events-none absolute right-2 top-6 hidden h-20 w-24 opacity-40 sm:block"
      aria-hidden="true"
      style={{
        backgroundImage:
          "radial-gradient(hsl(var(--primary) / 0.4) 1.4px, transparent 1.4px)",
        backgroundSize: "13px 13px",
      }}
    />
  );
}
