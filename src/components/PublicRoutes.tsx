import { Navigate, Outlet } from "react-router-dom";

type PublicRoutesProps = {
  isAuth: boolean;
};

const PublicRoutes = (props: PublicRoutesProps): JSX.Element => {
  const { isAuth } = props;
  return isAuth ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
