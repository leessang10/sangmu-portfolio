import type { PortfolioProject } from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/portfolio/project-card";

type ProjectGridSectionProps = {
  projects: PortfolioProject[];
  title?: string;
  className?: string;
};

export function ProjectGridSection({
  projects,
  title = "대표 프로젝트",
  className,
}: ProjectGridSectionProps) {
  return (
    <section aria-labelledby="projects-title" className={`mt-16 ${className ?? ""}`.trim()}>
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 id="projects-title" className="text-2xl font-semibold text-white md:text-3xl">
          {title}
        </h2>
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Selected {projects.length} Works</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
