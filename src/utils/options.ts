import { ChartOptions } from "chart.js";

export const defaultChartOptions: ChartOptions = {
  parsing: {
    xAxisKey: "x",
    yAxisKey: "y",
  },
  responsive: true,
  scales: {
    x: {
      type: "timeseries",
      time: {
        unit: "day",
      },
    },
    y: {
      beginAtZero: true,
    },
  },
};
