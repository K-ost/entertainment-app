import PageTitle from "../ui/PageTitle";
import Layout from "../components/Layout";
import Btn from "../ui/Btn";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../store/useAppStore";

function ProfilePage() {
  const { auth, setLogout } = useAuthStore();
  const { setMessage } = useAppStore();
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

      <div>Hi, {auth?.user.email}</div>
    </Layout>
  );
}

export default ProfilePage;
