import axiosInstance from "./apiConfig";

const api = {
  auth: {
    login: (data) => axiosInstance.post("/api/auth/login", data),
    register: (data) => axiosInstance.post("/api/auth/register", data),
  },
};

export default api;
