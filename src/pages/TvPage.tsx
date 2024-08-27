import Card from "../components/Card/Card";
import LoadingSkelets from "../components/LoadingSkelets";
import PageTitle from "../ui/PageTitle";
import Sorting from "../components/Sorting";
import { useState } from "react";
import { getSortQuery } from "../utils/utils";
import Layout from "../components/Layout";
import useQueryData from "../hooks/useQueryData";
import { Video } from "../types";

function TvPage() {
  const [sort, setSort] = useState<string>("default");
  const sortQuery = getSortQuery(sort);

  const { data, isError, isLoading, isSuccess } = useQueryData<Video[]>({
    key: ["videos", sortQuery],
    uri: `/videos?category=TV%20Series${sortQuery}`,
  });

  if (isLoading) return <LoadingSkelets />;
  if (isError) return <p>Server error</p>;

  return (
    <Layout>
      <PageTitle title="TV Series">
        <Sorting setSort={setSort} value={sort} />
      </PageTitle>
      <div className="grid grid-4 grid-tb-3 grid-mb-2">
        {isSuccess &&
          data.map((el) => <Card key={el.id} el={el} type="card" />)}
      </div>
    </Layout>
  );
}

export default TvPage;
