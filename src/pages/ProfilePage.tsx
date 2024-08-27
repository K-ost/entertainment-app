import Btn from "../ui/Btn";
import PageTitle from "../ui/PageTitle";
import Layout from "../components/Layout";

function ProfilePage() {
  return (
    <Layout>
      <PageTitle title="Profile page">
        <Btn handler={() => {}} title="Logout" />
      </PageTitle>

      <div className="mg-bottom">Hi, USERNAME</div>
    </Layout>
  );
}

export default ProfilePage;
