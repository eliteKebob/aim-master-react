import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

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
    navigate('/game')
  }

  const handleChallenge = () => {
    setGameRunning(true)
    navigate('/game')
    setIsChallenge(true)
  }

  useEffect(() => {
    setGameRunning(false)
    setScore(0)
    setIsChallenge(false)
    setStartTime('')
    setGameOver(false)
    // eslint-disable-next-line
  }, [])

  return (
    <div className='landing flex-center-center'>
      <h1>Customize Your Game</h1>
      <div className='set-size flex-center-center'>
        <p>Set How Big Target is</p>
        <input
          type='number'
          value={targetSize}
          onChange={(e) => setTargetSize(e.target.value)}
          max='20'
          min='1'
          style={{ backgroundColor: theme }}
        />
        <div
          className='st-example'
          style={{
            width: `${targetSize}vh`,
            height: `${targetSize}vh`,
            backgroundColor: theme,
          }}
        ></div>
      </div>
      <div className='set-target-amount flex-center-center'>
        <p>Set How Many Targets on Screen</p>
        <input
          type='number'
          value={targets}
          onChange={(e) => setTargets(e.target.value)}
          max='30'
          min='1'
          style={{ backgroundColor: theme }}
        />
      </div>
      <div className='set-theme flex-center-center'>
        <p>Choose a Theme</p>
        <div
          className='theme theme-lightskyblue'
          onClick={() => setTheme('lightskyblue')}
          style={{ backgroundColor: 'lightskyblue' }}
        ></div>
        <div
          className='theme theme-violet'
          onClick={() => setTheme('violet')}
          style={{ backgroundColor: 'violet' }}
        ></div>
        <div
          className='theme theme-lime'
          onClick={() => setTheme('lime')}
          style={{ backgroundColor: 'lime' }}
        ></div>
        <div
          className='theme theme-gold'
          onClick={() => setTheme('gold')}
          style={{ backgroundColor: 'gold' }}
        ></div>
        <div
          className='theme theme-white'
          onClick={() => setTheme('white')}
          style={{ backgroundColor: 'white' }}
        ></div>
        <div
          className='theme theme-chocolate'
          onClick={() => setTheme('chocolate')}
          style={{ backgroundColor: 'chocolate' }}
        ></div>
        <div
          className='theme theme-crimson'
          onClick={() => setTheme('crimson')}
          style={{ backgroundColor: 'crimson' }}
        ></div>
      </div>
      <p className='cam-text'>Choose a Mode</p>
      <div className='start-game flex-center-center'>
        <div
          className='sg-btn flex-center-center'
          style={{ backgroundColor: theme }}
          onClick={() => handleClick()}
        >
          CHILL
        </div>
        <div
          className='sg-btn flex-center-center'
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
