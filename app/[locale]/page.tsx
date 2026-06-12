import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Calculator from "../components/Calculator";
import {
  absoluteLocaleUrl,
  alternateLanguages,
  isLocale,
  localeMetadata,
  locales,
  type Locale,
} from "../lib/i18n";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    return {};
  }

  const locale: Locale = rawLocale;

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
    title: localeMetadata[locale].title,
    description: localeMetadata[locale].description,
    alternates: {
      canonical: absoluteLocaleUrl(locale),
      languages: alternateLanguages(),
    },
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  return <Calculator locale={rawLocale} />;
}
