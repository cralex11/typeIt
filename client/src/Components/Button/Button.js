import PropTypes from "prop-types";

const Button = (props) => {
  const { className, title, children, ...rest } = props;
  return (
    <>
      <button className={className} type="button" {...rest}>
        {title || children}
      </button>
    </>
  );
};
Button.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};
export default Button;
