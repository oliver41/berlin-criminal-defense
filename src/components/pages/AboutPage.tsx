import type { Locale } from "@/lib/i18n";
import { CtaBand } from "@/components/site/CtaBand";
import portraitImg from "@/assets/portrait-kanzlei.jpg";
import courthouseImg from "@/assets/berlin-courthouse.jpg";

const copy = {
  de: {
    eyebrow: "Kanzlei",
    title: "Eine Kanzlei. Ein Anspruch: Beste Verteidigung.",
    intro:
      "Wir sind eine junge, dem Strafrecht verschriebene Kanzlei in Berlin-Mitte — mit direkter Nähe zum Kriminalgericht Moabit. Klar in der Strategie, ehrlich in der Beratung, kompromisslos im Einsatz.",
    bioTitle: "Über den Anwalt",
    bioHeadline: "Spezialisierung als Verpflichtung.",
    bioBody:
      "Rechtsanwältin mit Fachanwaltstitel für Strafrecht, zugelassen an den Berliner Gerichten.",
    leadName: "Nadine Antoinette Kramer",
    leadIntro:
      "Die Strafverteidigerin und Opferanwältin __NAME__ setzt sich mit maximaler Hingabe für Sie ein. Dabei werden selbstverständlich Ihre Bedürfnisse und Wünsche beachtet — und wir nehmen uns viel Zeit für Ihre Fragen.",
    aboutBlocks: [
      "Wir übernehmen für Sie jegliche Kommunikation mit den Behörden — mit der Polizei, der Staatsanwaltschaft und vor Gericht. Anschließend berichten wir Ihnen immer zeitnah über den aktuellen Stand des Verfahrens.",
      "Unsere Kanzlei arbeitet schnell und effektiv. Wir informieren Sie offen und ehrlich über die rechtliche Lage und beraten Sie umfassend über verschiedene Verteidigungsstrategien.",
      "Transparenz hinsichtlich der Anwaltskosten ist uns sehr wichtig. Wir besprechen vorab, welche Kosten entstehen, und machen Ihnen ein klares Angebot. So gibt es keine unerwarteten Rechnungen — Sie wissen immer genau, welche Leistungen wie in Rechnung gestellt werden.",
      "Wir stehen an Ihrer Seite und gehen den Weg mit Ihnen gemeinsam.",
    ],
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
    officeCaption: "Kanzlei Berlin-Mitte — in direkter Nähe zum Kriminalgericht Moabit",
  },
  en: {
    eyebrow: "About",
    title: "One firm. One standard: the best defense.",
    intro:
      "We are a young firm devoted exclusively to criminal law, located in Berlin-Mitte — directly next to the Kriminalgericht Moabit courthouse. Clear in strategy, honest in counsel, uncompromising in commitment.",
    bioTitle: "About the attorney",
    bioHeadline: "Specialization as a commitment.",
    bioBody:
      "Attorney certified as Specialist Lawyer for Criminal Law (Fachanwalt für Strafrecht), admitted to the Berlin courts.",
    leadName: "Nadine Antoinette Kramer",
    leadIntro:
      "Criminal defense attorney and victim's counsel __NAME__ represents you with maximum dedication. Your needs and wishes are taken seriously — and we take all the time you need for your questions.",
    aboutBlocks: [
      "We handle all communication with the authorities for you — police, public prosecutor and the court — and keep you promptly informed about the current state of the proceedings.",
      "Our firm works quickly and effectively. We inform you openly and honestly about the legal situation and advise you comprehensively on different defense strategies.",
      "Transparency on legal fees matters to us. We discuss the expected costs in advance and provide you with a clear offer. No surprise invoices — you always know exactly what is being billed and why.",
      "We stand by your side and walk the path with you.",
    ],
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
    officeCaption: "Office in Berlin-Mitte — directly next to the Kriminalgericht Moabit",
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
          <img src={portraitImg} alt={c.leadName} loading="lazy" width={1000} height={1300} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="eyebrow">{c.bioTitle}</p>
          <h2 className="font-serif text-3xl md:text-4xl mt-3">{c.bioHeadline}</h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed">
            {c.leadIntro.split("__NAME__").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && <strong className="font-semibold text-foreground">{c.leadName}</strong>}
              </span>
            ))}
          </p>

          <div className="mt-8 space-y-5">
            {c.aboutBlocks.map((p, i) => (
              <p key={i} className="text-base text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
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
          <img src={courthouseImg} alt="" loading="lazy" width={1600} height={1000} className="w-full h-full object-cover" />
        </div>
        <p className="eyebrow mt-4 text-center">{c.officeCaption}</p>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
