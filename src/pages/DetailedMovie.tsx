import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import PageTitle from "../ui/PageTitle";
import useQueryData from "../hooks/useQueryData";
import { Video } from "../types";
import AlertError from "../components/AlertError";
import Details from "../components/Details";
import DetailsSkelets from "../components/Details/Skelets";
import CommentsList from "../components/Comments";

function DetailedMovie() {
  const { id } = useParams();

  const { data, isError, isLoading, isSuccess } = useQueryData<Video>({
    uri: `/videos/${id}`,
    key: ["movie"],
  });

  return (
    <Layout>
      {isSuccess && <PageTitle title={data.title} />}
      {isSuccess && <Details data={data} />}
      {isLoading && <DetailsSkelets />}
      {isError && <AlertError />}

      <CommentsList movieId={id!} />
    </Layout>
  );
}

export default DetailedMovie;
