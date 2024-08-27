import { describe, expect, it, vi } from "vitest";
import { getSortQuery } from "./utils";

describe("Utils", () => {
  it("getSortQuery - default value", () => {
    const result = getSortQuery("default");
    expect(result).toStrictEqual("");
  });

  it("getSortQuery - title asc value", () => {
    const result = getSortQuery("title");
    expect(result).toStrictEqual("&_sort=title");
  });

  it("getSortQuery - year desc value", () => {
    const result = getSortQuery("-year");
    expect(result).toStrictEqual("&_sort=-year");
  });
});
