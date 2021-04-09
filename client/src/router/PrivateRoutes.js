import { Fragment } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import { getAllowedRoutes } from "../utils/utils";
import { privateRotes as PrivateRoutesConfig } from "./config/privateRoutesConfig";
import MapAllowedRoutes from "./MapAllowedRoutes";
import NavBar from "../Components/NavBar";
import { useSelector } from "react-redux";
import Dashboard from "../pages/Dashboard";

function PrivateRoutes() {
  const match = useRouteMatch("/app");
  let allowedRoutes = [];
  const isAuth = useSelector((store) => store.user.isAuthorized);

  if (isAuth) {
    allowedRoutes = getAllowedRoutes(PrivateRoutesConfig);
  } else {
    return <Redirect to="/" />;
  }
  console.log(allowedRoutes);

  return (
    <Fragment>
      <NavBar routes={allowedRoutes} prefix={match.path} />
      <Dashboard routes={allowedRoutes} basePath="/app" isAddNotFound />
      {/*<MapAllowedRoutes routes={allowedRoutes} basePath="/app" isAddNotFound />*/}
    </Fragment>
  );
}

export default PrivateRoutes;
