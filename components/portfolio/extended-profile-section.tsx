import type { PortfolioProfile } from "@/lib/portfolio-data";

type ExtendedProfileSectionProps = {
  profile: PortfolioProfile;
};

export function ExtendedProfileSection({ profile }: ExtendedProfileSectionProps) {
  return (
    <section aria-labelledby="extended-profile-title" className="mt-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 id="extended-profile-title" className="text-2xl font-semibold text-white md:text-3xl">
          판단 기준과 실행 방식
        </h2>
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Deep Dive</p>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <article className="rounded-3xl border border-white/10 bg-[#0f141d] p-6">
          <h3 className="text-base font-semibold text-white">가치 있는 것의 기준</h3>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300">
            {profile.valueCriteria.valuable.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mt-5 text-base font-semibold text-white">제대로 만든 것의 기준</h3>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300">
            {profile.valueCriteria.doneRight.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-white/10 bg-[#0f141d] p-6">
          <h3 className="text-base font-semibold text-white">기술 도입 원칙</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            새 기술은 재미보다 문제 적합성과 팀 운영 효율을 기준으로 판단합니다.
          </p>
          <ol className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300">
            {profile.techAdoptionPrinciples.map((item, index) => (
              <li key={item} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                {index + 1}. {item}
              </li>
            ))}
          </ol>
        </article>

        <article className="rounded-3xl border border-white/10 bg-[#0f141d] p-6">
          <h3 className="text-base font-semibold text-white">AI 기반 업무 전환</h3>

          <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-500">Before</p>
          <ul className="mt-2 space-y-2 text-sm leading-relaxed text-slate-300">
            {profile.aiWorkflow.before.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-4 text-xs uppercase tracking-[0.16em] text-cyan-300">Now</p>
          <ul className="mt-2 space-y-2 text-sm leading-relaxed text-slate-300">
            {profile.aiWorkflow.now.map((item) => (
              <li key={item} className="rounded-xl border border-cyan-300/25 bg-cyan-300/10 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-4 rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-sm leading-relaxed text-cyan-100">
            {profile.aiWorkflow.impact}
          </p>
        </article>
      </div>
    </section>
  );
}
