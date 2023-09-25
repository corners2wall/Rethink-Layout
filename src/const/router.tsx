import Home from 'pages/Home'
import SignIn from 'pages/SignIn'
import SignUp from 'pages/SignUp'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/home', element: <Home /> },
  { path: '/login', element: <SignIn /> },
  { path: '/registration', element: <SignUp /> }
])

export default router
