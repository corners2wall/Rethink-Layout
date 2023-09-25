import 'styles.css'
import { useRoutes } from 'react-router-dom'
import { AuthProvider } from 'contexts/Auth'
import Home from 'pages/Home'
import SignIn from 'pages/SignIn'
import SignUp from 'pages/SignUp'

export default function Application() {
  const routes = useRoutes([
    { path: '/home', element: <Home /> },
    { path: '/login', element: <SignIn /> },
    { path: '/registration', element: <SignUp /> }
  ])

  return <AuthProvider>{routes}</AuthProvider>
}
