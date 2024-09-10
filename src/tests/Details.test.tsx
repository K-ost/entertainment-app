import { beforeAll, describe, expect, it } from "vitest";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import nock from "nock";
import { Wrap, wrapperHook } from "./testUtils";
import { API_URL } from "../constants";
import { commentFactory, videoFactory } from "../utils/factories";
import App from "../App";
import { useAuthStore } from "../store/useAuthStore";
import { UserRole } from "../types";

const mockedVideo = videoFactory.build({ id: "1", title: "Test film title" });
const mockedComments = commentFactory.buildList(3);

const preRender = (role: UserRole) => {
  const { result } = renderHook(() => useAuthStore(), {
    wrapper: wrapperHook,
  });
  result.current.auth = {
    accessToken: "token",
    user: {
      avatar: "avatar",
      bookmarks: [],
      email: `${role}@test.com`,
      id: 1,
      role,
    },
  };

  render(
    <Wrap initialEntries={["/movies/1"]}>
      <App />
    </Wrap>
  );
};

describe("Details page", () => {
  beforeAll(() => {
    nock(API_URL).get("/videos/1").reply(200, mockedVideo);
    nock(API_URL).get("/comments?movieId=1").reply(200, mockedComments);
  });

  it("Details renders without data", () => {
    preRender("admin");
    expect(screen.getByText(/Comments/)).toBeInTheDocument();
  });

  it("Details - data is loading", () => {
    preRender("admin");
    expect(screen.getByTestId("detailsSkeletes")).toBeInTheDocument();
  });

  it("Details - comments are loading", () => {
    preRender("admin");
    expect(screen.getByTestId("commentsLoading")).toBeInTheDocument();
  });

  it("Details - data has loaded", async () => {
    preRender("admin");
    await waitFor(() => {
      expect(screen.queryByTestId("detailsSkeletes")).not.toBeInTheDocument();
      expect(screen.getByText(/Year/)).toBeInTheDocument();
      expect(screen.getByText(/Category/)).toBeInTheDocument();
      expect(screen.getByText(/Rating/)).toBeInTheDocument();
      expect(screen.getByText("Test film title")).toBeInTheDocument();
    });
  });

  it("Details - comments have loaded", async () => {
    preRender("admin");
    await waitFor(() => {
      expect(screen.getAllByTestId(/commentTest/)[0]).toBeInTheDocument();
    });
  });

  it("If comment has remove btn (admin only)", async () => {
    preRender("admin");
    expect(screen.getAllByTestId(/removeComment-/)[0]).toBeInTheDocument();
  });

  it("If comment doesn't have remove btn (users)", async () => {
    preRender("user");
    const btns = screen.queryAllByTestId(/removeComment-/);
    expect(btns[0]).toBeFalsy();
  });
});
