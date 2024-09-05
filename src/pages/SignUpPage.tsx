import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useMutateData from "../hooks/useMutateData";
import { LoginData, User } from "../types";
import FormWrapper from "../components/FormWrapper";
import { Box } from "@mui/material";
import Btn from "../ui/Btn";
import Input from "../ui/Input";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useNotificationStore } from "../store/useNotificationStore";

function SignUpPage() {
  const { setMessage } = useNotificationStore();
  const { setLogin } = useAuthStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginData & { rePass: string }>();

  const {
    data: registerData,
    isPending,
    mutate,
  } = useMutateData<Omit<User, "id">>({
    key: ["register"],
    method: "POST",
    uri: "/register",
  });

  const registerHandler = (data: LoginData & { rePass: string }) => {
    mutate({
      avatar: "",
      bookmarks: [],
      email: data.email,
      password: data.password,
      role: "user",
    });
  };

  useEffect(() => {
    if (registerData) {
      const message = registerData.user
        ? "You've been registered succesfully"
        : registerData.message;
      setMessage(message);
      if (registerData.user) {
        setLogin(registerData);
      }
    }
  }, [registerData]);

  return (
    <FormWrapper title="Sign Up">
      <form onSubmit={handleSubmit(registerHandler)} noValidate>
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

        <Input
          type="password"
          placeholder="Repeat password"
          inputProps={{
            ...register("rePass", {
              required: "Required field",
              validate: (val: string) => {
                if (watch("password") !== val) return "Passwords don't match";
              },
            }),
          }}
          error={errors.rePass ? true : false}
          helperText={errors.rePass?.message}
        />

        <Box sx={{ padding: "24px 0" }}>
          <Btn type="submit" variant="contained" color="error" fullWidth>
            {isPending ? "Loading..." : "Create an account"}
          </Btn>
        </Box>
      </form>
      <Box textAlign="center">
        Already have an account? <Link to="/login">Login</Link>
      </Box>
    </FormWrapper>
  );
}

export default SignUpPage;
