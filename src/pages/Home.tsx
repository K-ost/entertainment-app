import Slider from "../components/Slider";
import LoadingSkelets from "../components/LoadingSkelets";
import Layout from "../components/Layout";
import useQueryData from "../hooks/useQueryData";
import { Video } from "../types";
import AlertError from "../components/AlertError";
import CardList from "../components/Card/CardList";
import { Typography } from "@mui/material";

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
      <Typography variant="h2">Trending</Typography>
      {trendsQuery.isSuccess && <Slider<Video> list={trendsQuery.data} />}
      {trendsQuery.isLoading && <LoadingSkelets slider />}
      {trendsQuery.isError && <AlertError />}

      <Typography variant="h2">Recommended for you</Typography>
      <CardList
        data={recommendedQuery.isSuccess ? recommendedQuery.data : []}
        isError={recommendedQuery.isError}
        isLoading={recommendedQuery.isLoading}
      />
    </Layout>
  );
}

export default Home;
