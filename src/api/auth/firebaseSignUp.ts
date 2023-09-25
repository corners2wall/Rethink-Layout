import { UserCredential, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'firebase'

export default function firebaseSignUp(
  email: string,
  password: string
): Promise<UserCredential> {
  return createUserWithEmailAndPassword(auth, email, password)
}
