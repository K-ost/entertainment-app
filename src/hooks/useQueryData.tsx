import { useQuery } from "@tanstack/react-query";
import { getData } from "../api/api";

type UseQueryDataProps = {
  enabled?: boolean;
  key: string[];
  uri: string;
};

const useQueryData = <T,>(props: UseQueryDataProps) => {
  const { enabled = true, key, uri } = props;
  return useQuery({
    queryKey: key,
    queryFn: () => getData<T>(uri),
    enabled,
  });
};

export default useQueryData;
