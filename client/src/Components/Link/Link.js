import { Link as RouterLink } from "react-router-dom";
import * as PropTypes from "prop-types";

const Link = (props) => {
  const { icon, children, to, ...rest } = props;
  if (icon)
    return (
      <div>
        <RouterLink to={to} {...rest}>
          {icon}
          <span className="ml-3 text-base font-medium text-gray-900">
            {children}
          </span>
        </RouterLink>
      </div>
    );
  return (
    <div style={{ cursor: "pointer" }} {...rest}>
      <RouterLink to={to}>{children}</RouterLink>
    </div>
  );
};

Link.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  to: PropTypes.string,
};

export default Link;
