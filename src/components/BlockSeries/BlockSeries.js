import React from 'react';
import { propTypes, defaultProps } from './props';
import TypeSelector from '../../components/TypeSelector/TypeSelector';

const BlockSeries = ({
  callbacks, options, values,
}) => (
  <div className="fieldset series">
    <legend>Серия дверей</legend>
    <TypeSelector
      options={options}
      changeCallback={callbacks.onSetSeries}
      placeholder="Серия дверей"
      label="Серия дверей"
      value={values.doorSeriesValue}
    />
  </div>
);

BlockSeries.propTypes = propTypes;
BlockSeries.defaultProps = defaultProps;

export default BlockSeries;
