import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AppState {
  message: string;
  setMessage: (message: string) => void;
}

export const useAppStore = create<AppState>()(
  devtools((set) => ({
    message: "",
    setMessage: (message) => set(() => ({ message })),
  }))
);
