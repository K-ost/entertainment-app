import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Input from "../ui/Input";
import Btn from "../ui/Btn";
import { useState } from "react";
import useMutateData from "../hooks/useMutateData";
import { User } from "../types";

function SignUpPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { data, isPending, mutate } = useMutateData<Omit<User, "id">>({
    key: ["register"],
    method: "POST",
    uri: "/register",
  });

  const registerHandler = () => {
    mutate({
      avatar: "",
      email,
      password,
      role: "user",
      bookmarks: [],
    });
  };

  console.log(data);

  return (
    <div>
      <div className="formbox-logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="formbox">
        <h1>Sign Up</h1>
        <Input type="email" handler={setEmail} placeholder="Email address" />
        <Input type="password" handler={setPassword} placeholder="Password" />
        <Input
          type="password"
          handler={() => {}}
          placeholder="Repeat password"
        />
        <div className="formbox-btn">
          <Btn
            variant="contained"
            color="error"
            fullWidth
            onClick={registerHandler}
          >
            {isPending ? "Loading..." : "Create an account"}
          </Btn>
        </div>
        <div className="text-center">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
