import { Fragment } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import { getAllowedRoutes } from "../utils/utils";
import { privateRotes as PrivateRoutesConfig } from "./config/privateRoutesConfig";
import MapAllowedRoutes from "./MapAllowedRoutes";
import NavBar from "../Components/NavBar";
import { useSelector } from "react-redux";

function PrivateRoutes() {
  const match = useRouteMatch("/app");
  let allowedRoutes = [];
  const isAuth = useSelector((store) => store.user.isAuthorized);

  if (isAuth) {
    allowedRoutes = getAllowedRoutes(PrivateRoutesConfig);
  } else {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <NavBar routes={allowedRoutes} prefix={match.path} />
      <MapAllowedRoutes routes={allowedRoutes} basePath="/app" isAddNotFound />
    </Fragment>
  );
}

export default PrivateRoutes;
