import Image from "next/image";
import Link from "next/link";
import type { PortfolioProject } from "@/lib/portfolio-data";
import { SiteShell } from "@/components/portfolio/site-shell";

type ProjectDetailPageProps = {
  project: PortfolioProject;
};

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <SiteShell>
      <article className="space-y-10">
        <section className="rounded-3xl border border-white/10 bg-[#0f141d] p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <span>{project.period}</span>
            <span className="text-slate-600">/</span>
            <span>{project.role}</span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">{project.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              프로젝트 목록으로 돌아가기
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-200"
            >
              협업 문의하기
            </Link>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-[1fr_0.95fr]">
          <article className="rounded-3xl border border-white/10 bg-[#0f141d] p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-white">주요 기여</h2>
            <ul className="mt-5 space-y-3">
              {project.contributions.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-white/10 bg-[#0f141d] p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-white">결과</h2>
            <ul className="mt-5 space-y-3">
              {project.outcomes.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm leading-relaxed text-cyan-50"
                >
                  {item}
                </li>
              ))}
            </ul>

            {project.links.length > 0 ? (
              <div className="mt-6 space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Links
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={`${link.type}-${link.href}`}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/20 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </article>
        </section>

        <section className="rounded-3xl border border-white/10 bg-[#0f141d] p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-white">프로젝트 이미지</h2>
          {project.images.length > 0 ? (
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {project.images.map((image, index) => (
                <div
                  key={image}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220]"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={image}
                      alt={`${project.title} 이미지 ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              공개 가능한 이미지 자산은 없지만, 역할과 기여 내용은 상세히 정리해 두었습니다.
            </p>
          )}
        </section>
      </article>
    </SiteShell>
  );
}
