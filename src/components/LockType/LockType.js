import React from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { setLockType } from '../../store/actions';
import PropTypes from 'prop-types';

let LockType = ({ dispatch, lockTypes }) => {
  return (
    <div className="form-unit">
      <label htmlFor="lock-type">Тип замка</label>
      <Dropdown
          name="lock-type"
          placeholder="Тип установки"
          search
          selection
          options={lockTypes}
          onChange={(e, component) => {
            dispatch(setLockType(component.value))
          }}
      />
    </div>
  )
};

LockType.propTypes = {
  lockTypes: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
};

LockType = connect()(LockType);

export default LockType;