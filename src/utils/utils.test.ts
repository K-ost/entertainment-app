import { describe, expect, it, vi } from "vitest";
import {
  checkBookmark,
  getSortQuery,
  idsToString,
  updateBookmarks,
} from "./utils";

describe("Utils", () => {
  it("getSortQuery - default value", () => {
    const result = getSortQuery("default");
    expect(result).toStrictEqual("");
  });

  it("getSortQuery - title asc value", () => {
    const result = getSortQuery("title-asc");
    expect(result).toStrictEqual("&_sort=title&_order=asc");
  });

  it("getSortQuery - year desc value", () => {
    const result = getSortQuery("year-desc");
    expect(result).toStrictEqual("&_sort=year&_order=desc");
  });

  it("checkBookmark - ID has been found", () => {
    const result = checkBookmark("1", ["1", "2", "3"]);
    expect(result).toBe(true);
  });

  it("checkBookmark - ID hasn't been found", () => {
    const result = checkBookmark("5", []);
    expect(result).toBe(false);
  });

  it("updateBookmarks - adding to bookmarks", () => {
    const result = updateBookmarks(false, ["1", "2"], "3");
    expect(result).toStrictEqual(["1", "2", "3"]);
  });

  it("updateBookmarks - removing from bookmarks", () => {
    const result = updateBookmarks(true, ["1", "2", "3"], "2");
    expect(result).toStrictEqual(["1", "3"]);
  });

  it("idsToString", () => {
    const result = idsToString(["1", "2", "3"]);
    expect(result).toStrictEqual("id=1&id=2&id=3");
  });
});
