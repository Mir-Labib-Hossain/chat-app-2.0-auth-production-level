import { useAppDispatch } from "../../app/hooks"
import { login } from "../../features/authSlice"

const Login = () => {
  const dispatch = useAppDispatch()
  console.log("login")

  const handleLogin = () => {
    dispatch(login())
  }

  return <button onClick={handleLogin}>Login</button>
}

export default Login
