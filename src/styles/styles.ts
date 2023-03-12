import { ChandleryLayout, ChandleryTheme } from "../../types";
import { defaultLayout } from "./layouts/default";
import { defaultTheme } from "./themes/default";

export default function generateStyles(
  theme?: ChandleryTheme,
  layout?: ChandleryLayout
) {
  let styles = {
    layout: layout ?? defaultLayout,
    theme: theme ?? defaultTheme,
  };
  return styles;
}
