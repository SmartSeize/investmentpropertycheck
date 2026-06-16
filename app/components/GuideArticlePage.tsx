import Link from "next/link";
import type { GuideArticle } from "../lib/guides";
import { getRelatedGuides } from "../lib/guides";

type GuideArticlePageProps = {
  article: GuideArticle;
};

export default function GuideArticlePage({ article }: GuideArticlePageProps) {
  const relatedArticles = getRelatedGuides(article);

  return (
    <main className="min-h-screen bg-[#f4f2ed] text-[#171717]">
      <article className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">
        <nav className="mb-6 flex flex-wrap gap-4 text-sm font-semibold text-[#2f6a57]">
          <Link href="/en">Calculator</Link>
          <Link href="/en/guides">Guides</Link>
        </nav>

        <header className="border-b border-[#d8d3c9] pb-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2f6a57]">Investment Property Guide</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{article.title}</h1>
          <p className="mt-4 text-lg leading-8 text-[#5f5b52]">{article.intro}</p>
        </header>

        <div className="mt-8 space-y-8 rounded-lg border border-[#d8d3c9] bg-white p-5 text-base leading-7 text-[#4d4a44]">
          {article.sections.map((section) => (
            <section key={section.title} className="border-t border-[#d8d3c9] pt-6 first:border-t-0 first:pt-0">
              <h2 className="text-2xl font-semibold text-[#2f6a57]">{section.title}</h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets ? (
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>

        {relatedArticles.length ? (
          <section className="mt-8 border-t border-[#d8d3c9] pt-6">
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  className="rounded-lg border border-[#d8d3c9] bg-white p-4 transition hover:border-[#2f6a57]"
                  href={`/en/${related.slug}`}
                >
                  <h3 className="text-base font-semibold text-[#2f6a57]">{related.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5f5b52]">{related.description}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-8 rounded-lg bg-[linear-gradient(135deg,#10211e,#132420)] p-5 text-white">
          <h2 className="text-2xl font-semibold">Run the numbers on your property</h2>
          <p className="mt-2 leading-7 text-[#d7e3dd]">
            Use the rental property calculator to compare purchase price, rent, costs, financing, yield and monthly cash flow in one place.
          </p>
          <Link className="mt-4 inline-flex rounded-md bg-[#edf5f1] px-4 py-2 text-sm font-semibold text-[#2f6a57]" href="/en">
            Open the calculator
          </Link>
        </section>
      </article>
    </main>
  );
}
