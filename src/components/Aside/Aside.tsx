import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import { AsideUser, Sidebar, Logo } from "./AsideStyles";
import { Tooltip } from "@mui/material";
import { useAuthStore } from "../../store/useAuthStore";
import NavMenu from "./NavMenu";

const Aside = (): JSX.Element => {
  const { auth } = useAuthStore();

  return (
    <Sidebar>
      <Logo>
        <img src={logo} alt="" />
      </Logo>

      <NavMenu />

      <AsideUser>
        <Link to="/profile" data-testid="profileLink">
          {auth?.accessToken && (
            <Tooltip title={auth.user.email} placement="right">
              <img src={avatar} alt="" />
            </Tooltip>
          )}
        </Link>
      </AsideUser>
    </Sidebar>
  );
};

export default Aside;
