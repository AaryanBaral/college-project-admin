import axios from "axios";
import getToken from "./getToken";

const baseApi = axios.create({
  baseURL: "http://localhost:3000/v3/",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Credentials": "true",
    token: getToken(),
  },
});
export default baseApi;
