import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PrivacyPage } from "@/components/pages/PrivacyPage";

export const Route = createFileRoute("/en/datenschutz")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Strafrechtskanzlei Nadine Antoinette Kramer" },
      { name: "description", content: "Privacy policy of the Berlin criminal law firm." },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: () => (
    <SiteLayout locale="en">
      <PrivacyPage locale="en" />
    </SiteLayout>
  ),
});
