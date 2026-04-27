import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { VictimPage } from "@/components/pages/VictimPage";

export const Route = createFileRoute("/nebenklage")({
  head: () => ({
    meta: [
      { title: "Nebenklage & Opfervertretung — Strafrecht Berlin" },
      {
        name: "description",
        content:
          "Engagierte Nebenklagevertretung in Berlin. Wir begleiten Verletzte schwerer Straftaten und ihre Angehörigen durch das gesamte Strafverfahren.",
      },
      { property: "og:title", content: "Nebenklage & Opfervertretung" },
      { property: "og:description", content: "Würdige und durchsetzungsstarke Vertretung von Verletzten." },
    ],
  }),
  component: () => (
    <SiteLayout locale="de">
      <VictimPage locale="de" />
    </SiteLayout>
  ),
});
