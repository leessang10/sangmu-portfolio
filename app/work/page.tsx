import Image from "next/image";
import Link from "next/link";
import { PageFrame } from "@/components/site-chrome";
import { projects } from "@/lib/portfolio-data";

export default function WorkPage() {
  return (
    <PageFrame>
      <section className="mx-auto max-w-[1672px] px-5 md:px-20">
        <div className="grid overflow-hidden border border-white/10 bg-[#0d0f0d] lg:grid-cols-[0.42fr_0.58fr]">
          <div className="flex min-h-[360px] flex-col justify-center border-b border-white/10 p-8 lg:min-h-[520px] lg:border-b-0 lg:border-r lg:p-14">
            <p className="text-xs uppercase tracking-[0.24em] text-[#c2ff57]">Work</p>
            <h1 className="mt-10 max-w-xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] text-white md:text-6xl xl:text-7xl">
              운영까지 이어진 작업.
            </h1>
            <div className="mt-10 h-px w-24 bg-[#c2ff57]" />
            <p className="mt-10 max-w-md text-lg leading-relaxed text-white/62">
              백엔드, 플랫폼, 관리자 기능을 실제 서비스 기준으로 만들고 정리했습니다.
            </p>
          </div>

          <div className="divide-y divide-white/10 bg-[#111410]">
            {projects.slice(0, 4).map((project, index) => (
              <Link
                key={project.id}
                href={`/work/${project.id}`}
                className="group grid gap-5 p-6 transition hover:bg-[#171b15] md:grid-cols-[7rem_1fr_auto] md:items-center md:p-8"
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
                  <p className="text-xs uppercase tracking-[0.18em] text-white/38">{project.period} / {project.role}</p>
                  <h2 className="mt-3 text-2xl font-medium tracking-[-0.04em] text-white md:text-3xl">{project.title}</h2>
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

      <section className="mx-auto mt-8 max-w-[1672px] px-5 md:px-20">
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(4).map((project) => (
            <Link key={project.id} href={`/work/${project.id}`} className="bg-[#0d0f0d] p-8 hover:bg-[#151815]">
              <p className="text-xs uppercase tracking-[0.2em] text-white/42">{project.period}</p>
              <h2 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-white">{project.title}</h2>
              <p className="mt-5 text-sm leading-relaxed text-white/58">{project.summary}</p>
              <p className="mt-8 text-xs uppercase tracking-[0.18em] text-[#c2ff57]">{project.role}</p>
            </Link>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
