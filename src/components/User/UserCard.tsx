import styled from "styled-components";
import { UserType } from "../../types";
import Btn from "../../ui/Btn";
import { SetStateAction } from "react";

type UserCardProps = {
  remove: React.Dispatch<SetStateAction<boolean>>;
  user: UserType;
};

// Styles
const Card = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 0 8px;
  padding: 16px;
  b {
    font-weight: 500;
  }
`;
const CardRole = styled.div`
  background: var(--color-warning);
  border-radius: 8px;
  color: var(--color-dark);
  padding: 4px 8px;
`;

const UserCard = (props: UserCardProps): JSX.Element => {
  const { remove, user } = props;

  return (
    <Card className="module">
      <div>
        <b>{user.email}</b> | Bookmarks: {user.bookmarks?.length}
      </div>
      {user.role !== "admin" && (
        <Btn handler={remove} title="&times;" size="small" />
      )}
      {user.role === "admin" && <CardRole>{user.role}</CardRole>}
    </Card>
  );
};

export default UserCard;
