import React, { useState, useEffect } from "react";
import { getScores } from "../requests/score";
import ChartsList from "../components/ChartsList";
import { IScoreResponse } from "../types/score.types";
import { IProfile } from "../types/component.types";

const Profile = ({ theme }: IProfile) => {
  const [scores, setScores] = useState<IScoreResponse[] | null>(null);

  useEffect(() => {
    const _request = async () => {
      await getScores(setScores);
    };
    _request();
    // eslint-disable-next-line
  }, []);

  return <div>{scores && <ChartsList scores={scores} theme={theme} />}</div>;
};

export default Profile;
