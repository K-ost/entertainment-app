import { Navigate, Outlet } from "react-router-dom"

interface IProtectedRoutes {
  isAuth: boolean
}

const ProtectedRoutes: React.FC<IProtectedRoutes> = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes
