import { useState } from 'react'
import { createUser, login, logout } from '../utils/users'
import { useNavigate } from 'react-router-dom'

export const useData = () => {
  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    fullname: '',
    email: '',
    pass1: '',
    pass2: ''
  })

  const updateData = ({ id, value }) => {
    setInputs((previous) => ({
      ...previous,
      [id]: value
    }))
  }

  const newUser = async () => {
    const user = await createUser({ inputs })

    if (user) {
      setInputs({
        fullname: '',
        email: '',
        pass1: '',
        pass2: ''
      })

      navigate('/dashboard')
    }
  }

  const loginUser = async () => {
    const user = await login({ inputs })
    if (user) navigate('/dashboard')
  }

  const signOut = async () => {
    await logout()
    navigate('/')
  }

  return { inputs, updateData, newUser, loginUser, signOut }
}
