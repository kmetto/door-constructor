// @flow

import React from 'react';
import './App.css';
import DoorCodeContainer from '../DoorCode/DoorCodeContainer';
import BlockSeriesContainer from '../BlockSeries/BlockSeriesContainer';
import BlockFittingsContainer from '../BlockFittings/BlockFittingsContainer';
import BlockMaterialContainerOutside from '../BlockMaterial/BlockMaterialContainerOutside';
import BlockMaterialContainerInside from '../BlockMaterial/BlockMaterialContainerInside';
import BlockBoxContainer from '../BlockBox/BlockBoxContainer';

const App = () => (
  <section className="app-base-grid">
    <aside>
      <BlockSeriesContainer />

      <div className="fieldset design">
        <legend>Дизайн</legend>
        {/* <ImageSelector images={[]} /> */}
        {/* <ImageSelector images={[]} /> */}
      </div>

      <BlockFittingsContainer />
      <BlockMaterialContainerOutside />
      <BlockMaterialContainerInside />
      <BlockBoxContainer />

      <div className="fieldset size">
        <legend>Размеры</legend>
        {/* <SizesInput /> */}
      </div>

    </aside>
    <section>
      <DoorCodeContainer />
    </section>
  </section>
);

export default App;
