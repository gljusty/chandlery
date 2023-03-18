import { Chart, ChartItem } from "chart.js";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import useChandlery from "../../src/index";
import { dummyData } from "../../src/utils/data";
import { defaultChartOptions } from "../../src/utils/options";
import "./App.css";

function App() {
  let [context, setContext] = useState<HTMLCanvasElement>(null!);
  const [config, plugin] = useChandlery({
    data: dummyData,
    options: defaultChartOptions,
  });

  const chandlery = useMemo(() => plugin(), [plugin]);

  useEffect(() => {
    setContext(document.getElementById("_chart")! as HTMLCanvasElement);
  }, []);

  useEffect(() => {
    if (!context) {
      return;
    }

    new Chart(context, {
      type: "bar",
      plugins: [chandlery],
      options: config.options,
      data: config.data,
    });
  }, [context]);
  return (
    <div className="App">
      <canvas id="_chart" height={1200} width={1200} />
    </div>
  );
}

export default App;
