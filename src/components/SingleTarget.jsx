import { useEffect } from "react"

const SingleTarget = ({
  target,
  targetSize,
  gameRunning,
  setScore,
  score,
  theme,
}) => {
  const handleHover = () => {
    if (gameRunning) {
      stylist()
      setScore(score + 1)
    } else {
      return
    }
  }

  const stylist = () => {
    let rndTop = Math.floor(Math.random() * 77) + 20
    let rndRight = Math.floor(Math.random() * 91) + 5
    document.getElementById(target).style.top = `${rndTop}%`
    document.getElementById(target).style.right = `${rndRight}%`
  }

  useEffect(() => {
    if (gameRunning) {
      stylist()
    } else {
      return
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div
      className="single-target"
      id={target}
      onMouseOver={() => handleHover()}
      style={{
        width: `${targetSize}vh`,
        height: `${targetSize}vh`,
        backgroundColor: theme,
      }}
    ></div>
  )
}
export default SingleTarget
