import { ChartOptions } from "chart.js";
import "chartjs-adapter-luxon";

export const defaultChartOptions: ChartOptions = {
  parsing: {
    xAxisKey: "x",
    yAxisKey: "y",
  },
  responsive: true,

  scales: {
    x: {
      min: "2018-01-01",
      type: "time",
      time: {
        unit: "day",
        minUnit: "hour",
        displayFormats: {
          day: "MMM d",
          week: "MMM YYYY",
          month: "MMM YYYY",
          quarter: "MMM YYYY",
        },
        tooltipFormat: "d-M-Y H:M",
        isoWeekday: true,
      },
      ticks: {
        minRotation: 85,
        maxRotation: 90,
        maxTicksLimit: 200,
      },
      display: "auto",
    },
    y: {
      suggestedMin: 0,
      suggestedMax: 5,
    },
  },
  indexAxis: "x",
};
