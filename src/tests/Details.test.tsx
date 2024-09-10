import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import nock from "nock";
import { Wrap } from "./testUtils";
import { API_URL } from "../constants";
import { commentFactory, videoFactory } from "../utils/factories";
import App from "../App";

const mockedVideo = videoFactory.build({ id: "1", title: "Test film title" });
const mockedComments = commentFactory.buildList(3);

describe("Details page", () => {
  beforeAll(() => {
    nock(API_URL).get("/videos/1").reply(200, mockedVideo);
    nock(API_URL).get("/comments?movieId=1").reply(200, mockedComments);
  });

  beforeEach(() => {
    render(
      <Wrap initialEntries={["/movies/1"]}>
        <App />
      </Wrap>
    );
  });

  it("Details renders without data", () => {
    expect(screen.getByText(/Comments/)).toBeInTheDocument();
  });

  it("Details - data is loading", () => {
    expect(screen.getByTestId("detailsSkeletes")).toBeInTheDocument();
  });

  it("Details - comments are loading", () => {
    expect(screen.getByTestId("commentsLoading")).toBeInTheDocument();
  });

  it("Details - data has loaded", async () => {
    await waitFor(() => {
      expect(screen.queryByTestId("detailsSkeletes")).not.toBeInTheDocument();
      expect(screen.getByText(/Year/)).toBeInTheDocument();
      expect(screen.getByText(/Category/)).toBeInTheDocument();
      expect(screen.getByText(/Rating/)).toBeInTheDocument();
      expect(screen.getByText("Test film title")).toBeInTheDocument();
    });
  });

  it("Details - comments have loaded", async () => {
    await waitFor(() => {
      expect(screen.getAllByTestId(/commentTest/)[0]).toBeInTheDocument();
    });
  });
});
