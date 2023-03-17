import axios from "axios";

export const apiJsonServer = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_BACKEND_SERVER,
});