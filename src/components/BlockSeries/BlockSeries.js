import React from 'react';
import { propTypes, defaultProps } from './props';
import TypeSelector from '../../components/TypeSelector/TypeSelector';

function getBlockClasses(active) {
  let defaultClasess = 'fieldset series';
  if (active) defaultClasess += ' hightlight';
  return defaultClasess;
}

const BlockSeries = ({
  callbacks, options, values, activity,
}) => (
  <div className={getBlockClasses(activity)}>
    <legend>Серия дверей</legend>
    <TypeSelector
      options={options}
      changeCallback={callbacks.onSetSeries}
      placeholder="Серия дверей"
      label="Серия дверей"
      value={values.doorSeries}
      focusCallback={callbacks.onFocus}
    />
  </div>
);

BlockSeries.propTypes = propTypes;
BlockSeries.defaultProps = defaultProps;

export default BlockSeries;
