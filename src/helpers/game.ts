import { SCORES } from "../constants/scores";
import { IScoreRequest } from "../types/score.types";

export const saveLocalSession = ({
  game_length,
  target_size,
  total_target,
  target_hit,
  tz_offset,
  mode,
  sensitivity,
  is_click
}: IScoreRequest) => {
  localStorage.setItem(
    mode,
    JSON.stringify({
      tz_offset: tz_offset,
      game_length: game_length,
      target_size: target_size,
      total_target: total_target,
      target_hit: target_hit,
      mode: mode,
      sensitivity: sensitivity,
      is_click: is_click
    })
  );
};

export const gradeGetter = (num: number) => {
  for (const score of SCORES) {
    if (num >= score.min && num <= score.max) {
      return score;
    }
  }
};
