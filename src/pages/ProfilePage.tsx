import UserList from "../components/User/UserList"
import { useAppStore } from "../store/store"
import Btn from "../ui/Btn"
import PageTitle from "../ui/PageTitle"
import Input from "../ui/Input"
import SelectBox, { SelectBoxItemType } from "../ui/SelectBox"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { API_URL, getData } from "../api/api"
import { CardType, ServerResponseType } from "../types"
import Layout from "../components/Layout"

const categoryList: SelectBoxItemType[] = [
  { name: 'TV Series', value: 'tv-series' },
  { name: 'Movie', value: 'movie' }
]

const ratingList: SelectBoxItemType[] = [
  { name: 'PG', value: 'pg' },
  { name: '18+', value: '18+' },
  { name: 'E', value: 'E' },
]

function ProfilePage() {
  const { user, accessToken, setLogout, setMsg } = useAppStore()
  const [title, setTitle] = useState<string>('')
  const [year, setYear] = useState<string>('')
  const [category, setCategory] = useState<string>('movie')
  const [rating, setRating] = useState<string>('pg')

  // useMutation
  const { mutate } = useMutation({
    mutationFn: () => getData<ServerResponseType<CardType>>({
      url: `${API_URL}/videos`,
      body: JSON.stringify({ title, year, category, rating, thumbnail: '', isTrending: false }),
      method: 'POST',
      token: accessToken!
    }),
    onSuccess: (data) => {
      setMsg(data!.msg)
      setTitle('')
      setYear('')
    }
  })

  return (
    <Layout>
      <PageTitle title="Profile page">
        <Btn handler={() => setLogout()} title="Logout" />
      </PageTitle>
      
      <div className="mg-bottom">
        Hi, {user!.email}
      </div>
      
      {user!.role === 'admin' && <>
        <UserList />
        <h3>Adding new video</h3>

        <div className="grid grid-3">
          <Input handler={setTitle} placeholder="Title" />
          <Input handler={setYear} placeholder="Year" type="number" min="1" />
        </div>
        <div className="mg-bottom">
          <SelectBox handler={setCategory} list={categoryList} value={category} />
          <SelectBox handler={setRating} list={ratingList} value={rating} />
        </div>
        <Btn handler={mutate} title="Add video" />

      </>}
      
    </Layout>
  )
}

export default ProfilePage
