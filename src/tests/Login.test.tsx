import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import nock from "nock";
import App from "../App";
import { API_URL } from "../constants";
import { Wrap } from "./testUtils";

const btnText = "Login to your account";

const preRender = async () => {
  render(
    <Wrap>
      <App />
    </Wrap>
  );
  await userEvent.click(screen.getByTestId("profileLink"));
};

describe("Login form", () => {
  it("Error - empty fields", async () => {
    await preRender();
    const button = screen.getByRole("button", {
      name: btnText,
    });
    expect(button).toBeInTheDocument();
    await userEvent.click(button);

    expect(screen.getAllByText("Required field")[0]).toBeInTheDocument();
  });

  it("Error - incorrect email", async () => {
    await preRender();
    const button = screen.getByRole("button", {
      name: btnText,
    });
    const emailInput = screen.getByPlaceholderText("Email address");
    await userEvent.type(emailInput, "test");
    await userEvent.click(button);
    expect(screen.getByText("Incorrect Email")).toBeInTheDocument();
  });

  it("Error - password less than necessary", async () => {
    await preRender();
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
    await preRender();
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

  // it("Success - User has been logged", async () => {
  //   await preRender();
  //   const button = screen.getByRole("button", {
  //     name: btnText,
  //   });

  //   nock(API_URL)
  //     .post("/login", {
  //       email: "test@user.com",
  //       password: "12345",
  //     })
  //     .reply(200, { user: {}, accessToken: "token" });

  //   const emailInput = screen.getByPlaceholderText("Email address");
  //   const passInput = screen.getByPlaceholderText("Password");
  //   await userEvent.type(emailInput, "test@user.com");
  //   await userEvent.type(passInput, "12345");
  //   await userEvent.click(button);

  //   await waitFor(() => {
  //     expect(screen.getByText(/succesfully been logged/)).toBeInTheDocument();
  //     expect(screen.getByText("Trending")).toBeInTheDocument();
  //     expect(screen.getByText(/Recommended/)).toBeInTheDocument();
  //   });
  // });
});
