import Image from "next/image";
import type { PortfolioProject } from "@/lib/portfolio-data";

type ProjectCardProps = {
  project: PortfolioProject;
  onOpen: (project: PortfolioProject) => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/75 transition hover:-translate-y-0.5 hover:border-cyan-200/40 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.25)]">
      <div className="relative h-44 w-full overflow-hidden border-b border-white/10">
        {project.images[0] ? (
          <Image
            src={project.images[0]}
            alt={`${project.title} 캡처`}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center bg-[linear-gradient(135deg,#0b1c2d_0%,#12263a_45%,#0f172a_100%)] px-4 text-center">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {project.stack.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-2 py-1 text-[10px] font-medium text-cyan-200/90"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs font-medium tracking-wide text-slate-400">{project.role}</p>
          </div>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{project.period}</p>
        <h3 className="mt-2 text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.summary}</p>
        <p className="mt-3 text-xs text-cyan-200/90">{project.role}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tag) => (
            <span key={tag} className="rounded-full border border-cyan-200/25 bg-cyan-200/10 px-2.5 py-1 text-xs text-cyan-100">
              {tag}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onOpen(project)}
          className="mt-5 inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200"
        >
          자세히 보기
        </button>
      </div>
    </article>
  );
}
