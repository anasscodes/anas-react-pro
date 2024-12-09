import axios from "axios";

const baseURL = process.env.REACT_APP_URL_API
export const articleApi = axios.create({
    baseURL: `${baseURL}/articales`
  });