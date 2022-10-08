import Logo from '../assets/logo.png'
import { useNavigate, Link } from 'react-router-dom'
import { FaGithub, FaHome, FaDev } from 'react-icons/fa'

const Header = ({ theme }) => {
  const navigate = useNavigate()

  return (
    <div
      className='header flex-center-center'
      style={{ backgroundColor: theme }}
    >
      <div className='brand flex-center-center' onClick={() => navigate('/')}>
        <h1>AIM</h1>
        <img src={Logo} alt='' />
        <h1>MASTER</h1>
      </div>

      <div className='links flex-center-center'>
        {window.location.pathname !== '/' ? (
          <Link to='/'>
            <FaHome />
          </Link>
        ) : (
          ''
        )}
        <a
          href='https://github.com/eliteKebob'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub />
        </a>
        <a
          href='https://kaanozmen.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaDev />
        </a>
      </div>
    </div>
  )
}
export default Header
