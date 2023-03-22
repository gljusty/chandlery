import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import {
  ChandleryLayout,
  ChandleryChartState,
  ChandleryTheme,
} from "../../types";
import { defaultTheme } from "../styles/themes/default";

export const useChandleryStore = create<ChandleryChartState>()(
  devtools(
    persist(
      (set) => ({
        theme: defaultTheme,
        layout: undefined as unknown as ChandleryLayout, //TODO: fix when default layout is made
        updateTheme: (theme: ChandleryTheme) => {
          set((state: ChandleryChartState) =>
            state.theme === theme ? state : { ...state, theme }
          );
        },
        updateLayout: (layout: ChandleryLayout) => {
          set((state: ChandleryChartState) =>
            state.layout === layout ? state : { ...state, layout }
          );
        },
      }),
      {
        name: "chandlery-store",
      }
    )
  )
);
