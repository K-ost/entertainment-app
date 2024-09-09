import { useForm } from "react-hook-form";
import { Box, CircularProgress, Typography } from "@mui/material";
import Btn from "../ui/Btn";
import { User } from "../types";
import Input from "../ui/Input";
import useMutateData from "../hooks/useMutateData";
import { useEffect } from "react";
import { useNotificationStore } from "../store/useNotificationStore";
import { useQueryClient } from "@tanstack/react-query";

type UserFormProps = {
  user: User;
};

type FormUser = Omit<User, "id" | "bookmarks" | "role" | "avatar">;

const UserForm = (props: UserFormProps): JSX.Element => {
  const { user } = props;
  const { setMessage } = useNotificationStore();
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({
    queryKey: ["user"],
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormUser & { rePass: string }>({
    defaultValues: {
      email: user.email,
      name: user.name,
      password: user.password,
      rePass: user.password,
    },
  });

  useEffect(() => {
    reset(user);
  }, [user]);

  const { mutate, isPending } = useMutateData<FormUser>({
    key: ["users"],
    method: "PATCH",
    uri: `/users/${user.id}`,
  });

  const updateUser = (data: FormUser) => {
    const updated: FormUser = {
      email: data.email,
      name: data.name,
    };
    if (data.password !== user.password) {
      updated["password"] = data.password;
    }
    mutate(updated);
    setMessage("User has been updated");
  };

  return (
    <div>
      <Typography variant="h3">Personal data</Typography>
      <Box>
        <form onSubmit={handleSubmit(updateUser)} noValidate>
          <Input
            type="text"
            inputProps={{ ...register("name") }}
            placeholder="Name"
          />

          <Input
            type="email"
            disabled
            inputProps={{
              ...register("email", {
                required: "Required field",
                pattern: {
                  message: "Incorrect Email",
                  value: /^\S+@\S+$/i,
                },
              }),
            }}
            placeholder="E-mail"
            error={errors.email ? true : false}
            helperText={errors.email?.message}
          />

          <Input
            type="password"
            inputProps={{
              ...register("password", {
                required: "Required field",
                minLength: {
                  value: 4,
                  message: "Should have 4 or more characters",
                },
              }),
            }}
            placeholder="Password"
            error={errors.password ? true : false}
            helperText={errors.password?.message}
          />

          <Input
            type="password"
            inputProps={{
              ...register("rePass", {
                required: "Required field",
                validate: (val: string) => {
                  if (watch("password") !== val) return "Passwords don't match";
                },
              }),
            }}
            placeholder="Repeat password"
            error={errors.rePass ? true : false}
            sx={{ mb: 4 }}
            helperText={errors.rePass?.message}
          />

          <Btn variant="contained" color="error" type="submit">
            Update
            {isPending && (
              <CircularProgress size={20} color="secondary" sx={{ ml: 2 }} />
            )}
          </Btn>
        </form>
      </Box>
    </div>
  );
};

export default UserForm;
