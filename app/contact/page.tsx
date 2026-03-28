import type { Metadata } from "next";
import { ContactPage } from "@/components/portfolio/contact-page";
import { createPortfolioMetadata } from "@/lib/portfolio-metadata";

export const metadata: Metadata = createPortfolioMetadata(
  "Contact | 이상무 포트폴리오",
  "백엔드 중심 기여와 제품 수준 협업 제안을 위한 이상무 포트폴리오 연락 페이지"
);

export default function Page() {
  return <ContactPage />;
}
