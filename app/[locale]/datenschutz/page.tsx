import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { absoluteLocalizedUrl, isLocale, locales, type Locale } from "../../lib/i18n";

type PrivacyPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    return {};
  }

  const locale: Locale = rawLocale;
  const de = locale === "de";

  return {
    title: de ? "Datenschutzerklärung" : "Privacy Policy",
    description: de ? "Informationen zur Verarbeitung personenbezogener Daten." : "Information about the processing of personal data.",
    alternates: {
      canonical: absoluteLocalizedUrl(locale, "/datenschutz"),
      languages: {
        de: absoluteLocalizedUrl("de", "/datenschutz"),
        en: absoluteLocalizedUrl("en", "/datenschutz"),
        "x-default": absoluteLocalizedUrl("en", "/datenschutz"),
      },
    },
  };
}

export default async function DatenschutzPage({ params }: PrivacyPageProps) {
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
        <h1 className="mt-6 text-4xl font-semibold">{de ? "Datenschutzerklärung" : "Privacy Policy"}</h1>
        {de ? <GermanPrivacyPolicy /> : <EnglishPrivacyPolicy />}
      </section>
    </main>
  );
}

function PrivacySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-[#d8d3c9] pt-5 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-semibold text-[#2f6a57]">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

function PrivacyList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function GermanPrivacyPolicy() {
  return (
    <div className="mt-6 space-y-5 rounded-lg border border-[#d8d3c9] bg-white p-5 text-base leading-7 text-[#4d4a44]">
      <p className="font-semibold">Stand: Juni 2026</p>
      <p>Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung informiert darüber, welche personenbezogenen Daten beim Besuch dieser Website verarbeitet werden und zu welchen Zwecken dies erfolgt.</p>

      <PrivacySection title="1. Verantwortlicher">
        <p>Georg Höfner-Harttila</p>
        <p>Linzer Straße 17</p>
        <p>4100 Ottensheim</p>
        <p>Österreich</p>
        <p>E-Mail: investmentpropertycheck@smartseize.com</p>
      </PrivacySection>

      <PrivacySection title="2. Hosting und Bereitstellung der Website">
        <p>Diese Website wird über die Infrastruktur von Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA, bereitgestellt.</p>
        <p>Cloudflare verarbeitet technische Verbindungsdaten wie IP-Adressen, Browserinformationen, Anfragedaten und sicherheitsrelevante Informationen, um die Website auszuliefern, ihre Sicherheit zu gewährleisten und Angriffe abzuwehren.</p>
        <p>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und effizienten Betrieb der Website).</p>
        <p>Cloudflare nimmt am EU-U.S. Data Privacy Framework teil und setzt zusätzliche geeignete Garantien für internationale Datenübermittlungen ein.</p>
        <p>Weitere Informationen finden Sie in der Datenschutzerklärung von Cloudflare.</p>
      </PrivacySection>

      <PrivacySection title="3. Server-Logfiles">
        <p>Beim Besuch dieser Website können automatisch technische Informationen erfasst werden, insbesondere:</p>
        <PrivacyList items={["IP-Adresse", "Browsertyp und Browserversion", "Betriebssystem", "Referrer-URL", "Datum und Uhrzeit des Zugriffs", "aufgerufene Seiten und Dateien"]} />
        <p>Diese Daten werden ausschließlich zur Gewährleistung des technischen Betriebs, der Systemsicherheit sowie zur Fehleranalyse verarbeitet.</p>
        <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
      </PrivacySection>

      <PrivacySection title="4. Kontaktaufnahme per E-Mail">
        <p>Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen übermittelten Daten (insbesondere E-Mail-Adresse, Name und Inhalt der Nachricht), um Ihre Anfrage zu bearbeiten.</p>
        <p>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO sowie Art. 6 Abs. 1 lit. f DSGVO.</p>
      </PrivacySection>

      <PrivacySection title="5. Cookies und lokale Speicherung">
        <p>Diese Website verwendet keine Werbe-, Marketing- oder Tracking-Cookies.</p>
        <p>Soweit technisch erforderlich, können Funktionen des Browsers wie localStorage oder sessionStorage verwendet werden, um Einstellungen oder Eingaben während der Nutzung der Website zu speichern.</p>
        <p>Diese Daten verbleiben ausschließlich auf Ihrem Endgerät und werden nicht an uns übermittelt.</p>
      </PrivacySection>

      <PrivacySection title="6. Cloudflare Web Analytics">
        <p>Diese Website verwendet Cloudflare Web Analytics, einen datenschutzorientierten Webanalysedienst der Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA.</p>
        <p>Cloudflare Web Analytics unterstützt uns dabei zu verstehen, wie Besucher diese Website nutzen. Hierzu werden aggregierte statistische Informationen wie Seitenaufrufe, verweisende Websites, Browsertypen, Betriebssysteme und allgemeine Nutzungsmuster erfasst.</p>
        <p>Nach Angaben von Cloudflare werden dabei keine Cookies eingesetzt und Nutzer nicht über verschiedene Websites hinweg verfolgt. Der Dienst ist darauf ausgelegt, aggregierte Nutzungsstatistiken bereitzustellen, ohne individuelle Nutzerprofile zu erstellen.</p>
        <p>Für die Bereitstellung der Analyse kann Cloudflare technische Informationen wie IP-Adressen und Anfragemetadaten verarbeiten. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Analyse sowie der Verbesserung von Leistung, Benutzerfreundlichkeit und Sicherheit der Website).</p>
        <p>Die Datenverarbeitung kann auf der Infrastruktur von Cloudflare erfolgen, einschließlich in den Vereinigten Staaten. Cloudflare nimmt am EU-U.S. Data Privacy Framework teil und verwendet zusätzliche geeignete Garantien, insbesondere die EU-Standardvertragsklauseln (SCCs).</p>
        <p>
          Weitere Informationen finden Sie in der{" "}
          <a className="font-semibold text-[#2f6a57]" href="https://www.cloudflare.com/privacypolicy/" rel="noreferrer" target="_blank">
            Datenschutzerklärung von Cloudflare
          </a>
          {" "}sowie in der{" "}
          <a className="font-semibold text-[#2f6a57]" href="https://developers.cloudflare.com/web-analytics/" rel="noreferrer" target="_blank">
            Dokumentation zu Cloudflare Web Analytics
          </a>
          .
        </p>
      </PrivacySection>

      <PrivacySection title="7. Ihre Rechte">
        <p>Sie haben nach der DSGVO insbesondere folgende Rechte:</p>
        <PrivacyList items={["Recht auf Auskunft (Art. 15 DSGVO)", "Recht auf Berichtigung (Art. 16 DSGVO)", "Recht auf Löschung (Art. 17 DSGVO)", "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)", "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)", "Recht auf Widerspruch (Art. 21 DSGVO)"]} />
        <p>Zur Ausübung Ihrer Rechte können Sie uns jederzeit kontaktieren.</p>
        <p>Darüber hinaus haben Sie das Recht, Beschwerde bei der zuständigen Aufsichtsbehörde einzulegen:</p>
        <p>Österreichische Datenschutzbehörde</p>
        <p>Barichgasse 40-42</p>
        <p>1030 Wien</p>
        <p>Österreich</p>
        <p>
          Website:{" "}
          <a className="font-semibold text-[#2f6a57]" href="https://www.dsb.gv.at" rel="noreferrer" target="_blank">
            www.dsb.gv.at
          </a>
        </p>
      </PrivacySection>

      <PrivacySection title="8. Speicherdauer">
        <p>Personenbezogene Daten werden nur so lange gespeichert, wie dies zur Erfüllung der jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.</p>
      </PrivacySection>

      <PrivacySection title="9. Datensicherheit">
        <p>Diese Website wird ausschließlich über verschlüsselte HTTPS-Verbindungen bereitgestellt.</p>
        <p>Es werden angemessene technische und organisatorische Maßnahmen getroffen, um personenbezogene Daten vor Verlust, Missbrauch oder unbefugtem Zugriff zu schützen.</p>
      </PrivacySection>

      <PrivacySection title="10. Automatisierte Entscheidungen">
        <p>Eine automatisierte Entscheidungsfindung oder Profiling im Sinne von Art. 22 DSGVO findet nicht statt.</p>
      </PrivacySection>

      <PrivacySection title="11. Änderungen dieser Datenschutzerklärung">
        <p>Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um rechtliche, technische oder organisatorische Änderungen zu berücksichtigen.</p>
        <p>Es gilt jeweils die auf dieser Website veröffentlichte aktuelle Fassung.</p>
      </PrivacySection>
    </div>
  );
}

function EnglishPrivacyPolicy() {
  return (
    <div className="mt-6 space-y-5 rounded-lg border border-[#d8d3c9] bg-white p-5 text-base leading-7 text-[#4d4a44]">
      <p className="font-semibold">Last updated: June 2026</p>
      <p>Protecting your personal data is important to us. This Privacy Policy explains what personal data may be processed when you visit this website and for what purposes.</p>

      <PrivacySection title="1. Data Controller">
        <p>Georg Höfner-Harttila</p>
        <p>Linzer Straße 17</p>
        <p>4100 Ottensheim</p>
        <p>Austria</p>
        <p>Email: investmentpropertycheck@smartseize.com</p>
      </PrivacySection>

      <PrivacySection title="2. Hosting and Website Delivery">
        <p>This website is delivered through the infrastructure of Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA.</p>
        <p>Cloudflare processes technical connection data such as IP addresses, browser information, request metadata and security-related information to provide website delivery, security and protection against malicious traffic.</p>
        <p>The legal basis for this processing is Art. 6(1)(f) GDPR (legitimate interest in the secure and efficient operation of the website).</p>
        <p>Cloudflare participates in the EU-U.S. Data Privacy Framework and provides additional safeguards for international data transfers where required.</p>
        <p>Further information is available in Cloudflare's Privacy Policy.</p>
      </PrivacySection>

      <PrivacySection title="3. Server Log Files">
        <p>When you visit this website, technical information may be automatically collected, including:</p>
        <PrivacyList items={["IP address", "browser type and version", "operating system", "referring URL", "date and time of access", "requested pages and files"]} />
        <p>These data are processed solely for technical operation, security and troubleshooting purposes.</p>
        <p>The legal basis is Art. 6(1)(f) GDPR.</p>
      </PrivacySection>

      <PrivacySection title="4. Contact by Email">
        <p>If you contact us by email, we process the information you provide, including your email address, name and message content, in order to handle your inquiry.</p>
        <p>The legal basis is Art. 6(1)(b) GDPR and Art. 6(1)(f) GDPR.</p>
      </PrivacySection>

      <PrivacySection title="5. Cookies and Browser Storage">
        <p>This website does not use advertising, marketing or tracking cookies.</p>
        <p>Where technically necessary, browser storage technologies such as localStorage or sessionStorage may be used to store settings or preferences during your use of the website.</p>
        <p>Any such data remains on your device and is not transmitted to us.</p>
      </PrivacySection>

      <PrivacySection title="6. Cloudflare Web Analytics">
        <p>This website uses Cloudflare Web Analytics, a privacy-oriented web analytics service provided by Cloudflare, Inc., 101 Townsend St., San Francisco, CA 94107, USA.</p>
        <p>Cloudflare Web Analytics helps us understand how visitors use this website. For this purpose, aggregated statistical information such as page views, referring websites, browser types, operating systems and general usage patterns is collected.</p>
        <p>According to Cloudflare, no cookies are used and users are not tracked across different websites. The service is designed to provide aggregated usage statistics without creating individual user profiles.</p>
        <p>To provide the analytics service, Cloudflare may process technical information such as IP addresses and request metadata. The processing is based on Art. 6(1)(f) GDPR (legitimate interest in analyzing and improving the performance, usability and security of the website).</p>
        <p>Data processing may take place on Cloudflare's infrastructure, including in the United States. Cloudflare participates in the EU-U.S. Data Privacy Framework and uses additional appropriate safeguards, in particular the EU Standard Contractual Clauses (SCCs).</p>
        <p>
          Further information can be found in{" "}
          <a className="font-semibold text-[#2f6a57]" href="https://www.cloudflare.com/privacypolicy/" rel="noreferrer" target="_blank">
            Cloudflare&apos;s Privacy Policy
          </a>
          {" "}and the{" "}
          <a className="font-semibold text-[#2f6a57]" href="https://developers.cloudflare.com/web-analytics/" rel="noreferrer" target="_blank">
            Cloudflare Web Analytics documentation
          </a>
          .
        </p>
      </PrivacySection>

      <PrivacySection title="7. Your Rights">
        <p>Under the GDPR, you have the following rights:</p>
        <PrivacyList items={["right of access (Art. 15 GDPR)", "right to rectification (Art. 16 GDPR)", "right to erasure (Art. 17 GDPR)", "right to restriction of processing (Art. 18 GDPR)", "right to data portability (Art. 20 GDPR)", "right to object (Art. 21 GDPR)"]} />
        <p>To exercise your rights, please contact us using the details above.</p>
        <p>You also have the right to lodge a complaint with the competent supervisory authority:</p>
        <p>Austrian Data Protection Authority</p>
        <p>Barichgasse 40-42</p>
        <p>1030 Vienna</p>
        <p>Austria</p>
        <p>
          Website:{" "}
          <a className="font-semibold text-[#2f6a57]" href="https://www.dsb.gv.at" rel="noreferrer" target="_blank">
            www.dsb.gv.at
          </a>
        </p>
      </PrivacySection>

      <PrivacySection title="8. Data Retention">
        <p>Personal data is retained only for as long as necessary for the purposes described in this Privacy Policy or as required by applicable law.</p>
      </PrivacySection>

      <PrivacySection title="9. Security">
        <p>This website is served exclusively via encrypted HTTPS connections.</p>
        <p>Appropriate technical and organizational measures are implemented to protect personal data against unauthorized access, loss or misuse.</p>
      </PrivacySection>

      <PrivacySection title="10. Automated Decision-Making">
        <p>No automated decision-making or profiling within the meaning of Art. 22 GDPR takes place on this website.</p>
      </PrivacySection>

      <PrivacySection title="11. Changes to This Privacy Policy">
        <p>We may update this Privacy Policy from time to time to reflect legal, technical or organizational changes.</p>
        <p>The current version will always be available on this website.</p>
      </PrivacySection>
    </div>
  );
}
