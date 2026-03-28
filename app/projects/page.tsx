import type { Metadata } from "next";
import { ProjectsPage } from "@/components/portfolio/projects-page";
import { createPortfolioMetadata } from "@/lib/portfolio-metadata";

export const metadata: Metadata = createPortfolioMetadata(
  "Projects | 이상무 포트폴리오",
  "운영 안정성, 구조 표준화, 팀 생산성 개선 중심의 프로젝트 목록"
);

export default function Page() {
  return <ProjectsPage />;
}
