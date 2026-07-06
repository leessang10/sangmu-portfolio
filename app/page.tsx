import Image from "next/image";
import Link from "next/link";
import { PageFrame } from "@/components/site-chrome";
import { portfolioProfile, projects } from "@/lib/portfolio-data";

export default function Page() {
  return (
    <PageFrame>
      <section className="relative -mt-[88px] min-h-[100dvh] overflow-hidden">
        <Image
          src="/generated/hero-workbench.webp"
          alt="어두운 개발자 작업대"
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,7,0.35),rgba(5,6,7,0.18)_35%,rgba(5,6,7,0.92)),linear-gradient(90deg,rgba(5,6,7,0.58),rgba(5,6,7,0.1),rgba(5,6,7,0.58))]" />

        <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1672px] flex-col justify-end px-5 pb-20 pt-32 text-center md:px-20">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#c2ff57]">
            Portfolio 2026 / {portfolioProfile.role}
          </p>
          <h1 className="mx-auto max-w-6xl text-[clamp(4.5rem,11vw,10rem)] font-medium leading-[0.86] tracking-[-0.06em] text-white">
            Builds that hold<span className="text-[#c2ff57]">.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-xl leading-relaxed text-white/78">
            문제부터 운영까지 끝까지 만드는 개발자
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/work" className="rounded-full bg-[#c2ff57] px-12 py-4 text-base font-semibold text-[#11140d] hover:bg-white">
              작업 보기
            </Link>
            <Link href="/contact" className="border-b border-white/40 px-4 py-4 text-base font-semibold text-white/82 hover:border-[#c2ff57] hover:text-[#c2ff57]">
              연락하기
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-[1672px] px-5 md:px-20">
        <div className="grid overflow-hidden border border-white/10 bg-[#0d0f0d] lg:grid-cols-[0.4fr_0.6fr]">
          <div className="flex min-h-[360px] flex-col justify-center border-b border-white/10 p-8 lg:min-h-[520px] lg:border-b-0 lg:border-r lg:p-14">
            <p className="text-xs uppercase tracking-[0.24em] text-[#c2ff57]">Work preview</p>
            <h2 className="mt-10 max-w-xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] text-white md:text-6xl xl:text-7xl">
              실제 서비스에 붙인 작업.
            </h2>
            <div className="mt-10 h-px w-24 bg-[#c2ff57]" />
            <p className="mt-10 max-w-md text-lg leading-relaxed text-white/62">
              백엔드, 플랫폼, 관리자 기능 중심으로 만들고 운영한 프로젝트입니다.
            </p>
            <Link href="/work" className="mt-12 w-fit border-b border-[#c2ff57] pb-2 text-lg text-[#c2ff57]">
              전체 작업 보기 →
            </Link>
          </div>

          <div className="divide-y divide-white/10 bg-[#111410]">
            {projects.slice(0, 4).map((project, index) => (
              <Link
                key={project.id}
                href={`/work/${project.id}`}
                className="group grid gap-5 p-6 transition hover:bg-[#171b15] md:grid-cols-[6.5rem_1fr_auto] md:items-center md:p-7"
              >
                <div className="relative h-24 w-28 overflow-hidden border border-white/14 bg-black md:h-28">
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} 화면`}
                    fill
                    className="object-cover opacity-70 saturate-[0.7] transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute left-0 top-0 bg-black/80 px-3 py-2 font-mono text-xs text-[#c2ff57]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/38">{project.role}</p>
                  <h3 className="mt-3 text-2xl font-medium tracking-[-0.04em] text-white md:text-3xl">{project.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/58">{project.summary}</p>
                </div>
                <span className="text-3xl text-[#c2ff57] transition group-hover:translate-x-1" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
