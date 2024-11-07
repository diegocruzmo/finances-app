import { Link } from 'react-router-dom'
import { useData } from '../../hooks/useData'

const SignIn = () => {
  const { inputs, updateData, loginUser } = useData()

  const handleChange = (e) => {
    const { id, value } = e.target
    updateData({ id, value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser()
  }

  return (
    <div className='container fluid-container '>
      <div className='d-flex align-items-center justify-content-center min-vh-100'>
        <form className='w-75 border border-primary shadow p-4 mb-5 bg-white rounded'>
          <h1 className='text-center text-secondary'>Finance's App</h1>
          <hr />
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='email'
              onChange={handleChange}
              value={inputs.email}
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
              onChange={handleChange}
              value={inputs.pass1}
            />
          </div>

          <div className='row justify-content-center'>
            <div className='col-auto'>
              <button
                onClick={handleSubmit}
                type='submit'
                className='btn btn-primary mb-2'
              >
                Login
              </button>
            </div>
          </div>
          <hr />
          <Link to='/signup'>Click here to Sign Up</Link>
        </form>
      </div>
    </div>
  )
}

export default SignIn
