import { ChartData } from "chart.js";

export const dummyData: ChartData = {
  datasets: [
    {
      label: "Rounded Test",
      data: [1, 2, 3, 4, 5, 6],
      borderRadius: 5,
      borderSkipped: false,
    },
  ],
  labels: ["Test_Label", "Test_Label_Two", "Test_Label_Three"],
};
