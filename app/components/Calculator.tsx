"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export type Locale = "de" | "en";
type FieldGroupId = "kauf" | "finanzierung" | "einnahmen" | "kosten";
type RatingKey = "strong" | "solid" | "tight" | "negative";
type FieldSuffix = "eur" | "percent" | "sqm" | "years" | "percent_pa" | "eur_month";

type FieldKey =
  | "kaufpreis"
  | "nebenkosten"
  | "wohnflaeche"
  | "eigenkapital"
  | "zins"
  | "kreditlaufzeit"
  | "nettomiete"
  | "mietsteigerung"
  | "betriebskosten"
  | "umlagefaehigeBetriebskosten"
  | "instandhaltungVerwaltung"
  | "wertsteigerung";

type Field = { key: FieldKey; suffix: FieldSuffix; step: number; min: number };
type FieldGroup = { id: FieldGroupId; fields: Field[] };
type FinancingYear = { year: number; openingDebt: number; repayment: number; interest: number; closingDebt: number };
type YieldYear = {
  year: number;
  annualNetRent: number;
  operatingCosts: number;
  recoverableOperatingCosts: number;
  maintenanceAndManagement: number;
  operatingCashflow: number;
  repayment: number;
  interest: number;
  cashflowBeforeTax: number;
};

const projectionYears = 30;
const copyrightYear = 2026;

const fieldGroups: FieldGroup[] = [
  { id: "kauf", fields: [{ key: "kaufpreis", suffix: "eur", step: 5000, min: 0 }, { key: "nebenkosten", suffix: "percent", step: 0.5, min: 0 }, { key: "wohnflaeche", suffix: "sqm", step: 1, min: 0 }] },
  { id: "finanzierung", fields: [{ key: "eigenkapital", suffix: "eur", step: 5000, min: 0 }, { key: "zins", suffix: "percent_pa", step: 0.1, min: 0 }, { key: "kreditlaufzeit", suffix: "years", step: 1, min: 0 }] },
  { id: "einnahmen", fields: [{ key: "nettomiete", suffix: "eur", step: 50, min: 0 }, { key: "mietsteigerung", suffix: "percent_pa", step: 0.1, min: 0 }, { key: "wertsteigerung", suffix: "percent_pa", step: 0.1, min: 0 }] },
  { id: "kosten", fields: [{ key: "betriebskosten", suffix: "eur_month", step: 25, min: 0 }, { key: "umlagefaehigeBetriebskosten", suffix: "eur_month", step: 25, min: 0 }, { key: "instandhaltungVerwaltung", suffix: "eur_month", step: 25, min: 0 }] },
];

const createZeroValues = (): Record<FieldKey, number> => ({
  kaufpreis: 0,
  nebenkosten: 0,
  wohnflaeche: 0,
  eigenkapital: 0,
  zins: 0,
  kreditlaufzeit: 0,
  nettomiete: 0,
  mietsteigerung: 0,
  betriebskosten: 0,
  umlagefaehigeBetriebskosten: 0,
  instandhaltungVerwaltung: 0,
  wertsteigerung: 0,
});

const currency = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
const currencyPerSquareMeter = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 });
const percent = new Intl.NumberFormat("de-DE", { style: "percent", minimumFractionDigits: 1, maximumFractionDigits: 1 });
const formatCurrency = (v: number) => currency.format(v);
const formatCurrencyPerSquareMeter = (v: number) => currencyPerSquareMeter.format(v);
const formatPercent = (v: number) => percent.format(v / 100);
const divideOrZero = (value: number, divisor: number) => (divisor ? value / divisor : 0);
const roundCurrencyValue = (v: number) => {
  const rounded = Math.round(v);
  return Object.is(rounded, -0) ? 0 : rounded;
};

function ratingKeyForCashflow(cashflow: number): RatingKey {
  if (cashflow >= 150) return "strong";
  if (cashflow >= 0) return "solid";
  if (cashflow >= -150) return "tight";
  return "negative";
}

function text(locale: Locale) {
  const de = locale === "de";
  return {
    eyebrow: de ? "Immobilienanalyse" : "Property Analysis",
    title: de ? "Cashflow-/Rendite-/Finanzierungsrechner Wohnimmobilien" : "Residential Cashflow, Rental Yield & Financing Calculator",
    showMore: de ? "Mehr anzeigen" : "Show more",
    showLess: de ? "Weniger anzeigen" : "Show less",
    resetValues: de ? "Zur\u00fccksetzen" : "Reset",
    status: de ? "Einschätzung" : "Status",
    ratingStrong: de ? "Stark" : "Strong",
    ratingSolid: de ? "Solide" : "Solid",
    ratingTight: de ? "Eng" : "Tight",
    ratingNegative: de ? "Negativ" : "Negative",
    mainKpiTitle: de ? "Monatlicher Cashflow nach Finanzierung" : "Monthly Cashflow After Financing",
    mainKpiOpCf: de ? "Monatlicher operativer Cashflow" : "Monthly Operating Cashflow",
    mainKpiBreakEven: de ? "Benötigte monatliche Break-even Nettomiete (Startjahr)" : "Required Monthly Break-even Net Rent (Year 1)",
    mainKpiYield: de ? "Rendite" : "Yield",
    groupA: de ? "Kostenprofil" : "Cost Profile",
    groupB: de ? "Kreditprofil" : "Loan Profile",
    groupC: de ? "Quadratmeterprofil" : "Per Square Meter Profile",
    groupD: de ? "Renditeprofil" : "Return Profile",
    groupE: de ? "Cashflowprofil" : "Cashflow Profile",
    tableFinanceTitle: de ? "Finanzierungsplan" : "Financing Schedule",
    tableFinanceSubtitle: de ? "Lineare Tilgung: Restschuld sinkt jährlich, Zinsen sinken mit der Restschuld." : "Linear repayment: principal falls yearly, interest declines with remaining debt.",
    tableYieldTitle: de ? "Renditeberechnung für 30 Jahre" : "30-Year Yield Projection",
    tableYieldSubtitle: de ? "Rechnung ohne Steuern. Berücksichtigt die oben angeführte erwartete Mietsteigerung und Kostenerhöhung." : "Pre-tax projection. Includes the expected rent growth and cost increase defined above.",
    preview: de ? "Vorschau zeigt die ersten 3 Zeilen." : "Preview shows the first 3 rows.",
  };
}

function groupTitle(locale: Locale, id: FieldGroupId) {
  const de = locale === "de";
  if (id === "kauf") return de ? "Kaufkosten" : "Purchase";
  if (id === "finanzierung") return de ? "Finanzierung" : "Financing";
  if (id === "einnahmen") return de ? "Einnahmen" : "Income";
  return de ? "Laufende Kosten" : "Operating Costs";
}
function groupDescription(locale: Locale, id: FieldGroupId) {
  const de = locale === "de";
  if (id === "kauf") return de ? "Erwerbskosten und Flächenkennzahl." : "Acquisition costs and area metrics.";
  if (id === "finanzierung") return de ? "Rahmendaten für Tilgung und Zinsverlauf." : "Core loan assumptions for principal and interest.";
  if (id === "einnahmen") return de ? "Miete und Entwicklung pro Jahr." : "Rent and yearly growth assumptions.";
  return de ? "Bewirtschaftung und Eigentümerkosten pro Monat." : "Operating and owner costs per month.";
}
function fieldLabel(locale: Locale, key: FieldKey) {
  const de = locale === "de";
  const deLabels: Record<FieldKey, string> = {
    kaufpreis: "Kaufpreis",
    nebenkosten: "Kaufnebenkosten",
    wohnflaeche: "Wohnfläche",
    eigenkapital: "Eigenkapital",
    zins: "Sollzins",
    kreditlaufzeit: "Kreditlaufzeit",
    nettomiete: "Monatliche Nettomiete",
    mietsteigerung: "Erwartete Mietsteigerung (und Kostenerhöhung)",
    betriebskosten: "Betriebskosten",
    umlagefaehigeBetriebskosten: "Anteil Betriebskosten umlegbar auf Mieter:in",
    instandhaltungVerwaltung: "Instandhaltung und Verwaltung",
    wertsteigerung: "Erwartete Wertsteigerung der Immobilie",
  };
  const enLabels: Record<FieldKey, string> = {
    kaufpreis: "Purchase Price",
    nebenkosten: "Acquisition Costs",
    wohnflaeche: "Living Area",
    eigenkapital: "Equity",
    zins: "Interest Rate",
    kreditlaufzeit: "Loan Term",
    nettomiete: "Monthly Net Rent",
    mietsteigerung: "Expected Rent Growth (and Cost Increase)",
    betriebskosten: "Operating Costs",
    umlagefaehigeBetriebskosten: "Share of Operating Costs Recoverable from Tenant",
    instandhaltungVerwaltung: "Maintenance and Management",
    wertsteigerung: "Expected Property Appreciation",
  };
  return de ? deLabels[key] : enLabels[key];
}
function suffixLabel(locale: Locale, suffix: FieldSuffix) {
  const de = locale === "de";
  const labels: Record<FieldSuffix, string> = {
    eur: "EUR",
    percent: "%",
    sqm: de ? "qm" : "sqm",
    years: de ? "Jahre" : "years",
    percent_pa: "% p.a.",
    eur_month: de ? "EUR/Monat" : "EUR/month",
  };
  return labels[suffix];
}
function metricText(locale: Locale) {
  const de = locale === "de";
  return {
    totalCost: de ? "Gesamtkosten" : "Total Cost",
    fundingNeed: de ? "Finanzierungsbedarf" : "Funding Need",
    buyingCost: de ? "Kaufnebenkosten" : "Acquisition Costs",
    outlook10: de ? "Wertausblick 10 Jahre" : "10-Year Value Outlook",
    rateStart: de ? "Kreditrate p.m. Startjahr" : "Loan Payment p.m. Year 1",
    rateEnd: de ? "Kreditrate p.m. letztes Jahr" : "Loan Payment p.m. Final Year",
    rateAvg: de ? "Kreditrate p.m. Schnitt" : "Loan Payment p.m. Average",
    repaymentYear: de ? "Tilgung pro Jahr" : "Annual Repayment",
    buyQmNet: de ? "Kaufpreis qm netto" : "Price per sqm net",
    buyQmGross: de ? "Kaufpreis qm brutto" : "Price per sqm gross",
    rentQmNet: de ? "Miete qm netto Startjahr" : "Net rent per sqm (year 1)",
    opQm: de ? "Operativer Cashflow qm Startjahr" : "Operating cashflow per sqm (year 1)",
    yield: de ? "Rendite" : "Yield",
    grossYield: de ? "Brutto-Mietrendite" : "Gross Rental Yield",
    ekYield: de ? "Eigenkapital-Rendite" : "Equity Return",
    cfMonthOp: de ? "Operativer Cashflow p.m. Startjahr" : "Operating cashflow p.m. (year 1)",
    cfMonthFin: de ? "Operativer Cashflow nach Finanzierung p.m. Startjahr" : "Operating cashflow after financing p.m. (year 1)",
    cfYear: de ? "Operativer Cashflow nach Finanzierung p.a. Startjahr" : "Operating cashflow after financing p.a. (year 1)",
  };
}
function hints(locale: Locale) {
  const de = locale === "de";
  return {
    totalCost: de ? "Kaufpreis plus Kaufnebenkosten." : "Purchase price plus acquisition costs.",
    fundingNeed: de ? "Finanzierungsbedarf = Gesamtkosten minus Eigenkapital." : "Funding need = total cost minus equity.",
    buyingCost: de ? "Kaufnebenkosten in EUR auf Basis des Prozentsatzes." : "Acquisition costs in EUR based on percentage.",
    outlook10: de ? "Prognostizierter Immobilienwert nach 10 Jahren basierend auf erwarteter Wertsteigerung." : "Projected property value after 10 years based on expected appreciation.",
    rateStart: de ? "Monatliche Kreditrate im ersten Jahr bei linearer Tilgung." : "Monthly loan payment in year one under linear repayment.",
    rateEnd: de ? "Monatliche Kreditrate im letzten Kreditjahr bei linearer Tilgung." : "Monthly loan payment in the final loan year under linear repayment.",
    rateAvg: de ? "Durchschnittliche monatliche Kreditrate über die gesamte Laufzeit." : "Average monthly loan payment across the full loan term.",
    repaymentYear: de ? "Jährlicher Tilgungsanteil bei linearer Tilgung." : "Annual principal repayment under linear repayment.",
    buyQm: de ? "Preis geteilt durch Wohnfläche." : "Price divided by living area.",
    rentQm: de ? "Monatliche Nettomiete im Startjahr geteilt durch Wohnfläche." : "Year-1 monthly net rent divided by living area.",
    opQm: de ? "Operativer Monats-Cashflow im Startjahr geteilt durch Wohnfläche." : "Year-1 monthly operating cashflow divided by living area.",
    yield: de ? "Operativer Cashflow pro Jahr geteilt durch Gesamtkosten." : "Annual operating cashflow divided by total cost.",
    grossYield: de ? "Jahresnettomiete geteilt durch Kaufpreis." : "Annual net rent divided by purchase price.",
    ek: de ? "Vermögensaufbau ohne Wertsteigerung geteilt durch eingesetztes Eigenkapital." : "Wealth build-up excluding appreciation divided by equity invested.",
    cfMonthOp: de ? "Cashflow vor Finanzierung, nur aus Vermietung und laufenden Kosten." : "Cashflow before financing from rent and operating costs.",
    cfMonthFin: de ? "Operativer Cashflow minus monatliche Kreditrate." : "Operating cashflow minus monthly loan payment.",
    cfYear: de ? "Monatlicher operativer Cashflow nach Finanzierung mal 12." : "Monthly operating cashflow after financing multiplied by 12.",
    opCf: de ? "Nettomiete minus operative Kosten (Betriebskosten abzüglich umlegbarer Anteil sowie Instandhaltung und Verwaltung)." : "Net rent minus operating costs (operating costs less recoverables plus maintenance and management).",
    be: de ? "Nettomiete, die im ersten Jahr nötig ist, damit der Cashflow nach Finanzierung null ist." : "Net rent required in year one to bring post-financing cashflow to zero.",
  };
}

export default function Calculator({ locale }: { locale: Locale }) {
  const [values, setValues] = useState(createZeroValues);
  const [showFinancingTable, setShowFinancingTable] = useState(false);
  const [showYieldTable, setShowYieldTable] = useState(false);
  const t = text(locale);
  const mt = metricText(locale);
  const h = hints(locale);
  const seo = seoText(locale);

  const result = useMemo(() => {
    const kaufnebenkosten = values.kaufpreis * (values.nebenkosten / 100);
    const gesamtkosten = values.kaufpreis + kaufnebenkosten;
    const darlehen = Math.max(gesamtkosten - values.eigenkapital, 0);
    const laufzeit = Math.max(Math.round(values.kreditlaufzeit), 1);
    const umlagefaehige = Math.min(values.umlagefaehigeBetriebskosten, values.betriebskosten);
    const jahresnettomiete = values.nettomiete * 12;
    const zinsJahr = darlehen * (values.zins / 100);
    const tilgungJahr = darlehen / laufzeit;
    const rateStartMonat = (zinsJahr + tilgungJahr) / 12;
    const operativeKostenMonat = values.betriebskosten - umlagefaehige + values.instandhaltungVerwaltung;
    const operativerCashflowMonat = values.nettomiete - operativeKostenMonat;
    const operativerCashflowJahr = operativerCashflowMonat * 12;
    const cashflowNachFinMonat = operativerCashflowMonat - rateStartMonat;
    const cashflowNachFinJahr = cashflowNachFinMonat * 12;
    const bruttoRendite = values.kaufpreis ? (jahresnettomiete / values.kaufpreis) * 100 : 0;
    const nettoRendite = gesamtkosten ? (operativerCashflowJahr / gesamtkosten) * 100 : 0;
    const vermoegenOhneWert = tilgungJahr + cashflowNachFinJahr;
    const ekRendite = values.eigenkapital ? (vermoegenOhneWert / values.eigenkapital) * 100 : 0;
    const breakEvenMiete = rateStartMonat + operativeKostenMonat;
    const wertIn10 = values.kaufpreis * (1 + values.wertsteigerung / 100) ** 10;
    const kaufQmNetto = divideOrZero(values.kaufpreis, values.wohnflaeche);
    const kaufQmBrutto = divideOrZero(gesamtkosten, values.wohnflaeche);
    const mieteQmNetto = divideOrZero(values.nettomiete, values.wohnflaeche);
    const opCfQm = divideOrZero(operativerCashflowMonat, values.wohnflaeche);
    const financingSchedule: FinancingYear[] = [];
    let openingDebt = darlehen;
    for (let year = 1; year <= laufzeit && openingDebt > 0.01; year += 1) {
      const repayment = Math.min(tilgungJahr, openingDebt);
      const interest = openingDebt * (values.zins / 100);
      const closingDebt = Math.max(openingDebt - repayment, 0);
      financingSchedule.push({ year, openingDebt, repayment, interest, closingDebt });
      openingDebt = closingDebt;
    }
    const totalDebtService = financingSchedule.reduce((sum, y) => sum + y.repayment + y.interest, 0);
    const rateDurchschnitt = financingSchedule.length ? totalDebtService / financingSchedule.length / 12 : 0;
    const rateEnde = financingSchedule.length ? (financingSchedule[financingSchedule.length - 1].repayment + financingSchedule[financingSchedule.length - 1].interest) / 12 : 0;
    const yieldProjection: YieldYear[] = Array.from({ length: projectionYears }, (_, index) => {
      const year = index + 1;
      const financingYear = financingSchedule[index];
      const factor = (1 + values.mietsteigerung / 100) ** index;
      const annualNetRent = jahresnettomiete * factor;
      const operatingCosts = values.betriebskosten * 12 * factor;
      const recoverableOperatingCosts = umlagefaehige * 12 * factor;
      const maintenanceAndManagement = values.instandhaltungVerwaltung * 12 * factor;
      const operatingCashflow = annualNetRent - operatingCosts + recoverableOperatingCosts - maintenanceAndManagement;
      const repayment = financingYear?.repayment ?? 0;
      const interest = financingYear?.interest ?? 0;
      const cashflowBeforeTax = operatingCashflow - repayment - interest;
      return { year, annualNetRent, operatingCosts, recoverableOperatingCosts, maintenanceAndManagement, operatingCashflow, repayment, interest, cashflowBeforeTax };
    });
    const breakEvenYear = yieldProjection.find((y) => y.cashflowBeforeTax >= 0)?.year ?? null;
    const ratingKey = ratingKeyForCashflow(roundCurrencyValue(cashflowNachFinMonat));
    return { ratingKey, kaufnebenkosten, gesamtkosten, darlehen, tilgungJahr, nettoertragJahr: operativerCashflowJahr, nettoertragMonat: operativerCashflowMonat, cashflowMonat: cashflowNachFinMonat, cashflowJahr: cashflowNachFinJahr, kaufQmNetto, kaufQmBrutto, mieteQmNetto, opCfQm, bruttoRendite, nettoRendite, ekRendite, wertIn10, breakEvenMiete, rateStartMonat, rateEnde, rateDurchschnitt, financingSchedule, yieldProjection, breakEvenYear };
  }, [values]);

  function updateValue(key: FieldKey, value: number) {
    setValues((current) => ({ ...current, [key]: Number.isFinite(value) ? Math.max(value, key === "wohnflaeche" || key === "kreditlaufzeit" ? 1 : 0) : 0 }));
  }

  const displayedCashflowMonat = roundCurrencyValue(result.cashflowMonat);
  const displayedCashflowJahr = displayedCashflowMonat * 12;
  const isNeutralDisplayedCashflow = displayedCashflowMonat === 0;
  const isPositiveDisplayedCashflow = displayedCashflowMonat > 0;
  const cashflowValueClass = isNeutralDisplayedCashflow ? "text-white" : isPositiveDisplayedCashflow ? "text-[#a6efbd]" : "text-[#ffd2cb]";
  const statusClass = displayedCashflowMonat >= 0 ? "bg-[#1f7a43] text-white" : "bg-[#b6402f] text-white";
  const ratingLabel = result.ratingKey === "strong" ? t.ratingStrong : result.ratingKey === "solid" ? t.ratingSolid : result.ratingKey === "tight" ? t.ratingTight : t.ratingNegative;
  const financeColumns = locale === "de" ? ["Jahr", "Restschuld Start", "Tilgung", "Zinsen", "Restschuld Ende"] : ["Year", "Opening Debt", "Repayment", "Interest", "Closing Debt"];
  const yieldColumns = locale === "de"
    ? ["Jahr", "Nettomiete p.a.", "Betriebskosten", "Umlegbar", "Instandhaltung und Verwaltung", "Operativer Cashflow", "Tilgung", "Zinsen", "Cashflow vor Steuern"]
    : ["Year", "Net Rent p.a.", "Operating Costs", "Recoverable", "Maintenance and Management", "Operating Cashflow", "Repayment", "Interest", "Pre-tax Cashflow"];

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7f5ef_0%,#f1eee6_100%)] text-[#171717]">
      <section className="mx-auto w-full max-w-[1500px] px-4 py-3 sm:px-6 lg:px-8">
        <header className="mb-3 flex items-end justify-between border-b border-[#d8d3c9] pb-3">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#2f6a57]">{t.eyebrow}</p>
            <h1 className="text-4xl font-semibold sm:text-5xl">{t.title}</h1>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setValues(createZeroValues())} className="h-8 rounded-md border border-[#c8c0b3] bg-[#fbfaf7] px-3 text-xs font-semibold text-[#4d4a44] transition hover:border-[#2f6a57] hover:text-[#2f6a57]">
              {t.resetValues}
            </button>
            <div className="inline-flex rounded-md border border-[#c8c0b3] bg-[#fbfaf7] p-0.5">
              <Link href="/de" className={`rounded px-2 py-1 text-xs font-semibold ${locale === "de" ? "bg-[#e5f2ec] text-[#2f6a57]" : "text-[#6a665f]"}`}>DE</Link>
              <Link href="/en" className={`rounded px-2 py-1 text-xs font-semibold ${locale === "en" ? "bg-[#e5f2ec] text-[#2f6a57]" : "text-[#6a665f]"}`}>EN</Link>
            </div>
          </div>
        </header>

        <div className="grid items-start gap-3 xl:grid-cols-[minmax(0,1fr)_360px]">
          <section className="flex flex-col gap-2">
            {fieldGroups.map((group) => (
              <div key={group.id} className="h-fit w-full rounded-lg border border-[#d8d3c9] bg-white p-2.5">
                <div className="mb-1.5">
                  <h2 className="text-lg font-semibold">{groupTitle(locale, group.id)}</h2>
                  <p className="text-sm text-[#68635a]">{groupDescription(locale, group.id)}</p>
                </div>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {group.fields.map((field) => (
                    <label key={field.key} className="block">
                      <span className="mb-1 flex items-center justify-between text-sm font-medium text-[#4d4a44]">
                        {fieldLabel(locale, field.key)}
                        <span className="text-[11px] font-semibold text-[#7a746a]">{suffixLabel(locale, field.suffix)}</span>
                      </span>
                      <input autoComplete="off" suppressHydrationWarning className="h-10 w-full rounded-md border border-[#c8c0b3] bg-[#fbfaf7] px-2.5 text-base font-semibold outline-none transition focus:border-[#2f6a57] focus:ring-2 focus:ring-[#2f6a57]/20" min={field.min} step={field.step} type="number" value={values[field.key]} onChange={(event) => updateValue(field.key, event.target.valueAsNumber)} />
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <aside className="space-y-2.5">
            <section className="rounded-lg bg-[linear-gradient(135deg,#10211e,#132420)] p-4 text-white">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm text-[#b9c5bd]">{t.mainKpiTitle}</p>
                <span className={`rounded-full px-3 py-1 text-sm font-semibold ${statusClass}`}>{t.status}: {ratingLabel}</span>
              </div>
              <p className={`text-5xl font-semibold ${cashflowValueClass}`}>{formatCurrency(displayedCashflowMonat)}</p>
              <div className="mt-3 grid gap-2">
                <MainLine label={t.mainKpiOpCf} value={formatCurrency(result.nettoertragMonat)} hint={h.opCf} />
                <MainLine label={t.mainKpiBreakEven} value={formatCurrency(result.breakEvenMiete)} hint={h.be} />
                <MainLine label={t.mainKpiYield} value={formatPercent(result.nettoRendite)} hint={h.yield} />
              </div>
            </section>
          </aside>
        </div>

        <section className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
          <MetricGroup title={t.groupA}>
            <Metric label={mt.totalCost} value={formatCurrency(result.gesamtkosten)} hint={h.totalCost} />
            <Metric label={mt.fundingNeed} value={formatCurrency(result.darlehen)} hint={h.fundingNeed} />
            <Metric label={mt.buyingCost} value={formatCurrency(result.kaufnebenkosten)} hint={h.buyingCost} />
            <Metric label={mt.outlook10} value={formatCurrency(result.wertIn10)} hint={h.outlook10} />
          </MetricGroup>
          <MetricGroup title={t.groupB}>
            <Metric label={mt.rateStart} value={formatCurrency(result.rateStartMonat)} hint={h.rateStart} />
            <Metric label={mt.rateEnd} value={formatCurrency(result.rateEnde)} hint={h.rateEnd} />
            <Metric label={mt.rateAvg} value={formatCurrency(result.rateDurchschnitt)} hint={h.rateAvg} />
            <Metric label={mt.repaymentYear} value={formatCurrency(result.tilgungJahr)} hint={h.repaymentYear} />
          </MetricGroup>
          <MetricGroup title={t.groupC}>
            <Metric label={mt.buyQmNet} value={`${formatCurrencyPerSquareMeter(result.kaufQmNetto)} / ${locale === "de" ? "qm" : "sqm"}`} hint={h.buyQm} />
            <Metric label={mt.buyQmGross} value={`${formatCurrencyPerSquareMeter(result.kaufQmBrutto)} / ${locale === "de" ? "qm" : "sqm"}`} hint={h.buyQm} />
            <Metric label={mt.rentQmNet} value={`${formatCurrencyPerSquareMeter(result.mieteQmNetto)} / ${locale === "de" ? "qm" : "sqm"}`} hint={h.rentQm} />
            <Metric label={mt.opQm} value={`${formatCurrencyPerSquareMeter(result.opCfQm)} / ${locale === "de" ? "qm" : "sqm"}`} hint={h.opQm} />
          </MetricGroup>
          <MetricGroup title={t.groupD}>
            <Metric label={mt.yield} value={formatPercent(result.nettoRendite)} hint={h.yield} />
            <Metric label={mt.grossYield} value={formatPercent(result.bruttoRendite)} hint={h.grossYield} />
            <Metric label={mt.ekYield} value={formatPercent(result.ekRendite)} hint={h.ek} />
          </MetricGroup>
          <MetricGroup title={t.groupE}>
            <Metric label={mt.cfMonthOp} value={formatCurrency(result.nettoertragMonat)} hint={h.cfMonthOp} />
            <Metric label={mt.cfMonthFin} value={formatCurrency(displayedCashflowMonat)} hint={h.cfMonthFin} />
            <Metric label={mt.cfYear} value={formatCurrency(displayedCashflowJahr)} hint={h.cfYear} />
          </MetricGroup>
        </section>

        <div className="mt-3 space-y-2.5">
          <CollapsibleTableCard
            title={t.tableFinanceTitle}
            subtitle={t.tableFinanceSubtitle}
            columns={financeColumns}
            rows={result.financingSchedule.map((y) => [y.year.toString(), formatCurrency(y.openingDebt), formatCurrency(y.repayment), formatCurrency(y.interest), formatCurrency(y.closingDebt)])}
            isOpen={showFinancingTable}
            onToggle={() => setShowFinancingTable((p) => !p)}
            moreLabel={t.showMore}
            lessLabel={t.showLess}
            previewLabel={t.preview}
          />
          <CollapsibleTableCard
            title={t.tableYieldTitle}
            subtitle={t.tableYieldSubtitle}
            columns={yieldColumns}
            rows={result.yieldProjection.map((y) => [y.year.toString(), formatCurrency(y.annualNetRent), formatCurrency(y.operatingCosts), formatCurrency(y.recoverableOperatingCosts), formatCurrency(y.maintenanceAndManagement), formatCurrency(y.operatingCashflow), formatCurrency(y.repayment), formatCurrency(y.interest), formatCurrency(y.cashflowBeforeTax)])}
            isOpen={showYieldTable}
            onToggle={() => setShowYieldTable((p) => !p)}
            highlightRow={(index) => result.breakEvenYear === index + 1}
            moreLabel={t.showMore}
            lessLabel={t.showLess}
            previewLabel={t.preview}
          />
        </div>

        <SeoSection title={seo.title} intro={seo.intro} items={seo.items} />

        <Footer locale={locale} />
      </section>
    </main>
  );
}

function seoText(locale: Locale) {
  const de = locale === "de";

  return {
    title: de ? "Immobilienrendite, Mietrendite und Cashflow berechnen" : "Rental property yield, cash flow and financing",
    intro: de
      ? "Der Rechner hilft dabei, eine Wohnimmobilie strukturiert zu prüfen: Kaufpreis, Kaufnebenkosten, Eigenkapital, Miete, laufende Kosten und Finanzierung werden gemeinsam betrachtet."
      : "This calculator helps structure the analysis of a rental property by combining purchase price, acquisition costs, equity, rent, running costs and financing assumptions.",
    items: de
      ? [
          {
            title: "Immobilien Rendite Rechner",
            text: "Die Brutto-Mietrendite und die operative Rendite zeigen, ob die Miete im Verhältnis zu Kaufpreis und Gesamtkosten tragfähig ist.",
          },
          {
            title: "Immobilien Cashflow Rechner",
            text: "Der monatliche Cashflow nach Finanzierung zeigt, ob die Immobilie nach laufenden Kosten, Zinsen und Tilgung Überschuss oder Unterdeckung erzeugt.",
          },
          {
            title: "Finanzierungsrechner für Kapitalanlage",
            text: "Der Finanzierungsplan bildet lineare Tilgung, sinkende Restschuld und Zinsbelastung über die Laufzeit ab.",
          },
        ]
      : [
          {
            title: "Rental property calculator",
            text: "Compare purchase price, rent, acquisition costs and operating expenses to understand the economics of a rental property.",
          },
          {
            title: "Rental yield calculator",
            text: "Gross yield and operating yield make it easier to compare investment properties on a consistent basis.",
          },
          {
            title: "Cash flow and mortgage calculator",
            text: "Monthly cash flow after financing shows whether rent covers operating costs, interest and repayment in the first year.",
          },
        ],
  };
}

function MainLine({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-md bg-white/10 p-2.5">
      <div className="flex items-center gap-1">
        <p className="text-xs text-[#b9c5bd]">{label}</p>
        {hint ? <InfoBubble hint={hint} dark /> : null}
      </div>
      <p className="mt-1 text-lg font-semibold">{value}</p>
    </div>
  );
}
function MetricGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-lg border border-[#d8d3c9] bg-white p-3">
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.04em] text-[#4e6f63]">{title}</h3>
      <div className="grid gap-1.5">{children}</div>
    </section>
  );
}
function Metric({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-md bg-[#f7f5ef] px-2.5 py-2">
      <span className="flex items-center gap-1 text-sm text-[#5f5b52]">
        {label}
        {hint ? <InfoBubble hint={hint} /> : null}
      </span>
      <span className="text-right text-sm font-semibold text-[#171717]">{value}</span>
    </div>
  );
}
function InfoBubble({ hint, dark }: { hint: string; dark?: boolean }) {
  return (
    <span className="group relative inline-flex">
      <span className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-semibold ${dark ? "bg-white/15 text-white" : "bg-[#d7e4dd] text-[#2f6a57]"}`}>i</span>
      <span className={`pointer-events-none absolute left-1/2 top-full z-20 mt-1 hidden w-72 -translate-x-1/2 rounded-md p-2 text-xs leading-5 shadow-lg group-hover:block ${dark ? "bg-[#0d1714] text-[#e9f3ee]" : "bg-[#1f2b27] text-[#e9f3ee]"}`}>
        {hint}
      </span>
    </span>
  );
}
function CollapsibleTableCard({ title, subtitle, columns, rows, isOpen, onToggle, highlightRow, moreLabel, lessLabel, previewLabel }: { title: string; subtitle: string; columns: string[]; rows: string[][]; isOpen: boolean; onToggle: () => void; highlightRow?: (index: number) => boolean; moreLabel: string; lessLabel: string; previewLabel: string; }) {
  const visibleRows = isOpen ? rows : rows.slice(0, 3);
  return (
    <section className="rounded-lg border border-[#d8d3c9] bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-1 text-base text-[#68635a]">{subtitle}</p>
        </div>
        <button className="rounded-md border border-[#bfc8c2] bg-[#edf5f1] px-3 py-2 text-sm font-semibold text-[#2f6a57]" type="button" onClick={onToggle}>
          {isOpen ? lessLabel : moreLabel}
        </button>
      </div>
      <DataTable columns={columns} rows={visibleRows} highlightRow={highlightRow} />
      {!isOpen && rows.length > 3 ? <p className="mt-2 text-sm text-[#736e65]">{previewLabel}</p> : null}
    </section>
  );
}
function DataTable({ columns, rows, highlightRow }: { columns: string[]; rows: string[][]; highlightRow?: (index: number) => boolean }) {
  return (
    <div className="mt-3 overflow-x-auto">
      <table className="w-full min-w-[760px] border-collapse text-left text-base">
        <thead>
          <tr className="border-b border-[#d8d3c9] bg-[#f4f2ed]">
            {columns.map((column) => (
              <th key={column} className="px-2.5 py-2 font-semibold text-[#4d4a44]">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`} className={`border-b border-[#ece7dd] ${highlightRow?.(rowIndex) ? "bg-[#dcebdd] font-semibold text-[#235335]" : ""}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${cell}-${cellIndex}`} className="px-2.5 py-2 tabular-nums">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SeoSection({ title, intro, items }: { title: string; intro: string; items: { title: string; text: string }[] }) {
  return (
    <section className="mt-5 border-t border-[#d8d3c9] pt-5">
      <div className="max-w-4xl">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2 text-base leading-7 text-[#5f5b52]">{intro}</p>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="rounded-lg border border-[#d8d3c9] bg-white p-4">
            <h3 className="text-base font-semibold text-[#2f6a57]">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#5f5b52]">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer({ locale }: { locale: Locale }) {
  const de = locale === "de";

  return (
    <footer className="mt-5 flex flex-col gap-2 border-t border-[#d8d3c9] py-4 text-sm text-[#5f5b52] sm:flex-row sm:items-center sm:justify-between">
      <p>© {copyrightYear} {de ? "Immobilienrendite-Rechner" : "Rental Property Calculator"}</p>
      <nav className="flex gap-4">
        {!de ? (
          <Link className="transition hover:text-[#2f6a57]" href="/en/guides">
            Guides
          </Link>
        ) : null}
        <Link className="transition hover:text-[#2f6a57]" href={`/${locale}/impressum`}>
          {de ? "Impressum" : "Legal Notice"}
        </Link>
        <Link className="transition hover:text-[#2f6a57]" href={`/${locale}/datenschutz`}>
          {de ? "Datenschutz" : "Privacy Policy"}
        </Link>
      </nav>
    </footer>
  );
}
