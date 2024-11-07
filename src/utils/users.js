import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { toast } from 'react-toastify'

export const createUser = async ({ inputs }) => {
  const { fullname, email, pass1, pass2 } = inputs

  if (fullname === '' || email === '' || pass1 === '' || pass2 === '') {
    toast.error('All fields are required!')
    return false
  }

  if (pass1 !== pass2) {
    toast.error('Passwords do not match!')
    return false
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      pass1
    )
    const user = userCredential.user
    await createDoc(user, fullname)
    toast.success('User Created!')
    return user
  } catch (error) {
    const errorMessage = error.message
    toast.error(errorMessage)
    return false
  }
}

export const login = async ({ inputs }) => {
  const { email, pass1 } = inputs

  if (email === '' || pass1 === '') {
    toast.error('All fields are required!')
    return false
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, pass1)

    const user = userCredential.user
    toast.success('User Logged In!')

    return user
  } catch (error) {
    const errorMessage = error.message
    toast.error(errorMessage)
    return false
  }
}

async function createDoc(user, fullname) {
  if (!user) return

  const userRef = doc(db, 'users', user.uid)
  const userData = await getDoc(userRef)

  if (!userData.exists()) {
    try {
      await setDoc(doc(db, 'users', user.uid), {
        name: user.displayName ? user.displayName : fullname,
        email: user.email,
        photoURL: user.photoURL ? user.photoURL : '',
        createdAt: new Date()
      })

      toast.success('Doc created!')
    } catch (error) {
      toast.error(error.message)
    }
  }
}

export const logout = async () => {
  try {
    await signOut(auth)
    toast.success('Logged out successfully')
  } catch (error) {
    toast.error(error.message)
  }
}
