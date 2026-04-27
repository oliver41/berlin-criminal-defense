import type { Locale } from "@/lib/i18n";
import { CtaBand } from "@/components/site/CtaBand";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const copy = {
  de: {
    eyebrow: "Insights & FAQ",
    title: "Antworten, wenn jede Minute zählt.",
    intro:
      "Kurze, verständliche Hinweise zu typischen Situationen im Strafverfahren — und Antworten auf die Fragen, die Mandantinnen und Mandanten am häufigsten stellen.",
    articlesTitle: "Beiträge",
    articles: [
      {
        t: "Was tun bei einer Hausdurchsuchung?",
        excerpt: "Welche Rechte Sie haben, was Sie sagen sollten — und was besser nicht.",
      },
      {
        t: "Festnahme: die ersten 24 Stunden",
        excerpt: "Vorführung, Haftrichter, Verteidigerkonsultation. Was jetzt geschieht.",
      },
      {
        t: "Vorladung als Beschuldigter",
        excerpt: "Warum Sie nie ohne anwaltliche Beratung erscheinen sollten.",
      },
      {
        t: "Selbstanzeige im Steuerstrafrecht",
        excerpt: "Voraussetzungen, Risiken und der schmale Grat zur Strafbefreiung.",
      },
      {
        t: "Ablauf eines Strafverfahrens",
        excerpt: "Vom Ermittlungsverfahren bis zum Urteil — eine Orientierung.",
      },
      {
        t: "Nebenklage: Rechte als Verletzter",
        excerpt: "Welche Möglichkeiten das Strafprozessrecht Verletzten einräumt.",
      },
    ],
    faqTitle: "Häufige Fragen",
    faqs: [
      {
        q: "Was kostet ein Erstgespräch?",
        a: "Das Erstgespräch erfolgt zu einer transparent kommunizierten Pauschale. Bei Mandatsübernahme wird sie auf das Honorar angerechnet.",
      },
      {
        q: "Wie schnell sind Sie erreichbar?",
        a: "In dringenden Fällen — Festnahme, Durchsuchung — sind wir 24/7 unter unserer Notfallnummer erreichbar und in der Regel binnen weniger Stunden vor Ort.",
      },
      {
        q: "Wie wird abgerechnet?",
        a: "Wir rechnen nach Stundenhonorar oder Pauschalvereinbarung ab. Sie erhalten von Beginn an eine klare Einschätzung der zu erwartenden Kosten.",
      },
      {
        q: "Übernimmt die Rechtsschutzversicherung die Kosten?",
        a: "In bestimmten Konstellationen übernimmt die Strafrechts-Rechtsschutzversicherung die Verteidigungskosten. Wir klären die Deckungsanfrage gerne für Sie.",
      },
      {
        q: "Vertreten Sie auch außerhalb Berlins?",
        a: "Ja. Wir verteidigen bundesweit und sind auch international für deutschsprachige Mandanten tätig.",
      },
      {
        q: "Wird alles vertraulich behandelt?",
        a: "Selbstverständlich. Die anwaltliche Verschwiegenheitspflicht ist absolut. Sie können offen mit uns sprechen.",
      },
    ],
  },
  en: {
    eyebrow: "Insights & FAQ",
    title: "Answers when every minute counts.",
    intro:
      "Brief, clear guidance on typical situations in criminal proceedings — and answers to the questions clients ask most often.",
    articlesTitle: "Articles",
    articles: [
      { t: "What to do during a house search", excerpt: "Your rights, what to say — and what to keep to yourself." },
      { t: "Arrest: the first 24 hours", excerpt: "Hearing, judge, attorney consultation. What happens now." },
      { t: "Summons as a suspect", excerpt: "Why you should never appear without legal counsel." },
      { t: "Voluntary tax disclosure", excerpt: "Requirements, risks, and the narrow path to immunity." },
      { t: "How a criminal trial unfolds", excerpt: "From investigation to verdict — an orientation." },
      { t: "Nebenklage: rights as a victim", excerpt: "What the code of criminal procedure offers victims." },
    ],
    faqTitle: "Frequently asked",
    faqs: [
      { q: "What does a first consultation cost?", a: "The first consultation is offered at a clearly communicated flat fee. If the mandate is taken on, it is credited toward the overall fee." },
      { q: "How quickly can I reach you?", a: "In urgent matters — arrest, search — we are reachable 24/7 via our emergency line and on site within a few hours." },
      { q: "How do you bill?", a: "We bill on an hourly or flat-fee basis. You receive a clear estimate of expected costs from the outset." },
      { q: "Does legal-expenses insurance cover this?", a: "In specific constellations, criminal-defense legal-expenses insurance covers the costs. We are happy to clarify coverage on your behalf." },
      { q: "Do you represent clients outside Berlin?", a: "Yes. We defend throughout Germany and also work internationally for German-speaking clients." },
      { q: "Is everything confidential?", a: "Of course. Attorney confidentiality is absolute. You can speak openly with us." },
    ],
  },
} as const;

export function InsightsPage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return (
    <>
      <section className="container-editorial pt-20 md:pt-28">
        <p className="eyebrow">{c.eyebrow}</p>
        <h1 className="font-serif text-5xl md:text-6xl mt-4 max-w-3xl leading-tight">{c.title}</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{c.intro}</p>
      </section>

      <section className="container-editorial mt-20">
        <p className="eyebrow mb-6">{c.articlesTitle}</p>
        <div className="grid gap-px bg-border border border-border md:grid-cols-3">
          {c.articles.map((a, i) => (
            <article key={a.t} className="bg-background p-8 group cursor-pointer hover:bg-secondary/40 transition-colors">
              <span className="eyebrow text-muted-foreground">№ {String(i + 1).padStart(2, "0")}</span>
              <h2 className="font-serif text-2xl mt-3 leading-snug group-hover:text-accent transition-colors">{a.t}</h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{a.excerpt}</p>
              <p className="mt-6 text-xs text-accent">{locale === "de" ? "Weiterlesen →" : "Read more →"}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-editorial mt-28 max-w-3xl">
        <p className="eyebrow">{c.faqTitle}</p>
        <h2 className="font-serif text-4xl mt-3 mb-8">
          {locale === "de" ? "Was Mandanten oft fragen" : "What clients often ask"}
        </h2>
        <Accordion type="single" collapsible className="border-t border-border">
          {c.faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-left font-serif text-xl py-6 hover:text-accent hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
