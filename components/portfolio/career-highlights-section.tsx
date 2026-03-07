import type { PortfolioProfile } from "@/lib/portfolio-data";

type CareerHighlightsSectionProps = {
  profile: PortfolioProfile;
};

export function CareerHighlightsSection({ profile }: CareerHighlightsSectionProps) {
  return (
    <section id="career" aria-labelledby="career-title" className="mt-16 scroll-mt-24">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 id="career-title" className="text-2xl font-semibold text-white md:text-3xl">
          이력과 핵심 성과
        </h2>
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Career Snapshot</p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-[#0f141d] p-6 md:p-8">
        <div className="grid gap-4 text-sm leading-relaxed text-slate-300 md:text-base">
          {profile.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <ul className="mt-8 grid gap-4 xl:grid-cols-2">
          {profile.highlights.map((highlight) => (
            <li key={highlight.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-base font-semibold text-white md:text-lg">{highlight.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                <span className="font-medium text-slate-100">상황:</span> {highlight.situation}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                <span className="font-medium text-slate-100">실행:</span> {highlight.action}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-cyan-100">
                <span className="font-medium text-cyan-200">결과:</span> {highlight.result}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
