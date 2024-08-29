import { useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import useQueryData from "../hooks/useQueryData";
import { Video } from "../types";
import CardList from "../components/Card/CardList";

function SearchPage() {
  const [searchParams, _] = useSearchParams();
  const searchQuery = searchParams.get("q");

  const { data, isLoading, isError, isSuccess } = useQueryData<Video[]>({
    key: ["search"],
    uri: `/videos?q=${searchQuery}`,
  });

  return (
    <Layout>
      <h1>Search results - "{searchQuery}"</h1>
      <CardList
        data={isSuccess ? data : []}
        isError={isError}
        isLoading={isLoading}
      />
      {isSuccess && !data.length && (
        <p>
          There're no posts in the database. Try to change your search request.
        </p>
      )}
    </Layout>
  );
}

export default SearchPage;
