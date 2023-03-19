import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { ChandleryLayout, ChandleryState, ChandleryTheme } from "../../types";
import { defaultTheme } from "../styles/themes/default";

export const useChandleryStore = create<ChandleryState>()(
  devtools(
    persist(
      (set) => ({
        theme: defaultTheme,
        layout: undefined as unknown as ChandleryLayout, //fix when default layout is made
        updateTheme: (theme: ChandleryTheme) => {
          set((state: ChandleryState) => ({ theme: theme }));
        },
      }),
      {
        name: "chandlery-store",
      }
    )
  )
);
