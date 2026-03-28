import { CareerHighlightsSection } from "@/components/portfolio/career-highlights-section";
import { ExtendedProfileSection } from "@/components/portfolio/extended-profile-section";
import { PhilosophySection } from "@/components/portfolio/philosophy-section";
import { SiteShell } from "@/components/portfolio/site-shell";
import { WorkStyleSection } from "@/components/portfolio/work-style-section";
import { portfolioProfile } from "@/lib/portfolio-data";

function StrengthsSummary() {
  return (
    <section aria-labelledby="about-strengths-title" className="mt-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 id="about-strengths-title" className="text-2xl font-semibold text-white md:text-3xl">
          핵심 강점
        </h2>
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Core Strengths</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-3xl border border-white/10 bg-[#0f141d] p-6">
          <h3 className="text-base font-semibold text-white">문제 정의부터 운영까지</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            요구사항 해석, 백엔드 구조 설계, 배포와 운영 대응까지 한 흐름으로 책임집니다.
          </p>
        </article>
        <article className="rounded-3xl border border-white/10 bg-[#0f141d] p-6">
          <h3 className="text-base font-semibold text-white">표준화와 팀 효율 개선</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            반복 작업을 자동화하고 구조 표준을 정리해 팀 전체 생산성을 높이는 방향으로 일합니다.
          </p>
        </article>
        <article className="rounded-3xl border border-white/10 bg-[#0f141d] p-6">
          <h3 className="text-base font-semibold text-white">빠른 검증, 안정적 완성</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            AI 기반 빠른 검증 사이클을 활용하되 운영 가능한 품질 기준을 끝까지 유지합니다.
          </p>
        </article>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <SiteShell>
      <section className="rounded-3xl border border-white/10 bg-[#0f141d] p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Profile</p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">About</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
          {portfolioProfile.headline}
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-400 md:text-base">
          {portfolioProfile.intro}
        </p>
      </section>

      <StrengthsSummary />
      <CareerHighlightsSection profile={portfolioProfile} />
      <PhilosophySection profile={portfolioProfile} />
      <WorkStyleSection profile={portfolioProfile} />
      <ExtendedProfileSection profile={portfolioProfile} />
    </SiteShell>
  );
}
