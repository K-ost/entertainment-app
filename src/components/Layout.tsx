import Aside from "./Aside/Aside"
import Search from "./Search"

interface ILayout {
  children: React.ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="app">
      <Aside />
      <div className="app-container">
        <Search />
        <div className="app-body">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
