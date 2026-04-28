import type { Locale } from "@/lib/i18n";
import { CtaBand } from "@/components/site/CtaBand";

const copy = {
  de: {
    eyebrow: "Leistungen",
    title: "Strafrecht in seiner gesamten Breite.",
    intro:
      "Von der ersten Vernehmung bis zum Urteil: Wir verteidigen mit klarer Strategie und übernehmen Mandate in allen Bereichen des Strafrechts — mit besonderem Fokus auf den Schutz Ihrer Rechte als Beschuldigter oder als Verletzter einer Straftat.",
    areas: [
      { t: "Allgemeines Strafrecht", d: "Verteidigung in Ermittlungs-, Haupt- und Berufungsverfahren bei sämtlichen Delikten des StGB. Auch: Strafbefehl, Erschleichen von Leistungen (Schwarzfahren)." },
      { t: "Jugendstrafrecht", d: "Verteidigung Jugendlicher und Heranwachsender unter Berücksichtigung erzieherischer Aspekte." },
      { t: "Betäubungsmittelstrafrecht (BtMG)", d: "Verteidigung bei Drogendelikten — vom Besitz bis zum Handeltreiben." },
      { t: "Vermögens- & Eigentumsdelikte", d: "Diebstahl, Wohnungseinbruch, Hehlerei, Betrug (auch Coronahilfe-Betrug), Raub und räuberische Erpressung, Urkundenfälschung." },
      { t: "Gewaltdelikte", d: "Körperverletzung, gefährliche Körperverletzung, Nötigung, Bedrohung, Widerstand gegen Vollstreckungsbeamte, Brandstiftung." },
      { t: "Sexualstrafrecht", d: "Sensible und konsequente Verteidigung bei Vorwürfen aus dem Bereich der Sexualdelikte, einschließlich Vergewaltigung." },
      { t: "Verkehrsstrafrecht", d: "Fahrerflucht, Fahren ohne Fahrerlaubnis, Fahren im Vollrausch und weitere Delikte des Verkehrsstrafrechts." },
      { t: "Untersuchungshaft & Haftbefehl", d: "Schnelles Handeln bei Festnahme und Haftbefehl: Haftprüfung, Haftbeschwerde, Außervollzugsetzung." },
      { t: "Sonstige Delikte", d: "Hausfriedensbruch, Beleidigung, Sachbeschädigung (u.a. Graffiti), Kontaktverbot." },
      { t: "Nebenklage & Opferschutz", d: "Vertretung als Nebenklage, Zeugenbeistand sowie Geltendmachung von Ansprüchen im Adhäsionsverfahren." },
    ],
  },
  en: {
    eyebrow: "Practice areas",
    title: "Criminal law in its full breadth.",
    intro:
      "From the first interrogation to the verdict: we defend with a clear strategy and take on mandates across all areas of criminal law — with a particular focus on protecting your rights as an accused person or as the victim of a crime.",
    areas: [
      { t: "General criminal law", d: "Defense in investigation, trial and appellate proceedings for all StGB offenses. Also: penalty orders, fare evasion (Schwarzfahren)." },
      { t: "Juvenile criminal law", d: "Defense of juveniles and young adults with regard to educational aspects." },
      { t: "Drug-related offenses (BtMG)", d: "Defense in drug cases — from possession to trafficking." },
      { t: "Property & asset offenses", d: "Theft, residential burglary, handling stolen goods, fraud (including Covid-aid fraud), robbery and aggravated extortion, document forgery." },
      { t: "Violent offenses", d: "Bodily harm, aggravated bodily harm, coercion, threats, resisting officers, arson." },
      { t: "Sexual offenses", d: "Sensitive yet consistent defense against allegations of sexual offenses, including rape." },
      { t: "Traffic offenses", d: "Hit-and-run, driving without a license, driving while severely intoxicated and further traffic-related offenses." },
      { t: "Pre-trial detention & arrest warrants", d: "Fast action on arrest and arrest warrants: detention review, complaint, suspension of execution." },
      { t: "Other offenses", d: "Trespass, insult, criminal damage (incl. graffiti), restraining orders." },
      { t: "Victim representation (Nebenklage)", d: "Joint plaintiff representation, witness assistance, and asserting compensation claims via the Adhäsionsverfahren." },
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
