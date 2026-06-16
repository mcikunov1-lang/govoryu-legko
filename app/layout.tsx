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

const SITE_URL = "https://govoryu-legko.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Говорю легко — логопед для детей в Краснодаре | онлайн и очно",
    template: "%s — Говорю легко",
  },
  description:
    "Логопед для детей от 3 лет: постановка звуков, развитие речи, коррекция заикания и подготовка к школе. Занятия в игре, очно и онлайн. Первый разбор речи — бесплатно.",
  applicationName: "Говорю легко",
  keywords: [
    "логопед",
    "логопед для детей",
    "логопед Краснодар",
    "постановка звуков",
    "развитие речи",
    "коррекция заикания",
    "подготовка к школе",
    "логопед онлайн",
  ],
  authors: [{ name: "Говорю легко" }],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "Говорю легко",
    title: "Говорю легко — логопед для детей",
    description:
      "Ребёнок заговорит чисто — в игре, без слёз. Постановка звуков, развитие речи, подготовка к школе. Первый разбор речи бесплатно.",
    images: [
      {
        url: "/images/hero-poster.jpg",
        width: 1280,
        height: 720,
        alt: "Логопед на занятии с детьми",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Говорю легко — логопед для детей",
    description:
      "Ребёнок заговорит чисто — в игре, без слёз. Первый разбор речи бесплатно.",
    images: ["/images/hero-poster.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#171310",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Говорю легко — логопед для детей",
  description:
    "Индивидуальные занятия с детским логопедом: постановка звуков, развитие речи, коррекция заикания, подготовка к школе. Очно и онлайн.",
  url: SITE_URL,
  image: `${SITE_URL}/images/hero-poster.jpg`,
  telephone: "+7-900-000-00-00",
  priceRange: "₽₽",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Краснодар",
    addressCountry: "RU",
    streetAddress: "парк «Краснодар» (Галицкого)",
  },
  geo: { "@type": "GeoCoordinates", latitude: 45.0287, longitude: 38.9876 },
  openingHours: "Mo-Sa 09:00-19:00",
  areaServed: "Краснодар",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
