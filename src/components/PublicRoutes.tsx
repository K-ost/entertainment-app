import { Navigate, Outlet } from "react-router-dom"

interface IPublicRoutes {
  isAuth: boolean
}

const PublicRoutes: React.FC<IPublicRoutes> = ({ isAuth }) => {
  return isAuth ? <Navigate to="/" /> : <Outlet />
}

export default PublicRoutes
