import axiosInstance from "./apiConfig";

const api = {
  auth: {
    login: (data) => axiosInstance.post("/api/auth/login", data),
  },
};

export default api;
