import MapAllowedRoutes from "../router/MapAllowedRoutes";
import * as PropTypes from "prop-types";

const Dashboard = ({ children }) => {
  console.log(children);
  return (
    <div className="dashboard rounded">
      <div className="container  sm:max-auto shadow-sm rounded rounded-2xl "></div>
      <div className="container mx-auto shadow-xl rounded-2xl p-4 mt-8 min-h-full">
        {children.map((child) => {
          const { component: Component, path } = child;
          return <Component key={path} />;
        })}
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  route: PropTypes.array,
  basePath: PropTypes.string,
  isAddNotFound: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.object),
};

export default Dashboard;
