import { Typography } from "@mui/material";
import CardList from "../components/Card/CardList";
import Layout from "../components/Layout";
import useQueryData from "../hooks/useQueryData";
import { useAuthStore } from "../store/useAuthStore";
import { Video } from "../types";
import { idsToString } from "../utils/utils";
import { useQueryClient } from "@tanstack/react-query";

function Bookmarks() {
  const { auth } = useAuthStore();
  const ID_URI = auth ? idsToString(auth.user.bookmarks) : "";

  const { data, isError, isLoading, isSuccess } = useQueryData<Video[]>({
    key: ["bookmarks"],
    uri: `/videos?${ID_URI}`,
    enabled: ID_URI.length ? true : false,
  });

  const queryClient = useQueryClient();
  queryClient.invalidateQueries({
    queryKey: ["bookmarks"],
  });

  return (
    <Layout>
      <Typography variant="h1">Bookmarks</Typography>
      <CardList
        data={isSuccess ? data : []}
        isError={isError}
        isLoading={isLoading}
      />
      {(isSuccess && !data.length) ||
        (!ID_URI.length && <p>Your bookmark list is empty.</p>)}
    </Layout>
  );
}

export default Bookmarks;
