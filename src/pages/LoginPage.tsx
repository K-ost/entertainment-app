import { useEffect, useState } from "react";
import useMutateData from "../hooks/useMutateData";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Input from "../ui/Input";
import Btn from "../ui/Btn";
import { useAppStore } from "../store/store";
import { LoginData } from "../types";

function LoginPage() {
  const { setAuth } = useAppStore();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { data, isPending, mutate } = useMutateData<LoginData>({
    key: ["login"],
    method: "POST",
    uri: "/login",
  });

  useEffect(() => {
    if (data && data.user) {
      setAuth(data);
    }
  }, [data]);

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
            variant="contained"
            color="error"
            fullWidth
            onClick={() => mutate({ email, password })}
            disabled={false}
          >
            {isPending ? "Loading..." : "Login to your account"}
          </Btn>
        </div>
        <div className="text-center">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
