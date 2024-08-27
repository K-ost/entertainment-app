import { useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";

function SearchPage() {
  const [searchParams, _] = useSearchParams();
  const searchQuery = searchParams.get("q");

  return (
    <Layout>
      <h1>{searchQuery}</h1>
      <div className="grid grid-4 grid-tb-3 grid-mb-2"></div>
    </Layout>
  );
}

export default SearchPage;
