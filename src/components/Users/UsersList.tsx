import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { User } from "../../types";
import UserCard from "./UserCard";
import CustomModal from "../../ui/CustomModal";
import Btn from "../../ui/Btn";
import useMutateData from "../../hooks/useMutateData";
import { useQueryClient } from "@tanstack/react-query";

type UsersListProps = {
  users: User[];
};

const UsersList = (props: UsersListProps): JSX.Element => {
  const { users } = props;
  const [removeUser, setRemoveUser] = useState<boolean>(false);
  const [removeUserId, setRemoveUserId] = useState<number>();
  const queryClient = useQueryClient();

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
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          remove={(num: number) => {
            setRemoveUser(true), setRemoveUserId(num);
          }}
        />
      ))}

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
