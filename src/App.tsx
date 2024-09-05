import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MoviesScreen from "./pages/Movies";
import TvPage from "./pages/TvPage";
import Bookmarks from "./pages/Bookmarks";
import ProtectedRoutes from "./components/ProtectedRoutes";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import { useAuthStore } from "./store/useAuthStore";
import PublicRoutes from "./components/PublicRoutes";
import { useNotificationStore } from "./store/useNotificationStore";
import Notification from "./ui/Notification";

function App() {
  const { auth } = useAuthStore();
  const { isVisible, message } = useNotificationStore();
  const isAuth = !!auth;

  return (
    <div>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/movies" element={<MoviesScreen />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/" element={<PublicRoutes isAuth={isAuth} />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
        <Route path="/" element={<ProtectedRoutes isAuth={isAuth} />}>
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
      <Notification message={message} open={isVisible} />
    </div>
  );
}

export default App;
