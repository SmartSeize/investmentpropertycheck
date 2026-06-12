import type { Metadata } from "next";

export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://investmentpropertycheck.com";

export const localeMetadata: Record<Locale, Pick<Metadata, "title" | "description">> = {
  de: {
    title: "Cashflow-, Rendite- und Finanzierungsrechner für Wohnimmobilien",
    description: "Berechne Cashflow, Mietrendite, Eigenkapitalrendite und Finanzierung deiner Immobilie.",
  },
  en: {
    title: "Rental Property Cash Flow, Yield & Mortgage Calculator",
    description: "Calculate rental cash flow, yield, equity return and financing for investment properties.",
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale) {
  return `/${locale}`;
}

export function localizedPath(locale: Locale, path = "") {
  return `${localePath(locale)}${path}`;
}

export function absoluteLocaleUrl(locale: Locale) {
  return absoluteLocalizedUrl(locale);
}

export function absoluteLocalizedUrl(locale: Locale, path = "") {
  return new URL(localizedPath(locale, path), siteUrl).toString();
}

export function alternateLanguages() {
  return {
    de: absoluteLocaleUrl("de"),
    en: absoluteLocaleUrl("en"),
    "x-default": absoluteLocaleUrl(defaultLocale),
  };
}
