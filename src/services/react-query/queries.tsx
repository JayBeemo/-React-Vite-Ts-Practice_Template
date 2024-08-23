import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "./queryKey";
import { Apis } from "../apis/apis";

export const Queries = {
  query: {
    getIndexoneQuery: () =>
      useQuery({
        queryKey: QUERY_KEY.example.indexone(),
        queryFn: () => Apis.example.indexone(),
      }),
  },
  mutation: {},
};
