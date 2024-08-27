import { describe, expect, it, vi } from "vitest";
import { render, renderHook, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { useDebounce } from "./useDebounce";

const mockedFn = vi.fn();

describe("useDebounce", () => {
  it("Should return a function", async () => {
    const { result } = renderHook(() => useDebounce(mockedFn, 500));
    expect(typeof result.current).toBe("function");
  });
});
