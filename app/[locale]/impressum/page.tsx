import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { absoluteLocalizedUrl, isLocale, type Locale } from "../../lib/i18n";

export const runtime = "edge";

type LegalPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    return {};
  }

  const locale: Locale = rawLocale;
  const de = locale === "de";

  return {
    title: de ? "Impressum" : "Legal Notice",
    description: de ? "Impressum und Anbieterkennzeichnung." : "Legal notice and provider information.",
    alternates: {
      canonical: absoluteLocalizedUrl(locale, "/impressum"),
      languages: {
        de: absoluteLocalizedUrl("de", "/impressum"),
        en: absoluteLocalizedUrl("en", "/impressum"),
        "x-default": absoluteLocalizedUrl("en", "/impressum"),
      },
    },
  };
}

export default async function ImpressumPage({ params }: LegalPageProps) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale: Locale = rawLocale;
  const de = locale === "de";

  return (
    <main className="min-h-screen bg-[#f4f2ed] text-[#171717]">
      <section className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">
        <Link className="text-sm font-semibold text-[#2f6a57]" href={`/${locale}`}>
          {de ? "Zurück zum Rechner" : "Back to calculator"}
        </Link>
        <h1 className="mt-6 text-4xl font-semibold">{de ? "Impressum" : "Legal Notice"}</h1>
        {de ? <GermanLegalNotice /> : <EnglishLegalNotice />}
      </section>
    </main>
  );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-[#d8d3c9] pt-5 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-semibold text-[#2f6a57]">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

function GermanLegalNotice() {
  return (
    <div className="mt-6 space-y-5 rounded-lg border border-[#d8d3c9] bg-white p-5 text-base leading-7 text-[#4d4a44]">
      <LegalSection title="Angaben gemäß § 5 E-Commerce-Gesetz (ECG)">
        <p>Name: Georg Höfner-Harttila</p>
        <p>Anschrift: Linzer Straße 17, 4100 Ottensheim, Österreich</p>
        <p>E-Mail: investmentpropertycheck@smartseize.com</p>
        <p>UID-Nummer: ATU83316939</p>
      </LegalSection>

      <LegalSection title="Medieninhaber gemäß § 25 Mediengesetz">
        <p>Medieninhaber: Georg Höfner-Harttila</p>
        <p>Anschrift: Linzer Straße 17, 4100 Ottensheim, Österreich</p>
      </LegalSection>

      <LegalSection title="Zweck der Website">
        <p>Diese Website stellt kostenlose Online-Rechner und Informationsangebote rund um Wohnimmobilien, Immobilieninvestitionen und Immobilienfinanzierungen zur Verfügung.</p>
        <p>Die bereitgestellten Rechner unterstützen private Immobilieneigentümer, Investoren und Kaufinteressenten bei der Analyse von Wohnimmobilien, insbesondere hinsichtlich Cashflow, Mietrendite, Finanzierung und Wirtschaftlichkeit.</p>
        <p>Die Inhalte und Berechnungen dienen ausschließlich Informationszwecken. Es erfolgt keine Finanz-, Steuer-, Rechts- oder Anlageberatung.</p>
      </LegalSection>

      <LegalSection title="Haftungsausschluss">
        <p>Die auf dieser Website bereitgestellten Informationen und Berechnungen wurden mit größtmöglicher Sorgfalt erstellt. Dennoch wird keine Gewähr für die Richtigkeit, Vollständigkeit, Eignung oder Aktualität der Inhalte und Berechnungsergebnisse übernommen.</p>
        <p>Nutzer sind selbst dafür verantwortlich, sämtliche Eingaben, Annahmen und Ergebnisse vor wirtschaftlichen oder finanziellen Entscheidungen zu überprüfen.</p>
        <p>Die Inhalte dieser Website stellen insbesondere keine Finanzberatung, Steuerberatung, Rechtsberatung, Anlageberatung oder Empfehlung zum Kauf, Verkauf, Halten oder Finanzieren von Immobilien oder Finanzprodukten dar.</p>
        <p>Soweit gesetzlich zulässig, wird jegliche Haftung für Schäden ausgeschlossen, die unmittelbar oder mittelbar aus der Nutzung dieser Website oder dem Vertrauen auf die bereitgestellten Inhalte und Berechnungen entstehen.</p>
      </LegalSection>

      <LegalSection title="Urheberrecht">
        <p>Die durch den Betreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem österreichischen Urheberrecht. Jede Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Verwertung außerhalb der gesetzlichen Schranken des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen Rechteinhabers, sofern nicht gesetzlich etwas anderes vorgesehen ist.</p>
      </LegalSection>

      <LegalSection title="Datenschutz">
        <p>Technische Daten, insbesondere IP-Adressen und Verbindungsinformationen, können verarbeitet werden, soweit dies für den Betrieb, die Sicherheit und die Bereitstellung der Website erforderlich ist.</p>
        <p>
          Weitere Informationen zur Verarbeitung personenbezogener Daten finden Sie in der{" "}
          <Link className="font-semibold text-[#2f6a57]" href="/de/datenschutz">
            Datenschutzerklärung
          </Link>
          .
        </p>
      </LegalSection>
    </div>
  );
}

function EnglishLegalNotice() {
  return (
    <div className="mt-6 space-y-5 rounded-lg border border-[#d8d3c9] bg-white p-5 text-base leading-7 text-[#4d4a44]">
      <LegalSection title="Information pursuant to Section 5 of the Austrian E-Commerce Act (ECG)">
        <p>Name: Georg Höfner-Harttila</p>
        <p>Address: Linzer Straße 17, 4100 Ottensheim, Austria</p>
        <p>Email: investmentpropertycheck@smartseize.com</p>
        <p>VAT Identification Number (VAT ID): ATU83316939</p>
      </LegalSection>

      <LegalSection title="Media Owner pursuant to Section 25 of the Austrian Media Act">
        <p>Media Owner: Georg Höfner-Harttila</p>
        <p>Address: Linzer Straße 17, 4100 Ottensheim, Austria</p>
      </LegalSection>

      <LegalSection title="Purpose of the Website">
        <p>This website provides free online calculation tools and informational content relating to residential real estate, rental property analysis, cash flow calculations, rental yield calculations, and property financing.</p>
        <p>The calculators are intended to assist private property owners, investors, and prospective buyers in evaluating residential real estate investments.</p>
        <p>No financial, tax, legal, or investment advice is provided through this website.</p>
      </LegalSection>

      <LegalSection title="Disclaimer">
        <p>The calculators and information provided on this website are intended solely for general informational purposes. While reasonable efforts are made to ensure accuracy, no guarantee is given regarding the correctness, completeness, suitability, or timeliness of any calculations or information.</p>
        <p>Users are solely responsible for verifying all assumptions, inputs, and results before making financial or investment decisions.</p>
        <p>Nothing on this website constitutes financial advice, tax advice, legal advice, investment advice, or a recommendation to buy, sell, finance, or hold any property or financial product.</p>
        <p>To the extent permitted by applicable law, the operator shall not be liable for any damages resulting from the use of the website or reliance on its calculations or content.</p>
      </LegalSection>

      <LegalSection title="Copyright">
        <p>All content and works created by the operator of this website are subject to Austrian copyright law. Any reproduction, modification, distribution, or other use beyond the scope permitted by copyright law requires prior written consent unless otherwise permitted by law.</p>
      </LegalSection>

      <LegalSection title="Data Protection">
        <p>Technical data, including IP addresses and connection information, may be processed as necessary for website hosting, security, and content delivery purposes.</p>
        <p>
          Further information can be found in the{" "}
          <Link className="font-semibold text-[#2f6a57]" href="/en/datenschutz">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>
    </div>
  );
}
