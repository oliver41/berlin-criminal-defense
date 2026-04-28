export type Locale = "de" | "en";

export const dict = {
  de: {
    nav: {
      home: "Startseite",
      practice: "Leistungen",
      victim: "Nebenklage",
      insights: "Soforthilfe",
      about: "Kanzlei",
      contact: "Kontakt",
    },
    cta: {
      consult: "Erstberatung anfragen",
      call: "Jetzt anrufen",
    },
    firmName: "Strafrechtskanzlei Nadine Antoinette Kramer",
    firmTagline: "Strafverteidigung & Opfervertretung",
    contact: {
      phone: "030 629 383 59",
      emergency: "01579 236 36 09",
      email: "nk.strafrecht@gmail.com",
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
      insights: "Immediate Help",
      about: "About",
      contact: "Contact",
    },
    cta: {
      consult: "Request a consultation",
      call: "Call now",
    },
    firmName: "Strafrechtskanzlei Nadine Antoinette Kramer",
    firmTagline: "Criminal Defense & Victim Representation",
    contact: {
      phone: "030 629 383 59",
      emergency: "01579 236 36 09",
      email: "nk.strafrecht@gmail.com",
      address: ["Alt-Moabit 110", "10559 Berlin"],
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
    insights: `${base}/insights`,
    about: `${base}/kanzlei`,
    contact: `${base}/kontakt`,
    imprint: `${base}/impressum`,
    privacy: `${base}/datenschutz`,
  };
};
