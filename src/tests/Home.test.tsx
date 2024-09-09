import { describe, expect, it } from "vitest";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import nock from "nock";
import { Wrap, wrapperHook } from "./testUtils";
import { API_URL } from "../constants";
import { UserFactory, videoFactory } from "../utils/factories";
import App from "../App";
import { useAuthStore } from "../store/useAuthStore";

const dataVideos = videoFactory.buildList(3);

const preRender = async (logged?: boolean) => {
  if (logged) {
    const { result } = renderHook(() => useAuthStore(), {
      wrapper: wrapperHook,
    });
    result.current.auth = {
      accessToken: "token",
      user: UserFactory.build({
        id: 1,
        email: "admin@test.com",
        role: "admin",
        bookmarks: [],
      }),
    };
  }

  nock(API_URL).get("/videos?category=Movie").reply(200, dataVideos);

  render(
    <Wrap>
      <App />
    </Wrap>
  );

  await userEvent.click(screen.getByTestId("toMovies"));
};

describe("Home page", () => {
  it("Movies page renders", async () => {
    await preRender();
    expect(screen.getByText("Movies")).toBeInTheDocument();
  });

  it("Movies list is loaded and sort is shown up", async () => {
    await preRender();
    await waitFor(() => {
      expect(screen.getAllByTestId(/videocard-/)[0]).toBeInTheDocument();
    });
  });

  it("Adding to booomarks (non-logged). Moving to login", async () => {
    await preRender();
    await waitFor(() => {
      const list = screen.getAllByTestId(/toBookmarks-/);
      userEvent.click(list[0]);
    });
    expect(await screen.findByText("Login")).toBeInTheDocument();
  });

  it("Adding to booomarks (logged)", async () => {
    await preRender(true);
    await waitFor(() => {
      const list = screen.getAllByTestId(/toBookmarks-/);
      userEvent.click(list[0]);
    });
    expect(await screen.findByText(/has been added/)).toBeInTheDocument();
  });
});
