import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie as Chart } from "react-chartjs-2";
import { IScoreResponse } from "../../types/score.types";
import { Themes } from "../../constants/themes";
import { ChartColorPallettes, ChartTypes } from "../../constants/charts";

ChartJS.register(ArcElement, Tooltip, Legend);

type IPieProps = {
  score: IScoreResponse,
  theme: Themes
}

const Pie = (props:IPieProps) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Target Sizes",
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
        label: "# of sessions played",
        data: props.score.data,
        backgroundColor: ChartColorPallettes[ChartTypes.Pie].bg,
        borderColor: ChartColorPallettes[ChartTypes.Pie].border,
        borderWidth: 1,
      },
    ],
  };
  return <Chart data={data} options={options} />;
};

export default Pie;
