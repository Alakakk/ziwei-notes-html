import type { ReactNode } from "react";
import { PageShell } from "./PageShell";
import { PrimaryNav } from "./PrimaryNav";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { SiteTopBar } from "./SiteTopBar";

type SiteLayoutProps = {
  children: ReactNode;
  activePath?: string;
};

export function SiteLayout({ children, activePath = "/" }: SiteLayoutProps) {
  return (
    <div className="site-layout">
      <SiteTopBar />
      <SiteHeader />
      <PrimaryNav activePath={activePath} />
      <PageShell>{children}</PageShell>
      <SiteFooter />
    </div>
  );
}
