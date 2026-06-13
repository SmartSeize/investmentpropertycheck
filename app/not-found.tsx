import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f4f2ed] text-[#171717]">
      <section className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-4 py-12 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6a57]">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Page not found</h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-[#4d4a44]">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            className="rounded-md bg-[#2f6a57] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#255646]"
            href="/en"
          >
            Open calculator
          </Link>
          <Link
            className="rounded-md border border-[#d8d3c9] bg-white px-5 py-3 text-sm font-semibold text-[#2f6a57] transition hover:border-[#2f6a57]"
            href="/de"
          >
            Zum Rechner
          </Link>
        </div>
      </section>
    </main>
  );
}
