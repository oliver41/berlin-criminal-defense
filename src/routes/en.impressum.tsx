import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ImprintPage } from "@/components/pages/ImprintPage";

export const Route = createFileRoute("/en/impressum")({
  head: () => ({
    meta: [
      { title: "Imprint — Strafrechtskanzlei Nadine Antoinette Kramer" },
      { name: "description", content: "Imprint and provider identification under § 5 TMG." },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: () => (
    <SiteLayout locale="en">
      <ImprintPage locale="en" />
    </SiteLayout>
  ),
});
