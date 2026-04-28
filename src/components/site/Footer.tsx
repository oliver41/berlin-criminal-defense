import { Link } from "@tanstack/react-router";
import { toTelHref } from "@/lib/phone";
import { dict, routesFor, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const t = dict[locale];
  const r = routesFor(locale);

  return (
    <footer className="mt-32 border-t border-border bg-secondary/40">
      <div className="container-editorial py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl text-foreground">{t.firmName}</p>
          <p className="eyebrow mt-2">{t.firmTagline}</p>
          <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
            {locale === "de"
              ? "Diskrete und entschiedene Strafverteidigung sowie engagierte Opfervertretung in ganz Berlin."
              : "Discreet, decisive criminal defense and committed victim representation throughout Berlin."}
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">{locale === "de" ? "Kontakt" : "Contact"}</p>
          <ul className="space-y-2 text-sm text-foreground/80">
            {t.contact.address.map((line) => (
              <li key={line}>{line}</li>
            ))}
            <li className="pt-2">
              <a href={toTelHref(t.contact.phone)} className="hover:text-accent">
                {t.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${t.contact.email}`} className="hover:text-accent">
                {t.contact.email}
              </a>
            </li>
            <li className="pt-2 text-xs text-muted-foreground">{t.contact.hours}</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">{locale === "de" ? "Navigation" : "Navigation"}</p>
          <ul className="space-y-2 text-sm">
            <li><Link to={r.practice} className="hover:text-accent">{t.nav.practice}</Link></li>
            <li><Link to={r.victim} className="hover:text-accent">{t.nav.victim}</Link></li>
            <li><Link to={r.insights} className="hover:text-accent">{t.nav.insights}</Link></li>
            <li><Link to={r.about} className="hover:text-accent">{t.nav.about}</Link></li>
            <li><Link to={r.contact} className="hover:text-accent">{t.nav.contact}</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-editorial py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {t.firmName}. {t.footer.rights}</p>
          <div className="flex gap-6">
            <Link to={r.imprint} className="hover:text-accent">{t.footer.imprint}</Link>
            <Link to={r.privacy} className="hover:text-accent">{t.footer.privacy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
