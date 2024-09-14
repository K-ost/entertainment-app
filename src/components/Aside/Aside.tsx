import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import user from "../../assets/user.svg";
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
        <Link to="/profile" data-testid="profileLink" aria-label="Profile">
          {auth?.accessToken ? (
            <Tooltip title={auth.user.email} placement="right">
              <img src={avatar} alt="" className="ava" />
            </Tooltip>
          ) : (
            <img src={user} alt="" style={{ width: "20px" }} />
          )}
        </Link>
      </AsideUser>
    </Sidebar>
  );
};

export default Aside;
