import { Link } from "react-router-dom";
import Btn from "../ui/Btn";
import { useState } from "react";
import useMutateData from "../hooks/useMutateData";
import { User } from "../types";
import FormWrapper from "../components/FormWrapper";
import { Box } from "@mui/material";
import Input from "../ui/Input";

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
    <FormWrapper title="Sign Up">
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
      <Input
        type="password"
        onChange={() => {}}
        placeholder="Repeat password"
      />
      <Box sx={{ padding: "24px 0" }}>
        <Btn
          variant="contained"
          color="error"
          fullWidth
          onClick={registerHandler}
        >
          {isPending ? "Loading..." : "Create an account"}
        </Btn>
      </Box>
      <Box textAlign="center">
        Already have an account? <Link to="/login">Login</Link>
      </Box>
    </FormWrapper>
  );
}

export default SignUpPage;
