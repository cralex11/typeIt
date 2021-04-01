import React from 'react';

const Button = (props) => {
    const {title, children, ...rest} = props;
    return (
        <>
            <button type="button"  {...rest}>{title || children}</button>
        </>
    );
};

export default Button;
