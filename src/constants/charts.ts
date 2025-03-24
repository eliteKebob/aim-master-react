export enum ChartTypes {
  Count = "count",
  Bar = "bar",
  Pie = "pie",
  Polar = "polar",
  Line = "line",
  Radar = "radar",
}

export const INDICATOR_TITLE = {
  challenge_game_count: "Challenge Games Played",
  chill_game_count: "Chill Games Played",
  average_spm: "Average SPM",
  total_seconds: "Total Seconds Played",
};

export const ChartColorPallettes = {
  pie: {
    bg: [
      "rgba(255, 99, 132, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 206, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(153, 102, 255, 0.2)",
      "rgba(255, 159, 64, 0.2)",
    ],
    border: [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
      "rgba(75, 192, 192, 1)",
      "rgba(153, 102, 255, 1)",
      "rgba(255, 159, 64, 1)",
    ],
  },
  polar: {
    bg: [
      "rgba(255, 99, 132, 0.5)",
      "rgba(54, 162, 235, 0.5)",
      "rgba(255, 206, 86, 0.5)",
      "rgba(75, 192, 192, 0.5)",
      "rgba(153, 102, 255, 0.5)",
      "rgba(255, 159, 64, 0.5)",
    ],
  },
};
