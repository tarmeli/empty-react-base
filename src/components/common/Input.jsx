import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({
  type,
  name,
  className,
  handleChange,
  value,
  placeholder,
}) => (
  <input
    value={value}
    className={className}
    type={type}
    name={name}
    onChange={e => handleChange(e)}
    placeholder={placeholder}
  />
);

Input.defaultProps = {
  value: '',
  className: 'input',
  placeholder: '',
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export { Input };
