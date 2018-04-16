import React from 'react';
// import { propTypes, defaultProps } from './props';
import { Input } from 'semantic-ui-react';

function getBlockClasses(active) {
  let defaultClasess = 'fieldset size';
  if (active) defaultClasess += ' hightlight';
  return defaultClasess;
}

const BlockSeries = ({
  callbacks, values, activity,
}) => (
  <div className={getBlockClasses(activity)}>
    <legend>Размеры</legend>
    <div className="form-unit">
      <label>Ширина (мм)</label>
      <Input
        placeholder="Ширина"
        onChange={(e, component) => {
          callbacks.onSetWidth(component.value);
        }}
        value={values.width}
        onFocus={callbacks.onFocus}
        type="number"
      />
    </div>


    <div className="form-unit">
      <label>Высота (мм)</label>
      <Input
        placeholder="Высота"
        onChange={(e, component) => {
          callbacks.onSetHeight(component.value);
        }}
        value={values.height}
        onFocus={callbacks.onFocus}
        type="number"
      />
    </div>
  </div>
);

// BlockSeries.propTypes = propTypes;
// BlockSeries.defaultProps = defaultProps;

export default BlockSeries;
