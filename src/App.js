import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Header from "./components/Header"
import Game from "./pages/Game"
import Landing from "./pages/Landing"

function App() {
  const [score, setScore] = useState(0)
  const [targetSize, setTargetSize] = useState(3)
  const [targets, setTargets] = useState(7)
  const [theme, setTheme] = useState("lightskyblue")
  const [gameRunning, setGameRunning] = useState(false)
  const [isChallenge, setIsChallenge] = useState(false)
  const [startTime, setStartTime] = useState("")
  const [gameOver, setGameOver] = useState(false)

  document.getElementById("root").style.color = theme

  return (
    <>
      <BrowserRouter>
        <Header theme={theme} />
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                targetSize={targetSize}
                setTargetSize={setTargetSize}
                targets={targets}
                setTargets={setTargets}
                gameRunning={gameRunning}
                setGameRunning={setGameRunning}
                theme={theme}
                setTheme={setTheme}
                setScore={setScore}
                setIsChallenge={setIsChallenge}
                setStartTime={setStartTime}
                setGameOver={setGameOver}
              />
            }
          />
          <Route
            path="/game"
            element={
              <Game
                score={score}
                setScore={setScore}
                targetSize={targetSize}
                gameRunning={gameRunning}
                setGameRunning={setGameRunning}
                theme={theme}
                targets={targets}
                setTargets={setTargets}
                setStartTime={setStartTime}
                startTime={startTime}
                isChallenge={isChallenge}
                gameOver={gameOver}
                setGameOver={setGameOver}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
