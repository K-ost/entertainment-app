import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MoviesScreen from "./pages/Movies";
import TvPage from "./pages/TvPage";
import Bookmarks from "./pages/Bookmarks";
import ProtectedRoutes from "./components/ProtectedRoutes";
import LoginPage from "./pages/LoginPage";
import PublicRoutes from "./components/PublicRoutes";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";

function App() {
  const auth = false;

  return (
    <div>
      <Routes>
        <Route path="/" element={<PublicRoutes isAuth={auth} />}>
          <Route path="/" index element={<Home />} />
          <Route path="/movies" element={<MoviesScreen />} />
          <Route path="/tv" element={<TvPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
        <Route path="/" element={<ProtectedRoutes isAuth={auth} />}>
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
