import { Link } from "@tanstack/react-router";
import { Phone, ArrowUpRight } from "lucide-react";
import { dict, routesFor, type Locale } from "@/lib/i18n";

export function CtaBand({ locale }: { locale: Locale }) {
  const t = dict[locale];
  const r = routesFor(locale);

  return (
    <section className="mt-24 border-y border-border bg-ink text-cream">
      <div className="container-editorial py-20 grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-end">
        <div>
          <p className="eyebrow text-brass">{locale === "de" ? "Erstberatung" : "First consultation"}</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-tight text-cream">
            {locale === "de"
              ? "Sprechen Sie mit einem Strafverteidiger — vertraulich und ohne Verzögerung."
              : "Speak with a criminal defense attorney — confidentially and without delay."}
          </h2>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <a
            href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-3 text-2xl md:text-3xl font-serif text-brass hover:text-cream transition-colors"
          >
            <Phone className="h-6 w-6" />
            {t.contact.phone}
          </a>
          <Link
            to={r.contact}
            className="inline-flex items-center gap-2 text-sm border border-cream/40 px-6 py-3 hover:bg-cream hover:text-ink transition-colors"
          >
            {t.cta.consult}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
