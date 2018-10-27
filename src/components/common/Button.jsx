import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  label,
  handleClick,
  className,
  disabled,
}) => (
  <button
    disabled={disabled}
    type="submit"
    onClick={e => handleClick(e, label)}
    className={className}
    value={label}
  >
    {label}
  </button>
);

Button.defaultProps = {
  className: 'button',
  disabled: false,
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

export { Button };
