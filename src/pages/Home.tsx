import Card from "../components/Card/Card"
import { CardType, ServerResponseType } from "../types"
import Slider from "../components/Slider"
import { useQuery } from "@tanstack/react-query"
import { API_URL, getData } from "../api/api"
import { useAppStore } from "../store/store"
import LoadingSkelets from "../components/LoadingSkelets"
import ReSignIn from "../components/ReSignIn"
import Layout from "../components/Layout"

function Home() {
  const { accessToken } = useAppStore()

  const trendsQuery = useQuery({
    queryKey: ['trends', '1'],
    queryFn: () => getData<ServerResponseType<CardType[]>>({ method: 'GET', url: `${API_URL}/videos?trends=1`, token: accessToken! })
  })
  const recommendedQuery = useQuery({
    queryKey: ['trends', '0'],
    queryFn: () => getData<ServerResponseType<CardType[]>>({ method: 'GET', url: `${API_URL}/videos?trends=0`, token: accessToken! })
  })

  if (trendsQuery.isLoading || recommendedQuery.isLoading) return <LoadingSkelets slider />
  if (trendsQuery.isError || recommendedQuery.isError) return <p>Server error</p>
  if (trendsQuery.data!.msg === 'Invalid token') return <ReSignIn />

  return (
    <Layout>
      <h1>Trending</h1>
      <div className="mg-bottom">
        <Slider<CardType> list={trendsQuery.data!.data} />
      </div>

      <h2>Recommended for you</h2>
      <div className="grid grid-4 grid-tb-3 grid-mb-2">
        {recommendedQuery.data!.data.map(el => <Card key={el._id} el={el} type="card" />)}
      </div>
    </Layout>
  )
}

export default Home
