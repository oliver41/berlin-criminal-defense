# Doku-Datei: Mobile Menu (hugeinc-Style)

Eine wiederverwendbare Markdown-Anleitung erstellen, die das "Rollo"-Mobile-Menu erklärt — vom Problem über die Sackgassen bis zur finalen Lösung. So kannst du das Pattern in zukünftigen Projekten einfach nachbauen.

## Datei

**Pfad:** `docs/mobilemenu_hugeinc.md`

(Wird nur als interne Referenz angelegt — kein Einfluss auf die App, kein Build-Impact.)

## Inhalt der Doku

### 1. Ziel & Inspiration
- Was hugeinc.com macht: Vollflächiges Overlay, das von oben "wie ein Rollo" runterfährt, ohne den Page-Content zu verschieben
- Menüpunkte erscheinen gestaffelt mit Fade-in
- Hintergrund deckt vollständig ab (kein Vermischen mit dem Content darunter)

### 2. Sackgassen (was NICHT funktioniert)
Kurz dokumentiert, damit es nicht nochmal probiert wird:
- **`height: 0 → auto` in CSS** — nicht animierbar (browser-weite Limitation)
- **`clip-path: inset()`** — funktioniert in der Theorie, aber unzuverlässig mit Tailwind v4 JIT und kompliziert beim Stacking
- **`transform: scaleY(0 → 1)`** — squished den Inhalt während der Animation, sieht unsauber aus
- **Overlay innerhalb `<header>`** — Stacking Context des Headers fängt das Overlay ein → Layer kann den Content nicht überdecken

### 3. Die Lösung — 3 Kernbausteine

**Baustein A: Overlay außerhalb des `<header>` rendern**
```tsx
return (
  <>
    <header>...</header>
    <div className="mobile-menu-overlay">...</div>
  </>
);
```
Erklärung: Sticky-Header erzeugt eigenen Stacking Context. Das Overlay muss Geschwister sein, nicht Kind.

**Baustein B: Inhalt messen mit `ResizeObserver`**
```tsx
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
  return () => ro.disconnect();
}, []);
```
Erklärung: Da `height: auto` nicht animierbar ist, messen wir die tatsächliche Höhe und animieren auf einen konkreten Pixelwert.

**Baustein C: Height + Opacity animieren**
```tsx
<div
  style={{
    position: "fixed",
    left: 0, right: 0,
    top: HEADER_HEIGHT, // z.B. "5rem"
    zIndex: 50,
    overflow: "hidden",
    background: "var(--background)",
    height: open ? `${contentHeight}px` : "0px",
    opacity: open ? 1 : 0,
    maxHeight: "calc(100dvh - 5rem)",
    overflowY: "auto",
    transition: "height 0.58s cubic-bezier(0.22,1,0.36,1), opacity 0.35s ease",
    pointerEvents: open ? "auto" : "none",
  }}
>
  <div ref={contentRef}>{/* Menüinhalt */}</div>
</div>
```

### 4. Staggered Fade-in der Menüpunkte
```tsx
{links.map((l, i) => (
  <Link
    key={l.to}
    to={l.to}
    style={{
      opacity: open ? 1 : 0,
      transform: open ? "translateY(0)" : "translateY(-8px)",
      transition: "opacity 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.5s cubic-bezier(0.22,1,0.36,1)",
      transitionDelay: open ? `${280 + i * 70}ms` : "0ms",
    }}
  >
    {l.label}
  </Link>
))}
```
Erklärung:
- `280ms` Initial-Delay = wartet, bis das Rollo halb runtergefahren ist
- `i * 70ms` = jeder Eintrag startet 70ms später
- Beim Schließen: alle Delays auf `0ms` → schnappen sofort weg

### 5. Vollständiges Copy-Paste-Snippet (framework-agnostisch)
Eine generische Komponente ohne i18n/Routing-Spezifika, die man direkt in ein neues Projekt kopieren kann.

### 6. Checkliste / Gotchas
- ✅ Header-`z-index` höher als Overlay-`z-index` (z.B. 60 vs 50)
- ✅ Overlay als Sibling von `<header>`, nicht als Child
- ✅ `overflow: hidden` auf dem Wrapper, damit `height: 0` wirklich nichts zeigt
- ✅ `overflowY: auto` + `maxHeight: calc(100dvh - HEADER)` für sehr kleine Screens
- ✅ `pointer-events: none` wenn geschlossen, sonst blockiert das unsichtbare Overlay Klicks
- ✅ Solide `background` (nicht transparent), sonst vermischt sich's mit dem Content
- ✅ `ResizeObserver` cleanup in useEffect-Return

### 7. Komplexitäts-Einschätzung
Kurze Notiz: Lösung ist ~30 Zeilen Code, keine externen Dependencies, kein Framer Motion, kein Tailwind-Plugin nötig. Solide und portierbar.

## Was passiert NICHT
- Keine Code-Änderungen am `Header.tsx` oder anderen App-Dateien
- Kein neues Package, keine Config-Änderungen
- Reine Dokumentation für deine zukünftige Referenz
