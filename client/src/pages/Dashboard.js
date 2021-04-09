import { Fragment } from "react";
import MapAllowedRoutes from "../router/MapAllowedRoutes";
import { LOGIN } from "../store/actionTypes";

const Dashboard = ({ routes, basePath, isAddNotFound }) => {
  console.log(routes);

  if (!routes) return;
  return (
    <div className="dashboard">
      <div className="container max-auto shadow-sm rounded roun">
        <MapAllowedRoutes routes={routes} basePath="/app" isAddNotFound />
      </div>
      <div className="container mx-auto shadow-xl rounded-2xl p-4 mt-8 min-h-full">
        ds
      </div>
    </div>
  );
};

export default Dashboard;
