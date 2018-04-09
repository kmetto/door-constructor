import React from 'react';
import PropTypes from 'prop-types';
import TypeSelector from '../../components/TypeSelector/TypeSelector';


const BlockBox = ({
  legend, callbacks, options, values,
}) => (
  <div className="fieldset box">
    <legend>{legend}</legend>
    <TypeSelector
      options={options.materialColor}
      changeCallback={callbacks.onSetBoxMaterial}
      placeholder="Серия дверей"
      label="Серия дверей"
      value={values.doorSeriesValue}
    />
    <TypeSelector
      options={options.installing}
      changeCallback={callbacks.onSetBoxInstallType}
      placeholder="Серия дверей"
      label="Серия дверей"
      value={values.doorSeriesValue}
    />
  </div>
);

BlockBox.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  // code: PropTypes.object.isRequired,
};

export default BlockBox;
