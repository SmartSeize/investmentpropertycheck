import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuideArticlePage from "../../components/GuideArticlePage";
import { allGuideArticles, getGuideArticle, getGuideArticleById, guideAlternatesById } from "../../lib/guides";
import { absoluteLocalizedUrl, isLocale } from "../../lib/i18n";

type GuidePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return allGuideArticles.map((article) => ({
    locale: article.locale,
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;

  if (!isLocale(rawLocale)) {
    return {};
  }

  const article = getGuideArticle(rawLocale, slug);

  if (!article) {
    return {};
  }

  const alternates = guideAlternatesById(article.id);
  const deArticle = getGuideArticleById("de", article.id);
  const enArticle = getGuideArticleById("en", article.id);

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: absoluteLocalizedUrl(article.locale, `/${article.slug}`),
      languages: {
        ...(alternates.de ? { de: absoluteLocalizedUrl("de", `/${deArticle?.slug}`) } : {}),
        ...(alternates.en ? { en: absoluteLocalizedUrl("en", `/${enArticle?.slug}`) } : {}),
        ...(enArticle ? { "x-default": absoluteLocalizedUrl("en", `/${enArticle.slug}`) } : {}),
      },
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { locale: rawLocale, slug } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const article = getGuideArticle(rawLocale, slug);

  if (!article) {
    notFound();
  }

  return <GuideArticlePage article={article} />;
}
