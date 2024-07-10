// src/utils/api.ts

import axios from "axios";
import Router from "next/router";

const axiosInstance = axios.create({
  baseURL: "https://uat.gospeltube.tv/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("user");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const fetchApiData = async (path: string) => {
  try {
    const response = await axiosInstance.get(path);
    return response.data;
  } catch (error: any) {
    throw `API Error: ${error.message}`;
  }
};

const postApiData = async (postData: any, path: string) => {
  try {
    const response = await axiosInstance.post(path, postData);
    return response.data;
  } catch (error: any) {
    throw new Error(`API Error: ${error.message}`);
  }
};

export { postApiData, fetchApiData };
