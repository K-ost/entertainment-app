import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import PageTitle from "../ui/PageTitle";
import useQueryData from "../hooks/useQueryData";
import { Video } from "../types";
import AlertError from "../components/AlertError";
import { Typography } from "@mui/material";
import Details from "../components/Details";
import DetailsSkelets from "../components/Details/Skelets";

function DetailedMovie() {
  const { id } = useParams();

  const { data, isError, isLoading, isSuccess } = useQueryData<Video>({
    uri: `/videos/${id}`,
    key: ["movie"],
  });

  return (
    <Layout>
      <PageTitle title={isSuccess ? data.title : `MOVIE_ID: ${id}`} />
      {isSuccess && <Details data={data} />}
      {isLoading && <DetailsSkelets />}
      {isError && <AlertError />}
      <Typography variant="h3">Comments</Typography>
      No comments yet.
    </Layout>
  );
}

export default DetailedMovie;
