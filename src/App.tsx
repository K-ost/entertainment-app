import { Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Home from "./pages/Home"
import MoviesScreen from "./pages/Movies"
import TvPage from "./pages/TvPage"
import Bookmarks from "./pages/Bookmarks"
import ProtectedRoutes from "./components/ProtectedRoutes"
import LoginPage from "./pages/LoginPage"
import PublicRoutes from "./components/PublicRoutes"
import SignUpPage from "./pages/SignUpPage"
import ProfilePage from "./pages/ProfilePage"
import { useAppStore } from "./store/store"
import SearchPage from "./pages/SearchPage"
import { useEffect, useState } from "react"
import Toast from "./ui/Toast"

function App() {
  const queryClient = new QueryClient()
  const { accessToken, msg } = useAppStore()
  const auth = !!accessToken
  const [showToast, setShowToast] = useState<boolean>(false)

  useEffect(() => {
    if (msg.length) setShowToast(true)
  }, [msg])

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<ProtectedRoutes isAuth={auth} />}>
          <Route path="/" index element={<Home />} />
          <Route path="/movies" element={<MoviesScreen />} />
          <Route path="/tv" element={<TvPage />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
        <Route path="/" element={<PublicRoutes isAuth={auth} />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
      </Routes>

      <Toast message={msg} show={showToast} close={() => setShowToast(false)} />
    </QueryClientProvider>
  )
}

export default App
