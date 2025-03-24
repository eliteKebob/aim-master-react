import { ChartTypes } from "../constants/charts";
import { GameModes } from "../constants/scores";

export interface IScoreRequest {
  tz_offset: number;
  game_length: number;
  target_size: number;
  total_target: number;
  target_hit: number;
  mode: GameModes;
  sensitivity: number;
  is_click: boolean;
}

export interface IScoreResponse {
  chart_type: ChartTypes;
  count?: number;
  indicator?: string;
  data?: number[];
  labels?: string[];
  details?: string[];
  datasets?: number[][];
}

export interface IGrade {
  name: string;
  message: string;
}
