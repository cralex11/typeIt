import PropTypes from "prop-types";

const Button = (props) => {
  const { title, children, ...rest } = props;
  return (
    <>
      <button type="button" {...rest}>
        {title || children}
      </button>
    </>
  );
};
Button.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Button;
