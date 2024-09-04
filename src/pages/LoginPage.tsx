import useMutateData from "../hooks/useMutateData";
import { Link } from "react-router-dom";
import Btn from "../ui/Btn";
import Input from "../ui/Input";
import { LoginData } from "../types";
import { useAuthStore } from "../store/useAuthStore";
import FormWrapper from "../components/FormWrapper";
import { Box } from "@mui/material";
import { useAppStore } from "../store/useAppStore";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function LoginPage() {
  const { setLogin } = useAuthStore();
  const { setMessage } = useAppStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const {
    data: serverData,
    isPending,
    mutate,
  } = useMutateData<LoginData>({
    key: ["login"],
    method: "POST",
    uri: "/login",
  });

  const loginHandler = (data: LoginData) => {
    mutate({ email: data.email, password: data.password });
  };

  useEffect(() => {
    if (serverData) {
      if (serverData.user) {
        setLogin(serverData);
      }
      setMessage(
        serverData.user ? "You've succesfully been logged" : serverData
      );
    }
  }, [serverData]);

  return (
    <FormWrapper title="Login">
      <form onSubmit={handleSubmit(loginHandler)} noValidate>
        <Input
          type="email"
          placeholder="Email address"
          inputProps={{
            ...register("email", {
              required: "Required field",
              pattern: {
                message: "Incorrect Email",
                value: /^\S+@\S+$/i,
              },
            }),
          }}
          error={errors.email ? true : false}
          helperText={errors.email?.message}
        />

        <Input
          type="password"
          placeholder="Password"
          inputProps={{
            ...register("password", {
              required: "Required field",
              minLength: {
                value: 4,
                message: "Should have 4 or more characters",
              },
            }),
          }}
          error={errors.password ? true : false}
          helperText={errors.password?.message}
        />

        <Box sx={{ padding: "24px 0" }}>
          <Btn
            type="submit"
            variant="contained"
            color="error"
            fullWidth
            disabled={false}
          >
            {isPending ? "Loading..." : "Login to your account"}
          </Btn>
        </Box>
      </form>
      <Box textAlign="center">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </Box>
    </FormWrapper>
  );
}

export default LoginPage;
