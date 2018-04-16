import React from 'react';
// import { propTypes, defaultProps } from './props';
import TypeSelector from '../../components/TypeSelector/TypeSelector';

function getBlockClasses(active) {
  let defaultClasess = 'fieldset design';
  if (active) defaultClasess += ' hightlight';
  return defaultClasess;
}

const BlockFittings = ({
  callbacks, options, values, activity,
}) => (
  <div className={getBlockClasses(activity)}>
    <legend>Дизайн</legend>

    <TypeSelector
      options={options.designs}
      changeCallback={callbacks.onSetDesignInside}
      placeholder="Дизайн внутри"
      label="Дизайн внутренней двери"
      value={values.designInside}
      focusCallback={callbacks.onFocus}
    />

    <TypeSelector
      options={options.designs}
      changeCallback={callbacks.onSetDesignOutside}
      placeholder="Дизайн снаружи"
      label="Дизайн наружней стороны"
      value={values.designOutside}
      focusCallback={callbacks.onFocus}
    />

  </div>
);

// BlockFittings.propTypes = propTypes;
// BlockFittings.defaultProps = defaultProps;

export default BlockFittings;
