import { Chart } from "chart.js";
import { useEffect, useMemo, useState } from "react";
import useChandlery from "../../src/index";
import { dummyData } from "../../src/utils/data";
import { defaultChartOptions } from "../../src/utils/options";
import usePolygon from "../../src/utils/hooks/polygon";
import "./App.css";

function App() {
  const [ctx, setContext] = useState<HTMLCanvasElement>(null!);
  const [chart, setChart] = useState<Chart>(null!);
  const [config, plugin] = useChandlery({
    data: dummyData,
    options: defaultChartOptions,
  });

  const chandlery = useMemo(() => plugin(), [plugin]);
  const [cachedTicker, getTicker] = usePolygon();

  useEffect(() => {
    setContext(document.getElementById("_chart")! as HTMLCanvasElement);
    getTicker();
  }, []);

  useEffect(() => {
    console.log(cachedTicker.results[0]);
  }, [cachedTicker]);

  useEffect(() => {
    if (!ctx) {
      return;
    }

    !chart &&
      setChart(
        new Chart(ctx, {
          type: "bar",
          plugins: [chandlery],
          options: config.options,
          data: config.data,
        })
      );
  }, [ctx]);
  return (
    <div className="App">
      <canvas id="_chart" />
    </div>
  );
}

export default App;
