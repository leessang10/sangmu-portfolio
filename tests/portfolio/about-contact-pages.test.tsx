import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

let pathname = "/about";

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

import { AboutPage } from "@/components/portfolio/about-page";
import { ContactPage } from "@/components/portfolio/contact-page";

describe("About and Contact pages", () => {
  beforeEach(() => {
    pathname = "/about";
  });

  it("renders the about page with strengths summary and extended profile sections", () => {
    render(<AboutPage />);

    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("heading", { level: 1, name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "핵심 강점" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "이력과 핵심 성과" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "개발 철학" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "업무 방식과 협업 원칙" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: "판단 기준과 실행 방식" })).toBeInTheDocument();
  });

  it("renders the contact page as a standalone collaboration page", () => {
    pathname = "/contact";

    render(<ContactPage />);

    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("heading", { level: 1, name: "Contact" })).toBeInTheDocument();
    expect(
      screen.getByText(/백엔드 중심으로 일하지만, 제품 수준의 협업이 필요하다면/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
      "href",
      "mailto:leessang10@gmail.com"
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/leessang10"
    );
  });
});
