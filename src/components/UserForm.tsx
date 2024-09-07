import { Box, Typography } from "@mui/material";
import Btn from "../ui/Btn";
import { User } from "../types";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import useMutateData from "../hooks/useMutateData";
import { useQueryClient } from "@tanstack/react-query";

type UserFormProps = {
  user: User;
};

type FormUser = Omit<User, "id" | "bookmarks" | "role" | "avatar">;

const UserForm = (props: UserFormProps): JSX.Element => {
  const { user } = props;
  const client = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormUser>();

  const { mutate, isPending } = useMutateData<FormUser>({
    key: ["users"],
    method: "PATCH",
    uri: `/users/${user.id}`,
  });

  const updateUser = (data: FormUser) => {
    mutate({
      email: data.email,
      password: data.password,
      name: data.name,
    });
  };

  client.invalidateQueries({
    queryKey: ["users"],
  });

  return (
    <div>
      <Typography variant="h3">Form</Typography>
      <Box>
        <form onSubmit={handleSubmit(updateUser)} noValidate>
          <Input
            type="text"
            inputProps={{ defaultValue: user.name, ...register("name") }}
            placeholder="Name"
          />
          <Input
            type="email"
            inputProps={{
              defaultValue: user.email,
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
              defaultValue: user.password,
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
            sx={{ marginBottom: 4 }}
            helperText={errors.password?.message}
          />
          <Btn variant="contained" color="error" type="submit">
            {isPending ? "Loading..." : "Update"}
          </Btn>
        </form>
      </Box>
    </div>
  );
};

export default UserForm;
