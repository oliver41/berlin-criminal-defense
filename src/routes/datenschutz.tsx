import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PrivacyPage } from "@/components/pages/PrivacyPage";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — Strafrechtskanzlei Nadine Antoinette Kramer" },
      { name: "description", content: "Datenschutzerklärung der Strafrechtskanzlei Berlin." },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: () => (
    <SiteLayout locale="de">
      <PrivacyPage locale="de" />
    </SiteLayout>
  ),
});
