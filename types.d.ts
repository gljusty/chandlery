import { ChartData, ChartDataset, ChartOptions, Plugin } from "chart.js";

export enum ScaleModeX {
  HOURLY = "HOURLY",
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
  QUARTERLY = "QUARTERLY",
}

export enum ScaleModeY {
  LOG = "LOGARITHMIC",
  LIN = "LINEAR",
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

export interface IChandleryDataset extends ChartDataset<any> {
  data: IDatum[] | ChartData[];
}

//TODO: implement theme
export interface ChandleryTheme {}

export interface ChandleryChartState {
  theme: ChandleryTheme;
  layout: ChandleryLayout;
}

//TODO: add layout props
export interface ChandleryLayout {
  m: number | "auto" | "none" | undefined;
  p: number | "none" | undefined;
}

//TODO: implement more options
export interface ChandleryOptions extends ChartOptions {}

export interface ChandleryChartData extends ChartData {
  datasets: ChartDataset[];
}

export interface useChandleryProps {
  data: ChartData;
  options: ChartOptions;
}

export type ChandleryConfiguration = {
  type: string;
  data: ChartData<any>;

  options?: ChartOptions;
};

export type ChandleryPlugin = () => Plugin;
