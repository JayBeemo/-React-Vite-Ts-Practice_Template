import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const publicAxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const privateAxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    // "Authorization" : ""
  },
});
