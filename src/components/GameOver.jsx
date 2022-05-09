import {
  FaCrosshairs,
  FaFileDownload,
  FaRedo,
  FaHome,
  FaAward,
} from "react-icons/fa"
import { useEffect, useState, createRef } from "react"
import Logo from "../assets/logo.png"
import { useScreenshot } from "use-react-screenshot"
import { useNavigate } from "react-router-dom"

const GameOver = ({
  setGameOver,
  score,
  theme,
  targets,
  targetSize,
  setScore,
  setSecs,
  setSpm,
  setStartTime,
  setGameRunning,
}) => {
  const resultRef = createRef(null)
  const downloadRef = createRef()
  const [grade, setGrade] = useState("")
  const [image, takeScreenshot] = useScreenshot()

  const navigate = useNavigate()

  const getImage = () => takeScreenshot(resultRef.current)

  const handleRetry = () => {
    setGameOver(false)
    setScore(0)
    setSecs(60)
    setSpm(0)
    setGrade("")
    setStartTime(new Date().getTime())
  }

  const handleHome = () => {
    setScore(0)
    setSecs(60)
    setSpm(0)
    setGrade("")
    setStartTime("")
    setGameRunning(false)
    setGameOver(false)
    navigate("/")
  }

  useEffect(() => {
    if (score > 250) {
      setGrade("Perfect!")
    }
    if (score > 200) {
      setGrade("A+")
    }
    if (score > 150) {
      setGrade("A")
    }
    if (score > 125) {
      setGrade("B")
    }
    if (score > 100) {
      setGrade("C")
    }
    if (score > 50) {
      setGrade("D")
    }
    if (score < 51) {
      setGrade("Awful!")
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (image) {
      downloadRef.current.click()
    }
  }, [image, downloadRef])

  return (
    <div className="game-over-wrapper">
      <div className="go-content" style={{ border: `0.5vh solid ${theme}` }}>
        <div
          className="go-stats"
          ref={resultRef}
          style={{ border: `0.25vh solid ${theme}` }}
        >
          <div className="stat-group">
            <div
              className="go-stat"
              style={{ border: `0.25vh solid ${theme}` }}
            >
              <FaCrosshairs />
              <p>
                You aimed at target{" "}
                <span style={{ fontSize: "8vh" }}>{score}</span> times in a
                minute
              </p>
            </div>
            <div
              className="go-stat"
              style={{ border: `0.25vh solid ${theme}` }}
            >
              <FaAward />
              <p>
                Grade: <span style={{ fontSize: "8vh" }}>{grade}</span>
              </p>
            </div>
          </div>
          <div
            className="settings-group"
            style={{ border: `0.25vh solid ${theme}` }}
          >
            <h4>Your Settings</h4>
            <div className="sg-info">
              <p>
                Target Size:{" "}
                <span style={{ fontSize: "3vh", fontWeight: "400" }}>
                  {targetSize}
                </span>
              </p>
              <p>
                Total Targets on Screen:{" "}
                <span style={{ fontSize: "3vh", fontWeight: "400" }}>
                  {targets}
                </span>
              </p>
            </div>
          </div>
          <div className="aimmaster-brand" style={{ backgroundColor: theme }}>
            <h1>AIM</h1>
            <img src={Logo} alt="" />
            <h1>MASTER</h1>
          </div>
        </div>
        <div className="btn-group">
          <div
            className="go-btn"
            style={{ border: `0.25vh solid ${theme}` }}
            onClick={() => handleRetry()}
          >
            {" "}
            <FaRedo /> Retry
          </div>
          <div
            className="go-btn"
            style={{ border: `0.25vh solid ${theme}` }}
            onClick={getImage}
          >
            {" "}
            <FaFileDownload /> Download Screenshot
            {image && (
              <a ref={downloadRef} href={image} download="result.png">
                Download
              </a>
            )}
          </div>
          <div
            className="go-btn"
            style={{ border: `0.25vh solid ${theme}` }}
            onClick={() => handleHome()}
          >
            {" "}
            <FaHome /> Homepage
          </div>
        </div>
      </div>
    </div>
  )
}
export default GameOver
