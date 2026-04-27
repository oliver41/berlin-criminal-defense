import type { Locale } from "@/lib/i18n";
import { CtaBand } from "@/components/site/CtaBand";
import officeImg from "@/assets/office-interior.jpg";
import courthouseImg from "@/assets/berlin-courthouse.jpg";

const copy = {
  de: {
    eyebrow: "Kanzlei",
    title: "Eine Kanzlei. Ein Anspruch: Beste Verteidigung.",
    intro:
      "Seit über 15 Jahren widmen wir uns ausschließlich dem Strafrecht. Diese Spezialisierung ist unsere Stärke — und der Grund, warum Mandantinnen und Mandanten aus ganz Deutschland zu uns finden.",
    bioTitle: "Über den Anwalt",
    bioBody:
      "Rechtsanwalt mit Fachanwaltstitel für Strafrecht, zugelassen seit 2009 an den Berliner Gerichten. Studium und Referendariat in Berlin und München, Veröffentlichungen zum Wirtschafts- und Sexualstrafrecht, regelmäßige Vortragstätigkeit.",
    valuesTitle: "Unser Verständnis",
    values: [
      { t: "Vertraulichkeit", d: "Was in der Kanzlei besprochen wird, bleibt in der Kanzlei. Immer." },
      { t: "Erreichbarkeit", d: "In Krisensituationen entscheiden Stunden. Wir sind erreichbar." },
      { t: "Klarheit", d: "Realistische Einschätzung statt falscher Versprechen." },
      { t: "Engagement", d: "Wir verteidigen mit ganzer Kraft — ohne Kompromisse." },
    ],
    credTitle: "Qualifikationen",
    creds: [
      "Fachanwalt für Strafrecht",
      "Mitglied der Vereinigung Berliner Strafverteidiger e.V.",
      "Deutscher AnwaltVerein (DAV) — Arbeitsgemeinschaft Strafrecht",
      "Sprachen: Deutsch, Englisch",
    ],
    officeCaption: "Kanzlei am Kurfürstendamm",
  },
  en: {
    eyebrow: "About",
    title: "One firm. One standard: the best defense.",
    intro:
      "For over fifteen years we have devoted ourselves exclusively to criminal law. This focus is our strength — and the reason clients from across Germany find their way to us.",
    bioTitle: "About the attorney",
    bioBody:
      "Attorney certified as Specialist Lawyer for Criminal Law (Fachanwalt für Strafrecht), admitted to the Berlin courts since 2009. Studies and clerkship in Berlin and Munich, publications on white-collar and sexual offenses, regular lecturing activity.",
    valuesTitle: "Our principles",
    values: [
      { t: "Confidentiality", d: "What is discussed in our office stays in our office. Always." },
      { t: "Availability", d: "In a crisis, hours matter. We are reachable." },
      { t: "Clarity", d: "Realistic assessments instead of false promises." },
      { t: "Commitment", d: "We defend with full force — without compromise." },
    ],
    credTitle: "Qualifications",
    creds: [
      "Certified Specialist Lawyer for Criminal Law",
      "Member of the Berlin Criminal Defense Lawyers Association",
      "German Bar Association (DAV) — Criminal Law Working Group",
      "Languages: German, English",
    ],
    officeCaption: "Office at Kurfürstendamm",
  },
} as const;

export function AboutPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return (
    <>
      <section className="container-editorial pt-20 md:pt-28">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1 className="font-serif text-5xl md:text-6xl mt-4 max-w-3xl leading-tight">{c.title}</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{c.intro}</p>
      </section>

      <section className="container-editorial mt-20 grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
        <div className="aspect-[4/5] overflow-hidden">
          <img src={courthouseImg} alt="" loading="lazy" width={1600} height={1000} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="eyebrow">{c.bioTitle}</p>
          <h2 className="font-serif text-3xl md:text-4xl mt-3">
            {locale === "de" ? "Spezialisierung als Verpflichtung." : "Specialization as a commitment."}
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed">{c.bioBody}</p>

          <div className="mt-10 border-t border-border pt-8">
            <p className="eyebrow">{c.credTitle}</p>
            <ul className="mt-4 space-y-3 text-sm">
              {c.creds.map((cr) => (
                <li key={cr} className="flex gap-3">
                  <span className="mt-2 h-px w-5 bg-accent" />
                  {cr}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-editorial mt-28">
        <p className="eyebrow">{c.valuesTitle}</p>
        <div className="grid gap-px bg-border border border-border md:grid-cols-4 mt-6">
          {c.values.map((v) => (
            <div key={v.t} className="bg-background p-8">
              <h3 className="font-serif text-2xl">{v.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-editorial mt-28">
        <div className="aspect-[16/8] overflow-hidden">
          <img src={officeImg} alt={c.officeCaption} loading="lazy" width={1600} height={1100} className="w-full h-full object-cover" />
        </div>
        <p className="eyebrow mt-4 text-center">{c.officeCaption}</p>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
