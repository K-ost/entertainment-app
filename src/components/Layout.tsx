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
}));

const AppContent = styled(Box)<BoxProps>(({ theme }) => ({
  flex: 1,
  overflow: "auto",
  paddingBottom: theme.spacing(4),
  paddingRight: theme.spacing(4),
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(4),
    paddingTop: 0,
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
