
import React from 'react';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { setSeries } from '../../store/actions';
import PropTypes from 'prop-types';

let DoorSeries = ({ dispatch, series }) => {
  return (
    <div className="form-unit">
      <label>Серия дверей</label>
      <Dropdown
          placeholder="Серия дверей"
          search
          selection
          options={series}
          onChange={(e, component) => {
            dispatch(setSeries(component.value))
          }}
      />
    </div>
  )
};

DoorSeries.propTypes = {
  series: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
};

DoorSeries = connect()(DoorSeries);

export default DoorSeries;