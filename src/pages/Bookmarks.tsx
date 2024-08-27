import { useQuery } from "@tanstack/react-query"
import { useAppStore } from "../store/store"
import { API_URL, getData } from "../api/api"
import { CardType, ServerResponseType } from "../types"
import Card from "../components/Card/Card"
import LoadingSkelets from "../components/LoadingSkelets"
import ReSignIn from "../components/ReSignIn"
import Layout from "../components/Layout"

function Bookmarks() {
  const { user, accessToken } = useAppStore()
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ['bookmarks'],
    queryFn: () => getData<ServerResponseType<CardType[]>>({
      url: `${API_URL}/users/${user!._id}/bookmarks`,
      token: accessToken!
    }),
  })
  

  if (isLoading) return <LoadingSkelets number={4} />
  if (isError) return <p>Server error</p>
  if (data?.msg === 'Invalid token') return <ReSignIn />

  return (
    <Layout>
      <h1>Bookmarks</h1>
      <div className="grid grid-4 grid-tb-3 grid-mb-2">
        {data && data.data.map(el => <Card key={el._id} el={el} />)}
        {!isLoading && !data && <p>Your bookmark list is empty.</p>}
      </div>
    </Layout>
  )
}

export default Bookmarks