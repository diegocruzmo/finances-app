import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB3MXnfW9_BvcFhSfjfjfShFNBYVGR1fGY',
  authDomain: 'finances-app-f583d.firebaseapp.com',
  projectId: 'finances-app-f583d',
  storageBucket: 'finances-app-f583d.firebasestorage.app',
  messagingSenderId: '70188907806',
  appId: '1:70188907806:web:f64c7ad758c6c29a14dd0f'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { db, auth, provider, doc, setDoc }
