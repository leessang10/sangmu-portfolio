import { render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({
  usePathname: () => "/projects",
}));

class MockIntersectionObserver {
  observe() {}
  disconnect() {}
}

vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

import { NavBar } from "@/components/portfolio/nav-bar";

it("marks the current route as active", () => {
  render(<NavBar />);

  expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
    "aria-current",
    "page"
  );
  expect(screen.getByRole("link", { name: "About" })).not.toHaveAttribute("aria-current");
});
