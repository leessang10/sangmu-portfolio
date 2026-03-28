import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

let pathname = "/projects";
const { notFound } = vi.hoisted(() => ({
  notFound: vi.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  }),
}));

vi.mock("next/navigation", () => ({
  usePathname: () => pathname,
  notFound,
}));

vi.mock("next/image", () => ({
  default: (props: React.ComponentProps<"img"> & { fill?: boolean }) => {
    const imageProps = { ...props };
    delete imageProps.fill;

    // eslint-disable-next-line @next/next/no-img-element
    return <img {...imageProps} alt={props.alt ?? ""} />;
  },
}));

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

class MockIntersectionObserver {
  observe() {}
  disconnect() {}
}

vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

import { ProjectsPage } from "@/components/portfolio/projects-page";
import ProjectDetailRoute from "@/app/projects/[id]/page";

describe("Projects routes", () => {
  beforeEach(() => {
    pathname = "/projects";
    notFound.mockClear();
  });

  it("renders the projects index with the full project list", () => {
    render(<ProjectsPage />);

    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("heading", { level: 1, name: "Projects" })).toBeInTheDocument();
    expect(screen.getByText("Selected 7 Works")).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: "Express.js -> NestJS 표준 전환 프로젝트 자세히 보기",
      })
    ).toHaveAttribute("href", "/projects/nestjs-migration");
    expect(
      screen.getByRole("link", {
        name: "급여명세서 PDF 제작기 프로젝트 자세히 보기",
      })
    ).toHaveAttribute("href", "/projects/payslip");
  });

  it("renders a project detail page with project data and navigation links", async () => {
    pathname = "/projects/api-standardization";

    render(await ProjectDetailRoute({ params: Promise.resolve({ id: "api-standardization" }) }));

    expect(
      screen.getByRole("heading", { level: 1, name: "GAPCK 운영 API 표준화 및 규격 정비" })
    ).toBeInTheDocument();
    expect(screen.getByText("Backend / Integrator")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "프로젝트 목록으로 돌아가기" })).toHaveAttribute(
      "href",
      "/projects"
    );
    expect(screen.getByRole("link", { name: "협업 문의하기" })).toHaveAttribute(
      "href",
      "/contact"
    );
  });

  it("calls notFound for an unknown project id", async () => {
    await expect(
      ProjectDetailRoute({ params: Promise.resolve({ id: "missing-project" }) })
    ).rejects.toThrow("NEXT_NOT_FOUND");

    expect(notFound).toHaveBeenCalledTimes(1);
  });
});
