import { useState } from "react";
import { getSortQuery } from "../utils/utils";
import Sorting from "../components/Sorting";
import { Video } from "../types";
import PageTitle from "../ui/PageTitle";
import Layout from "../components/Layout";
import useQueryData from "../hooks/useQueryData";
import CardList from "../components/Card/CardList";

function MoviesScreen() {
  const [sort, setSort] = useState<string>("default");
  const sortQuery = getSortQuery(sort);

  const { data, isError, isLoading, isSuccess } = useQueryData<Video[]>({
    key: ["videos", sortQuery],
    uri: `/videos?category=Movie${sortQuery}`,
  });

  return (
    <Layout>
      <PageTitle title="Movies">
        {isSuccess && <Sorting setSort={setSort} value={sort} />}
      </PageTitle>

      <CardList
        data={isSuccess ? data : []}
        isError={isError}
        isLoading={isLoading}
      />
    </Layout>
  );
}

export default MoviesScreen;
