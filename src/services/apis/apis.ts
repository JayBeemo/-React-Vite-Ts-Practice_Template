import { T_getIndexoneData } from "@/types/apiTypes";
import { API_EXAMPLE } from "./apiPath";
import { publicAxiosInstance } from "./instance";

export const Apis = {
  example: {
    indexone: async (): Promise<T_getIndexoneData> => {
      const apiPath = API_EXAMPLE.example.indexone();
      return publicAxiosInstance.get(apiPath).then((res) => res.data);
    },
  },
};
