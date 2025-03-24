import { IScoreRequest, IScoreResponse } from "../types/score.types";
import apiClient from "./init";

export const postScore = async (data: IScoreRequest) => {
  await apiClient
    .post("/score/result/", data)
    .then((response) => {
      console.log("🚀 post score request response: ", response);
    })
    .catch((error) => alert("Error when posting score!"));
};

export const getScores = async (
  callback: React.Dispatch<React.SetStateAction<IScoreResponse[] | null>>
) => {
  const response = await apiClient
    .get("/score/result/")
    .then((response) => {
      if (response.status === 200) {
        callback(response.data.data);
      }
    })
    .catch((error) => alert("Error when getting scores!"));

  console.log("🚀 get scores request response: ", response);
};
