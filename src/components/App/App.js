// @flow

import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import data from '../../data';
import { actions } from '../../store/actionFabrick';
import CurrentCode from '../../containers/CurrentCode/CurrentCode';
import TypeSelector from '../TypeSelector/TypeSelector';
import BlockSeries from '../BlockSeries/BlockSeriesContainer';
import BlockFittings from '../BlockFittings/BlockFittings';
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
        <BlockSeries />
        {/* <BlockSeries
          legend="Серия дверей"
          callbacks={{ onSetSeries: handleChageType(actions.setSeries) }}
          options={{ doorSeries: data.doorSeries }}
          values={{ doorSeriesValue: '0' }}
        /> */}

        <div className="fieldset design">
          <legend>Дизайн</legend>
          {/* <ImageSelector images={[]} /> */}
          {/* <ImageSelector images={[]} /> */}
        </div>

        <BlockFittings
          legend="Фурнитура"
          callbacks={{
            onSetOutsidePenType: handleChageType(actions.setOutsidePenType),
            onSetInsidePenType: handleChageType(actions.setInsidePenType),
            onSetLockType: handleChageType(actions.setLockType),
          }}
          options={{
            knobs: data.knobs,
            locks: data.locks,
          }}
          values={{ doorSeriesValue: '0' }}
        />

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
