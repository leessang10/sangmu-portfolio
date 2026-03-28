"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-4 left-1/2 z-40 -translate-x-1/2">
      <div className="flex items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-[#0f141d]/70 px-2 py-1.5 backdrop-blur-xl md:gap-2 md:px-3">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition md:text-sm ${
              pathname === item.href
                ? "bg-cyan-300/15 text-cyan-300"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
