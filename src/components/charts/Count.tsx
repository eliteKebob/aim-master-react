import { INDICATOR_TITLE } from "../../constants/charts";
import { Themes } from "../../constants/themes";
import { IScoreResponse } from "../../types/score.types";

type ICountProps = {
  score: IScoreResponse;
  theme: Themes;
};

const Count = (props: ICountProps) => {
  const indicator = props.score.indicator as keyof typeof INDICATOR_TITLE;
  const title = INDICATOR_TITLE[indicator];

  return (
    <div
      className="count-chart-wrapper"
      style={{ border: `0.25vh solid ${props.theme}` }}
    >
      <p>{title}</p>
      <p>{props.score.count}</p>
    </div>
  );
};

export default Count;
