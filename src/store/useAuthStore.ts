import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { LoginResponse } from "../types";

interface AuthState {
  auth: LoginResponse | undefined;
  setLogin: (data: LoginResponse) => void;
  setLogout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        auth: undefined,
        setLogin: (data) => set(() => ({ auth: data })),
        setLogout: () => set(() => ({ auth: undefined })),
      }),
      {
        name: "auth",
      }
    )
  )
);
