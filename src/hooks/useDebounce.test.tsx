import React from "react";
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

  it("Debounce with delay", async () => {
    const setState = vi.fn();
    const useStateSpy = vi.spyOn(React, "useState");
    useStateSpy.mockImplementation(() => ["", setState]);

    const { result } = renderHook(() => useDebounce(() => setState(), 100));

    render(
      <input type="text" onChange={() => result.current()} placeholder="type" />
    );
    const textField = screen.getByPlaceholderText("type");
    await userEvent.type(textField, "test", { delay: 98 });

    expect(setState).toBeCalledTimes(1);
  });

  it("Debounce without delay", async () => {
    const setState = vi.fn();
    const useStateSpy = vi.spyOn(React, "useState");
    useStateSpy.mockImplementation(() => ["", setState]);

    const { result } = renderHook(() => useDebounce(() => setState(), 10));

    render(
      <input type="text" onChange={() => result.current()} placeholder="type" />
    );
    const textField = screen.getByPlaceholderText("type");
    await userEvent.type(textField, "test", { delay: 20 });

    expect(setState).toBeCalledTimes(4);
  });
});
