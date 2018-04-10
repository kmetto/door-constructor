import React from 'react';
import TypeSelector from '../../components/TypeSelector/TypeSelector';

const BlockBox = ({
  callbacks, options, values,
}) => (
  <div className="fieldset box">
    <legend>Коробка</legend>

    <TypeSelector
      options={options.materialColor}
      changeCallback={callbacks.onSetBoxMaterial}
      placeholder="Серия дверей"
      label="Серия дверей"
      value={values.boxMaterial}
    />

    <TypeSelector
      options={options.installing}
      changeCallback={callbacks.onSetBoxInstallType}
      placeholder="Серия дверей"
      label="Серия дверей"
      value={values.boxInstallType}
    />

  </div>
);

export default BlockBox;
