import { useState } from 'react'
import Button from 'components/Button'
import Input from 'components/Input'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from 'contexts/Auth'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { signIn } = useAuthContext()

  const redirectToHomePage = () => navigate('/home')

  const handleSignIn = (e) => {
    e.preventDefault()

    signIn(email, password).then(redirectToHomePage)
  }

  return (
    <div className="h-screen w-screen pt-[min(3%,_36px)]">
      <div className="me-auto ms-auto w-[min(90%,_1000px)]">
        <span className="font-raleway text-xl lg:text-3xl">Create Account</span>
        <form onSubmit={handleSignIn}>
          <br />
          <Input
            inputType="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <Input
            inputType="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Button label="Sign Up" buttonType="submit" />
        </form>
      </div>
    </div>
  )
}

export default SignIn
