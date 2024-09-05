import { Box, Typography } from "@mui/material";
import useQueryData from "../../hooks/useQueryData";
import { User } from "../../types";
import UserCard from "./UserCard";
import UserSkelets from "./UserSkelets";
import CustomModal from "../../ui/CustomModal";
import Btn from "../../ui/Btn";
import useMutateData from "../../hooks/useMutateData";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

const UsersList = (): JSX.Element => {
  const [removeUser, setRemoveUser] = useState<boolean>(false);
  const [removeUserId, setRemoveUserId] = useState<number>();
  const queryClient = useQueryClient();

  const { data, isLoading, isSuccess } = useQueryData<User[]>({
    key: ["users"],
    uri: "/users",
  });

  const { mutate } = useMutateData({
    key: ["users"],
    method: "DELETE",
    uri: `/users/${removeUserId}`,
  });

  const removeHandler = () => {
    mutate(undefined);
    setRemoveUser(false);
  };

  queryClient.invalidateQueries({
    queryKey: ["users"],
  });

  return (
    <div>
      <Typography variant="h3" sx={{ marginBottom: "10px" }}>
        Users
      </Typography>
      {isSuccess &&
        data.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            remove={(num: number) => {
              setRemoveUser(true), setRemoveUserId(num);
            }}
          />
        ))}
      {isLoading && <UserSkelets />}

      <CustomModal
        title="Remove user"
        close={() => setRemoveUser(false)}
        show={removeUser}
      >
        <Box>
          <Typography variant="body1" sx={{ marginBottom: "20px" }}>
            Are you sure you want to remove user?
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Btn
              variant="contained"
              color="secondary"
              onClick={() => setRemoveUser(false)}
              fullWidth
              sx={{ mr: 2 }}
            >
              Cancel
            </Btn>
            <Btn
              variant="contained"
              color="error"
              fullWidth
              onClick={removeHandler}
            >
              Remove
            </Btn>
          </Box>
        </Box>
      </CustomModal>
    </div>
  );
};

export default UsersList;
