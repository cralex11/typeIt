import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Link = (props) => {
  const { icon, children, ...rest } = props;
  if (icon)
    return (
      <RouterLink {...rest}>
        {icon}
        <span className="ml-3 text-base font-medium text-gray-900">
          {children}
        </span>
      </RouterLink>
    );
  return (
    <a style={{ cursor: "pointer" }} {...rest}>
      {children}
    </a>
  );
};

export default Link;
