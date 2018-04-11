import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const TypeSelector = ({
  options, changeCallback, placeholder, label, value, focusCallback,
}) => (
  <div className="form-unit">
    <label>{label}</label>
    <Dropdown
      placeholder={placeholder}
      search
      selection
      options={options}
      onChange={(e, component) => {
        changeCallback(component.value);
      }}
      value={value}
      onFocus={focusCallback}
    />
  </div>
);

TypeSelector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  changeCallback: PropTypes.func.isRequired,
  focusCallback: PropTypes.func,
  value: PropTypes.string,
};

TypeSelector.defaultProps = {
  placeholder: '',
  label: '',
  value: '',
  focusCallback: () => { console.log('focusCallback'); },
};

export default TypeSelector;
