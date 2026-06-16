import type { MetadataRoute } from "next";
import { guideArticles } from "./lib/guides";
import { absoluteLocalizedUrl, absoluteLocaleUrl, alternateLanguages, locales } from "./lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const calculatorPages = locales.map((locale) => ({
    url: absoluteLocaleUrl(locale),
    lastModified: new Date(),
    alternates: {
      languages: alternateLanguages(),
    },
  }));

  const legalPages = ["/impressum", "/datenschutz"].flatMap((path) =>
    locales.map((locale) => ({
      url: absoluteLocalizedUrl(locale, path),
      lastModified: new Date(),
      alternates: {
        languages: {
          de: absoluteLocalizedUrl("de", path),
          en: absoluteLocalizedUrl("en", path),
          "x-default": absoluteLocalizedUrl("en", path),
        },
      },
    })),
  );

  const guidePages = ["/guides", ...guideArticles.map((article) => `/${article.slug}`)].map((path) => ({
    url: absoluteLocalizedUrl("en", path),
    lastModified: new Date(),
    alternates: {
      languages: {
        en: absoluteLocalizedUrl("en", path),
        "x-default": absoluteLocalizedUrl("en", path),
      },
    },
  }));

  return [...calculatorPages, ...legalPages, ...guidePages];
}
