import { FaCrosshairs, FaClock, FaFireAlt } from "react-icons/fa";
import { SECONDS_PER_GAME } from "../../constants/date";
import { IScoreboard } from "../../types/component.types";

const Scoreboard = ({ secs, isChallenge, theme, score, spm, gameRunning }: IScoreboard) => {
  const determineSecondsToRender = (): number => {
    if (isChallenge) {
      if (secs + 1 >= SECONDS_PER_GAME) {
        return SECONDS_PER_GAME;
      }
      return secs + 1;
    }
    return secs;
  };

  return (
    <div
      className={"scoreboard flex-center-center " + (gameRunning ? "active" : "passive")}
      style={{ borderBottom: `0.5vh solid ${theme}` }}
    >
      <div className="score-count flex-center-center">
        <FaCrosshairs /> {score}
      </div>
      <>
        {secs >= 0 && (
          <div className="countdown flex-center-center">
            <FaClock /> {determineSecondsToRender()}s
          </div>
        )}
        <div className="spm-count flex-center-center">
          <FaFireAlt /> {spm} SPM
        </div>
      </>
    </div>
  );
};

export default Scoreboard;
