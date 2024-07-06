// src/utils/api.ts

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://uat.gospeltube.tv/api/v1", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

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
