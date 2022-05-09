import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

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
  const navigate = useNavigate()

  const handleClick = () => {
    setGameRunning(true)
    navigate("/game")
  }

  const handleChallenge = () => {
    setGameRunning(true)
    navigate("/game")
    setIsChallenge(true)
  }

  useEffect(() => {
    setGameRunning(false)
    setScore(0)
    setIsChallenge(false)
    setStartTime("")
    setGameOver(false)
    // eslint-disable-next-line
  }, [])

  return (
    <div className="landing">
      <h1>Customize Your Game</h1>
      <div className="set-size">
        <p>Set How Big Target is</p>
        <input
          type="number"
          value={targetSize}
          onChange={(e) => setTargetSize(e.target.value)}
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
      <div className="set-target-amount">
        <p>Set How Many Targets on Screen</p>
        <input
          type="number"
          value={targets}
          onChange={(e) => setTargets(e.target.value)}
          max="30"
          min="1"
          style={{ backgroundColor: theme }}
        />
      </div>
      <div className="set-theme">
        <p>Choose a Theme</p>
        <div
          className="theme-lightblue"
          onClick={() => setTheme("lightskyblue")}
          style={{ backgroundColor: "lightskyblue" }}
        ></div>
        <div
          className="theme-red"
          onClick={() => setTheme("violet")}
          style={{ backgroundColor: "violet" }}
        ></div>
        <div
          className="theme-green"
          onClick={() => setTheme("lightgreen")}
          style={{ backgroundColor: "lightgreen" }}
        ></div>
        <div
          className="theme-yellow"
          onClick={() => setTheme("yellow")}
          style={{ backgroundColor: "yellow" }}
        ></div>
        <div
          className="theme-white"
          onClick={() => setTheme("white")}
          style={{ backgroundColor: "white" }}
        ></div>
      </div>
      <p className="cam-text">Choose a Mode</p>
      <div className="start-game">
        <div
          className="sg-btn"
          style={{ backgroundColor: theme }}
          onClick={() => handleClick()}
        >
          CHILL
        </div>
        <div
          className="sg-btn"
          style={{ backgroundColor: theme }}
          onClick={() => handleChallenge()}
        >
          CHALLENGE
        </div>
      </div>
    </div>
  )
}
export default Landing
