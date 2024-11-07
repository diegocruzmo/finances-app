import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorPageView from './pages/ErrorPageView'
import SignUpView from './pages/SignUpView'
import SignInView from './pages/SignInView'
import DashboardView from './pages/DashboardView'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path='/' element={<SignInView />} />
          <Route path='/signup' element={<SignUpView />} />
          <Route path='/dashboard' element={<DashboardView />} />
          <Route path='*' element={<ErrorPageView />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
