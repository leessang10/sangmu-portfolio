import type { ReactNode } from "react";
import { NavBar } from "@/components/portfolio/nav-bar";
import { SiteFooter } from "@/components/portfolio/footer";

type SiteShellProps = {
  children: ReactNode;
  className?: string;
};

export function SiteShell({ children, className }: SiteShellProps) {
  return (
    <main className={`min-h-screen bg-[#080c12] text-slate-100 ${className ?? ""}`.trim()}>
      <NavBar mode="routes" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(6,182,212,0.14),transparent_32%)]" />
      <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-8 md:py-14">
        {children}
        <SiteFooter />
      </div>
    </main>
  );
}
