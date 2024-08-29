import { Navigate, Outlet } from "react-router-dom";

type ProtectedRoutesProps = {
  isAuth: boolean;
};

const ProtectedRoutes = (props: ProtectedRoutesProps): JSX.Element => {
  const { isAuth } = props;
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
