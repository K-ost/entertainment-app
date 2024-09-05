import PageTitle from "../ui/PageTitle";
import Layout from "../components/Layout";
import Btn from "../ui/Btn";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { useNotificationStore } from "../store/useNotificationStore";
import { Typography } from "@mui/material";

function ProfilePage() {
  const { auth, setLogout } = useAuthStore();
  const { setMessage } = useNotificationStore();
  const navigate = useNavigate();

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

      <Typography variant="body1">Hi, {auth?.user.email}</Typography>

      {auth?.user.role === "admin" && <div>ADMIN ONLY</div>}
    </Layout>
  );
}

export default ProfilePage;
