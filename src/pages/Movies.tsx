import { useQuery } from "@tanstack/react-query"
import { API_URL, getData } from "../api/api"
import { useAppStore } from "../store/store"
import Card from "../components/Card/Card"
import { CardType, ServerResponseType } from "../types"
import LoadingSkelets from "../components/LoadingSkelets"
import ReSignIn from "../components/ReSignIn"
import { useState } from "react"
import { getSortQuery } from "../utils/utils"
import Sorting from "../components/Sorting"
import PageTitle from "../ui/PageTitle"
import Layout from "../components/Layout"

function MoviesScreen() {
  const { accessToken } = useAppStore()
  const [sort, setSort] = useState<string>('default')
  const sortQuery = getSortQuery(sort)

  const { data, isError, isLoading } = useQuery({
    queryKey: ['videos', sort],
    queryFn: () => getData<ServerResponseType<CardType[]>>({ url: `${API_URL}/videos?category=Movie${sortQuery}`, token: accessToken! })
  })

  if (isLoading) return <LoadingSkelets />
  if (isError) return <p>Server error</p>
  if (data?.msg === 'Invalid token') return <ReSignIn />

  return (
    <Layout>
      <PageTitle title="Movies">
        <Sorting setSort={setSort} value={sort} />
      </PageTitle>

      <div className="grid grid-4 grid-tb-3 grid-mb-2">
        {data!.data.map(el => <Card key={el._id} el={el} type="card" />)}
      </div>
    </Layout>
  )
}

export default MoviesScreen
