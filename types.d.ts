import {
  BubbleDataPoint,
  Chart,
  ChartData,
  ChartOptions,
  ChartType,
  ChartTypeRegistry,
  Plugin,
  PluginOptionsByType,
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

export interface ChandleryProps {
  chart: Chart;
  args: any[];
  options: ChandleryOptions;
}

export interface ChandleryTheme {}

export interface ChandleryLayout {
  m: number | "auto" | "none" | undefined;
  p: number | "none" | undefined;
  theme: ChandleryTheme;
}

export interface ChandleryOptions extends ChartOptions {}

export interface useChandleryProps {
  data: ChartData;
  options: ChandleryOptions;
}

export type ChandleryConfiguration = {
  type: string;
  data: ChartData<
    keyof ChartTypeRegistry,
    (number | [number, number] | Point | BubbleDataPoint | null)[],
    unknown
  >;
  options: ChandleryOptions;
};

export type ChandleryPlugin = ({
  chart,
  args,
  options,
}: ChandleryProps) => Plugin;
