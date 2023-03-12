import { ChandleryPlugin, useChandleryProps } from "../types";

import { useMemo } from "react";
import { dummyData } from "./utils/data";
import { defaultChartOptions } from "./utils/options";

export const plugin: ChandleryPlugin = ({ chart, args, options }) => {
  const {
    ctx,
    chartArea: { left, top, width, height },
  } = chart;
  return {
    id: "chandlery",
    beforeInit: () => {
      console.log(ctx);
    },
    beforeDraw: () => {
      console.log(left, top, width, height);
    },
  };
};

export default function useChandlery({
  data = dummyData,
  options = defaultChartOptions,
}: useChandleryProps) {
  const config = useMemo(() => {
    return {
      type: "bar",
      data,
      options,
    };
  }, [data, options]);

  return [config, plugin];
}
