import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ImprintPage } from "@/components/pages/ImprintPage";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Strafrechtskanzlei Nadine Antoinette Kramer" },
      { name: "description", content: "Impressum und Anbieterkennzeichnung gemäß § 5 TMG." },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: () => (
    <SiteLayout locale="de">
      <ImprintPage locale="de" />
    </SiteLayout>
  ),
});
