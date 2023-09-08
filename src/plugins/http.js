/* eslint-disable prettier/prettier */
import axios from "axios";
import { getEnv } from "../helpers";
import app from '../main.js';

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
    console.log(error.response.status)
    if(error.response.status === 401){
        app.router.to({name: 'login'})
    }
    throw error;
  }
);

