import type { Locale } from "@/lib/i18n";
import { CtaBand } from "@/components/site/CtaBand";
import portraitImg from "@/assets/portrait-nebenklage.jpg";

const copy = {
  de: {
    eyebrow: "Opfervertretung · Nebenklage",
    title: "Wenn das Recht auf Ihrer Seite stehen muss.",
    intro:
      "Als Opferanwältin und Nebenklägervertretung begleiten wir Verletzte schwerer Straftaten und ihre Angehörigen durch das gesamte Strafverfahren — mit Würde, Klarheit und Nachdruck.",
    sections: [
      {
        t: "Was bedeutet Nebenklage?",
        b: "Die Nebenklage räumt Verletzten bestimmter Straftaten eigene Rechte im Strafverfahren ein: aktive Beteiligung, Akteneinsicht, Fragerecht, eigene Beweisanträge und ein Rechtsmittelrecht. Wir setzen diese Rechte konsequent durch.",
      },
      {
        t: "Wann ist Nebenklage möglich?",
        b: "Insbesondere bei Sexualdelikten, Gewaltdelikten, Körperverletzung mit schweren Folgen, Tötungsdelikten zu Lasten Angehöriger sowie bei Stalking, Freiheitsentziehung und Menschenhandel.",
      },
      {
        t: "Schadensersatz & Schmerzensgeld (Adhäsionsverfahren)",
        b: "Wir beraten Sie umfassend über Ihre Opferrechte. Bereits im Strafverfahren können Sie Schadensersatz oder Schmerzensgeld gegen den Beschuldigten geltend machen — das sogenannte Adhäsionsverfahren. So müssen Sie keinen separaten Zivilprozess führen.",
      },
      {
        t: "Häusliche Gewalt & Stalking",
        b: "Bei häuslicher Gewalt oder Stalking können Maßnahmen nach dem Gewaltschutzgesetz erwirkt werden — etwa ein Näherungs- oder Kontaktverbot gegen den Täter. Wir beraten Sie hierzu und vertreten Sie auch vor dem Familiengericht.",
      },
      {
        t: "Was Sie erwartet",
        b: "Ein vertrauliches Erstgespräch, eine ehrliche Einschätzung und ein klares Vorgehen. Wir bereiten Sie auf Vernehmungen und Hauptverhandlung vor und stehen während des gesamten Verfahrens an Ihrer Seite — auf Wunsch in enger Abstimmung mit Opferhilfeeinrichtungen.",
      },
      {
        t: "Kostenübernahme",
        b: "In vielen Fällen übernimmt die Staatskasse die Kosten der Nebenklagevertretung (Prozesskostenhilfe / Beiordnung). Wir prüfen das in jedem Einzelfall und beraten transparent.",
      },
    ],
  },
  en: {
    eyebrow: "Victim advocacy · Nebenklage",
    title: "When the law must stand on your side.",
    intro:
      "As victim's counsel and Nebenklage representation, we accompany victims of serious crimes and their families through the entire criminal proceedings — with dignity, clarity and resolve.",
    sections: [
      {
        t: "What is Nebenklage?",
        b: "Nebenklage grants victims of certain offenses their own rights in the trial: active participation, file inspection, right to question, own motions for evidence, and the right to appeal. We exercise these rights consistently.",
      },
      {
        t: "When is it available?",
        b: "Particularly in sexual offenses, violent crimes, bodily harm with serious consequences, homicide of family members, as well as stalking, deprivation of liberty and human trafficking.",
      },
      {
        t: "Damages & compensation (Adhäsionsverfahren)",
        b: "We advise you comprehensively on your rights as a victim. Already within the criminal proceedings you can claim damages or compensation for pain and suffering against the accused — the so-called Adhäsionsverfahren. No separate civil case required.",
      },
      {
        t: "Domestic violence & stalking",
        b: "In cases of domestic violence or stalking, measures under the Protection from Violence Act (Gewaltschutzgesetz) can be obtained — for example a no-contact or stay-away order against the perpetrator. We advise you and also represent you before the family court.",
      },
      {
        t: "What to expect",
        b: "A confidential first conversation, an honest assessment and a clear approach. We prepare you for interrogations and trial and stand by you throughout — including close coordination with victim-support organizations on request.",
      },
      {
        t: "Costs",
        b: "In many cases the state covers the cost of victim representation (legal aid / appointment). We review this in every individual case and advise transparently.",
      },
    ],
  },
} as const;

export function VictimPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return (
    <>
      <section className="container-editorial pt-20 md:pt-28 grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-end">
        <div>
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="font-serif text-5xl md:text-6xl mt-4 leading-tight">{c.title}</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">{c.intro}</p>
        </div>
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={portraitImg}
            alt={locale === "de" ? "Nadine Antoinette Kramer — Opferanwältin" : "Nadine Antoinette Kramer — Victim's counsel"}
            loading="lazy"
            width={1080}
            height={1360}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="container-editorial mt-24">
        <div className="grid gap-12 md:grid-cols-2">
          {c.sections.map((s, i) => (
            <article key={s.t} className="border-t border-border pt-8">
              <span className="eyebrow text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="font-serif text-3xl mt-3">{s.t}</h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">{s.b}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
