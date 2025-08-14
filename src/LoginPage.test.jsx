import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest"; // Import 'vi' for mocking
import { BrowserRouter as Router } from "react-router-dom";
import { LoginPage } from "./App";

// We mock the navigate function from react-router-dom
const mockedNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual, // Keep all the other exports from the library
    useNavigate: () => mockedNavigate, // Replace useNavigate with our mock
  };
});

describe("LoginPage Component", () => {
  test("navigates to dashboard on successful form submission", async () => {
    const user = userEvent.setup();
    render(
      <Router>
        <LoginPage />
      </Router>
    );

    // Arrange: Find the form elements
    const emailInput = screen.getByLabelText("Email Address");
    const passwordInput = screen.getByLabelText("Password");
    const signInButton = screen.getByRole("button", { name: /sign in/i });

    // Act: Simulate a user typing and clicking the button
    await user.type(emailInput, "test@example.com");
    await user.type(passwordInput, "password123");
    await user.click(signInButton);

    // Assert: Check if our mocked navigate function was called with the correct path
    expect(mockedNavigate).toHaveBeenCalledWith("/dashboard");
  });
});
