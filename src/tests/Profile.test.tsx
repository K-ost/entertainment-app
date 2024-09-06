import { describe, expect, it, vi } from "vitest";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import nock from "nock";
import { Wrap } from "./testUtils";
import { useAuthStore } from "../store/useAuthStore";
import { UserFactory } from "../utils/factories";
import { UserRole } from "../types";
import { API_URL } from "../constants";
import App from "../App";
import ProfilePage from "../pages/ProfilePage";

const preRenderWithState = (role?: UserRole, app?: boolean) => {
  nock(API_URL).get("/users").reply(200, userListResponse);

  const { result } = renderHook(() => useAuthStore());

  result.current.auth = {
    accessToken: "token",
    user: UserFactory.build({
      email: "admin@test.com",
      role: role ? role : "admin",
    }),
  };

  render(<Wrap>{app ? <App /> : <ProfilePage />}</Wrap>);
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
    expect(screen.queryByTestId("userlistLoading")).toBeInTheDocument();
  });

  it("Users list is shown", async () => {
    preRenderWithState("admin");
    await waitFor(() => {
      const list = screen.getAllByTestId(/usercard-/);
      const removeBtns = screen.getAllByText("Remove");
      expect(list[0]).toBeInTheDocument();
      expect(removeBtns[1]).toBeInTheDocument();
    });
  });

  it("Remove user popup shows up when clicking", async () => {
    preRenderWithState("admin");
    const removeBtns = screen.getAllByText("Remove");
    await userEvent.click(removeBtns[0]);
    expect(screen.getByText("Remove user")).toBeInTheDocument();
    expect(screen.getByText(/Are you sure you want/)).toBeInTheDocument();
  });

  it("Logout", async () => {
    preRenderWithState("admin", true);
    await userEvent.click(screen.getByTestId("profileLink"));
    const logoutBtn = screen.getByText("Logout");
    expect(logoutBtn).toBeInTheDocument();
    await userEvent.click(logoutBtn);
    expect(screen.getByText("Trending")).toBeInTheDocument();
    expect(screen.getByText(/Recommended/)).toBeInTheDocument();
  });
});
