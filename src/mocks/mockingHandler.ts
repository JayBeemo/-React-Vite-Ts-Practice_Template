import { http, HttpResponse } from "msw";
import { MockData } from "./mockData";
const API_URL = import.meta.env.VITE_API_URL;

export const mockingHandler = [
  http.get(`${API_URL}/indexone`, () => {
    return HttpResponse.json(MockData.exampleTableData);
  }),
];

export default mockingHandler;
