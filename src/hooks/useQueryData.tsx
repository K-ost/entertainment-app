import { useQuery } from "@tanstack/react-query";
import { getData } from "../api/api";

type UseQueryDataProps = {
  key: string[];
  uri: string;
};

const useQueryData = <T,>(props: UseQueryDataProps) => {
  const { key, uri } = props;
  return useQuery({
    queryKey: key,
    queryFn: () => getData<T>(uri),
  });
};

export default useQueryData;
