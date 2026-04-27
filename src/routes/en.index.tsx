import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { HomePage } from "@/components/pages/HomePage";

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: "Berlin Criminal Law Firm — Defense & Victim Representation" },
      {
        name: "description",
        content:
          "Criminal defense attorney in Berlin: discreet, decisive defense across all areas of criminal law, plus dedicated victim representation (Nebenklage).",
      },
      { property: "og:title", content: "Berlin Criminal Law Firm" },
      { property: "og:description", content: "Criminal defense and victim representation in Berlin." },
    ],
  }),
  component: () => (
    <SiteLayout locale="en">
      <HomePage locale="en" />
    </SiteLayout>
  ),
});
