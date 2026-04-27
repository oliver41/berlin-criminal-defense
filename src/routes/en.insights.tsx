import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { InsightsPage } from "@/components/pages/InsightsPage";

export const Route = createFileRoute("/en/insights")({
  head: () => ({
    meta: [
      { title: "Insights & FAQ — Berlin Criminal Law" },
      {
        name: "description",
        content:
          "Practical guidance on house searches, arrests, summons and trial procedure — and answers to the questions clients ask most.",
      },
      { property: "og:title", content: "Insights & FAQ" },
      { property: "og:description", content: "Answers when every minute counts." },
    ],
  }),
  component: () => (
    <SiteLayout locale="en">
      <InsightsPage locale="en" />
    </SiteLayout>
  ),
});
