import { projects } from "@/lib/portfolio-data";

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}

export function getFeaturedProjects(limit = 3) {
  return projects.slice(0, limit);
}
