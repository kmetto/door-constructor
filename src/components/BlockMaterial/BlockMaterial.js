import React from 'react';
import TypeSelector from '../../components/TypeSelector/TypeSelector';

function getBlockClasses(active) {
  let defaultClasess = 'fieldset material';
  if (active) defaultClasess += ' hightlight';
  return defaultClasess;
}

const BlockMaterial = ({
  callbacks, options, values, legend, activity,
}) => (
  <div className={getBlockClasses(activity)}>
    <legend>{legend}</legend>

    <TypeSelector
      options={options.materialColor}
      changeCallback={callbacks.onSetMaterialLinen}
      placeholder="Материал и цвет"
      label="Полотно"
      value={values.materialLinen}
      focusCallback={callbacks.onFocus}
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
