import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AuthPage from "./pages/AuthPage";
import NavBar from "./Components/NavBar";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <>
        <NavBar />
        <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
          <Redirect to="/create" />
        </Switch>
      </>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
