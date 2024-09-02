import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useAuthStore } from "./useAuthStore";
import { LoginResponse } from "../types";

const authMock: LoginResponse = {
  accessToken: "token",
  user: {
    avatar: "http://img.link",
    bookmarks: [],
    email: "test@test.com",
    id: 1,
    role: "user",
  },
};

describe("useAuthStore", () => {
  it("setLogin", () => {
    const { result } = renderHook(() => useAuthStore());
    act(() => {
      result.current.setLogin(authMock);
    });
    expect(result.current.auth).toStrictEqual(authMock);
  });

  it("setLogin", () => {
    const { result } = renderHook(() => useAuthStore());
    act(() => {
      result.current.updateAuth(["1", "2", "3"]);
    });
    expect(result.current.auth?.user.bookmarks).toStrictEqual(["1", "2", "3"]);
  });

  it("setLogout", () => {
    const { result } = renderHook(() => useAuthStore());
    act(() => {
      result.current.setLogout();
    });
    expect(result.current.auth).toBe(undefined);
  });
});
