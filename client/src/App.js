import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes";
import { notifyInit } from "./utils/utils";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import axiosInstance from "./utils/apiConfig";

const App = () => {
  const { logout, login, token, userId, loading } = useAuth();
  const isAuthenticated = !!token;

  useEffect(() => {
    notifyInit();
    axiosInstance.post("/").then((res) => console.log(res.data));
  }, []);
  const routes = useRoutes(isAuthenticated);

  if (loading) {
    return (
      <div className="w-screen h-screen bg-white flex justify-center items-center fixed top-0 left-0" />
    );
  }
  return (
    <AuthContext.Provider
      value={{
        logout,
        login,
        userId,
        token,
      }}
    >
      <Router>{routes}</Router>
    </AuthContext.Provider>
  );
};

export default App;
