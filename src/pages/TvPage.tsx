import { useQuery } from "@tanstack/react-query"
import { useAppStore } from "../store/store"
import { API_URL, getData } from "../api/api"
import { CardType, ServerResponseType } from "../types"
import Card from "../components/Card/Card"
import LoadingSkelets from "../components/LoadingSkelets"
import ReSignIn from "../components/ReSignIn"
import PageTitle from "../ui/PageTitle"
import Sorting from "../components/Sorting"
import { useState } from "react"
import { getSortQuery } from "../utils/utils"
import Layout from "../components/Layout"

function TvPage() {
  const { accessToken } = useAppStore()
  const [sort, setSort] = useState<string>('default')
  const sortQuery = getSortQuery(sort)

  const { data, isError, isLoading } = useQuery({
    queryKey: ['videos', sort],
    queryFn: () => getData<ServerResponseType<CardType[]>>({ url: `${API_URL}/videos?category=TV%20Series${sortQuery}`, token: accessToken! })
  })

  if (isLoading) return <LoadingSkelets />
  if (isError) return <p>Server error</p>
  if (data?.msg === 'Invalid token') return <ReSignIn />
  
  return (
    <Layout>
      <PageTitle title="TV Series">
        <Sorting setSort={setSort} value={sort} />
      </PageTitle>
      <div className="grid grid-4 grid-tb-3 grid-mb-2">
        {data!.data.map(el => <Card key={el._id} el={el} type="card" />)}
      </div>
    </Layout>
  )
}

export default TvPage
