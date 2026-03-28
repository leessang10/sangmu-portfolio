import { render, screen } from "@testing-library/react";
import { afterAll, beforeEach, expect, it, vi } from "vitest";

let pathname = "/";

vi.mock("next/navigation", () => ({
  usePathname: () => pathname,
}));

class MockIntersectionObserver {
  observe() {}
  disconnect() {}
}

vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

import { NavBar } from "@/components/portfolio/nav-bar";

beforeEach(() => {
  pathname = "/";
});

afterAll(() => {
  vi.unstubAllGlobals();
});

it("renders the section navigation by default", () => {
  render(<NavBar />);

  expect(screen.getByRole("button", { name: "프로젝트" })).toBeInTheDocument();
  expect(screen.queryByRole("link", { name: "Projects" })).not.toBeInTheDocument();
});

it("renders route navigation in route mode", () => {
  pathname = "/projects";

  render(<NavBar mode="routes" />);

  expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute("aria-current", "page");
  expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
});

it("keeps projects active for descendant routes", () => {
  pathname = "/projects/some-id";

  render(<NavBar mode="routes" />);

  expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute("aria-current", "page");
  expect(screen.getByRole("link", { name: "About" })).not.toHaveAttribute("aria-current");
});
