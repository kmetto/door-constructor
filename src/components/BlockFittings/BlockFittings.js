import React from 'react';
import { propTypes, defaultProps } from './props';
import TypeSelector from '../../components/TypeSelector/TypeSelector';

const BlockFittings = ({
  callbacks, options, values,
}) => (
  <div className="fieldset fittings">
    <legend>Фурнитура</legend>

    <TypeSelector
      options={options.knobs}
      changeCallback={callbacks.onSetOutsidePenType}
      placeholder="Наружняя ручка"
      label="Тип наружней ручки"
      value={values.outsidePenType}
    />

    <TypeSelector
      options={options.knobs}
      changeCallback={callbacks.onSetInsidePenType}
      placeholder="Внутренняя ручка"
      label="Тип внутренней ручки"
      value={values.insidePenType}
    />

    <TypeSelector
      options={options.locks}
      changeCallback={callbacks.onSetLockType}
      placeholder="Замок"
      label="Тип замка"
      value={values.lockType}
    />
  </div>
);

BlockFittings.propTypes = propTypes;
BlockFittings.defaultProps = defaultProps;

export default BlockFittings;
