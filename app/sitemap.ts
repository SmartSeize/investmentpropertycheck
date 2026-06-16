import type { MetadataRoute } from "next";
import { allGuideArticles, getGuideArticleById, guideIndexPath } from "./lib/guides";
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

  const guideIndexPages = locales.map((locale) => ({
    url: absoluteLocalizedUrl(locale, guideIndexPath(locale)),
    lastModified: new Date(),
    alternates: {
      languages: {
        de: absoluteLocalizedUrl("de", guideIndexPath("de")),
        en: absoluteLocalizedUrl("en", guideIndexPath("en")),
        "x-default": absoluteLocalizedUrl("en", guideIndexPath("en")),
      },
    },
  }));

  const guidePages = allGuideArticles.map((article) => {
    const deArticle = getGuideArticleById("de", article.id);
    const enArticle = getGuideArticleById("en", article.id);

    return {
      url: absoluteLocalizedUrl(article.locale, `/${article.slug}`),
      lastModified: new Date(),
      alternates: {
        languages: {
          ...(deArticle ? { de: absoluteLocalizedUrl("de", `/${deArticle.slug}`) } : {}),
          ...(enArticle ? { en: absoluteLocalizedUrl("en", `/${enArticle.slug}`) } : {}),
          ...(enArticle ? { "x-default": absoluteLocalizedUrl("en", `/${enArticle.slug}`) } : {}),
        },
      },
    };
  });

  return [...calculatorPages, ...legalPages, ...guideIndexPages, ...guidePages];
}
