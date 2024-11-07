import './styles.css'
import { auth } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useData } from '../../hooks/useData'

const Header = () => {
  const [user, loading] = useAuthState(auth)
  const { signOut } = useData()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    } else {
      navigate('/')
    }
  }, [user, loading])

  const handleLogout = async () => {
    signOut()
  }

  return (
    <nav
      className='navbar navbar-expand-lg bg-primary text-white'
      data-bs-theme='dark'
    >
      <div className='container container-fluid d-flex justify-content-between align-items-center'>
        <p className='nav-link fs-4 mb-0'>Finance's App</p>

        {user ? (
          <>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                  <a
                    className='text-white text-decoration-none'
                    href='#'
                    onClick={handleLogout}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </>
        ) : null}
      </div>
    </nav>
  )
}

export default Header
