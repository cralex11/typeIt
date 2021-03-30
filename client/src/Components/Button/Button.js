import React from 'react';

const Button = (props) => {
  const { title, ...rest } = props;
  return (
    <>
      <button {...rest}>{title}</button>
    </>
  );
};

export default Button;
