import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import type { Locale } from "@/lib/i18n";

export function SiteLayout({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
