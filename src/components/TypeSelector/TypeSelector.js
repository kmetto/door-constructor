import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';

let TypeSelector = ({ options, changeCallback, placeholder, label }) => {
  return (
    <div className="form-unit">
      <label>{label}</label>
      <Dropdown
          placeholder={placeholder}
          search
          selection
          options={options}
          onChange={(e, component) => {
            changeCallback(component.value)
          }}
      />
    </div>
  )
};

TypeSelector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string
};


export default TypeSelector;