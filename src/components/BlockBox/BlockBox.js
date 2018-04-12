import React from 'react';
import TypeSelector from '../../components/TypeSelector/TypeSelector';

function getBlockClasses(active) {
  let defaultClasess = 'fieldset box';
  if (active) defaultClasess += ' hightlight';
  return defaultClasess;
}

const BlockBox = ({
  callbacks, options, values, activity,
}) => (
  <div className={getBlockClasses(activity)}>
    <legend>Коробка</legend>

    <TypeSelector
      options={options.materialColor}
      changeCallback={callbacks.onSetBoxMaterial}
      placeholder="Серия дверей"
      label="Серия дверей"
      value={values.boxMaterial}
      focusCallback={callbacks.onFocus}
    />

    <TypeSelector
      options={options.installing}
      changeCallback={callbacks.onSetBoxInstallType}
      placeholder="Серия дверей"
      label="Серия дверей"
      value={values.boxInstallType}
      focusCallback={callbacks.onFocus}
    />

  </div>
);

export default BlockBox;
