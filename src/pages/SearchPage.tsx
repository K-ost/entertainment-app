import { useQuery } from "@tanstack/react-query"
import { API_URL, getData } from "../api/api"
import { useAppStore } from "../store/store"
import { useSearchParams } from "react-router-dom"
import { CardType, ServerResponseType } from "../types"
import { useEffect } from "react"
import LoadingSkelets from "../components/LoadingSkelets"
import Card from "../components/Card/Card"
import ReSignIn from "../components/ReSignIn"
import Layout from "../components/Layout"

function SearchPage() {
  const { accessToken } = useAppStore()
  const [searchParams, _] = useSearchParams()
  const searchQuery = searchParams.get('q')

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['search'],
    queryFn: () => getData<ServerResponseType<CardType[]>>({ url: `${API_URL}/search?q=${searchQuery}`, token: accessToken! }),
  })

  // Title
  const title = searchQuery?.length ? `Found ${data?.count} results for "${searchQuery}"` : 'Not found'

  useEffect(() => {
    refetch()
  }, [searchParams])

  if (isLoading) return <LoadingSkelets />
  if (isError) return <p>Server error</p>
  if (data!.msg === 'Invalid token') return <ReSignIn />

  return (
    <Layout>
      <h1>{title}</h1>
      <div className="grid grid-4 grid-tb-3 grid-mb-2">
        {data!.data.map(el => <Card key={el._id} el={el} type="card" />)}
      </div>
    </Layout>
  )
}

export default SearchPage
