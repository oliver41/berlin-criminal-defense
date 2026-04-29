import type { ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import type { Locale } from "@/lib/i18n";

export function SiteLayout({ locale, children }: { locale: Locale; children: ReactNode }) {
  const { pathname } = useLocation();
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header locale={locale} />
      <main key={pathname} className="flex-1 page-fade">
        {children}
      </main>
      <Footer locale={locale} />
    </div>
  );
}
