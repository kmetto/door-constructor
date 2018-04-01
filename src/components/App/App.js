// @flow

import React from 'react';
import './App.css';
import data from '../../data';
import CurrentCode from '../../containers/CurrentCode/CurrentCode';
import TypeSelector from '../../components/TypeSelector/TypeSelector';

import { connect } from 'react-redux';
import { actions } from '../../store/actionFabrick';

let App = ({ dispatch }) => {

  function handleChageType(action) {
    return function(value) {
      dispatch(action(value));
    }
  }

  return (
    <section className="app-base-grid">
      <aside>
        <div className="fieldset series">
          <legend>Серия дверей</legend>
          <TypeSelector options={data.doorSeries} changeCallback={handleChageType(actions.setSeries)} placeholder="Серия дверей" label="Серия дверей" />
        </div>

        <div className="fieldset design">
          <legend>Дизайн</legend>
          {/* <ImageSelector images={[]} /> */}
          {/* <ImageSelector images={[]} /> */}
        </div>

        <div className="fieldset fittings">
          <legend>Фурнитура</legend>
          <TypeSelector options={data.locks} changeCallback={handleChageType(actions.setLockType)} placeholder="Замок" label="Тип замка" />
          <TypeSelector options={data.knobs} changeCallback={handleChageType(actions.setFrontPenType)} placeholder="Наружняя ручка" label="Тип наружней ручки" />
          <TypeSelector options={data.knobs} changeCallback={handleChageType(actions.setRearPenType)} placeholder="Внутренняя ручка" label="Тип внутренней ручки" />
        </div>

        <div className="fieldset material">
          <legend>Материал и цвет</legend>
          <TypeSelector options={data.materialColor} changeCallback={handleChageType(actions.setRearPenType)} placeholder="Внутренняя ручка" label="Тип внутренней ручки" />
        </div>

        <div className="fieldset box">
          <legend>Коробка</legend>
          <TypeSelector options={data.installing} changeCallback={handleChageType(actions.setInstallType)} placeholder="Установка" label="Способ установки" />
          <TypeSelector options={data.installing} changeCallback={handleChageType(actions.setInstallType)} placeholder="Материал и цвет" label="Материал и цвет" />
        </div>

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

App = connect()(App);
export default App;