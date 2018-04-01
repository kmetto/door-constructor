import React from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { setFrontPenType } from '../../store/actions';
import PropTypes from 'prop-types';

let PenType = ({ dispatch, penTypes }) => {
  return (
    <div className="form-unit">
      <label htmlFor="pen-type">Тип ручки</label>
      <Dropdown
          name="pen-type"
          placeholder="Тип установки"
          search
          selection
          options={penTypes}
          onChange={(e, component) => {
            dispatch(setFrontPenType(component.value))
          }}
      />
    </div>
  )
};

PenType.propTypes = {
  penTypes: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
};

PenType = connect()(PenType);

export default PenType;