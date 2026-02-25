import type { PortfolioProfile } from "@/lib/portfolio-data";

type PhilosophySectionProps = {
  profile: PortfolioProfile;
};

export function PhilosophySection({ profile }: PhilosophySectionProps) {
  return (
    <section aria-labelledby="philosophy-title" className="mt-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 id="philosophy-title" className="text-2xl font-semibold text-white md:text-3xl">
          개발 철학
        </h2>
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Engineering Principles</p>
      </div>
      <ul className="grid gap-4 md:grid-cols-2">
        {profile.philosophy.map((item) => (
          <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-relaxed text-slate-300 md:text-base">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
