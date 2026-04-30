import { Link, useLocation } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
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
  const menuContentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (!menuContentRef.current) return;
    const update = () => {
      if (menuContentRef.current) setContentHeight(menuContentRef.current.scrollHeight);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(menuContentRef.current);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

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
    <>
    <header className="sticky top-0 z-[60] bg-background/85 backdrop-blur-sm border-b border-border">
      <div className="container-editorial flex items-center justify-between h-20 relative">
        <Link to={r.home} className="flex flex-col leading-none group min-w-0 max-w-[60%] md:max-w-none">
          <span className="font-serif text-base header-tight:text-lg md:text-2xl text-foreground tracking-tight truncate">
            {t.firmName}
          </span>
          <span className="eyebrow mt-1 text-[0.6rem] header-tight:text-[0.65rem] md:text-[0.7rem] truncate">{t.firmTagline}</span>
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

    </header>

      <div
        className="lg:hidden fixed left-0 right-0 top-20 bottom-0 z-50 overflow-hidden bg-background"
        data-open={open ? "true" : "false"}
        aria-hidden={!open}
        style={{
          overflowY: "auto",
          height: open ? "calc(100dvh - 5rem)" : "0px",
          opacity: open ? 1 : 0,
          transition: "height 0.58s cubic-bezier(0.22,1,0.36,1), opacity 0.35s ease",
          pointerEvents: open ? "auto" : "none",
          willChange: "height, opacity",
        }}
      >
        <div className="container-editorial py-16 flex flex-col items-center gap-7 text-center">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-lg text-foreground/85 hover:text-accent transition-colors"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(-8px)",
                transition: "opacity 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.5s cubic-bezier(0.22,1,0.36,1)",
                transitionDelay: open ? `${280 + i * 70}ms` : "0ms",
              }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div
            className="hairline w-16 my-2"
            style={{
              opacity: open ? 1 : 0,
              transition: "opacity 0.5s ease",
              transitionDelay: open ? `${280 + links.length * 70}ms` : "0ms",
            }}
          />
          <a
            href={toTelHref(t.contact.phone)}
            className="flex items-center gap-2 text-base"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(-8px)",
              transition: "opacity 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.5s cubic-bezier(0.22,1,0.36,1)",
              transitionDelay: open ? `${320 + links.length * 70}ms` : "0ms",
            }}
          >
            <Phone className="h-4 w-4 text-accent" /> {t.contact.phone}
          </a>
          <a
            href={otherPath}
            className="text-base text-accent"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(-8px)",
              transition: "opacity 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.5s cubic-bezier(0.22,1,0.36,1)",
              transitionDelay: open ? `${360 + links.length * 70}ms` : "0ms",
            }}
            onClick={() => setOpen(false)}
          >
            {otherLocale === "en" ? "English" : "Deutsch"}
          </a>
        </div>
      </div>
    </>
  );
}
