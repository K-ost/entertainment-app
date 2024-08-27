import { Link } from "react-router-dom";
import Btn from "../ui/Btn";
import Input from "../ui/Input";
import logo from "../assets/logo.svg";

function LoginPage() {
  return (
    <div>
      <div className="formbox-logo">
        <img src={logo} alt="" />
      </div>
      <div className="formbox">
        <h1>Login</h1>
        <Input
          type="email"
          handler={() => {}}
          placeholder="Email address"
          error={""}
        />
        <Input
          type="password"
          handler={() => {}}
          placeholder="Password"
          error={""}
        />
        <div className="formbox-btn">
          <Btn
            handler={() => {}}
            title="Login to your account"
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
