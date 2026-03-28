import { describe, expect, it } from "vitest";
import { getFeaturedProjects, getProjectById } from "@/lib/portfolio-queries";

describe("portfolio queries", () => {
  it("returns a project for a known id", () => {
    expect(getProjectById("nestjs-migration")?.title).toBe("Express.js -> NestJS 표준 전환");
  });

  it("returns undefined for an unknown id", () => {
    expect(getProjectById("missing-project")).toBeUndefined();
  });

  it("returns three featured projects for the home page", () => {
    expect(getFeaturedProjects().map((project) => project.id)).toEqual([
      "nestjs-migration",
      "deployment-automation",
      "api-standardization",
    ]);
  });

  it("respects the requested featured project limit", () => {
    expect(getFeaturedProjects(2).map((project) => project.id)).toEqual([
      "nestjs-migration",
      "deployment-automation",
    ]);
  });
});
