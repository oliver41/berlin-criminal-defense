import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ContactPage } from "@/components/pages/ContactPage";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Kanzlei Strafrecht Berlin" },
      {
        name: "description",
        content:
          "Vertrauliche Kontaktaufnahme — telefonisch, per E-Mail oder über das Anfrageformular. Notfallnummer 24/7 erreichbar.",
      },
      { property: "og:title", content: "Kontakt — Strafrecht Berlin" },
      { property: "og:description", content: "Sprechen Sie mit uns. Vertraulich." },
    ],
  }),
  component: () => (
    <SiteLayout locale="de">
      <ContactPage locale="de" />
    </SiteLayout>
  ),
});
