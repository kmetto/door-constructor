import React from 'react';
import PropTypes from 'prop-types';
import TypeSelector from '../../components/TypeSelector/TypeSelector';


const BlockFittings = ({
  legend, callbacks, options, values,
}) => (
  <div className="fieldset fittings">
    <legend>{legend}</legend>

    <TypeSelector
      options={options.knobs}
      changeCallback={callbacks.onSetOutsidePenType}
      placeholder="Наружняя ручка"
      label="Тип наружней ручки"
      value="0"
    />

    <TypeSelector
      options={options.knobs}
      changeCallback={callbacks.onSetInsidePenType}
      placeholder="Внутренняя ручка"
      label="Тип внутренней ручки"
      value="0"
    />

    <TypeSelector
      options={options.locks}
      changeCallback={callbacks.onSetLockType}
      placeholder="Замок"
      label="Тип замка"
      value="0"
    />
  </div>
);

BlockFittings.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  // code: PropTypes.object.isRequired,
};

export default BlockFittings;
