import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar as Chart } from "react-chartjs-2";
import { colorKeywordToRGB } from "../../utils/color";
import { IScoreResponse } from "../../types/score.types";
import { Themes } from "../../constants/themes";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type IBarProps = {
  score: IScoreResponse;
  theme: Themes;
};

const Bar = (props:IBarProps) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Last SPMs",
      },
      scales: {
        xAxes: [
          {
            beginAtZero: true,
            ticks: {
              autoSkip: false,
            },
          },
        ],
      },
    },
  };
  const data = {
    labels: props.score.labels,
    datasets: [
      {
        label: "Challenge Date / SPM",
        data: props.score.data,
        backgroundColor: colorKeywordToRGB(props.theme),
      },
    ],
  };
  return <Chart options={options} data={data} />;
};

export default Bar;
