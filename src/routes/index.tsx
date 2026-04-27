import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { HomePage } from "@/components/pages/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kanzlei Strafrecht Berlin — Strafverteidigung & Opfervertretung" },
      {
        name: "description",
        content:
          "Strafverteidiger in Berlin: diskrete und entschiedene Verteidigung in allen Bereichen des Strafrechts sowie engagierte Nebenklagevertretung.",
      },
      { property: "og:title", content: "Kanzlei Strafrecht Berlin" },
      { property: "og:description", content: "Strafverteidigung und Opfervertretung in Berlin." },
    ],
  }),
  component: () => (
    <SiteLayout locale="de">
      <HomePage locale="de" />
    </SiteLayout>
  ),
});
