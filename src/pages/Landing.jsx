import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {THEMES} from "../constants/themes";

const Landing = ({
  targetSize,
  setTargetSize,
  targets,
  setTargets,
  setGameRunning,
  theme,
  setTheme,
  setScore,
  setIsChallenge,
  setStartTime,
  setGameOver,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setGameRunning(true);
    navigate("/game");
  };

  const handleChallenge = () => {
    setGameRunning(true);
    navigate("/game");
    setIsChallenge(true);
  };

  const handleTarget = (el, isSize) => {
    let val = parseInt(el.value);
    const min = parseInt(el.min);
    const max = parseInt(el.max);
    if (val != "") {
      if (val < min) {
        val = min;
      }
      if (val > max) {
        val = max;
      }
    } else {
      val = min;
    }
    if (isSize) {
      setTargetSize(val);
    } else {
      setTargets(val);
    }
  };

  useEffect(() => {
    setGameRunning(false);
    setScore(0);
    setIsChallenge(false);
    setStartTime("");
    setGameOver(false);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="landing flex-center-center">
      <h1>Customize Your Game</h1>
      <div className="set-size flex-center-center">
        <p>Set How Big Target is (1-20)</p>
        <input
          type="number"
          value={targetSize}
          onChange={(e) => handleTarget(e.target, true)}
          max="20"
          min="1"
          style={{ backgroundColor: theme }}
        />
        <div
          className="st-example"
          style={{
            width: `${targetSize}vh`,
            height: `${targetSize}vh`,
            backgroundColor: theme,
          }}
        ></div>
      </div>
      <div className="set-target-amount flex-center-center">
        <p>Set How Many Targets on Screen (1-30)</p>
        <input
          type="number"
          value={targets}
          onChange={(e) => handleTarget(e.target, false)}
          max="30"
          min="1"
          style={{ backgroundColor: theme }}
        />
      </div>
      <p className="cam-text">Choose a Theme</p>
      <div className="set-theme flex-center-center">
        {THEMES?.map((t) => (
          <div
            className={`theme theme-${t}`}
            onClick={() => setTheme(t)}
            style={{ backgroundColor: t }}
          ></div>
        ))}
      </div>
      <p className="cam-text">Choose a Mode</p>
      <div className="start-game flex-center-center">
        <div
          className="sg-btn flex-center-center"
          style={{ backgroundColor: theme }}
          onClick={() => handleClick()}
        >
          CHILL
        </div>
        <div
          className="sg-btn flex-center-center"
          style={{ backgroundColor: theme }}
          onClick={() => handleChallenge()}
        >
          CHALLENGE
        </div>
      </div>
    </div>
  );
};
export default Landing;
