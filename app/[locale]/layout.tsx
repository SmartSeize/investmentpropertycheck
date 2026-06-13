import type { Metadata } from "next";
import type { ReactNode } from "react";
import { isLocale, type Locale } from "../lib/i18n";
import "../globals.css";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "en";

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
