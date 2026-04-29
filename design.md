# Design System — Strafrechtskanzlei Nadine Antoinette Kramer

A single-source overview of the visual language, tokens, components and
content patterns powering this site. Inspired by Google's open-source
design documentation style.

---

## 1. Brand & Tone

| Aspect          | Direction                                                                 |
| --------------- | ------------------------------------------------------------------------- |
| **Personality** | Editorial, premium, restrained. Discretion before display.                |
| **Voice (DE)**  | Klar, direkt, vertrauensvoll. Keine Werbesprache.                         |
| **Voice (EN)**  | Plain, decisive, trustworthy. No legalese or marketing fluff.             |
| **Imagery**     | Warm, soft natural light. Books, brass, courtroom textures, Berlin Mitte. |
| **Avoid**       | Stock-photo lawyers in suits, generic gavels, blue/grey corporate vibes.  |

---

## 2. Color Palette

All colors are defined as CSS variables in `src/styles.css` using `oklch()`
for perceptual consistency. **Never hardcode hex values in components.**

### Editorial palette (light, default)

| Token         | Value                  | Usage                              |
| ------------- | ---------------------- | ---------------------------------- |
| `--cream`     | `oklch(0.965 0.012 85)` | Page background (warm off-white)   |
| `--ink`       | `oklch(0.22 0.012 60)`  | Primary text, headlines            |
| `--brass`     | `oklch(0.66 0.085 75)`  | Accent — links, eyebrows, CTA hover |
| `--taupe`     | `oklch(0.85 0.012 75)`  | Hairlines, dividers, borders        |

### Semantic tokens (drive Tailwind classes)

| Token                  | Maps to       | Tailwind class examples                  |
| ---------------------- | ------------- | ---------------------------------------- |
| `--background`         | `--cream`     | `bg-background`                          |
| `--foreground`         | `--ink`       | `text-foreground`                        |
| `--primary`            | `--ink`       | `bg-primary`, `text-primary`             |
| `--accent`             | `--brass`     | `text-accent`, `border-accent`           |
| `--secondary`          | warm beige    | `bg-secondary/40` for soft callouts      |
| `--muted-foreground`   | warm grey     | `text-muted-foreground` for secondary copy |
| `--border`             | `--taupe`     | `border`, `border-border`                |

Dark mode tokens are defined in `.dark { ... }` and follow the same naming.

---

## 3. Typography

Two type families, loaded from Google Fonts in `__root.tsx`:

| Family                  | Role                         | Token         |
| ----------------------- | ---------------------------- | ------------- |
| **Cormorant Garamond**  | Display & all headings (h1–h4) | `--font-serif` |
| **Inter**               | Body text, UI labels, nav    | `--font-sans` |

### Type scale (Tailwind utility classes)

| Element            | Class                                              |
| ------------------ | -------------------------------------------------- |
| Hero (h1)          | `font-serif text-5xl md:text-6xl lg:text-7xl`      |
| Section title (h2) | `font-serif text-4xl md:text-5xl`                  |
| Card title         | `font-serif text-2xl`                              |
| Modal title        | `font-serif text-4xl md:text-5xl font-semibold`    |
| Body lead          | `text-lg text-muted-foreground leading-relaxed`    |
| Body               | `text-base text-foreground/90 leading-relaxed`     |
| Small / caption    | `text-sm text-muted-foreground`                    |
| Eyebrow            | `.eyebrow` (uppercase, tracked, 0.7rem, brass)     |

Headlines: weight 500, letter-spacing -0.01em (set in `@layer base`).

---

## 4. Layout & Spacing

- **`.container-editorial`** — site-wide max-width container (`max-w-80rem`,
  side padding `1.5rem` mobile / `2.5rem` desktop). Use it on every section.
- **Section rhythm** — vertical spacing between sections uses `mt-20`,
  `mt-24`, `mt-28`, `mt-32` to create editorial pacing.
- **Grid lines** — multi-column blocks use `grid gap-px bg-border` to draw
  hairline dividers between cards (no explicit borders per card).
- **Asymmetric heroes** — hero grids are `md:grid-cols-[1.1fr_1fr]` rather
  than 50/50, to feel composed rather than boxed.

---

## 5. Components

### Built on shadcn/ui (Radix primitives)

Located in `src/components/ui/`. Customize variants via `src/styles.css`
tokens — never with one-off hex colors.

Notable customizations:

- **Dialog** (`dialog.tsx`) — `rounded-2xl`, padding `p-10 md:p-12`,
  `duration-300` fade for both overlay and content.
- **Accordion** — used for FAQ on `/soforthilfe`.

### Site components (`src/components/site/`)

- `Header.tsx` — sticky, semi-transparent (`bg-background/85 backdrop-blur-sm`),
  hairline bottom border. Includes per-page locale switcher (DE ↔ EN).
- `Footer.tsx` — four-column on desktop, contact + nav + legal.
- `SiteLayout.tsx` — wraps every page; applies the page-transition fade.
- `CtaBand.tsx` — dark "Erstberatung" band with phone CTA, used at the
  bottom of every content page.

### Page components (`src/components/pages/`)

Each route in `src/routes/` is a thin wrapper that mounts a page component
inside `SiteLayout` with the correct `locale`.

---

## 6. Motion

Defined in `src/styles.css` and `tw-animate-css`.

| Class            | Duration  | Used for                                |
| ---------------- | --------- | --------------------------------------- |
| `.page-fade`     | `0.45s`   | Whole-page fade-in on every route change |
| `.fade-up`       | `0.7s`    | Hero blocks (subtle rise + fade)         |
| Dialog overlay   | `0.3s`    | Modal open/close (`fade-in/out-0`)       |
| Accordion        | `0.2s`    | FAQ expand/collapse                      |

**Page transitions** are achieved by keying `<main>` on `pathname` in
`SiteLayout`, so React remounts content on navigation and the
`.page-fade` keyframe replays.

---

## 7. Internationalization

- Two locales: **`de`** (default, root `/`) and **`en`** (under `/en`).
- Strings live in `src/lib/i18n.ts` (`dict.de`, `dict.en`).
- Routes are defined as separate files per locale, e.g.
  `src/routes/kontakt.tsx` and `src/routes/en.kontakt.tsx`.
- The `routesFor(locale)` helper returns a typed map of all canonical paths.
- The header's locale switcher computes the equivalent path in the other
  locale (e.g. `/soforthilfe` ↔ `/en/soforthilfe`) so users stay on the
  same page when switching.

---

## 8. Routing

File-based routing via TanStack Router. Routes:

| German            | English              | Page                  |
| ----------------- | -------------------- | --------------------- |
| `/`               | `/en`                | Home                  |
| `/leistungen`     | `/en/leistungen`     | Practice areas        |
| `/nebenklage`     | `/en/nebenklage`     | Victim advocacy       |
| `/soforthilfe`    | `/en/soforthilfe`    | Immediate help / FAQ  |
| `/kanzlei`        | `/en/kanzlei`        | About the firm        |
| `/kontakt`        | `/en/kontakt`        | Contact               |
| `/impressum`      | `/en/impressum`      | Imprint               |
| `/datenschutz`    | `/en/datenschutz`    | Privacy policy        |

Each route declares its own `head()` metadata (title, description, og tags).

---

## 9. Content Patterns

- **Eyebrows** introduce every section in uppercase brass.
- **Lead paragraph** below each h1 sets context in 1–2 sentences.
- **Direct address** (e.g. "Sie werden einer Straftat beschuldigt?") is used
  on the home page to acknowledge the visitor's situation early.
- **Hairline lists** (`border-b border-border` per row) replace bullets for
  editorial gravitas.
- **No emoji, no exclamation marks** in body copy.

---

## 10. Accessibility

- Semantic HTML (`header`, `main`, `nav`, `footer`, `article`, `figure`).
- Single h1 per page; logical heading order.
- All interactive cards use `<button>` (or `<Link>`) with visible focus
  rings (`focus-visible:ring-2 focus-visible:ring-accent`).
- Color contrast: ink-on-cream and brass-on-cream both pass WCAG AA for
  body text.
- All images have descriptive `alt` text in the active locale.
- Phone numbers use `tel:` links via the `toTelHref()` helper in
  `src/lib/phone.ts` to ensure international diallability.

---

## 11. File Map (cheat sheet)

```
src/
├── styles.css                    # Design tokens, base styles, utilities, keyframes
├── lib/
│   ├── i18n.ts                   # Locale dict + routesFor()
│   ├── phone.ts                  # toTelHref()
│   └── utils.ts                  # cn() helper
├── components/
│   ├── ui/                       # shadcn primitives (Dialog, Accordion, …)
│   ├── site/                     # Header, Footer, SiteLayout, CtaBand
│   └── pages/                    # HomePage, AboutPage, ContactPage, …
├── routes/                       # TanStack file-based routes
└── assets/                       # Hero & section imagery
```

---

_Last updated: 2026-04-29_
