# Mobile Menu im hugeinc.com-Stil ("Rollo"-Animation)

Eine wiederverwendbare Anleitung für ein Fullscreen-Mobile-Menu, das von oben nach unten "wie ein Rollo" runterfährt — ohne den Page-Content darunter zu verschieben — und dessen Menüpunkte gestaffelt einfaden.

> **TL;DR:** Die Lösung ist am Ende sehr unkompliziert: ~30 Zeilen React + ein bisschen inline CSS. Keine externen Dependencies (kein Framer Motion). Das Tricky ist nur, die richtigen Bausteine zu kombinieren — die falschen Wege kosten viel Zeit. Diese Doku spart dir die.

---

## 1. Ziel & Inspiration

**Referenz:** https://hugeinc.com (Mobile-Menu antippen)

Was wir wollen:
- Vollflächiges Overlay, das **von oben nach unten** ausfährt (Höhe animiert)
- Liegt **über** dem Page-Content (Content wird nicht weggeschoben)
- Sitzt **unter** dem fixierten Header (Header bleibt sichtbar, X-Button bleibt klickbar)
- Solider Hintergrund — keine Vermischung mit dem Content darunter
- Menüpunkte erscheinen **gestaffelt mit Fade-in + leichtem Slide**

Was hugeinc selbst macht: animiert `height: 0 → auto` plus `opacity`. Das funktioniert bei denen, weil sie eine eigene JS-Animation drumrum haben — in reinem CSS ist `height: auto` nicht animierbar. Wir lösen das mit JS-Messung.

---

## 2. Sackgassen (was NICHT funktioniert)

Spar dir die Zeit, das nochmal auszuprobieren:

| Ansatz | Warum es scheitert |
|---|---|
| `height: 0 → auto` in CSS | Browser-weite Limitation. `auto` ist kein numerischer Wert → keine Animation. |
| `clip-path: inset(0 0 100% 0 → 0 0 0 0)` | Funktioniert in der Theorie und ist elegant, aber unzuverlässig in Tailwind v4 mit JIT. Zudem schwierig im Stacking-Verhalten. |
| `transform: scaleY(0 → 1)` mit `transform-origin: top` | Squished den Inhalt beim Animieren — Text wird zerquetscht, sieht unsauber aus. |
| Overlay als **Kind** des `<header>` | Sticky-Header erzeugt einen eigenen Stacking Context. Das Overlay kann den restlichen Content nicht überlagern, egal wie hoch der `z-index` ist. |
| `bg-background/85` ohne soliden BG | Vermischt sich mit dem Content darunter — sieht "kaputt" aus. |

---

## 3. Die Lösung — 3 Kernbausteine

### Baustein A — Overlay als **Geschwister** des `<header>` rendern

```tsx
return (
  <>
    <header className="sticky top-0 z-[60] ...">
      {/* Logo, Nav, Toggle-Button */}
    </header>

    <div className="mobile-menu-overlay">
      {/* Menüinhalt */}
    </div>
  </>
);
```

**Warum:** Ein sticky/fixed Header erzeugt einen eigenen Stacking Context. Alles, was darin liegt, ist gefangen. Das Overlay muss ein **Sibling** sein, damit es den Page-Content darunter wirklich überdecken kann. Header bekommt `z-60`, Overlay `z-50` — so bleibt der Header (mit Close-Button) immer obenauf.

### Baustein B — Inhaltshöhe mit `ResizeObserver` messen

Da `height: auto` nicht animierbar ist, messen wir die echte Höhe und animieren auf einen konkreten Pixelwert:

```tsx
const contentRef = useRef<HTMLDivElement>(null);
const [contentHeight, setContentHeight] = useState(0);

useEffect(() => {
  if (!contentRef.current) return;

  const update = () => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  };

  update();
  const ro = new ResizeObserver(update);
  ro.observe(contentRef.current);
  window.addEventListener("resize", update);

  return () => {
    ro.disconnect();
    window.removeEventListener("resize", update);
  };
}, []);
```

**Warum `ResizeObserver`** und nicht nur einmal messen? Die Höhe ändert sich z. B. wenn:
- Der User das Browserfenster resized
- Webfonts nachladen (ändert Zeilenhöhe)
- Sprache umgeschaltet wird (längere Strings)

### Baustein C — `height` + `opacity` animieren

```tsx
<div
  style={{
    position: "fixed",
    left: 0,
    right: 0,
    top: "5rem",                 // = Header-Höhe
    zIndex: 50,                  // unter dem Header (60), über dem Content
    overflow: "hidden",          // wichtig: damit height:0 wirklich nichts zeigt
    background: "var(--background)",
    height: open ? `${contentHeight}px` : "0px",
    opacity: open ? 1 : 0,
    maxHeight: "calc(100dvh - 5rem)",  // Notbremse für sehr kleine Screens
    overflowY: "auto",
    transition:
      "height 0.58s cubic-bezier(0.22,1,0.36,1), opacity 0.35s ease",
    pointerEvents: open ? "auto" : "none",
    willChange: "height, opacity",
  }}
>
  <div ref={contentRef}>
    {/* Menüinhalt — Links, Telefon, Sprachumschalter, etc. */}
  </div>
</div>
```

Die Cubic-Bezier `(0.22, 1, 0.36, 1)` ist eine "ease-out-quart"-Kurve — startet schnell, bremst sanft ab. Genau dieses "natürliche Rollo"-Gefühl.

---

## 4. Staggered Fade-in der Menüpunkte

Jeder Menüpunkt bekommt einen eigenen `transitionDelay` basierend auf seinem Index:

```tsx
{links.map((l, i) => (
  <Link
    key={l.to}
    to={l.to}
    style={{
      opacity: open ? 1 : 0,
      transform: open ? "translateY(0)" : "translateY(-8px)",
      transition:
        "opacity 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.5s cubic-bezier(0.22,1,0.36,1)",
      transitionDelay: open ? `${280 + i * 70}ms` : "0ms",
    }}
  >
    {l.label}
  </Link>
))}
```

**Tuning-Parameter:**
- `280ms` Initial-Delay → wartet, bis das Rollo halb runtergefahren ist (bei 580ms Gesamtdauer)
- `i * 70ms` → jeder Eintrag startet 70ms nach dem vorherigen
- Beim Schließen (`open === false`) → alle Delays auf `0ms`, alles snappt sofort weg

**Faustregel:** Initial-Delay ≈ 50% der Rollo-Dauer. Stagger-Step zwischen 50–80ms je nach Anzahl der Items (mehr Items → kleinerer Step).

---

## 5. Vollständiges Copy-Paste-Snippet

Generisch gehalten, ohne Routing-Spezifika. Direkt in ein neues Projekt übertragbar:

```tsx
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

const HEADER_HEIGHT = "5rem"; // muss zum h-20 / py-X des Headers passen

export function HeaderWithMobileMenu() {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    const update = () => {
      if (contentRef.current) setContentHeight(contentRef.current.scrollHeight);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(contentRef.current);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* HEADER: sticky, z-60 — über dem Overlay */}
      <header
        className="sticky top-0 z-[60] bg-white border-b"
        style={{ height: HEADER_HEIGHT }}
      >
        <div className="flex items-center justify-between h-full px-6">
          <a href="/" className="font-bold">Brand</a>
          <button
            className="md:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* OVERLAY: Sibling vom header, z-50 — unter Header, über Content */}
      <div
        className="md:hidden"
        aria-hidden={!open}
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          top: HEADER_HEIGHT,
          zIndex: 50,
          overflow: "hidden",
          background: "white",
          height: open ? `${contentHeight}px` : "0px",
          opacity: open ? 1 : 0,
          maxHeight: `calc(100dvh - ${HEADER_HEIGHT})`,
          overflowY: "auto",
          transition:
            "height 0.58s cubic-bezier(0.22,1,0.36,1), opacity 0.35s ease",
          pointerEvents: open ? "auto" : "none",
          willChange: "height, opacity",
        }}
      >
        <nav
          ref={contentRef}
          className="flex flex-col items-center gap-7 py-12 text-center"
        >
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-lg"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(-8px)",
                transition:
                  "opacity 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.5s cubic-bezier(0.22,1,0.36,1)",
                transitionDelay: open ? `${280 + i * 70}ms` : "0ms",
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
```

---

## 6. Checkliste / Gotchas

Vor dem Abhaken bitte alle prüfen:

- [ ] **`z-index`-Ordnung:** Header > Overlay > restlicher Content (z. B. 60 / 50 / default)
- [ ] **Overlay ist Sibling** von `<header>`, nicht Kind (Stacking Context!)
- [ ] **`overflow: hidden`** auf dem Overlay-Wrapper, sonst zeigt sich der Inhalt trotz `height: 0`
- [ ] **Solider `background`** (nicht transparent / nicht halbtransparent)
- [ ] **`pointer-events: none`** wenn geschlossen — sonst blockiert das unsichtbare Overlay Klicks im Hintergrund
- [ ] **`overflowY: auto`** + **`maxHeight: calc(100dvh - HEADER)`** — Notbremse für sehr kleine Screens / sehr viele Menüpunkte
- [ ] **`ResizeObserver` cleanup** im `useEffect`-Return (`ro.disconnect()`)
- [ ] **`top` des Overlays === Header-Höhe** (sonst Lücke oder Überlappung)
- [ ] **`onClick={() => setOpen(false)}`** auf jedem Link, damit das Menu nach Navigation schließt
- [ ] **`aria-hidden={!open}`** + **`aria-expanded`** am Toggle-Button für Screenreader

---

## 7. Komplexitäts-Einschätzung

| Aspekt | Bewertung |
|---|---|
| Code-Umfang | ~30 Zeilen Logik + ~40 Zeilen Markup |
| Externe Dependencies | **Keine** (nur React + Lucide-Icons fürs Beispiel) |
| Browser-Support | Alle modernen Browser (`ResizeObserver` seit ~2019 überall) |
| Wartbarkeit | Hoch — alles inline und nachvollziehbar |
| Portierbarkeit | Sehr hoch — funktioniert in jedem React-Setup |

**Fazit:** Solide, unkomplizierte Lösung. Der Aha-Moment ist nur, dass man die drei Bausteine (Sibling-Position, JS-Messung, Height+Opacity) zusammen braucht — einzeln führt jeder Ansatz in eine Sackgasse.
