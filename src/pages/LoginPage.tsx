import { useEffect, useState } from "react";
import useMutateData from "../hooks/useMutateData";
import { Link } from "react-router-dom";
import Btn from "../ui/Btn";
import Input from "../ui/Input";
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        placeholder="Email address"
      />
      <Input
        type="password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        placeholder="Password"
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
