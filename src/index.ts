import {
  ChandleryConfiguration,
  ChandleryPlugin,
  useChandleryProps,
} from "../types";

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
      ctx.fillStyle = "rgb(0,50,100)";
      ctx.fillRect(left, top, width, height);
      ctx.restore();
      //console.log(ctx);
    },
    beforeDraw: () => {
      console.log(left, top, width, height);
    },
  };
};

export default function useChandlery({
  data = dummyData,
  options = defaultChartOptions,
}: useChandleryProps): [ChandleryConfiguration, ChandleryPlugin] {
  const config = useMemo(() => {
    return {
      type: "bar",
      data,
      options,
    };
  }, [data, options]);

  return [config, plugin];
}
