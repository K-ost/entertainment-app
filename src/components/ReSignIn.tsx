import { useAppStore } from "../store/store"
import { useEffect } from "react"

const ReSignIn: React.FC = () => {
  const { setLogout } = useAppStore()

  useEffect(() => {
    setLogout()
  }, [])

  return null
}

export default ReSignIn
