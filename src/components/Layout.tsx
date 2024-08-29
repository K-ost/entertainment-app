import Aside from "./Aside/Aside";
import Search from "./Search";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps): JSX.Element => {
  const { children } = props;

  return (
    <div className="app">
      <Aside />
      <div className="app-container">
        <Search />
        <div className="app-body">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
