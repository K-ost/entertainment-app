import { describe, expect, it } from "vitest";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import nock from "nock";
import { Wrap } from "./testUtils";
import ProfilePage from "../pages/ProfilePage";
import { useAuthStore } from "../store/useAuthStore";
import { UserFactory } from "../utils/factories";
import { UserRole } from "../types";
import { API_URL } from "../constants";

const preRenderWithState = (role?: UserRole) => {
  const { result } = renderHook(() => useAuthStore());
  result.current.auth = {
    accessToken: "token",
    user: UserFactory.build({
      email: "admin@test.com",
      role: role ? role : "admin",
    }),
  };
  render(
    <Wrap>
      <ProfilePage />
    </Wrap>
  );
};

const userListResponse = UserFactory.buildList(3);

describe("Profile page", () => {
  it("Profile page renders", () => {
    preRenderWithState();
    const title = screen.getByText("Profile page");
    expect(title).toBeInTheDocument();
    const welcomeText = screen.getByText(/admin@test.com/i);
    expect(welcomeText).toBeInTheDocument();
  });

  it("No users list if user isn't admin", () => {
    preRenderWithState("user");
    const skelets = screen.queryByTestId("userlistLoading");
    expect(skelets).not.toBeInTheDocument();
  });

  it("Users list is being loaded", () => {
    preRenderWithState();
    const skelets = screen.queryByTestId("userlistLoading");
    expect(skelets).toBeInTheDocument();
  });

  // it("Users list is shown", async () => {
  //   nock(API_URL).get("/users").reply(200, userListResponse);
  //   preRenderWithState("admin");
  //   await waitFor(() => {
  //     const list = screen.getAllByTestId(/usercard/);
  //     screen.debug();
  //   });
  // });
});
