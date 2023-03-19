import {
  ChandleryConfiguration,
  ChandleryPlugin,
  useChandleryProps,
} from "../types";

import { useMemo } from "react";
import { Chart, registerables } from "chart.js";

export const plugin: ChandleryPlugin = () => {
  return {
    id: "chandlery",
    beforeInit: (chart, args, pluginOptions) => {
      //
    },
    beforeDraw: (chart, args, pluginOptions) => {
      const {
        ctx,
        chartArea: { left, top, width, height },
      } = chart;
      let gradient = ctx.createLinearGradient(left, top, width, height);
      gradient.addColorStop(0.0, "rgb(200,50,50)");
      gradient.addColorStop(1.0, "rgb(50,0,20)");
      ctx.fillStyle = gradient;
      ctx.fillRect(left, top, width, height);
      ctx.save();
    },
  };
};

export default function useChandlery({
  data,
  options,
}: useChandleryProps): [ChandleryConfiguration, ChandleryPlugin] {
  Chart.register(...registerables);

  const config = useMemo(() => {
    return {
      type: "bar",
      data,
      options,
    };
  }, [data, options]);

  return [config, plugin];
}
