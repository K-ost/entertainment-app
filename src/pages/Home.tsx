import Card from "../components/Card/Card";
import Slider from "../components/Slider";
import LoadingSkelets from "../components/LoadingSkelets";
import Layout from "../components/Layout";
import useQueryData from "../hooks/useQueryData";
import { Video } from "../types";

function Home() {
  const trendsQuery = useQueryData<Video[]>({
    key: ["trends", "true"],
    uri: "/videos?isTrending=true",
  });

  const recommendedQuery = useQueryData<Video[]>({
    key: ["trends", "false"],
    uri: "/videos?isTrending=false",
  });

  if (trendsQuery.isLoading || recommendedQuery.isLoading)
    return <LoadingSkelets slider />;
  if (trendsQuery.isError || recommendedQuery.isError)
    return <p>Server error</p>;

  return (
    <Layout>
      <h1>Trending</h1>
      <div className="mg-bottom">
        {trendsQuery.isSuccess && <Slider<Video> list={trendsQuery.data} />}
      </div>

      <h2>Recommended for you</h2>
      <div className="grid grid-4 grid-tb-3 grid-mb-2">
        {recommendedQuery.isSuccess &&
          recommendedQuery.data.map((el) => (
            <Card key={el.id} el={el} type="card" />
          ))}
      </div>
    </Layout>
  );
}

export default Home;
