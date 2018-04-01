// @flow

import React from 'react';
import './App.css';
import data from '../../data';
import DoorSeries from '../DoorSeries/DoorSeries';
import InstallationType from '../InstallationType/InstallationType';
import CurrentCode from '../../containers/CurrentCode/CurrentCode';
import TypeSelector from '../../components/TypeSelector/TypeSelector';

import { connect } from 'react-redux';
import { setFrontPenType } from '../../store/actions';
import { setRearPenType } from '../../store/actions';
import { setLockType } from '../../store/actions';



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
          <DoorSeries series={data.doorSeries}/>
        </div>

        <div className="fieldset design">
          <legend>Дизайн</legend>
          <InstallationType installTypes={data.installing} />
        </div>

        <div className="fieldset fittings">
          <legend>Фурнитура</legend>
          <TypeSelector options={data.locks} changeCallback={handleChageType(setLockType)} placeholder="Замок" label="Тип замка" />
          <TypeSelector options={data.knobs} changeCallback={handleChageType(setFrontPenType)} placeholder="Наружняя ручка" label="Тип наружней ручки" />
          <TypeSelector options={data.knobs} changeCallback={handleChageType(setRearPenType)} placeholder="Внутренняя ручка" label="Тип внутренней ручки" />
        </div>

        <div className="fieldset material">
          <legend>Материал и цвет</legend>
          <InstallationType installTypes={data.installing} />
        </div>

        <div className="fieldset box">
          <legend>Коробка</legend>
          <InstallationType installTypes={data.installing} />
        </div>

        <div className="fieldset size">
          <legend>Размеры</legend>
          <InstallationType installTypes={data.installing} />
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