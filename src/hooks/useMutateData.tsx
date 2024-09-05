import { useMutation } from "@tanstack/react-query";
import { mutateData } from "../api/api";

type useMutateDataProps = {
  key: string[];
  method: "POST" | "PATCH" | "PUT" | "DELETE";
  uri: string;
};

const useMutateData = <T,>(props: useMutateDataProps) => {
  const { key, method, uri } = props;
  return useMutation({
    mutationKey: key,
    mutationFn: (data?: T) => mutateData<T>(uri, method, data),
  });
};

export default useMutateData;
