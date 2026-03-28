import Link from "next/link";
import { ProjectGridSection } from "@/components/portfolio/project-grid-section";
import { SiteShell } from "@/components/portfolio/site-shell";
import { getAllProjects } from "@/lib/portfolio-queries";

export function ProjectsPage() {
  return (
    <SiteShell>
      <section className="rounded-3xl border border-white/10 bg-[#0f141d] p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">Portfolio Archive</p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Projects</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
          운영 안정성, 구조 표준화, 팀 생산성 개선을 중심으로 진행한 프로젝트들을 정리했습니다.
          각 상세 페이지에서 역할, 기여, 결과를 확인할 수 있습니다.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            협업 문의하기
          </Link>
        </div>
      </section>

      <ProjectGridSection projects={getAllProjects()} title="전체 프로젝트" className="mt-10" />
    </SiteShell>
  );
}
