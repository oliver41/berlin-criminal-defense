import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PracticePage } from "@/components/pages/PracticePage";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen — Kanzlei Strafrecht Berlin" },
      {
        name: "description",
        content:
          "Strafverteidigung in allen Bereichen: Allgemeines Strafrecht, Wirtschafts- und Steuerstrafrecht, BtMG, Verkehrs-, Sexual- und Jugendstrafrecht.",
      },
      { property: "og:title", content: "Leistungen — Strafrecht Berlin" },
      { property: "og:description", content: "Alle Schwerpunkte der Strafverteidigung." },
    ],
  }),
  component: () => (
    <SiteLayout locale="de">
      <PracticePage locale="de" />
    </SiteLayout>
  ),
});
