import { useState } from "react";
import PageTitle from "../ui/PageTitle";
import Sorting from "../components/Sorting";
import { getSortQuery } from "../utils/utils";
import Layout from "../components/Layout";
import useQueryData from "../hooks/useQueryData";
import { Video } from "../types";
import CardList from "../components/Card/CardList";

function TvPage() {
  const [sort, setSort] = useState<string>("default");
  const sortQuery = getSortQuery(sort);

  const { data, isError, isLoading, isSuccess } = useQueryData<Video[]>({
    key: ["videos", sortQuery],
    uri: `/videos?category=TV%20Series${sortQuery}`,
  });

  return (
    <Layout>
      <PageTitle title="TV Series">
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

export default TvPage;
