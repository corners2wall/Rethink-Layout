import { UserCredential, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'firebase'

export default function firebaseSignIn(
  email: string,
  password: string
): Promise<UserCredential> {
  return signInWithEmailAndPassword(auth, email, password)
}
