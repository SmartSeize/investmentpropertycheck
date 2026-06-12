import type { ReactNode } from "react";
import { isLocale, type Locale } from "../lib/i18n";
import "../globals.css";

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
