import React from 'react';
import PropTypes from 'prop-types';

//version: primary, secondary
//type: submit button / regular button
const Button = ({ children, version, type, isDisabled }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
  type: PropTypes.oneOf(['button', 'submit']),
  isDisabled: PropTypes.bool
};

export default Button;
