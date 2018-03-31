import React from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { setInstallType } from '../../store/actions';
import PropTypes from 'prop-types';

let InstallationType = ({ dispatch, installTypes }) => {
  return (
    <div className="form-unit">
      <label>Тип установки</label>
      <Dropdown
          placeholder="Тип установки"
          search
          selection
          options={installTypes}
          onChange={(e, component) => {
            dispatch(setInstallType(component.value))
          }}
      />
    </div>
  )
};

InstallationType.propTypes = {
  installTypes: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
};

InstallationType = connect()(InstallationType);

export default InstallationType;