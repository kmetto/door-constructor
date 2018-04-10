import React from 'react';
import TypeSelector from '../../components/TypeSelector/TypeSelector';


const BlockMaterial = ({
  callbacks, options, values, legend,
}) => (
  <div className="fieldset material">
    <legend>{legend}</legend>

    <TypeSelector
      options={options.materialColor}
      changeCallback={callbacks.onSetMaterialLinen}
      placeholder="Материал и цвет"
      label="Полотно"
      value={values.materialLinen}
    />

    <TypeSelector
      options={options.materialColor}
      changeCallback={callbacks.onSetMaterialTrim}
      placeholder="Материал и цвет"
      label="Наличник"
      value={values.materialTrim}
    />

    <TypeSelector
      options={options.materialColor}
      changeCallback={callbacks.onSetMaterialOverlays}
      placeholder="Материал и цвет"
      label="Накладка"
      value={values.materialOverlays}
    />

    <TypeSelector
      options={options.toning}
      changeCallback={callbacks.onSetMaterialGlass}
      placeholder="Тонировка стеклопакета"
      label="Стеклопакет"
      value={values.materialGlass}
    />

  </div>
);

export default BlockMaterial;
