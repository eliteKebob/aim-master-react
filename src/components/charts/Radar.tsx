import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar as Chart } from "react-chartjs-2";
import { colorKeywordToRGB } from "../../utils/color";
import { IScoreResponse } from "../../types/score.types";
import { Themes } from "../../constants/themes";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type IRadarProps = {
  score: IScoreResponse;
  theme: Themes;
};

const Radar = (props: IRadarProps) => {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Best Grades",
      },
    },
  };
  const data = {
    labels: props.score.labels,
    datasets: [
      {
        label: "# grade",
        data: props.score.data,
        backgroundColor: colorKeywordToRGB(props.theme, "0.2"),
        borderColor: colorKeywordToRGB(props.theme),
        borderWidth: 1,
      },
    ],
  };
  return <Chart data={data} options={options} />;
};

export default Radar;
