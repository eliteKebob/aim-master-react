import { ChartTypes } from "../constants/charts";
import { IChartsList } from "../types/component.types";
import Bar from "./charts/Bar";
import Bubble from "./charts/Bubble";
import Count from "./charts/Count";
import Line from "./charts/Line";
import Pie from "./charts/Pie";
import Polar from "./charts/Polar";
import Radar from "./charts/Radar";

const ChartsList = ({ scores, theme }: IChartsList) => {
  const counts = scores.filter(
    (score) => score.chart_type === ChartTypes.Count
  );

  return (
    <div className="charts">
      <div className="count-charts">
        {counts.map((score, idx) => (
          <Count score={score} key={idx} theme={theme} />
        ))}
      </div>
      <div className="chart-group">
        <div>
          {scores
            ?.filter((score) => score.chart_type === ChartTypes.Bar)
            .map((score, idx) => {
              return <Bar score={score} theme={theme} key={idx} />;
            })}
        </div>
        <div>
          {scores
            ?.filter((score) => score.chart_type === ChartTypes.Pie)
            .map((score, idx) => {
              return <Pie score={score} theme={theme} key={idx} />;
            })}
        </div>
      </div>
      <div className="chart-group">
        <div>
          {scores
            ?.filter((score) => score.chart_type === ChartTypes.Polar)
            .map((score, idx) => {
              return <Polar score={score} theme={theme} key={idx} />;
            })}
        </div>
        <div>
          {scores
            ?.filter((score) => score.chart_type === ChartTypes.Line)
            .map((score, idx) => {
              return <Line score={score} theme={theme} key={idx} />;
            })}
        </div>
      </div>
      <div className="chart-group">
        <div>
          <Bubble theme={theme} />
        </div>
        <div>
          {scores
            ?.filter((score) => score.chart_type === ChartTypes.Radar)
            .map((score, idx) => {
              return <Radar score={score} theme={theme} key={idx} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default ChartsList;
