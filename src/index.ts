import { ChartOptions } from "chart.js";
import { useMemo } from "react";
import { ChandleryPlugin, useChandleryProps } from "../types";

export const plugin: ChandleryPlugin = ({ chart, args, options }) => {
  return {
    id: "chandlery",
    beforeInit: (ctx = chart.ctx) => {},
  };
};

export const defaultChartOptions: ChartOptions = {};

export default function useChandlery({
  data,
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
