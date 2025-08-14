import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  describe,
  test,
  expect,
  beforeAll,
  afterAll,
  afterEach,
  vi,
} from "vitest";

// Use the new, recommended imports from msw
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

import { WorkflowBuilder } from "./App"; // Make sure it's exported

// 1. Setup the mock server using the new 'http' and 'HttpResponse' syntax
const server = setupServer(
  http.post("/api/workflows", () => {
    // This function will be called when the frontend tries to save
    return HttpResponse.json({ message: "Workflow created" });
  })
);

// Start server before all tests, reset handlers between tests, close after all tests
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Mock the window.alert function so we can test it
window.alert = vi.fn();

describe("WorkflowBuilder Integration with Mock API", () => {
  test("allows a user to build and successfully save a workflow", async () => {
    const user = userEvent.setup();
    render(<WorkflowBuilder />);

    // --- Part 1: User builds the workflow ---
    await user.click(screen.getByText("Shopify"));
    await user.click(screen.getByText("New Order Created"));
    await user.click(
      screen.getByRole("button", { name: /Continue to Action Setup/i })
    );

    await user.click(screen.getByText("NetSuite"));
    await user.click(screen.getByLabelText("Create Sales Order"));

    // --- Part 2: User saves the workflow ---
    const saveButton = screen.getByRole("button", { name: /Save Workflow/i });
    await user.click(saveButton);

    // --- Part 3: Assert the result ---
    // Assert that the success alert was shown after the mock API returned a success response.
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith("Workflow saved successfully!");
    });
  });
});
