import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "../App";

const client = new QueryClient();

const btnText = "Login to your account";
const errorText = "Email and password are required";

describe("Login form", () => {
  beforeEach(async () => {
    render(
      <MemoryRouter>
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
      </MemoryRouter>
    );
    await userEvent.click(screen.getByTestId("profileLink"));
  });

  it("Error - empty fields", async () => {
    const button = screen.getByRole("button", {
      name: btnText,
    });
    expect(button).toBeInTheDocument();
    await userEvent.click(button);

    expect(screen.getAllByText("Required field")[0]).toBeInTheDocument();
  });

  it("Error - incorrect email", async () => {
    const button = screen.getByRole("button", {
      name: btnText,
    });
    const emailInput = screen.getByPlaceholderText("Email address");
    await userEvent.type(emailInput, "test");
    await userEvent.click(button);
    expect(screen.getByText("Incorrect Email")).toBeInTheDocument();
  });

  it("Error - password less than necessary", async () => {
    const button = screen.getByRole("button", {
      name: btnText,
    });
    const passInput = screen.getByPlaceholderText("Password");
    await userEvent.type(passInput, "111");
    await userEvent.click(button);
    expect(
      screen.getByText(/Should have 4 or more characters/)
    ).toBeInTheDocument();
  });
});
