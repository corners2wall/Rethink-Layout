import firebaseSignIn from 'api/auth/firebaseSignIn'
import firebaseSignUp from 'api/auth/firebaseSignUp'
import { UserCredential } from 'firebase/auth'
import { createContext, useContext, useState } from 'react'

interface AuthContextType {
  user: UserCredential | null
  signIn: (email: string, password: string) => Promise<void>
  signOut: (callback: VoidFunction) => void
  register: (email: string, password: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType>(null!)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserCredential | null>(null)

  const signIn = (email: string, password: string) =>
    firebaseSignIn(email, password).then(setUser)

  const signOut = () => setUser(null)

  const register = (email: string, password: string) =>
    firebaseSignUp(email, password).then(setUser)

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const authContext = useContext(AuthContext)

  if (!authContext) throw new Error('Use inside AuthProvider')

  return authContext
}
