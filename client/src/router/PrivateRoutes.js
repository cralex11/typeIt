import React, { Fragment } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import { getAllowedRoutes, isLoggedIn /*, isLoggedIn*/ } from "../utils/utils";
import { privateRotes as PrivateRoutesConfig } from "./config/privateRoutesConfig";
// import { TopNav } from "components/common";
import MapAllowedRoutes from "./MapAllowedRoutes";
import NavBar from "../Components/NavBar";

function PrivateRoutes() {
  const match = useRouteMatch("/app");
  let allowedRoutes = [];

  if (/*isLoggedIn()*/ isLoggedIn) {
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
