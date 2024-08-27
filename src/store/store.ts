import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AppState {
  message: string | undefined;
  setMsg: (message: string) => void;
}

export const useAppStore = create<AppState>()(
  devtools((set) => ({
    message: undefined,

    // setMsg
    setMsg: (message) => set(() => ({ message })),
  }))
);
