import { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  Line as Chart,
  // getDatasetAtEvent,
  // getElementAtEvent,
  // getElementsAtEvent,
} from "react-chartjs-2";
import { IScoreResponse } from "../../types/score.types";
import { Themes } from "../../constants/themes";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type ILineProps = {
  score: IScoreResponse,
  theme: Themes
}

const Line = (props:ILineProps) => {
  // const printDatasetAtEvent = (dataset) => {
  //   if (!dataset.length) return;

  //   const datasetIndex = dataset[0].datasetIndex;

  //   console.log(data.datasets[datasetIndex].label);
  // };

  // const printElementAtEvent = (element) => {
  //   if (!element.length) return;

  //   const { datasetIndex, index } = element[0];

  //   console.log(data.labels[index], data.datasets[datasetIndex].data[index]);
  // };

  // const printElementsAtEvent = (elements) => {
  //   if (!elements.length) return;

  //   console.log(elements.length);
  // };

  const chartRef = useRef(null);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Recent Performances",
      },
    },
  };

  const data = {
    labels: props.score.labels,
    datasets: [
      {
        label: "SPM",
        data: props.score.datasets && props.score.datasets[0],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Grade",
        data: props.score.datasets && props.score.datasets[1],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
    gameDetails: props.score?.details,
  };

  // const handleHover = (event) => {
  //   const { current: chart } = chartRef;

  //   if (!chart) {
  //     return;
  //   }
  //   printDatasetAtEvent(getDatasetAtEvent(chart, event));
  //   printElementAtEvent(getElementAtEvent(chart, event));
  //   printElementsAtEvent(getElementsAtEvent(chart, event));
  // };
  return (
    <Chart
      ref={chartRef}
      options={options}
      data={data}
      // onMouseOver={handleHover}
    />
  );
};

export default Line;
