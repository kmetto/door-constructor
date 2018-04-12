import React from 'react';
import { propTypes, defaultProps } from './props';
import TypeSelector from '../../components/TypeSelector/TypeSelector';

function getBlockClasses(active) {
  let defaultClasess = 'fieldset fittings';
  if (active) defaultClasess += ' hightlight';
  return defaultClasess;
}

const BlockFittings = ({
  callbacks, options, values, activity,
}) => (
  <div className={getBlockClasses(activity)}>
    <legend>Фурнитура</legend>

    <TypeSelector
      options={options.knobs}
      changeCallback={callbacks.onSetOutsidePenType}
      placeholder="Наружняя ручка"
      label="Тип наружней ручки"
      value={values.outsidePenType}
      focusCallback={callbacks.onFocus}
    />

    <TypeSelector
      options={options.knobs}
      changeCallback={callbacks.onSetInsidePenType}
      placeholder="Внутренняя ручка"
      label="Тип внутренней ручки"
      value={values.insidePenType}
      focusCallback={callbacks.onFocus}
    />

    <TypeSelector
      options={options.locks}
      changeCallback={callbacks.onSetLockType}
      placeholder="Замок"
      label="Тип замка"
      value={values.lockType}
      focusCallback={callbacks.onFocus}
    />
  </div>
);

BlockFittings.propTypes = propTypes;
BlockFittings.defaultProps = defaultProps;

export default BlockFittings;
