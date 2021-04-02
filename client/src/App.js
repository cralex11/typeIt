import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes";
import { notifyInit } from "./utils/utils";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { logout, login, token, userId, loading } = useAuth();
  const isAuthenticated = !!token;

  useEffect(() => {
    notifyInit();
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
