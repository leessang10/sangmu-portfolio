import type { PortfolioProject } from "@/lib/portfolio-data";
import { ProjectCard } from "@/components/portfolio/project-card";

type ProjectGridSectionProps = {
  projects: PortfolioProject[];
  onOpenProject: (project: PortfolioProject) => void;
};

export function ProjectGridSection({ projects, onOpenProject }: ProjectGridSectionProps) {
  return (
    <section id="projects" aria-labelledby="projects-title" className="mt-16 scroll-mt-24">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 id="projects-title" className="text-2xl font-semibold text-white md:text-3xl">
          대표 프로젝트
        </h2>
        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Selected {projects.length} Works</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={onOpenProject} />
        ))}
      </div>
    </section>
  );
}
