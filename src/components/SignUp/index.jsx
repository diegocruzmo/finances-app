import { Link } from 'react-router-dom'
import './styles.css'
import { useData } from '../../hooks/useData'

const SignUp = () => {
  const { inputs, updateData, newUser } = useData()

  const handleChange = (e) => {
    const { id, value } = e.target
    updateData({ id, value })
  }

  const handleCreateUser = (e) => {
    e.preventDefault()
    newUser()
  }

  return (
    <div className='container fluid-container '>
      <div className='d-flex align-items-center justify-content-center min-vh-100'>
        <form className='w-75 border border-primary shadow p-4 mb-5 bg-white rounded'>
          <h1 className='text-center text-secondary'>Finance's App</h1>
          <hr />
          <div className='mb-3'>
            <label htmlFor='fullname' className='form-label'>
              Full Name
            </label>
            <input
              type='text'
              className='form-control'
              id='fullname'
              value={inputs.fullname}
              onChange={handleChange}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='email'
              value={inputs.email}
              onChange={handleChange}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='pass1' className='form-label'>
              Password
            </label>
            <input
              type='password'
              className='form-control'
              id='pass1'
              value={inputs.pass1}
              onChange={handleChange}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='pass2' className='form-label'>
              Repeat Password
            </label>
            <input
              type='password'
              className='form-control'
              id='pass2'
              value={inputs.pass2}
              onChange={handleChange}
            />
          </div>

          <div className='row justify-content-center'>
            <div className='col-auto'>
              <button
                onClick={handleCreateUser}
                type='submit'
                className='btn btn-primary mb-2'
              >
                Sign Up
              </button>
            </div>
          </div>
          <hr />
          <Link to='/'>Click here to Login</Link>
        </form>
      </div>
    </div>
  )
}

export default SignUp
