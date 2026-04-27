import type { Locale } from "@/lib/i18n";
import { CtaBand } from "@/components/site/CtaBand";

const copy = {
  de: {
    eyebrow: "Leistungen",
    title: "Strafrecht in seiner gesamten Breite.",
    intro:
      "Von der ersten Vernehmung bis zur Revision: Wir verteidigen mit klarer Strategie und übernehmen Mandate in sämtlichen Bereichen des Straf- und Wirtschaftsstrafrechts.",
    areas: [
      { t: "Allgemeines Strafrecht", d: "Verteidigung in Ermittlungs-, Haupt- und Berufungsverfahren bei sämtlichen Delikten des StGB." },
      { t: "Wirtschafts- & Steuerstrafrecht", d: "Untreue, Betrug, Insolvenzdelikte, Steuerhinterziehung, Selbstanzeige, Compliance-Beratung." },
      { t: "Betäubungsmittelstrafrecht", d: "Verteidigung bei BtMG-Verfahren — vom Besitz bis zum bandenmäßigen Handel." },
      { t: "Verkehrsstrafrecht", d: "Trunkenheit am Steuer, Unfallflucht, Fahrlässigkeitsdelikte, Fahrerlaubnisfragen." },
      { t: "Sexualstrafrecht", d: "Sensible und konsequente Verteidigung bei Vorwürfen aus dem Bereich der Sexualdelikte." },
      { t: "Jugendstrafrecht", d: "Verteidigung Jugendlicher und Heranwachsender unter Berücksichtigung erzieherischer Aspekte." },
      { t: "Vermögensdelikte", d: "Diebstahl, Unterschlagung, Hehlerei, Geldwäsche und verwandte Tatbestände." },
      { t: "Gewaltdelikte", d: "Körperverletzung, Raub, Tötungsdelikte — Verteidigung und Nebenklage." },
    ],
  },
  en: {
    eyebrow: "Practice areas",
    title: "Criminal law in its full breadth.",
    intro:
      "From the first interrogation to revision proceedings: we defend with a clear strategy and take on mandates across all areas of criminal and business criminal law.",
    areas: [
      { t: "General criminal law", d: "Defense in investigation, trial, and appellate proceedings for all StGB offenses." },
      { t: "Business & tax crime", d: "Breach of trust, fraud, insolvency offenses, tax evasion, voluntary disclosure, compliance." },
      { t: "Drug-related offenses", d: "Defense under the BtMG — from possession to organized trafficking." },
      { t: "Traffic offenses", d: "DUI, hit-and-run, negligence offenses, driving-license matters." },
      { t: "Sexual offenses", d: "Sensitive yet consistent defense against allegations of sexual offenses." },
      { t: "Juvenile criminal law", d: "Defense of juveniles and young adults with regard to educational aspects." },
      { t: "Property crimes", d: "Theft, embezzlement, handling stolen goods, money laundering and related offenses." },
      { t: "Violent crimes", d: "Bodily harm, robbery, homicide — defense and victim representation." },
    ],
  },
} as const;

export function PracticePage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return (
    <>
      <section className="container-editorial pt-20 md:pt-28 pb-8">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1 className="font-serif text-5xl md:text-6xl mt-4 max-w-3xl leading-tight">{c.title}</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{c.intro}</p>
      </section>

      <section className="container-editorial mt-12">
        <div className="grid gap-px bg-border border border-border md:grid-cols-2">
          {c.areas.map((a, i) => (
            <article key={a.t} className="bg-background p-8 md:p-10">
              <span className="eyebrow text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl mt-3">{a.t}</h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{a.d}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
