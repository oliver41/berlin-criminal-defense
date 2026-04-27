import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { AboutPage } from "@/components/pages/AboutPage";

export const Route = createFileRoute("/kanzlei")({
  head: () => ({
    meta: [
      { title: "Kanzlei — Fachanwalt für Strafrecht Berlin" },
      {
        name: "description",
        content:
          "Über die Kanzlei: Spezialisierung auf Strafrecht, Fachanwaltstitel, über 15 Jahre Erfahrung in Berlin.",
      },
      { property: "og:title", content: "Kanzlei — Fachanwalt für Strafrecht" },
      { property: "og:description", content: "Eine Kanzlei. Ein Anspruch: beste Verteidigung." },
    ],
  }),
  component: () => (
    <SiteLayout locale="de">
      <AboutPage locale="de" />
    </SiteLayout>
  ),
});
