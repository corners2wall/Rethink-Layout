import 'styles.css'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from 'contexts/Auth'
import router from 'const/router'

export default function Application() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}
