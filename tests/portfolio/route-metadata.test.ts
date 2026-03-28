import { describe, expect, it } from "vitest";
import { metadata as aboutMetadata } from "@/app/about/page";
import { metadata as contactMetadata } from "@/app/contact/page";
import { metadata as projectsMetadata } from "@/app/projects/page";
import { generateMetadata as generateProjectMetadata } from "@/app/projects/[id]/page";

describe("route metadata", () => {
  it("exports route-specific metadata for about, contact, and projects", () => {
    expect(aboutMetadata.title).toBe("About | 이상무 포트폴리오");
    expect(aboutMetadata.description).toBe(
      "이상무의 커리어, 핵심 강점, 개발 철학과 협업 방식을 정리한 소개 페이지"
    );
    expect(aboutMetadata.openGraph).toMatchObject({
      title: "About | 이상무 포트폴리오",
      description: "이상무의 커리어, 핵심 강점, 개발 철학과 협업 방식을 정리한 소개 페이지",
      type: "website",
      locale: "ko_KR",
      siteName: "이상무 포트폴리오",
      images: ["/opengraph-image"],
    });
    expect(aboutMetadata.twitter).toMatchObject({
      card: "summary_large_image",
      title: "About | 이상무 포트폴리오",
      description: "이상무의 커리어, 핵심 강점, 개발 철학과 협업 방식을 정리한 소개 페이지",
      images: ["/twitter-image"],
    });

    expect(contactMetadata.title).toBe("Contact | 이상무 포트폴리오");
    expect(contactMetadata.description).toBe(
      "백엔드 중심 기여와 제품 수준 협업 제안을 위한 이상무 포트폴리오 연락 페이지"
    );
    expect(contactMetadata.openGraph).toMatchObject({
      title: "Contact | 이상무 포트폴리오",
      description: "백엔드 중심 기여와 제품 수준 협업 제안을 위한 이상무 포트폴리오 연락 페이지",
      type: "website",
      locale: "ko_KR",
      siteName: "이상무 포트폴리오",
      images: ["/opengraph-image"],
    });
    expect(contactMetadata.twitter).toMatchObject({
      card: "summary_large_image",
      title: "Contact | 이상무 포트폴리오",
      description: "백엔드 중심 기여와 제품 수준 협업 제안을 위한 이상무 포트폴리오 연락 페이지",
      images: ["/twitter-image"],
    });

    expect(projectsMetadata.title).toBe("Projects | 이상무 포트폴리오");
    expect(projectsMetadata.description).toBe(
      "운영 안정성, 구조 표준화, 팀 생산성 개선 중심의 프로젝트 목록"
    );
    expect(projectsMetadata.openGraph).toMatchObject({
      title: "Projects | 이상무 포트폴리오",
      description: "운영 안정성, 구조 표준화, 팀 생산성 개선 중심의 프로젝트 목록",
      type: "website",
      locale: "ko_KR",
      siteName: "이상무 포트폴리오",
      images: ["/opengraph-image"],
    });
    expect(projectsMetadata.twitter).toMatchObject({
      card: "summary_large_image",
      title: "Projects | 이상무 포트폴리오",
      description: "운영 안정성, 구조 표준화, 팀 생산성 개선 중심의 프로젝트 목록",
      images: ["/twitter-image"],
    });
  });

  it("generates project metadata from the project title and summary", async () => {
    const metadata = await generateProjectMetadata({
      params: Promise.resolve({ id: "api-standardization" }),
    });

    expect(metadata.title).toBe("GAPCK 운영 API 표준화 및 규격 정비 | 이상무 포트폴리오");
    expect(metadata.description).toBe(
      "GAPCK 운영 환경에서 경로/응답/에러 응답 형식을 표준화해 협업 예측 가능성을 높인 작업"
    );
    expect(metadata.openGraph).toMatchObject({
      title: "GAPCK 운영 API 표준화 및 규격 정비 | 이상무 포트폴리오",
      description: "GAPCK 운영 환경에서 경로/응답/에러 응답 형식을 표준화해 협업 예측 가능성을 높인 작업",
      type: "website",
      locale: "ko_KR",
      siteName: "이상무 포트폴리오",
      images: ["/opengraph-image"],
    });
    expect(metadata.twitter).toMatchObject({
      card: "summary_large_image",
      title: "GAPCK 운영 API 표준화 및 규격 정비 | 이상무 포트폴리오",
      description: "GAPCK 운영 환경에서 경로/응답/에러 응답 형식을 표준화해 협업 예측 가능성을 높인 작업",
      images: ["/twitter-image"],
    });
  });

  it("falls back to a safe generic metadata shape for unknown project ids", async () => {
    const metadata = await generateProjectMetadata({
      params: Promise.resolve({ id: "missing-project" }),
    });

    expect(metadata.title).toBe("Project | 이상무 포트폴리오");
    expect(metadata.description).toBe("이상무 포트폴리오 프로젝트 상세 페이지");
    expect(metadata.openGraph).toMatchObject({
      title: "Project | 이상무 포트폴리오",
      description: "이상무 포트폴리오 프로젝트 상세 페이지",
      type: "website",
      locale: "ko_KR",
      siteName: "이상무 포트폴리오",
      images: ["/opengraph-image"],
    });
    expect(metadata.twitter).toMatchObject({
      card: "summary_large_image",
      title: "Project | 이상무 포트폴리오",
      description: "이상무 포트폴리오 프로젝트 상세 페이지",
      images: ["/twitter-image"],
    });
  });
});
