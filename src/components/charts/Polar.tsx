import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { ChartColorPallettes, ChartTypes } from "../../constants/charts";
import { IScoreResponse } from "../../types/score.types";
import { Themes } from "../../constants/themes";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

type IPolarProps = {
  score: IScoreResponse;
  theme: Themes;
};

const Polar = (props: IPolarProps) => {
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
        text: "Total Targets",
      },
    },
  };
  const data = {
    labels: props.score.labels,
    datasets: [
      {
        label: "# of sessions played",
        data: props.score.data,
        backgroundColor: ChartColorPallettes[ChartTypes.Polar].bg,
        borderWidth: 1,
      },
    ],
  };
  return <PolarArea data={data} options={options} />;
};

export default Polar;
