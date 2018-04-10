// @flow

import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import data from '../../data';
import { actions } from '../../store/actionFabrick';
import CurrentCode from '../../containers/CurrentCode/CurrentCode';
import BlockSeriesContainer from '../BlockSeries/BlockSeriesContainer';
import BlockFittingsContainer from '../BlockFittings/BlockFittingsContainer';
import BlockMaterial from '../BlockMaterial/BlockMaterial';
import BlockBox from '../BlockBox/BlockBox';

const App = ({ dispatch }) => {
  function handleChageType(action) {
    return function (value) {
      dispatch(action(value));
    };
  }

  return (
    <section className="app-base-grid">
      <aside>
        <BlockSeriesContainer />

        <div className="fieldset design">
          <legend>Дизайн</legend>
          {/* <ImageSelector images={[]} /> */}
          {/* <ImageSelector images={[]} /> */}
        </div>

        <BlockFittingsContainer />

        <BlockMaterial
          legend="Полотно снаружи"
          callbacks={{
            onSetMaterialOutsideLinen: handleChageType(actions.setMaterialOutsideLinen),
            onSetMaterialOutsideTrim: handleChageType(actions.setMaterialOutsideTrim),
            onSetMaterialOutsideOverlays: handleChageType(actions.setMaterialOutsideOverlays),
            onSetMaterialOutsideGlass: handleChageType(actions.setMaterialOutsideGlass),
          }}
          options={{
            materialColor: data.materialColor,
            toning: data.toning,
          }}
          values={{ doorSeriesValue: '0' }}
        />

        <BlockBox
          legend="Коробка"
          callbacks={{
            onSetBoxMaterial: handleChageType(actions.setBoxMaterial),
            onSetBoxInstallType: handleChageType(actions.setBoxInstallType),
          }}
          options={{
            materialColor: data.materialColor,
            installing: data.installing,
          }}
          values={{ doorSeriesValue: '0' }}
        />


        <div className="fieldset size">
          <legend>Размеры</legend>
          {/* <SizesInput /> */}
        </div>

      </aside>
      <section>
        <CurrentCode />
      </section>
    </section>
  );
};

const connectedApp = connect()(App);
export default connectedApp;
