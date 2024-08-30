import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { LoginResponse } from "../types";

interface AppState {
  auth: LoginResponse | undefined;
  message: string | undefined;
  setAuth: (data: LoginResponse) => void;
  setMsg: (message: string) => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        auth: undefined,
        message: undefined,
        setAuth: (data) => set(() => ({ auth: data })),
        setMsg: (message) => set(() => ({ message })),
      }),
      {
        name: "auth",
      }
    )
  )
);
