import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Shield, Scale, Users, Phone } from "lucide-react";
import { dict, routesFor, type Locale } from "@/lib/i18n";
import { toTelHref } from "@/lib/phone";
import { CtaBand } from "@/components/site/CtaBand";
import heroImg from "@/assets/hero-courtroom.jpg";
import scalesImg from "@/assets/scales-still-life.jpg";

const copy = {
  de: {
    eyebrow: "Strafrecht · Berlin",
    headline: "Strafverteidigung in Berlin — diskret, entschieden, erfahren.",
    intro:
      "Wir verteidigen Mandantinnen und Mandanten in allen Bereichen des Strafrechts und vertreten Geschädigte als Nebenklage. Erreichbar — auch im Notfall.",
    primary: "Erstberatung anfragen",
    secondary: "Leistungen ansehen",
    addressEyebrow: "Sind Sie betroffen?",
    addressTitle: "Wir helfen, wenn es ernst wird.",
    addressItems: [
      "Sie werden einer Straftat beschuldigt?",
      "Sie haben eine polizeiliche Vorladung, eine Anzeige, eine Anklage oder einen Strafbefehl erhalten?",
      "Sie haben einen Haftbefehl erhalten?",
      "Sie oder ein Angehöriger sind in Untersuchungshaft (U-Haft)?",
      "Sie suchen einen Strafverteidiger oder Pflichtverteidiger?",
      "Sie suchen einen Opferanwalt für die Nebenklage?",
    ],
    addressFoot:
      "Dann sind Sie hier richtig. Wir übernehmen für Sie jegliche Kommunikation mit den Behörden — Polizei, Staatsanwaltschaft und Gericht.",
    pillarsEyebrow: "Was wir tun",
    pillars: [
      { icon: Shield, title: "Strafverteidigung", desc: "Engagiert und strategisch — vom Ermittlungsverfahren bis zur Hauptverhandlung." },
      { icon: Users, title: "Nebenklage & Opfervertretung", desc: "Würdige und durchsetzungsstarke Vertretung von Verletzten und Angehörigen — inklusive Schadensersatz und Schmerzensgeld." },
      { icon: Scale, title: "Pflichtverteidigung", desc: "Beiordnung als Pflichtverteidigerin in Verfahren mit notwendiger Verteidigung — gleiches Engagement, gleiche Sorgfalt." },
    ],
    whyEyebrow: "Warum diese Kanzlei",
    whyTitle: "Vertrauen. Erfahrung. Konsequenz.",
    whyBody:
      "Strafverfahren greifen tief in das Leben ein. Wir handeln schnell, sprechen Klartext und wahren absolute Verschwiegenheit. Erstgespräche finden auf Deutsch oder Englisch statt — telefonisch, in der Kanzlei oder bei Ihnen vor Ort.",
    whyPoints: [
      "24/7 Erreichbarkeit bei Festnahme oder Durchsuchung",
      "Schnell, effektiv und transparent hinsichtlich der Kosten",
      "In direkter Nähe zum Kriminalgericht Moabit",
      "Vertraulich, persönlich, ohne Standardlösungen",
    ],
    quote: "Strafverteidigung ist Handwerk und Haltung — und immer Vertrauenssache.",
    quoteAttr: "Aus der Praxis",
  },
  en: {
    eyebrow: "Criminal Law · Berlin",
    headline: "Criminal defense in Berlin — discreet, decisive, experienced.",
    intro:
      "We defend clients across all areas of criminal law and represent victims as Nebenklage. Available when it matters — including emergencies.",
    primary: "Request a consultation",
    secondary: "View practice areas",
    addressEyebrow: "Are you affected?",
    addressTitle: "We help when it gets serious.",
    addressItems: [
      "Are you being accused of a criminal offense?",
      "Have you received a police summons, a charge, an indictment or a penalty order?",
      "Has an arrest warrant been issued against you?",
      "Are you or a family member in pre-trial detention?",
      "Are you looking for a criminal defense lawyer or court-appointed counsel?",
      "Are you looking for a victim's attorney for the Nebenklage?",
    ],
    addressFoot:
      "Then you are in the right place. We handle all communication with the authorities for you — police, public prosecutor and court.",
    pillarsEyebrow: "What we do",
    pillars: [
      { icon: Shield, title: "Criminal defense", desc: "Engaged and strategic — from preliminary proceedings through trial." },
      { icon: Users, title: "Victim advocacy & Nebenklage", desc: "Dignified, assertive representation of victims and families — including compensation and damages." },
      { icon: Scale, title: "Court-appointed defense", desc: "Appointment as Pflichtverteidigerin in cases with mandatory defense — same commitment, same care." },
    ],
    whyEyebrow: "Why this firm",
    whyTitle: "Trust. Experience. Resolve.",
    whyBody:
      "Criminal proceedings reach deeply into a person's life. We act quickly, speak plainly, and maintain absolute confidentiality. First conversations are held in German or English — by phone, at our office, or on site.",
    whyPoints: [
      "24/7 availability for arrests and searches",
      "Fast, effective and transparent on costs",
      "Located near the Kriminalgericht Moabit courthouse",
      "Confidential, personal, never off-the-shelf",
    ],
    quote: "Criminal defense is craft and conviction — and always a matter of trust.",
    quoteAttr: "From practice",
  },
} as const;

export function HomePage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const t = dict[locale];
  const r = routesFor(locale);

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="container-editorial pt-16 md:pt-24 pb-12 grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="fade-up">
            <p className="eyebrow">{c.eyebrow}</p>
            <h1 className="mt-5 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
              {c.headline}
            </h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
              {c.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to={r.contact}
                className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 text-sm hover:bg-accent transition-colors"
              >
                {c.primary} <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to={r.practice}
                className="inline-flex items-center gap-2 border border-foreground/20 px-7 py-3.5 text-sm hover:border-accent hover:text-accent transition-colors"
              >
                {c.secondary}
              </Link>
            </div>
            <a
              href={toTelHref(t.contact.emergency)}
              className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              {locale === "de" ? "Notfall · " : "Emergency · "}
              <span className="text-foreground font-medium">{t.contact.emergency}</span>
            </a>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={heroImg}
                alt={locale === "de" ? "Gerichtssaal in Berlin" : "Courtroom in Berlin"}
                width={1920}
                height={1280}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-background border border-border px-6 py-4 max-w-[16rem]">
              <p className="eyebrow">Berlin · Mitte</p>
              <p className="font-serif text-lg mt-1 leading-snug">
                {locale === "de" ? "Persönlich. Vor Ort. Verfügbar." : "Personal. Local. Available."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct address */}
      <section className="container-editorial mt-24">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="eyebrow">{c.addressEyebrow}</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">{c.addressTitle}</h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              {c.addressFoot}
            </p>
            <Link
              to={r.contact}
              className="mt-8 inline-flex items-center gap-2 text-sm text-accent hover:underline underline-offset-4"
            >
              {c.primary} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="border-t border-border">
            {c.addressItems.map((item) => (
              <li
                key={item}
                className="flex gap-5 border-b border-border py-5 text-base text-foreground/90"
              >
                <span className="font-serif text-accent text-xl leading-none mt-1">›</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pillars */}
      <section className="container-editorial mt-32">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow">{c.pillarsEyebrow}</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">
              {locale === "de" ? "Drei Schwerpunkte" : "Three focus areas"}
            </h2>
          </div>
          <Link
            to={r.practice}
            className="hidden md:inline-flex text-sm items-center gap-1 text-accent hover:underline underline-offset-4"
          >
            {locale === "de" ? "Alle Leistungen" : "All practice areas"} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-px bg-border md:grid-cols-3 border border-border">
          {c.pillars.map((p) => (
            <div key={p.title} className="bg-background p-8 md:p-10">
              <p.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl mt-6">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="container-editorial mt-32 grid gap-16 md:grid-cols-[1fr_1.1fr] md:items-center">
        <div className="aspect-[5/6] overflow-hidden order-2 md:order-1">
          <img
            src={scalesImg}
            alt={locale === "de" ? "Aufgeschlagenes Gesetzbuch und Waage" : "Open law book and scales"}
            loading="lazy"
            width={1400}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="eyebrow">{c.whyEyebrow}</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">{c.whyTitle}</h2>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-xl">{c.whyBody}</p>
          <ul className="mt-8 space-y-4">
            {c.whyPoints.map((point) => (
              <li key={point} className="flex gap-4 text-sm">
                <span className="mt-2 h-px w-6 bg-accent flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Quote */}
      <section className="container-editorial mt-32">
        <figure className="max-w-3xl mx-auto text-center">
          <blockquote className="font-serif text-3xl md:text-4xl leading-snug text-foreground">
            "{c.quote}"
          </blockquote>
          <figcaption className="eyebrow mt-6">— {c.quoteAttr}</figcaption>
        </figure>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
