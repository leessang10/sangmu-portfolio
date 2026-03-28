import { HeroSection } from "@/components/portfolio/hero-section";
import { ProjectGridSection } from "@/components/portfolio/project-grid-section";
import { SiteShell } from "@/components/portfolio/site-shell";
import { portfolioProfile } from "@/lib/portfolio-data";
import { getFeaturedProjects } from "@/lib/portfolio-queries";

function KeyStrengthsSummary() {
  return (
    <section aria-labelledby="home-strengths-title" className="mt-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 id="home-strengths-title" className="text-2xl font-semibold text-white md:text-3xl">
          핵심 강점
        </h2>
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Summary Snapshot</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-3xl border border-white/10 bg-[#0f141d] p-6 md:p-8">
          <p className="text-sm leading-relaxed text-slate-300 md:text-base">
            백엔드 중심으로 일하지만 요구사항 정리, 연동 구조 설계, 운영 안정성 확보까지 제품 단위로
            책임지는 방식에 강점이 있습니다. 빠른 검증과 장기 유지보수 기준을 함께 맞추는 역할을 맡아
            왔습니다.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {portfolioProfile.badges.map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100"
              >
                {badge}
              </li>
            ))}
          </ul>
        </article>

        <div className="grid gap-4 md:grid-cols-3">
          {portfolioProfile.highlights.slice(0, 3).map((highlight) => (
            <article
              key={highlight.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="text-base font-semibold text-white">{highlight.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{highlight.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <SiteShell>
      <HeroSection profile={portfolioProfile} />
      <KeyStrengthsSummary />
      <ProjectGridSection projects={getFeaturedProjects()} />
    </SiteShell>
  );
}
