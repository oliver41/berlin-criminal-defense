import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { InsightsPage } from "@/components/pages/InsightsPage";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights & FAQ — Strafrecht Berlin" },
      {
        name: "description",
        content:
          "Praktische Hinweise zu Hausdurchsuchung, Festnahme, Vorladung und Strafverfahren — sowie Antworten auf häufige Mandantenfragen.",
      },
      { property: "og:title", content: "Insights & FAQ — Strafrecht Berlin" },
      { property: "og:description", content: "Antworten, wenn jede Minute zählt." },
    ],
  }),
  component: () => (
    <SiteLayout locale="de">
      <InsightsPage locale="de" />
    </SiteLayout>
  ),
});
