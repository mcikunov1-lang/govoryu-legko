import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-sans",
});

const display = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Говорю легко — логопед для детей",
  description:
    "Индивидуальные занятия с логопедом для детей от 3 лет. Помогаю детям говорить уверенно и с удовольствием. Первая консультация — бесплатно.",
  keywords: [
    "логопед",
    "логопед для детей",
    "постановка звуков",
    "развитие речи",
    "коррекция заикания",
    "подготовка к школе",
  ],
  openGraph: {
    title: "Говорю легко — логопед для детей",
    description:
      "Индивидуальные занятия с логопедом для детей от 3 лет. Первая консультация — бесплатно.",
    type: "website",
    locale: "ru_RU",
  },
};

export const viewport: Viewport = {
  themeColor: "#171310",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
