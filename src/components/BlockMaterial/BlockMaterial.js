import React from 'react';
import PropTypes from 'prop-types';
import TypeSelector from '../../components/TypeSelector/TypeSelector';


const BlockMaterial = ({
  legend, callbacks, options, values,
}) => (
  <div className="fieldset material">
    <legend>{legend}</legend>

    <TypeSelector
      options={options.materialColor}
      changeCallback={callbacks.onSetMaterialOutsideLinen}
      placeholder="Материал и цвет"
      label="Полотно"
      value="0"
    />

    <TypeSelector
      options={options.materialColor}
      changeCallback={callbacks.onSetMaterialOutsideTrim}
      placeholder="Материал и цвет"
      label="Наличник"
      value="0"
    />

    <TypeSelector
      options={options.materialColor}
      changeCallback={callbacks.onSetMaterialOutsideOverlays}
      placeholder="Материал и цвет"
      value="0"
    />

    <TypeSelector
      options={options.toning}
      changeCallback={callbacks.onSetMaterialOutsideGlass}
      placeholder="Тонировка стеклопакета"
      value="0"
    />

  </div>
);

BlockMaterial.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  // code: PropTypes.object.isRequired,
};

export default BlockMaterial;
