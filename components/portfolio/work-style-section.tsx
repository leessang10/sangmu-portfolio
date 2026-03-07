import type { PortfolioProfile } from "@/lib/portfolio-data";

type WorkStyleSectionProps = {
  profile: PortfolioProfile;
};

export function WorkStyleSection({ profile }: WorkStyleSectionProps) {
  return (
    <section aria-labelledby="work-style-title" className="mt-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 id="work-style-title" className="text-2xl font-semibold text-white md:text-3xl">
          업무 방식과 협업 원칙
        </h2>
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Execution Playbook</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-3xl border border-white/10 bg-[#0f141d] p-6 md:p-8">
          <h3 className="text-lg font-semibold text-white">End-to-End 실행 프로세스</h3>
          <ol className="mt-5 space-y-4">
            {profile.workProcess.map((step) => (
              <li key={step.phase} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm font-medium text-cyan-200">{step.phase}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">{step.detail}</p>
              </li>
            ))}
          </ol>
        </article>

        <article className="rounded-3xl border border-white/10 bg-[#0f141d] p-6 md:p-8">
          <h3 className="text-lg font-semibold text-white">협업 철학</h3>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
            {profile.collaborationPrinciples.map((item) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Future Goal</p>
            <p className="mt-2 text-sm leading-relaxed text-cyan-50">{profile.futureGoal}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
