"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "커리어", href: "#career" },
  { label: "철학", href: "#philosophy" },
  { label: "프로젝트", href: "#projects" },
  { label: "일하는 방식", href: "#work-style" },
  { label: "연락처", href: "#contact" },
] as const;

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.slice(1));

export function NavBar() {
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 z-40 -translate-x-1/2 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-4 pointer-events-none opacity-0"
      }`}
    >
      <div className="flex items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-[#0f141d]/70 px-2 py-1.5 backdrop-blur-xl md:gap-2 md:px-3">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.href}
            type="button"
            onClick={() => {
              document
                .querySelector(item.href)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition md:text-sm ${
              activeId === item.href.slice(1)
                ? "bg-cyan-300/15 text-cyan-300"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
