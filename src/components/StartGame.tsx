import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IStartGame } from "../types/component.types";

const StartGame = ({
  theme,
  isLoggedIn,
  setGameRunning,
  setIsChallenge,
  setShowMemberForm,
}: IStartGame) => {
  const navigate = useNavigate();
  const handleClick = (challenge = false) => {
    if (!isLoggedIn() && challenge) {
      setShowMemberForm(true);
      return;
    }
    setGameRunning(true);
    challenge && setIsChallenge(true);
    navigate("/game");
  };
  const challengeBtnStyles = {
    backgroundColor: theme,
    position: "relative" as const,
  };
  return (
    <>
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
          className="sg-btn flex-center-center challenge-btn"
          style={challengeBtnStyles}
          onClick={() => handleClick(true)}
        >
          {!isLoggedIn() ? (
            <FaLock
              style={{ cursor: "pointer" }}
              title="Sign in to unlock this feature"
            />
          ) : (
            "CHALLENGE"
          )}
        </div>
      </div>
    </>
  );
};

export default StartGame;
