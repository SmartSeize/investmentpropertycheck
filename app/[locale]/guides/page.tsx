import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guideArticles, guideIndexDescription, guideIndexTitle } from "../../lib/guides";
import { absoluteLocalizedUrl, isLocale } from "../../lib/i18n";

type GuidesPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: "en" }];
}

export async function generateMetadata({ params }: GuidesPageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;

  if (rawLocale !== "en") {
    return {};
  }

  return {
    title: guideIndexTitle,
    description: guideIndexDescription,
    alternates: {
      canonical: absoluteLocalizedUrl("en", "/guides"),
      languages: {
        en: absoluteLocalizedUrl("en", "/guides"),
        "x-default": absoluteLocalizedUrl("en", "/guides"),
      },
    },
  };
}

export default async function GuidesPage({ params }: GuidesPageProps) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale) || rawLocale !== "en") {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f4f2ed] text-[#171717]">
      <section className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6">
        <nav className="mb-6 flex flex-wrap gap-4 text-sm font-semibold text-[#2f6a57]">
          <Link href="/en">Calculator</Link>
          <Link href="/en/guides">Guides</Link>
        </nav>

        <header className="border-b border-[#d8d3c9] pb-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2f6a57]">Guides</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{guideIndexTitle}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#5f5b52]">{guideIndexDescription}</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#5f5b52]">
            Start with the full investment property analysis guide, then use the rental yield, cash flow, cap rate and ROI articles to check specific parts of a deal. When you are ready to test your own numbers, open the{" "}
            <Link className="font-semibold text-[#2f6a57]" href="/en">
              rental property calculator
            </Link>
            .
          </p>
        </header>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {guideArticles.map((article) => (
            <Link
              key={article.slug}
              className="rounded-lg border border-[#d8d3c9] bg-white p-5 transition hover:border-[#2f6a57]"
              href={`/en/${article.slug}`}
            >
              <h2 className="text-xl font-semibold text-[#2f6a57]">{article.title}</h2>
              <p className="mt-3 text-base leading-7 text-[#5f5b52]">{article.description}</p>
            </Link>
          ))}
        </div>

        <section className="mt-8 rounded-lg bg-[linear-gradient(135deg,#10211e,#132420)] p-5 text-white">
          <h2 className="text-2xl font-semibold">Analyze a rental property</h2>
          <p className="mt-2 leading-7 text-[#d7e3dd]">
            Use the calculator to turn these concepts into property-specific cash flow, rental yield and financing numbers.
          </p>
          <Link className="mt-4 inline-flex rounded-md bg-[#edf5f1] px-4 py-2 text-sm font-semibold text-[#2f6a57]" href="/en">
            Open the calculator
          </Link>
        </section>
      </section>
    </main>
  );
}
