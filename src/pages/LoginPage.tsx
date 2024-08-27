import { Link } from "react-router-dom"
import Btn from "../ui/Btn"
import Input from "../ui/Input"
import logo from "../assets/logo.svg"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { API_URL, getData, getError } from "../api/api"
import { UserResponseType } from "../types"
import { useAppStore } from "../store/store"

function LoginPage() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { setLogin, setMsg } = useAppStore()
  
  // Query
  const { data, isPending, mutate } = useMutation({
    mutationFn: () => getData<UserResponseType>({
      method: 'POST',
      url: `${API_URL}/login`,
      body: JSON.stringify({ email, password })
    }),
    onSuccess: (data) => {
      (data!.accessToken) && setLogin(data!),
      (data!.accessToken) && setMsg(data?.msg!)
    }
  })
  
  const EmailError = getError(data!, "email")
  const PassError = getError(data!, "password")

  return (
    <div>
      <div className="formbox-logo">
        <img src={logo} alt="" />
      </div>
      <div className="formbox">
        <h1>Login</h1>
        <Input type="email" handler={setEmail} placeholder="Email address" error={EmailError} />
        <Input type="password" handler={setPassword} placeholder="Password" error={PassError} />
        <div className="formbox-btn">
          <Btn handler={mutate} title="Login to your account" expand disabled={isPending} />
        </div>
        <div className="text-center">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
