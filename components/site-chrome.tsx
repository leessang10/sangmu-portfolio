import Link from "next/link";

export function SiteNav() {
  return (
    <header className="mx-auto flex max-w-[1672px] items-center justify-between px-5 py-6 text-xs uppercase tracking-[0.18em] text-white/62 md:px-20">
      <Link href="/" className="font-semibold text-white">
        Sangmu Lee
      </Link>
      <nav className="flex gap-4 text-[0.65rem] md:gap-7 md:text-xs">
        <Link href="/work" className="hover:text-[#c2ff57]">Work</Link>
        <Link href="/about" className="hover:text-[#c2ff57]">About</Link>
        <Link href="/contact" className="hover:text-[#c2ff57]">Contact</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-8 flex max-w-[1672px] flex-col gap-3 border-t border-white/10 px-5 py-8 text-xs uppercase tracking-[0.18em] text-white/38 md:flex-row md:items-center md:justify-between md:px-20">
      <p>Built by Lee Sangmu. Updated July 2026.</p>
      <p>Next.js / TypeScript / Tailwind</p>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050607] text-[#f3f1e8]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_78%_6%,rgba(194,255,87,0.12),transparent_25%),linear-gradient(180deg,#050607,#10120f_45%,#050607)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(243,241,232,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(243,241,232,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <SiteNav />
      {children}
      <SiteFooter />
    </main>
  );
}
