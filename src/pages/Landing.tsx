import { useEffect } from "react";
import SetTheme from "../components/SetTheme";
import CustomizeTargets from "../components/CustomizeTargets";
import StartGame from "../components/StartGame";
import { ILanding } from "../types/component.types";
import CustomizeMouse from "../components/CustomizeMouse";
import { _scroll } from "../utils/util";
import { HEADER_HEIGHT } from "../constants/style";

const Landing = ({
  targetSize,
  targets,
  theme,
  clickToHit,
  sensitivity,
  setGameRunning,
  setIsChallenge,
  setShowMemberForm,
  setTargetSize,
  setTargets,
  setTheme,
  clearGameSession,
  isLoggedIn,
  setClickToHit,
  setSensitivity,
}: ILanding) => {
  useEffect(() => {
    clearGameSession();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="landing flex-center-center">
      <h1
        onClick={() => _scroll(HEADER_HEIGHT.numeric, true)}
      >
        Customize Your Game
      </h1>
      <CustomizeTargets
        targetSize={targetSize}
        targets={targets}
        theme={theme}
        setTargetSize={setTargetSize}
        setTargets={setTargets}
      />
      <SetTheme theme={theme} setTheme={setTheme} />
      <CustomizeMouse
        sensitivity={sensitivity}
        setClickToHit={setClickToHit}
        setSensitivity={setSensitivity}
        clickToHit={clickToHit}
        theme={theme}
      />
      <StartGame
        theme={theme}
        isLoggedIn={isLoggedIn}
        setGameRunning={setGameRunning}
        setIsChallenge={setIsChallenge}
        setShowMemberForm={setShowMemberForm}
      />
    </div>
  );
};
export default Landing;
