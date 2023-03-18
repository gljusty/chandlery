import {
  BubbleDataPoint,
  Chart,
  ChartData,
  ChartOptions,
  ChartTypeRegistry,
  Plugin,
  Point,
} from "chart.js";

export enum ScaleModeX {
  HOURLY = "HOURLY",
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
  QUARTERLY = "QUARTERLY",
}

export enum ScaleModeY {
  LOG = "LOGARITHMIC",
  LINEAR = "LINEAR",
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

export interface ChandleryTheme {}

export interface ChandleryLayout {
  m: number | "auto" | "none" | undefined;
  p: number | "none" | undefined;
  theme: ChandleryTheme;
}

export interface ChandleryOptions extends ChartOptions {
  chandleryLayout: ChandleryLayout;
}

export interface ChandleryChartData extends ChartData {}

export interface useChandleryProps {
  data: ChartData;
  options: ChartOptions;
}

export type ChandleryConfiguration = {
  type: string;
  data: ChartData<
    keyof ChartTypeRegistry,
    (number | [number, number] | Point | BubbleDataPoint | null)[],
    unknown
  >;
  options: ChartOptions | ChandleryOptions;
};

export type ChandleryPlugin = () => Plugin;
