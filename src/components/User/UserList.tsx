import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { API_URL, getData } from "../../api/api"
import { useAppStore } from "../../store/store"
import { ServerResponseType, UserType } from "../../types"
import UserCard from "./UserCard"
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import Btn from "../../ui/Btn"
import { useState } from "react"
import ReSignIn from "../ReSignIn"

type confirmModalType = {
  state: boolean
  userId: string
  username: string
}

const UserList: React.FC = () => {
  const { accessToken } = useAppStore()
  const [confirmModal, setConfirmModal] = useState<confirmModalType>({ state: false, userId: '', username: '' })
  const queryClient = useQueryClient()

  // usersQuery
  const { data, isError, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: () => getData<ServerResponseType<UserType[]>>({ url: `${API_URL}/users`, token: accessToken! })
  })

  // removeUser
  const userMutation = useMutation({
    mutationFn: (id: string) => getData<ServerResponseType<UserType>>({ url: `${API_URL}/users/${id}`, token: accessToken!, method: 'DELETE' }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    }
  })

  // removeHandler
  const removeHandler = () => {
    userMutation.mutate(confirmModal.userId)
    setConfirmModal({ state: false, userId: '', username: '' })
  }

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Server error</p>
  if (data?.msg === 'Invalid token') return <ReSignIn />

  return (
    <div className="mg-bottom">
      <h3>Users</h3>
      {data?.data.map(user => <UserCard
        key={user._id}
        user={user}
        remove={() => setConfirmModal({ state: true, userId: user._id, username: user.email })}
      />)}

      <Dialog open={confirmModal.state} onClose={() => setConfirmModal({ state: false, userId: '', username: '' })}>
        <DialogTitle>Deleting a user</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you confirm deletion? User <b>{confirmModal.username}</b> will be deleted forever without any opportunty to restore.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Btn handler={() => setConfirmModal({ state: false, userId: '', username: '' })} title="Disagree" color="secondary" />
          <Btn handler={removeHandler} title="Agree" />
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default UserList
