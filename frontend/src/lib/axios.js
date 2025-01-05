import axios from "axios";
import { BASE_URL } from "./constans";

const axiosInstance = axios.create({
  baseURL: import.meta.mode === "development" ? BASE_URL : "/api",
  withCredentials: true, // send cookies to the server
});

export default axiosInstance;
