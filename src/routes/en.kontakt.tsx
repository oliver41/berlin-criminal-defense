import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ContactPage } from "@/components/pages/ContactPage";

export const Route = createFileRoute("/en/kontakt")({
  head: () => ({
    meta: [
      { title: "Contact — Berlin Criminal Law Firm" },
      {
        name: "description",
        content:
          "Confidential contact — by phone, email or inquiry form. Emergency line available 24/7.",
      },
      { property: "og:title", content: "Contact — Berlin Criminal Law" },
      { property: "og:description", content: "Get in touch. Confidentially." },
    ],
  }),
  component: () => (
    <SiteLayout locale="en">
      <ContactPage locale="en" />
    </SiteLayout>
  ),
});
