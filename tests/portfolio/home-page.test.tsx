import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

let pathname = "/";

vi.mock("next/navigation", () => ({
  usePathname: () => pathname,
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

import { HomePage } from "@/components/portfolio/home-page";

describe("HomePage", () => {
  beforeEach(() => {
    pathname = "/";
  });

  it("renders the summary home with route navigation and CTA links", () => {
    render(<HomePage />);

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("heading", { level: 1, name: "이상무" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "핵심 강점" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About 보기" })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: "Projects 보기" })).toHaveAttribute("href", "/projects");
    expect(screen.getByRole("link", { name: "Contact 보기" })).toHaveAttribute("href", "/contact");
  });

  it("shows featured projects that link to project detail routes", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { level: 2, name: "대표 프로젝트" })).toBeInTheDocument();

    const detailLinks = screen.getAllByRole("link", { name: "프로젝트 자세히 보기" });

    expect(detailLinks).toHaveLength(3);
    expect(detailLinks[0]).toHaveAttribute("href", "/projects/nestjs-migration");
    expect(detailLinks[1]).toHaveAttribute("href", "/projects/deployment-automation");
    expect(detailLinks[2]).toHaveAttribute("href", "/projects/api-standardization");
  });
});
