import { Box, BoxProps, styled, Typography } from "@mui/material";
import { User } from "../../types";
import Btn from "../../ui/Btn";

type UserCardProps = {
  user: User;
  remove: (num: number) => void;
};

const Card = styled(Box)<BoxProps>(({ theme }) => ({
  alignItems: "center",
  backgroundColor: theme.palette.background.paper,
  borderRadius: 6,
  display: "flex",
  justifyContent: "space-between",
  minHeight: 72,
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
}));

const UserCard = (props: UserCardProps): JSX.Element => {
  const { user, remove } = props;

  return (
    <Card data-testid={`usercard-${user.id}`}>
      <Box>
        {user.name && <Typography variant="body2">{user.name}</Typography>}
        <Typography variant="body1" fontWeight={300}>
          {user.email}
        </Typography>
      </Box>
      {user.role !== "admin" && (
        <Btn
          size="small"
          color="error"
          variant="contained"
          onClick={() => remove(user.id)}
        >
          Remove
        </Btn>
      )}
    </Card>
  );
};

export default UserCard;
