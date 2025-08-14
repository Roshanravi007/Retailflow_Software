import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest"; // Import from vitest
import { StatCard } from "./App"; // The component is now correctly exported

describe("StatCard Component", () => {
  test("renders the title, value, and subtitle props correctly", () => {
    // 1. Arrange
    const testProps = {
      title: "Active Workflows",
      value: "12",
      subtitle: "+2 from last week",
    };

    // 2. Act
    render(<StatCard {...testProps} />);

    // 3. Assert
    expect(screen.getByText("Active Workflows")).toBeInTheDocument();
    expect(screen.getByText("12")).toBeInTheDocument();
    expect(screen.getByText("+2 from last week")).toBeInTheDocument();
  });
});
