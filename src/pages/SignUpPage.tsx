import { Link, useNavigate } from "react-router-dom"
import Btn from "../ui/Btn"
import Input from "../ui/Input"
import logo from "../assets/logo.svg"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { API_URL, getData, getError } from "../api/api"
import { UserResponseType } from "../types"
import { useAppStore } from "../store/store"

function SignUpPage() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [rePassword, setRePassword] = useState<string>('')
  const { setMsg } = useAppStore()
  const navigate = useNavigate()

  const { data, mutate } = useMutation({
    mutationFn: () => getData<UserResponseType>({
      method: 'POST',
      url: `${API_URL}/register`,
      body: JSON.stringify({ email, password, rePassword })
    }),
    onSuccess: (data) => {
      (data!) && setMsg(data?.msg!)
      navigate('/login')
    }
  })

  const EmailError = getError(data!, "email")
  const PassError = getError(data!, "password")
  const RePassError = getError(data!, "rePassword")

  return (
    <div>
      <div className="formbox-logo">
        <img src={logo} alt="" />
      </div>
      <div className="formbox">
        <h1>Sign Up</h1>
        <Input type="email" handler={setEmail} placeholder="Email address" error={EmailError} />
        <Input type="password" handler={setPassword} placeholder="Password" error={PassError} />
        <Input type="password" handler={setRePassword} placeholder="Repeat password" error={RePassError} />
        <div className="formbox-btn">
          <Btn handler={mutate} title="Create an account" expand />
        </div>
        <div className="text-center">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
