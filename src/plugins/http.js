/* eslint-disable prettier/prettier */
import axios from "axios";
import { getEnv } from "../helpers";
import app from '../main.js';

export const axiosClient = axios.create({
  baseURL: getEnv('VITE_BASE_URL'),
});

axiosClient.interceptors.request.use((config) => {
    // add token from local storage?
    let token  = localStorage.getItem('token') || null

    if(token){
      config.headers.Authorization = "Bearer " + token
    }

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

