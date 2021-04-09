import axios from "axios";

const axiosInstance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const tokenCheckInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

axiosInstance.interceptors.request.use(tokenCheckInterceptor);

export default axiosInstance;
