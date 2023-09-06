/* eslint-disable prettier/prettier */
import axios from "axios";
import { getEnv } from "../helpers";

export const axiosClient = axios.create({
  baseURL: getEnv('VITE_BASE_URL'),
});

axiosClient.interceptors.request.use((config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error;
  }
);

