import React from "react";
import { cn } from "@/lib/utils";

/* Organic pastel blob shapes scattered across the page — purely decorative. */
const BLOB_PATHS = [
  "M44.7,-58.9C56.8,-50.3,65.1,-36.4,69.4,-21.2C73.7,-6,73.9,10.6,68,24.6C62.1,38.6,50.1,50,36.3,58.2C22.5,66.4,6.9,71.4,-9.5,71.9C-25.9,72.4,-43.1,68.4,-55.3,58C-67.5,47.6,-74.7,30.8,-76.6,13.5C-78.5,-3.8,-75.1,-21.6,-66.2,-35.6C-57.3,-49.6,-42.9,-59.8,-28.2,-67.5C-13.5,-75.2,1.5,-80.4,15.8,-77.4C30.1,-74.4,43.7,-63.2,44.7,-58.9Z",
  "M39.3,-51.6C50.9,-43.2,60.1,-31.3,64.7,-17.4C69.3,-3.5,69.3,12.4,63.4,25.6C57.5,38.8,45.7,49.3,32.3,56.5C18.9,63.7,3.9,67.6,-11.3,66.7C-26.5,65.8,-41.9,60.1,-53.3,49.4C-64.7,38.7,-72.1,23,-73.5,6.7C-74.9,-9.6,-70.3,-26.5,-60.3,-39.1C-50.3,-51.7,-34.9,-60,-19.7,-65.3C-4.5,-70.6,10.5,-72.9,23.7,-68.2C36.9,-63.5,48.3,-51.8,39.3,-51.6Z",
  "M50.9,-62.5C64.5,-53.6,73.1,-36.8,75.8,-19.3C78.5,-1.8,75.3,16.4,66.9,31.4C58.5,46.4,44.9,58.2,29.4,64.6C13.9,71,-3.5,72,-20.6,68C-37.7,64,-54.5,55,-64.3,41.1C-74.1,27.2,-76.9,8.4,-73.2,-8.7C-69.5,-25.8,-59.3,-41.2,-45.8,-50.3C-32.3,-59.4,-15.5,-62.2,1.7,-64.3C18.9,-66.4,37.3,-71.4,50.9,-62.5Z",
];

type BlobColor = "coral" | "blush" | "mint" | "sun" | "sky" | "peach";

const COLOR_MAP: Record<BlobColor, string> = {
  coral: "hsl(12 75% 78%)",
  blush: "hsl(350 75% 86%)",
  mint: "hsl(150 45% 75%)",
  sun: "hsl(42 90% 78%)",
  sky: "hsl(205 65% 80%)",
  peach: "hsl(26 85% 84%)",
};

export function Blob({
  color = "coral",
  className,
  variant = 0,
  opacity = 0.5,
  float = true,
}: {
  color?: BlobColor;
  className?: string;
  variant?: 0 | 1 | 2;
  opacity?: number;
  float?: boolean;
}) {
  return (
    <svg
      viewBox="-90 -90 180 180"
      className={cn(
        "pointer-events-none absolute select-none",
        float && "animate-float",
        className
      )}
      style={{ opacity }}
      aria-hidden="true"
    >
      <path d={BLOB_PATHS[variant]} fill={COLOR_MAP[color]} />
    </svg>
  );
}

/* Dotted grid texture block. */
export function Dots({
  className,
  color = "hsl(12 60% 75%)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      className={cn("pointer-events-none absolute", className)}
      aria-hidden="true"
      style={{
        backgroundImage: `radial-gradient(${color} 1.6px, transparent 1.6px)`,
        backgroundSize: "16px 16px",
      }}
    />
  );
}

/* Small sprout glyph used as an eyebrow above section titles. */
export function Sprout({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn("h-6 w-6", className)}
      aria-hidden="true"
    >
      <path
        d="M12 21c0-4-1.5-7-5-8.5C5 11.8 4 9.5 4 7c3.5 0 6 1.8 7 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 21c0-4 1.5-7 5-8.5C19 11.8 20 9.5 20 7c-3.5 0-6 1.8-7 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 21v-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
