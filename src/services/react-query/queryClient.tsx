import { QueryCache, QueryClient } from "@tanstack/react-query";

export const GlobalQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      staleTime: 1000 * 60,
      gcTime: 1000 * 60 * 5,
      retry: 0,
    },
    mutations: {},
  },
  queryCache: new QueryCache({}),
});

export default GlobalQueryClient;
