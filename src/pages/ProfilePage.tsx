import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import PageTitle from "../ui/PageTitle";
import Layout from "../components/Layout";
import Btn from "../ui/Btn";
import { useAuthStore } from "../store/useAuthStore";
import { useNotificationStore } from "../store/useNotificationStore";
import UsersList from "../components/Users/UsersList";
import useQueryData from "../hooks/useQueryData";
import { User } from "../types";
import UserSkelets from "../components/Users/UserSkelets";
import useMediaTools from "../hooks/useMediaTools";
import UserForm from "../components/UserForm";

function ProfilePage() {
  const { auth, setLogout } = useAuthStore();
  const { setMessage } = useNotificationStore();
  const navigate = useNavigate();
  const { isMobile } = useMediaTools();

  const { data, isLoading, isSuccess } = useQueryData<User[]>({
    key: ["users"],
    uri: "/users",
    enabled: auth?.user.role === "admin",
  });

  const currentUser = data?.find((user) => user.id === auth?.user.id);

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

      <Grid container spacing={isMobile ? 2 : 4}>
        <Grid item xs={12} sm={12} lg={6}>
          {currentUser && <UserForm user={currentUser} />}
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          {auth?.user.role === "admin" && (
            <>
              <Typography variant="h3">Users</Typography>
              {isSuccess && <UsersList users={data} />}
              {isLoading && <UserSkelets />}
            </>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
}

export default ProfilePage;
