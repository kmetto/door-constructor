import React from 'react';
import PropTypes from 'prop-types';
import TypeSelector from '../../components/TypeSelector/TypeSelector';


const BlockSeries = ({
  legend, callbacks, options, values,
}) => (
  <div className="fieldset series">
    <legend>{legend}</legend>
    <TypeSelector
      options={options.doorSeries}
      changeCallback={callbacks.onSetSeries}
      placeholder="Серия дверей"
      label="Серия дверей"
      value={values.doorSeriesValue}
    />
  </div>
);

BlockSeries.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  // code: PropTypes.object.isRequired,
};

export default BlockSeries;
