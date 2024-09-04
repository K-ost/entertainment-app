import { Box, BoxProps, styled } from "@mui/material";
import Aside from "./Aside/Aside";
import Search from "./Search/Search";

type LayoutProps = {
  children: React.ReactNode;
};

// Styles
const AppMain = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  height: "100vh",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

const AppContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  overflow: "hidden",
  paddingTop: theme.spacing(4),
  [theme.breakpoints.down("lg")]: {
    paddingTop: theme.spacing(3),
  },
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(2),
  },
}));

const AppContent = styled(Box)<BoxProps>(({ theme }) => ({
  flex: 1,
  overflow: "auto",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(4),
  paddingRight: theme.spacing(4),
  [theme.breakpoints.down("lg")]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
}));

const Layout = (props: LayoutProps): JSX.Element => {
  const { children } = props;

  return (
    <AppMain>
      <Aside />
      <AppContainer>
        <Search />
        <AppContent>{children}</AppContent>
      </AppContainer>
    </AppMain>
  );
};

export default Layout;
