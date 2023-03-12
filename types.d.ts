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

//TODO: add metadata, cache
export interface ITickerMetadata {}
export interface ITickerCache {}

export interface ITicker {
  id: string;
  meta: ITickerMetadata;
  cache: ITickerCache;
}

export interface IDatum {
  symbol: ITicker;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface ChandleryProps {
  chart: Chart;
  args: any[];
  options: PluginOptionsByType<ChartType>;
}

export interface ChandleryTheme {}

export interface ChandleryLayout {}

export interface useChandleryProps {
  data: ChartData;
  options: ChartOptions;
}

export type ChandleryPlugin = ({ chart, args, options }: ChandleryProps) => {
  id: string;
};
