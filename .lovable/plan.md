
# Berlin Criminal Defense Law Firm — Website Plan

A bilingual (German/English) editorial & premium website for a Berlin-based criminal defense attorney who also represents victims (Nebenklage). The design conveys trust, discretion, and high-end boutique practice.

## Visual Direction

- **Palette**: Warm cream background (#F7F3EC), deep charcoal text (#1A1A1A), muted brass/gold accent (#A8884B), soft taupe dividers.
- **Typography**: Elegant serif for headlines (Playfair Display / Cormorant), clean sans-serif for body (Inter).
- **Layout**: Generous whitespace, large editorial hero imagery (Berlin courthouse / law office mood), subtle fade-in animations, refined hover states.
- **Tone**: Calm, authoritative, discreet — no flashy gradients, no stock-photo handshakes.

## Pages & Routes

```text
/                  Home — hero, positioning, practice highlights, trust signals, CTA
/leistungen        Practice Areas — full list of criminal law specializations
/nebenklage        Victim Advocacy — dedicated page for victim representation
/kanzlei           About — attorney bio, philosophy, credentials, office
/insights          FAQ / Legal Insights — articles + accordion FAQs
/kontakt           Contact — form, phone, email, address, hours, Google Maps
```

English versions live under `/en/...` (mirrored structure) with a language switcher in the header.

## Page Content Outlines

**Home**
- Editorial hero: large image, serif headline ("Strafverteidigung in Berlin — diskret, entschieden, erfahren"), brief positioning, primary CTA "Erstberatung anfragen".
- Three-column highlight of core areas (Strafverteidigung, Wirtschaftsstrafrecht, Nebenklage).
- "Why this firm" section — confidentiality, 24/7 availability for emergencies (Festnahme), bilingual representation.
- Pull-quote / philosophy block.
- Closing CTA band with phone + contact link.

**Practice Areas (/leistungen)**
- Intro paragraph.
- Card grid: Allgemeines Strafrecht, Wirtschafts- & Steuerstrafrecht, Betäubungsmittelstrafrecht, Verkehrsstrafrecht, Sexualstrafrecht, Jugendstrafrecht, Vermögensdelikte, Gewaltdelikte. Each card opens a detail section with description.

**Victim Advocacy (/nebenklage)**
- Dedicated page explaining Nebenklage and victim representation (Opferschutz).
- What clients can expect, process overview, types of cases handled, sensitivity statement.

**About (/kanzlei)**
- Attorney portrait, biography, education, bar admission, languages.
- Approach & values.
- Office photo / location intro.

**Insights (/insights)**
- Short list of legal-insight articles (3–6 sample posts: "Was tun bei einer Hausdurchsuchung?", "Rechte bei der Festnahme", "Ablauf eines Strafverfahrens", etc.).
- FAQ accordion below covering common client questions (fees, first consultation, confidentiality, emergency contact).

**Contact (/kontakt)**
- Two-column: left = contact details (address, phone, email, opening hours, emergency line), right = contact form.
- Form fields: Name, Email, Phone (optional), Subject, Message, consent checkbox (DSGVO/GDPR).
- Embedded Google Map of the Berlin office location.
- Impressum & Datenschutz links in footer (placeholder pages).

## Shared Components

- **Header**: Logo (firm wordmark in serif), nav links, language switcher (DE/EN), prominent phone number.
- **Footer**: Address, phone, email, quick links, Impressum, Datenschutz, copyright.
- **Language switcher**: Toggles between `/...` (DE) and `/en/...` mirrors; persists choice.
- **CTA band**: Reused on multiple pages.

## Forms & Validation

Contact form uses Zod schema (name, email, phone, subject, message, consent), client + server validation. On submit, message is stored in Lovable Cloud (`contact_messages` table) and a success toast confirms receipt. RLS allows insert from anonymous, select only by admin role.

## SEO

Per-route `head()` with German-localized title, description, og:title, og:description for every page (and English equivalents under `/en`). JSON-LD `LegalService` / `Attorney` structured data on home and about. Sitemap route. `lang` attribute switches with locale.

## Technical Notes

- TanStack Start with file-based routing under `src/routes/` — separate route files per page (DE) and `src/routes/en/` (EN), no hash-anchor navigation.
- Lovable Cloud for the contact form storage table + RLS.
- i18n via lightweight in-app dictionary (no heavy library) keyed by route prefix.
- Tailwind v4 design tokens updated in `src/styles.css` for the editorial palette + serif font import in root head.
- Form: react-hook-form + zod resolver; submission via TanStack server function inserting into Cloud DB.
- Accessibility: semantic headings, sufficient contrast on cream background, keyboard-navigable nav and accordion, focus rings in brass accent.

## Out of Scope (can add later)

- Online appointment booking widget
- CMS-backed blog editor
- Multi-attorney team pages
- Live chat
