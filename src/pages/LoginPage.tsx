import { useEffect, useState } from "react";
import useMutateData from "../hooks/useMutateData";
import { Link } from "react-router-dom";
import Input from "../ui/Input";
import Btn from "../ui/Btn";
import { LoginData } from "../types";
import { useAuthStore } from "../store/useAuthStore";
import FormWrapper from "../components/FormWrapper";
import { Box } from "@mui/material";

function LoginPage() {
  const { setLogin } = useAuthStore();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { data, isPending, mutate } = useMutateData<LoginData>({
    key: ["login"],
    method: "POST",
    uri: "/login",
  });

  useEffect(() => {
    if (data && data.user) {
      setLogin(data);
    }
  }, [data]);

  return (
    <FormWrapper title="Login">
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
      <Box sx={{ padding: "24px 0" }}>
        <Btn
          variant="contained"
          color="error"
          fullWidth
          onClick={() => mutate({ email, password })}
          disabled={false}
        >
          {isPending ? "Loading..." : "Login to your account"}
        </Btn>
      </Box>
      <Box textAlign="center">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </Box>
    </FormWrapper>
  );
}

export default LoginPage;
