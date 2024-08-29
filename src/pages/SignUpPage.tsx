import { Link } from "react-router-dom";
import Btn from "../ui/Btn";
import Input from "../ui/Input";
import logo from "../assets/logo.svg";

function SignUpPage() {
  return (
    <div>
      <div className="formbox-logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="formbox">
        <h1>Sign Up</h1>
        <Input type="email" handler={() => {}} placeholder="Email address" />
        <Input type="password" handler={() => {}} placeholder="Password" />
        <Input
          type="password"
          handler={() => {}}
          placeholder="Repeat password"
        />
        <div className="formbox-btn">
          <Btn handler={() => {}} title="Create an account" expand />
        </div>
        <div className="text-center">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
