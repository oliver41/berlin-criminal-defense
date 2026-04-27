export type Locale = "de" | "en";

export const dict = {
  de: {
    nav: {
      home: "Startseite",
      practice: "Leistungen",
      victim: "Nebenklage",
      about: "Kanzlei",
      insights: "Insights",
      contact: "Kontakt",
    },
    cta: {
      consult: "Erstberatung anfragen",
      call: "Jetzt anrufen",
    },
    firmName: "Strafrechtskanzlei Nadine Antoinette Kramer",
    firmTagline: "Strafverteidigung & Opfervertretung",
    contact: {
      phone: "+49 30 629 383 59",
      emergency: "+49 1579 236 36 09",
      email: "kontakt@strafrecht-berlin.de",
      address: ["Alt-Moabit 110", "10559 Berlin"],
      hours: "Mo–Fr 9:00–18:00 · Notfall 24/7",
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
      imprint: "Impressum",
      privacy: "Datenschutz",
    },
  },
  en: {
    nav: {
      home: "Home",
      practice: "Practice Areas",
      victim: "Victim Advocacy",
      about: "About",
      insights: "Insights",
      contact: "Contact",
    },
    cta: {
      consult: "Request a consultation",
      call: "Call now",
    },
    firmName: "Berlin Criminal Law Firm",
    firmTagline: "Criminal Defense & Victim Representation",
    contact: {
      phone: "+49 30 1234 5678",
      emergency: "+49 171 234 5678",
      email: "contact@strafrecht-berlin.de",
      address: ["Kurfürstendamm 123", "10711 Berlin, Germany"],
      hours: "Mon–Fri 9 AM–6 PM · Emergency 24/7",
    },
    footer: {
      rights: "All rights reserved.",
      imprint: "Imprint",
      privacy: "Privacy",
    },
  },
} as const;

export const routesFor = (locale: Locale) => {
  const base = locale === "en" ? "/en" : "";
  return {
    home: base === "" ? "/" : "/en",
    practice: `${base}/leistungen`,
    victim: `${base}/nebenklage`,
    about: `${base}/kanzlei`,
    insights: `${base}/insights`,
    contact: `${base}/kontakt`,
  };
};
