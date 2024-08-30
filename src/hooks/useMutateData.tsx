import { useMutation } from "@tanstack/react-query";
import { mutateData } from "../api/api";

type useMutateDataProps<T> = {
  key: string[];
  method: "POST" | "PATCH" | "PUT";
  uri: string;
};

const useMutateData = <T,>(props: useMutateDataProps<T>) => {
  const { key, method, uri } = props;
  return useMutation({
    mutationKey: key,
    mutationFn: (data: T) => mutateData(uri, method, data),
  });
};

export default useMutateData;
