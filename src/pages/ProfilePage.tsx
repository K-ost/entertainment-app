import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import PageTitle from "../ui/PageTitle";
import Layout from "../components/Layout";
import Btn from "../ui/Btn";
import { useAuthStore } from "../store/useAuthStore";
import { useNotificationStore } from "../store/useNotificationStore";
import UsersList from "../components/Users/UsersList";
import useQueryData from "../hooks/useQueryData";
import { User } from "../types";
import UserSkelets from "../components/Users/UserSkelets";

function ProfilePage() {
  const { auth, setLogout } = useAuthStore();
  const { setMessage } = useNotificationStore();
  const navigate = useNavigate();

  const { data, isLoading, isSuccess } = useQueryData<User[]>({
    key: ["users"],
    uri: "/users",
    enabled: auth?.user.role === "admin",
  });

  const logoutHandler = () => {
    setLogout();
    navigate("/");
    setMessage("You have just left the app");
  };

  return (
    <Layout>
      <PageTitle title="Profile page">
        <Btn variant="contained" color="error" onClick={logoutHandler}>
          Logout
        </Btn>
      </PageTitle>

      <Typography variant="h4">Hi, {auth?.user.email}</Typography>

      {auth?.user.role === "admin" && (
        <>
          <Typography variant="h3" sx={{ marginBottom: "10px" }}>
            Users
          </Typography>
          {isSuccess && <UsersList users={data} />}
          {isLoading && <UserSkelets />}
        </>
      )}
    </Layout>
  );
}

export default ProfilePage;
