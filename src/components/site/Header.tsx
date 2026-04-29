import { Link, useLocation } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { dict, routesFor, type Locale } from "@/lib/i18n";
import { toTelHref } from "@/lib/phone";

/** Map current pathname to the equivalent path in the other locale. */
function getOtherLocalePath(pathname: string, otherLocale: Locale): string {
  // Strip leading /en if present, get the "de-style" path
  const dePath = pathname.startsWith("/en/")
    ? pathname.slice(3)
    : pathname === "/en"
      ? "/"
      : pathname;

  if (otherLocale === "en") {
    return dePath === "/" ? "/en" : `/en${dePath}`;
  }
  return dePath || "/";
}

export function Header({ locale }: { locale: Locale }) {
  const t = dict[locale];
  const r = routesFor(locale);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const otherLocale: Locale = locale === "de" ? "en" : "de";
  const otherPath = getOtherLocalePath(pathname, otherLocale);
  const samePath = getOtherLocalePath(pathname, locale);

  const links = [
    { to: r.practice, label: t.nav.practice },
    { to: r.victim, label: t.nav.victim },
    { to: r.insights, label: t.nav.insights },
    { to: r.about, label: t.nav.about },
    { to: r.contact, label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-sm border-b border-border">
      <div className="container-editorial flex items-center justify-between h-20">
        <Link to={r.home} className="flex flex-col leading-none group">
          <span className="font-serif text-xl md:text-2xl text-foreground tracking-tight">
            {t.firmName}
          </span>
          <span className="eyebrow mt-1">{t.firmTagline}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-foreground/80 hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a
            href={toTelHref(t.contact.phone)}
            className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
          >
            <Phone className="h-4 w-4 text-accent" />
            <span className="font-medium">{t.contact.phone}</span>
          </a>
          <div className="flex items-center text-xs border-l border-border pl-5 gap-2">
            <a
              href={locale === "de" ? samePath : otherPath}
              className={locale === "de" ? "text-accent font-medium" : "text-muted-foreground hover:text-accent"}
            >
              DE
            </a>
            <span className="text-muted-foreground/50">/</span>
            <a
              href={locale === "en" ? samePath : otherPath}
              className={locale === "en" ? "text-accent font-medium" : "text-muted-foreground hover:text-accent"}
            >
              EN
            </a>
          </div>
        </div>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background overflow-hidden menu-panel">
          <div className="container-editorial py-6 flex flex-col gap-4">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-base text-foreground/80 hover:text-accent transition-colors menu-item"
                style={{ animationDelay: `${80 + i * 55}ms` }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="hairline my-2 menu-item" style={{ animationDelay: `${80 + links.length * 55}ms` }} />
            <a
              href={toTelHref(t.contact.phone)}
              className="flex items-center gap-2 text-sm menu-item"
              style={{ animationDelay: `${120 + links.length * 55}ms` }}
            >
              <Phone className="h-4 w-4 text-accent" /> {t.contact.phone}
            </a>
            <a
              href={otherPath}
              className="text-sm text-accent menu-item"
              style={{ animationDelay: `${160 + links.length * 55}ms` }}
              onClick={() => setOpen(false)}
            >
              {otherLocale === "en" ? "English" : "Deutsch"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
