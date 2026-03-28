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

import { SiteShell } from "@/components/portfolio/site-shell";

it("renders shared chrome around page content", () => {
  render(
    <SiteShell>
      <div>Page body</div>
    </SiteShell>
  );

  expect(screen.getByText("Page body")).toBeInTheDocument();
  expect(screen.getByRole("navigation")).toBeInTheDocument();
  expect(screen.getByText("Built by Lee Sangmu. Updated March 2026.")).toBeInTheDocument();
});
