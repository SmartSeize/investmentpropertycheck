import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuideArticlePage from "../../components/GuideArticlePage";
import { getGuideArticle, guideArticles } from "../../lib/guides";
import { absoluteLocalizedUrl, isLocale } from "../../lib/i18n";

type GuidePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return guideArticles.map((article) => ({
    locale: "en",
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;

  if (rawLocale !== "en") {
    return {};
  }

  const article = getGuideArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: absoluteLocalizedUrl("en", `/${article.slug}`),
      languages: {
        en: absoluteLocalizedUrl("en", `/${article.slug}`),
        "x-default": absoluteLocalizedUrl("en", `/${article.slug}`),
      },
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { locale: rawLocale, slug } = await params;

  if (!isLocale(rawLocale) || rawLocale !== "en") {
    notFound();
  }

  const article = getGuideArticle(slug);

  if (!article) {
    notFound();
  }

  return <GuideArticlePage article={article} />;
}
