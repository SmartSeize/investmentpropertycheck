import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7f5ef_0%,#f1eee6_100%)] text-[#171717]">
      <section className="mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-4 py-3 sm:px-6 lg:px-8">
        <header className="mb-3 flex items-end justify-between border-b border-[#d8d3c9] pb-3">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2f6a57]">404</p>
            <h1 className="text-4xl font-semibold sm:text-5xl">Page not found</h1>
          </div>
        </header>

        <div className="grid flex-1 place-items-center py-10">
          <section className="w-full max-w-3xl rounded-lg border border-[#d8d3c9] bg-white p-5 shadow-sm sm:p-8">
            <p className="max-w-2xl text-lg leading-8 text-[#4d4a44]">
              The page you are looking for does not exist or has moved.
            </p>

            <div className="mt-8 grid gap-3 sm:flex">
              <Link
                className="inline-flex h-11 items-center justify-center rounded-md bg-[#2f6a57] px-5 text-sm font-semibold text-white transition hover:bg-[#255646]"
                href="/en"
              >
                Open calculator
              </Link>
              <Link
                className="inline-flex h-11 items-center justify-center rounded-md border border-[#c8c0b3] bg-[#fbfaf7] px-5 text-sm font-semibold text-[#4d4a44] transition hover:border-[#2f6a57] hover:text-[#2f6a57]"
                href="/de"
              >
                Zum Rechner
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
