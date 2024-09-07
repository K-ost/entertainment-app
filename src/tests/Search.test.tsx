import { beforeAll, describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import nock from "nock";
import App from "../App";
import { Wrap } from "./testUtils";
import { API_URL } from "../constants";
import { videoFactory } from "../utils/factories";

const searchList = videoFactory.buildList(3);

const preRender = (req: string, list?: boolean) => {
  const found = list ? searchList : [];
  nock(API_URL).get("/videos").query({ q: req }).reply(200, found);
  render(
    <Wrap>
      <App />
    </Wrap>
  );
};

describe("Search", () => {
  beforeAll(() => {});

  it("Search - found", async () => {
    preRender("cus", true);
    const searchInput = screen.getByPlaceholderText(/Search for movies or TV/);
    await userEvent.type(searchInput, "cus");
    await waitFor(() => {
      expect(screen.getByText(/Search results - "cus"/)).toBeInTheDocument();
      expect(screen.getAllByTestId(/videocard-/)[0]).toBeInTheDocument();
      expect(screen.getAllByText("Play")[0]).toBeInTheDocument();
    });
  });

  it("Search - empty", async () => {
    preRender("test", false);
    nock(API_URL).get("/videos").query({ q: "test" }).reply(200, []);
    const searchInput = screen.getByPlaceholderText(/Search for movies or TV/);
    await userEvent.type(searchInput, "test");
    await waitFor(() => {
      expect(screen.getByText(/Search results - "test"/)).toBeInTheDocument();
      expect(
        screen.getByText(/There're no posts in the database/)
      ).toBeInTheDocument();
    });
  });
});
