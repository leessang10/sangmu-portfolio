import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/portfolio/project-detail-page";
import { getProjectById } from "@/lib/portfolio-queries";
import { createPortfolioMetadata } from "@/lib/portfolio-metadata";

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return createPortfolioMetadata(
      "Project | 이상무 포트폴리오",
      "이상무 포트폴리오 프로젝트 상세 페이지"
    );
  }

  return createPortfolioMetadata(
    `${project.title} | 이상무 포트폴리오`,
    project.summary
  );
}

export default async function Page({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
