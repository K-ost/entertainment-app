import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { UserResponseType, UserType } from '../types'

interface AppState {
  accessToken: string | null
  user: UserType | null
  msg: string
  setLogin: (data: UserResponseType) => void
  setLogout: () => void
  updateUser: (data: UserType) => void
  setMsg: (message: string) => void
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        accessToken: null,
        user: null,
        msg: '',

        // setLogin
        setLogin: (data) => set(() => {
          return { accessToken: data.accessToken, user: data.user }
        }),

        // setLogout
        setLogout: () => set(() => ({ accessToken: null, user: null })),

        // updateUser: () => void
        updateUser: (data) => set(() => ({ user: data })),

        // setMsg
        setMsg: (message) => set(() => ({ msg: message }))

      }),
      {
        name: 'login',
        partialize: (state) => ({
          accessToken: state.accessToken,
          user: state.user
        })
      }
    )
  )
)
