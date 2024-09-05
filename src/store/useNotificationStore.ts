import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface NotificationState {
  isVisible: boolean;
  message: string;
  setMessage: (message: string) => void;
}

export const useNotificationStore = create<NotificationState>()(
  devtools((set) => ({
    isVisible: false,
    message: "",
    setMessage: (message) =>
      set(() => {
        return {
          message,
          isVisible: message.length ? true : false,
        };
      }),
  }))
);
