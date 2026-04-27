import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PracticePage } from "@/components/pages/PracticePage";

export const Route = createFileRoute("/en/leistungen")({
  head: () => ({
    meta: [
      { title: "Practice Areas — Berlin Criminal Law Firm" },
      {
        name: "description",
        content:
          "Criminal defense across all fields: general criminal law, business & tax crime, drug offenses, traffic, sexual and juvenile criminal law.",
      },
      { property: "og:title", content: "Practice Areas — Berlin Criminal Law" },
      { property: "og:description", content: "Criminal law in its full breadth." },
    ],
  }),
  component: () => (
    <SiteLayout locale="en">
      <PracticePage locale="en" />
    </SiteLayout>
  ),
});
