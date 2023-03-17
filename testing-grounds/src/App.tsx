import { Chart, ChartItem } from "chart.js";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import useChandlery from "../../src/index";
import { dummyData } from "../../src/utils/data";
import { defaultChartOptions } from "../../src/utils/options";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [config, plugin] = useChandlery({
    data: dummyData,
    options: defaultChartOptions,
  });

  const chandlery = useMemo(() => plugin(chart), [plugin]);

  const chart = useMemo(() => {
    const ctx = document.getElementById("_chart");
    const c = new Chart(ctx as ChartItem, {
      type: "bar",
      plugins: [plugin({ chart: c })],
      options: config.options,
      data: config.data,
    });
  }, []);
  return (
    <div className="App">
      <canvas id="_chart" />
    </div>
  );
}

export default App;
