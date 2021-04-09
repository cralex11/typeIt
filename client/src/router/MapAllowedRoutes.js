import { memo } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import NotFound from "../Components/NotFound";

/*
 * This is the route utility component used for generating
 * routes and child routes it only requires routes array and basePath
 */

function MapAllowedRoutes({ routes, basePath, isAddNotFound }) {
  const match = useRouteMatch(basePath);
  console.log(routes.path);
  return (
    <Switch>
      {/*{routes.map((route) => {*/}
      {/*  const { path, component: Component, children, ...rest } = route;*/}
      {/*  console.log(route);*/}
      {/*  console.log(routes);*/}
      {/*  return (*/}
      {/*    <Route {...rest} key={path} path={`${match.path}${path}`}>*/}
      {/*      <Component children={children} />*/}
      {/*    </Route>*/}
      {/*  );*/}
      {/*})}*/}
      {/*{isAddNotFound && (*/}
      {/*  <Route>*/}
      {/*    <NotFound />*/}
      {/*  </Route>*/}
      {/*)}*/}
      {routes.map((route) => {
        const { path, component: Component, children, ...rest } = route;
        return (
          <Route {...rest} key={path} path={`${match.path}${path}`}>
            <Component children={children || []} />
          </Route>
        );
      })}
      {isAddNotFound && (
        <Route>
          <NotFound />
        </Route>
      )}
    </Switch>
  );
}

MapAllowedRoutes.propTypes = {
  routes: PropTypes.array,
  basePath: PropTypes.string,
  isAddNotFound: PropTypes.bool,
};

export default memo(MapAllowedRoutes);
