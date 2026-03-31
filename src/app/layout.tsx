import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Angielski — liceum, matura, Legal English | Korepetycje",
  description:
    "Lekcje angielskiego dla licealistów i maturzystów. Angielski prawniczy (Legal English) — korepetytor po studiach prawniczych. Zajęcia online i stacjonarnie.",
  icons: {
    icon: (process.env.PAGES_BASE_PATH || "") + "/favicon.svg",
  },
  openGraph: {
    title: "Angielski — liceum, matura, Legal English",
    description:
      "Indywidualne lekcje angielskiego dla uczniów szkół średnich oraz kursy angielskiego prawniczego. Doświadczenie i wykształcenie prawnicze.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={sourceSans.className}>{children}</body>
    </html>
  );
}
