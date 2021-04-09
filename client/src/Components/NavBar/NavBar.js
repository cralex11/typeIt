import { useContext, useEffect, useRef, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import Link from "../Link";
import Button from "../Button";
import { navIcons } from "../../router/config/links";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/userAction";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";

let useClickOutside = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

const NavBar = (props) => {
  const { routes, prefix } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const [hamburger, setHamburger] = useState(false);
  const handleHamburger = () => setHamburger(!hamburger);
  const handleLogout = () => {
    dispatch(logout());
    // history.push("/");
  };
  const domNode = useClickOutside(() => {
    setHamburger(false);
  });
  return (
    <div className="nav-wrapper">
      <div className="text-gray-50 w-screen bg-gray-800 flex justify-between p-4 shadow-lg">
        <Button
          onClick={handleHamburger}
          className="hamburger text-gray-600 p-1 rounded-md transition-colors duration-200 outline-none hover:text-gray-100 hover:bg-gray-900  focus:outline-none"
        >
          <MenuIcon className="hamburger h-6 w-6" />
        </Button>
        <h2 className="text-2xl font-light">typeIt</h2>
        <Button className="text-gray-600 p-1 rounded-md transition-colors duration-200 outline-none hover:text-gray-100 hover:bg-gray-900  focus:outline-none">
          <SearchIcon className="h-6 w-6" />
        </Button>
      </div>
      <div
        ref={domNode}
        className={` top-0 my-2 rounded-md
        transform fixed w-3/5 h-screen
        bg-gray-800 text-gray-100
        flex flex-col items-center
        text-lg shadow-2xl
        transition-all duration-200 
        ${
          !hamburger
            ? " opacity-0 -translate-x-full "
            : " opacity-1 -translate-x-2"
        }`}
      >
        <div className="links mt-12 w-11/12">
          {routes.map(({ path, title = null }) => {
            if (title)
              return (
                <Link
                  key={path}
                  className="
                  text-lg font-normal mb-3 p-2  text-gray-50
                  w-full text-center
                  rounded-md
                  hover:text-gray-900 hover:shadow-lg hover:bg-yellow-50
                   transition-colors duration-200"
                  to={`${prefix}${path}`}
                >
                  {title}
                </Link>
              );
          })}
        </div>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
  path: PropTypes.string,
};

export default NavBar;
