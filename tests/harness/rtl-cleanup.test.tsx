import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

function Marker({ label }: { label: string }) {
  return <div>{label}</div>;
}

describe("rtl cleanup", () => {
  it("renders the first marker", () => {
    render(<Marker label="first" />);

    expect(screen.getByText("first")).toBeInTheDocument();
  });

  it("starts with an empty document", () => {
    expect(screen.queryByText("first")).not.toBeInTheDocument();
  });
});
