import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { CtaBand } from "@/components/site/CtaBand";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import insightsImg from "@/assets/insights-desk.jpg";

type Article = { t: string; excerpt: string; body: readonly string[] };

const copy = {
  de: {
    eyebrow: "Soforthilfe · Insights",
    title: "Antworten, wenn jede Minute zählt.",
    intro:
      "Kurze, verständliche Hinweise zu typischen Situationen im Strafverfahren — und Antworten auf die Fragen, die Mandantinnen und Mandanten am häufigsten stellen.",
    silenceTitle: "Wichtig vorab: Sagen Sie nichts zur Sache.",
    silenceBody:
      "Wenn Sie Beschuldigter einer Straftat sind, sprechen Sie nicht mit der Polizei, mit Zeugen oder mit Angehörigen über die vorgeworfene Tat. Diese Personen können später im Verfahren als Zeugen vernommen werden. Ein Anwalt hingegen unterliegt der beruflichen Schweigepflicht. Sprechen Sie daher zuerst mit einem Rechtsanwalt für Strafrecht, bevor Sie sich zur Sache äußern. Das Recht, sich nicht zur Sache zu äußern, ist in der Strafprozessordnung verankert und hat keinerlei negative Folgen für Sie.",
    readMore: "Weiterlesen",
    close: "Schließen",
    articlesTitle: "Beiträge",
    articles: [
      {
        t: "Was tun bei einer Hausdurchsuchung?",
        excerpt: "Welche Rechte Sie haben, was Sie sagen sollten — und was besser nicht.",
        body: [
          "Bewahren Sie Ruhe und lassen Sie sich den Durchsuchungsbeschluss zeigen. Notieren Sie Namen und Dienststellen der Beamten.",
          "Sie sind nicht verpflichtet, Angaben zur Sache zu machen — und sollten dies auch nicht tun. Verweisen Sie auf Ihren Verteidiger.",
          "Widersprechen Sie der Beschlagnahme ausdrücklich (auch wenn die Beamten sie trotzdem durchführen), damit später eine richterliche Überprüfung möglich ist.",
          "Rufen Sie umgehend einen Strafverteidiger an. Wir sind über unsere Notfallnummer auch außerhalb der Geschäftszeiten erreichbar.",
        ],
      },
      {
        t: "Festnahme: die ersten 24 Stunden",
        excerpt: "Vorführung, Haftrichter, Verteidigerkonsultation. Was jetzt geschieht.",
        body: [
          "Nach einer Festnahme muss der Beschuldigte spätestens am Tag nach der Festnahme dem Haftrichter vorgeführt werden.",
          "Sie haben das Recht, einen Verteidiger Ihres Vertrauens zu konsultieren — schweigen Sie bis dahin zur Sache.",
          "Der Haftrichter entscheidet über den Erlass eines Haftbefehls. Eine gut vorbereitete Verteidigung kann hier maßgeblich Einfluss nehmen.",
          "Angehörige sollten umgehend einen Strafverteidiger kontaktieren — wir übernehmen Akteneinsicht und Kontakt zu den Behörden.",
        ],
      },
      {
        t: "Vorladung als Beschuldigter",
        excerpt: "Warum Sie nie ohne anwaltliche Beratung erscheinen sollten.",
        body: [
          "Eine polizeiliche Vorladung als Beschuldigter müssen Sie nicht wahrnehmen. Eine Pflicht zum Erscheinen besteht nur bei Vorladungen durch die Staatsanwaltschaft oder das Gericht.",
          "Eine Aussage zur Sache sollten Sie nie ohne vorherige Akteneinsicht durch einen Verteidiger machen — auch nicht, um die Sache schnell zu erklären.",
          "Wir beantragen Akteneinsicht, prüfen die Beweislage und entwickeln gemeinsam mit Ihnen eine Verteidigungsstrategie — bevor Sie sich zur Sache äußern.",
        ],
      },
      {
        t: "Selbstanzeige im Steuerstrafrecht",
        excerpt: "Voraussetzungen, Risiken und der schmale Grat zur Strafbefreiung.",
        body: [
          "Eine wirksame Selbstanzeige nach § 371 AO kann zur Straffreiheit führen — sie muss aber vollständig und rechtzeitig erfolgen.",
          "Bereits eingeleitete Ermittlungen oder eine bevorstehende Betriebsprüfung schließen die strafbefreiende Wirkung in der Regel aus.",
          "Die Berechnung der nachzuerklärenden Beträge ist komplex. Fehler führen zur Unwirksamkeit — mit erheblichen strafrechtlichen Folgen.",
          "Sprechen Sie vor jedem Schritt mit einem Fachanwalt für Strafrecht und ggf. einem Steuerberater.",
        ],
      },
      {
        t: "Ablauf eines Strafverfahrens",
        excerpt: "Vom Ermittlungsverfahren bis zum Urteil — eine Orientierung.",
        body: [
          "Ein Strafverfahren beginnt mit dem Ermittlungsverfahren der Staatsanwaltschaft, oft eingeleitet durch die Polizei.",
          "Nach Abschluss der Ermittlungen entscheidet die Staatsanwaltschaft: Einstellung, Strafbefehl oder Anklageerhebung.",
          "Im Zwischenverfahren prüft das Gericht, ob die Anklage zugelassen wird — eine wichtige Phase für die Verteidigung.",
          "Im Hauptverfahren findet die mündliche Verhandlung statt, an deren Ende Urteil oder Freispruch stehen. Gegen das Urteil können Rechtsmittel eingelegt werden.",
        ],
      },
      {
        t: "Nebenklage: Rechte als Verletzter",
        excerpt: "Welche Möglichkeiten das Strafprozessrecht Verletzten einräumt.",
        body: [
          "Verletzte bestimmter Straftaten können sich der erhobenen Klage als Nebenkläger anschließen — mit eigenen Verfahrensrechten.",
          "Dazu gehören Akteneinsicht, Anwesenheits- und Fragerecht, eigene Beweisanträge sowie ein eigenes Rechtsmittelrecht.",
          "Im Adhäsionsverfahren können Schadensersatz und Schmerzensgeld bereits im Strafverfahren gegen den Beschuldigten geltend gemacht werden.",
          "In vielen Fällen übernimmt die Staatskasse die Kosten der Nebenklagevertretung.",
        ],
      },
    ],
    faqTitle: "Häufige Fragen",
    faqs: [
      { q: "Was kostet ein Erstgespräch?", a: "Das Erstgespräch erfolgt zu einer transparent kommunizierten Pauschale. Bei Mandatsübernahme wird sie auf das Honorar angerechnet." },
      { q: "Wie schnell sind Sie erreichbar?", a: "In dringenden Fällen — Festnahme, Durchsuchung — sind wir 24/7 unter unserer Notfallnummer erreichbar und in der Regel binnen weniger Stunden vor Ort." },
      { q: "Wie wird abgerechnet?", a: "Wir rechnen nach Stundenhonorar oder Pauschalvereinbarung ab. Sie erhalten von Beginn an eine klare Einschätzung der zu erwartenden Kosten." },
      { q: "Übernimmt die Rechtsschutzversicherung die Kosten?", a: "In bestimmten Konstellationen übernimmt die Strafrechts-Rechtsschutzversicherung die Verteidigungskosten. Wir klären die Deckungsanfrage gerne für Sie." },
      { q: "Vertreten Sie auch außerhalb Berlins?", a: "Ja. Wir verteidigen bundesweit und sind auch international für deutschsprachige Mandanten tätig." },
      { q: "Wird alles vertraulich behandelt?", a: "Selbstverständlich. Die anwaltliche Verschwiegenheitspflicht ist absolut. Sie können offen mit uns sprechen." },
    ],
  },
  en: {
    eyebrow: "Immediate help · Insights",
    title: "Answers when every minute counts.",
    intro:
      "Brief, clear guidance on typical situations in criminal proceedings — and answers to the questions clients ask most often.",
    silenceTitle: "Important first: do not speak about the matter.",
    silenceBody:
      "If you are accused of a criminal offense, do not speak with the police, with witnesses or with relatives about the alleged act. These persons can later be heard as witnesses in the proceedings. An attorney, by contrast, is bound by professional confidentiality. So speak with a criminal-law attorney before making any statement on the matter. Your right to remain silent is anchored in the German Code of Criminal Procedure and has no negative consequences for you.",
    readMore: "Read more",
    close: "Close",
    articlesTitle: "Articles",
    articles: [
      {
        t: "What to do during a house search",
        excerpt: "Your rights, what to say — and what to keep to yourself.",
        body: [
          "Stay calm and ask to see the search warrant. Note the names and units of the officers.",
          "You are not obliged to make any statement on the matter — and you should not. Refer the officers to your defense counsel.",
          "Expressly object to seizures (even if officers carry them out anyway), so a judicial review remains possible later.",
          "Call a defense attorney immediately. Our emergency line is available outside business hours as well.",
        ],
      },
      {
        t: "Arrest: the first 24 hours",
        excerpt: "Hearing, judge, attorney consultation. What happens now.",
        body: [
          "After an arrest the suspect must be brought before a judge no later than the day following the arrest.",
          "You have the right to consult a defense attorney of your choice — remain silent on the matter until then.",
          "The judge decides whether to issue an arrest warrant. A well-prepared defense can have decisive influence here.",
          "Family members should contact a defense attorney immediately — we obtain file access and handle communication with the authorities.",
        ],
      },
      {
        t: "Summons as a suspect",
        excerpt: "Why you should never appear without legal counsel.",
        body: [
          "You are not obliged to attend a police summons as a suspect. An obligation to appear only exists for summons by the prosecutor or the court.",
          "Never make a statement on the matter without prior file access by your defense — not even to clear things up quickly.",
          "We request file access, review the evidence and develop a defense strategy with you — before you make any statement.",
        ],
      },
      {
        t: "Voluntary tax disclosure",
        excerpt: "Requirements, risks, and the narrow path to immunity.",
        body: [
          "An effective voluntary disclosure under § 371 AO can lead to immunity — but it must be complete and timely.",
          "Investigations already underway or an imminent tax audit usually exclude the immunity effect.",
          "Calculating the amounts to be re-declared is complex. Errors lead to invalidity — with severe criminal consequences.",
          "Speak with a certified specialist for criminal law (and a tax advisor where appropriate) before taking any step.",
        ],
      },
      {
        t: "How a criminal trial unfolds",
        excerpt: "From investigation to verdict — an orientation.",
        body: [
          "A criminal case begins with the investigation by the public prosecutor, often initiated by the police.",
          "After the investigation, the prosecutor decides: dismissal, penalty order, or formal indictment.",
          "In the intermediate stage, the court decides whether the indictment is admitted — an important phase for the defense.",
          "The main proceedings are the oral trial, ending in a verdict or acquittal. Appeals can be lodged against the judgment.",
        ],
      },
      {
        t: "Nebenklage: rights as a victim",
        excerpt: "What the code of criminal procedure offers victims.",
        body: [
          "Victims of certain offenses can join the prosecution as joint plaintiffs (Nebenkläger) — with their own procedural rights.",
          "These include file access, presence and questioning rights, motions for evidence, and the right to appeal.",
          "Through the Adhäsionsverfahren, damages and compensation can be claimed against the accused already within the criminal trial.",
          "In many cases, the state covers the costs of victim representation.",
        ],
      },
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
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const active: Article | null = activeIdx === null ? null : (c.articles[activeIdx] as Article);

  return (
    <>
      <section className="container-editorial pt-20 md:pt-28 fade-up">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <p className="eyebrow">{c.eyebrow}</p>
            <h1 className="font-serif text-5xl md:text-6xl mt-4 max-w-3xl leading-tight">{c.title}</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{c.intro}</p>
          </div>
          <div className="aspect-[5/4] overflow-hidden">
            <img
              src={insightsImg}
              alt={locale === "de" ? "Aufgeschlagenes Gesetzbuch auf einem Schreibtisch" : "Open law book on a desk"}
              loading="lazy"
              width={1600}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Right-to-silence callout */}
      <section className="container-editorial mt-16">
        <div className="border-l-2 border-accent bg-secondary/40 p-8 md:p-10 max-w-4xl">
          <p className="eyebrow">{locale === "de" ? "Bitte beachten" : "Please note"}</p>
          <h2 className="font-serif text-2xl md:text-3xl mt-3 leading-snug">{c.silenceTitle}</h2>
          <p className="mt-4 text-base text-foreground/90 leading-relaxed">{c.silenceBody}</p>
        </div>
      </section>

      <section className="container-editorial mt-20">
        <p className="eyebrow mb-6">{c.articlesTitle}</p>
        <div className="grid gap-px bg-border border border-border md:grid-cols-3">
          {c.articles.map((a, i) => (
            <button
              key={a.t}
              type="button"
              onClick={() => setActiveIdx(i)}
              className="bg-background p-8 text-left group hover:bg-secondary/40 transition-colors flex flex-col cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
            >
              <span className="eyebrow text-muted-foreground">№ {String(i + 1).padStart(2, "0")}</span>
              <h2 className="font-serif text-2xl mt-3 leading-snug group-hover:text-accent transition-colors">{a.t}</h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{a.excerpt}</p>
              <span className="mt-6 self-start text-xs text-accent group-hover:underline underline-offset-4">
                {c.readMore} →
              </span>
            </button>
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

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActiveIdx(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {active && (
            <>
              <p className="eyebrow">{c.articlesTitle}</p>
              <DialogTitle asChild>
                <h3 className="font-serif text-4xl md:text-5xl font-semibold leading-[1.15] mt-2 pr-8">{active.t}</h3>
              </DialogTitle>
              <div className="mt-8 space-y-4">
                {active.body.map((p, i) => (
                  <p key={i} className="text-base text-foreground/90 leading-relaxed">{p}</p>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
