// @flow

import React from 'react';
import './App.css';
import DoorCodeContainer from '../DoorCode/DoorCodeContainer';
import BlockSeriesContainer from '../BlockSeries/BlockSeriesContainer';
import BlockFittingsContainer from '../BlockFittings/BlockFittingsContainer';
import BlockMaterialContainerOutside from '../BlockMaterial/BlockMaterialContainerOutside';
import BlockMaterialContainerInside from '../BlockMaterial/BlockMaterialContainerInside';
import BlockBoxContainer from '../BlockBox/BlockBoxContainer';
import BlockSizesContainer from '../BlockSizes/BlockSizesContainer';
import BlockDesignContainer from '../BlockDesign/BlockDesignContainer';
import CopyToClipboardBtn from '../CopyToClipboardBtn/CopyToClipboardBtn';
import MainView from '../MainView/MainView';

const App = () => (
  <section className="app-base-grid">
    <aside>
      <BlockSeriesContainer />
      <BlockDesignContainer />
      <BlockFittingsContainer />
      <BlockMaterialContainerOutside />
      <BlockMaterialContainerInside />
      <BlockBoxContainer />
      <BlockSizesContainer />
    </aside>
    <section className="top-bar">
      <DoorCodeContainer />
      <CopyToClipboardBtn />
    </section>
    <section className="main-area">
      <MainView />
      {/* content */}
    </section>
  </section>
);

export default App;
