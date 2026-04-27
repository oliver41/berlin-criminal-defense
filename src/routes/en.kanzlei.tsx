import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { AboutPage } from "@/components/pages/AboutPage";

export const Route = createFileRoute("/en/kanzlei")({
  head: () => ({
    meta: [
      { title: "About — Berlin Criminal Law Firm" },
      {
        name: "description",
        content:
          "About the firm: focus on criminal law, certified specialist title, more than 15 years of experience in Berlin.",
      },
      { property: "og:title", content: "About — Berlin Criminal Law" },
      { property: "og:description", content: "One firm. One standard: the best defense." },
    ],
  }),
  component: () => (
    <SiteLayout locale="en">
      <AboutPage locale="en" />
    </SiteLayout>
  ),
});
