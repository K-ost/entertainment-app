import Slider from "../components/Slider";
import LoadingSkelets from "../components/LoadingSkelets";
import Layout from "../components/Layout";
import useQueryData from "../hooks/useQueryData";
import { Video } from "../types";
import AlertError from "../components/AlertError";
import CardList from "../components/Card/CardList";

function Home() {
  const trendsQuery = useQueryData<Video[]>({
    key: ["trends", "true"],
    uri: "/videos?isTrending=true",
  });

  const recommendedQuery = useQueryData<Video[]>({
    key: ["trends", "false"],
    uri: "/videos?isTrending=false",
  });

  return (
    <Layout>
      <h1>Trending</h1>
      {trendsQuery.isSuccess && (
        <div className="mg-bottom">
          {<Slider<Video> list={trendsQuery.data} />}
        </div>
      )}
      {trendsQuery.isLoading && <LoadingSkelets slider />}
      {trendsQuery.isError && <AlertError />}

      <h2>Recommended for you</h2>
      <CardList
        data={recommendedQuery.isSuccess ? recommendedQuery.data : []}
        isError={recommendedQuery.isError}
        isLoading={recommendedQuery.isLoading}
      />
    </Layout>
  );
}

export default Home;
