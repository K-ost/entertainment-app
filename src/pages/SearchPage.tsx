import { useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import useQueryData from "../hooks/useQueryData";
import { Video } from "../types";
import LoadingSkelets from "../components/LoadingSkelets";
import Card from "../components/Card/Card";

function SearchPage() {
  const [searchParams, _] = useSearchParams();
  const searchQuery = searchParams.get("q");

  const { data, isLoading, isError, isSuccess } = useQueryData<Video[]>({
    key: ["search"],
    uri: `/videos?q=${searchQuery}`,
  });

  if (isLoading) return <LoadingSkelets />;
  if (isError) return <p>Server error</p>;

  return (
    <Layout>
      <h1>Search results - "{searchQuery}"</h1>
      <div className="grid grid-4 grid-tb-3 grid-mb-2">
        {isSuccess &&
          data.map((el) => <Card key={el.id} el={el} type="card" />)}
      </div>
      {isSuccess && !data.length && (
        <p>
          There're no posts in the database. Try to change your search request.
        </p>
      )}
    </Layout>
  );
}

export default SearchPage;
