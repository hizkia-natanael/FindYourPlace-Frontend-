import axios from "axios";

const config = {
  baseURL: import.meta.env.VITE_API_URL
};

export const axiosInstance = axios.create(config);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
