import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/portfolio/project-detail-page";
import { getProjectById } from "@/lib/portfolio-queries";

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
