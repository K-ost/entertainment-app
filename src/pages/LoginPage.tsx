import { useState } from "react";
import useMutateData from "../hooks/useMutateData";
import { Link } from "react-router-dom";
import Btn from "../ui/Btn";
import Input from "../ui/Input";
import logo from "../assets/logo.svg";

function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { data, isPending, mutate } = useMutateData({
    key: ["login"],
    method: "POST",
    uri: "/login",
  });

  return (
    <div>
      <div className="formbox-logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="formbox">
        <h1>Login</h1>
        <Input
          type="email"
          handler={setEmail}
          placeholder="Email address"
          error={""}
        />
        <Input
          type="password"
          handler={setPassword}
          placeholder="Password"
          error={""}
        />
        <div className="formbox-btn">
          <Btn
            handler={() => mutate({ email, password })}
            title={isPending ? "Loading..." : "Login to your account"}
            expand
            disabled={false}
          />
        </div>
        <div className="text-center">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
