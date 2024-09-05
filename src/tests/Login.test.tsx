import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import nock from "nock";
import App from "../App";
import { API_URL } from "../constants";

const client = new QueryClient();

const btnText = "Login to your account";

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

  it("Error - Incorrect password", async () => {
    const button = screen.getByRole("button", {
      name: btnText,
    });

    nock(API_URL)
      .post("/login", {
        email: "test@user.com",
        password: "1111",
      })
      .reply(401, { message: "Incorrect password" });

    const emailInput = screen.getByPlaceholderText("Email address");
    const passInput = screen.getByPlaceholderText("Password");
    await userEvent.type(emailInput, "test@user.com");
    await userEvent.type(passInput, "1111");
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Incorrect password")).toBeInTheDocument();
    });
  });

  it("Success - User has been logged", async () => {
    const button = screen.getByRole("button", {
      name: btnText,
    });

    nock(API_URL)
      .post("/login", {
        email: "test@user.com",
        password: "12345",
      })
      .reply(200, { user: {}, accessToken: "token" });

    const emailInput = screen.getByPlaceholderText("Email address");
    const passInput = screen.getByPlaceholderText("Password");
    await userEvent.type(emailInput, "test@user.com");
    await userEvent.type(passInput, "12345");
    await userEvent.click(button);

    await waitFor(() => {
      expect(
        screen.getByText("You've succesfully been logged")
      ).toBeInTheDocument();
      expect(screen.getByText("Trending")).toBeInTheDocument();
      expect(screen.getByText(/Recommended/)).toBeInTheDocument();
    });
  });
});
