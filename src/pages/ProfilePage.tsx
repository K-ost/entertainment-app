import PageTitle from "../ui/PageTitle";
import Layout from "../components/Layout";
import Btn from "../ui/Btn";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const { auth, setLogout } = useAuthStore();
  const navigate = useNavigate();

  const logoutHandler = () => {
    setLogout();
    navigate("/");
  };

  return (
    <Layout>
      <PageTitle title="Profile page">
        <Btn variant="contained" color="error" onClick={logoutHandler}>
          Logout
        </Btn>
      </PageTitle>

      <div className="mg-bottom">Hi, {auth?.user.email}</div>
    </Layout>
  );
}

export default ProfilePage;
