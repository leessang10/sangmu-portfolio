import type { Metadata } from "next";
import { AboutPage } from "@/components/portfolio/about-page";
import { createPortfolioMetadata } from "@/lib/portfolio-metadata";

export const metadata: Metadata = createPortfolioMetadata(
  "About | 이상무 포트폴리오",
  "이상무의 커리어, 핵심 강점, 개발 철학과 협업 방식을 정리한 소개 페이지"
);

export default function Page() {
  return <AboutPage />;
}
