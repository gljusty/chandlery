import {
  Chart,
  ChartData,
  ChartOptions,
  ChartType,
  PluginOptionsByType,
} from "chart.js";

export enum ScaleModeX {
  HOURLY = "HOURLY",
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
  QUARTERLY = "QUARTERLY",
}

export interface IMovingAverages {
  scale: ScaleModeX;
  data: number[];
}

//TODO: add more metadata, cache
export interface ITickerMetadata {
  movingAverages: IMovingAverages[];
}

export interface ITicker {
  id: string;
  meta: ITickerMetadata;
}

export interface IChandleryDatum {
  symbol: ITicker;
  o: number;
  h: number;
  l: number;
  c: number;
}

export interface ChandleryProps {
  chart: Chart;
  args: any[];
  options: PluginOptionsByType<ChartType>;
}

export interface useChandleryProps {
  data: ChartData;
  options: ChartOptions;
}

export type ChandleryPlugin = ({ chart, args, options }: ChandleryProps) => {
  id: string;
};
