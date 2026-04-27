import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { VictimPage } from "@/components/pages/VictimPage";

export const Route = createFileRoute("/en/nebenklage")({
  head: () => ({
    meta: [
      { title: "Victim Advocacy (Nebenklage) — Berlin Criminal Law" },
      {
        name: "description",
        content:
          "Dedicated victim representation in Berlin. We accompany victims of serious crimes and their families through the entire criminal proceedings.",
      },
      { property: "og:title", content: "Victim Advocacy — Berlin" },
      { property: "og:description", content: "Dignified, assertive representation of victims." },
    ],
  }),
  component: () => (
    <SiteLayout locale="en">
      <VictimPage locale="en" />
    </SiteLayout>
  ),
});
