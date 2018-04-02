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
          <TypeSelector
            options={data.doorSeries}
            changeCallback={handleChageType(actions.setSeries)}
            placeholder="Серия дверей"
            label="Серия дверей" />
        </div>

        <div className="fieldset design">
          <legend>Дизайн</legend>
          {/* <ImageSelector images={[]} /> */}
          {/* <ImageSelector images={[]} /> */}
        </div>

        <div className="fieldset fittings">
          <legend>Фурнитура</legend>
          <TypeSelector
            options={data.knobs}
            changeCallback={handleChageType(actions.setOutsidePenType)}
            placeholder="Наружняя ручка"
            label="Тип наружней ручки"
          />
          <TypeSelector
            options={data.knobs}
            changeCallback={handleChageType(actions.setInsidePenType)}
            placeholder="Внутренняя ручка"
            label="Тип внутренней ручки"
          />
          <TypeSelector
            options={data.locks}
            changeCallback={handleChageType(actions.setLockType)}
            placeholder="Замок"
            label="Тип замка"
          />
        </div>

        <div className="fieldset material">
          <legend>Полотно снаружи</legend>
          <TypeSelector
            options={data.materialColor}
            changeCallback={handleChageType(actions.setMaterialOutsideLinen)}
            placeholder="Материал и цвет"
            label="Полотно"
          />
          <TypeSelector
            options={data.materialColor}
            changeCallback={handleChageType(actions.setMaterialOutsideTrim)}
            placeholder="Материал и цвет"
            label="Наличник"
          />
          <TypeSelector
            options={data.materialColor}
            changeCallback={handleChageType(actions.setMaterialOutsideOverlays)}
            placeholder="Материал и цвет"
            label="Накладки"
          />
          <TypeSelector
            options={data.toning}
            changeCallback={handleChageType(actions.setMaterialOutsideGlass)}
            placeholder="Тонировка стеклопакета"
            label="Тонировка"
          />
        </div>

        <div className="fieldset material">
          <legend>Полотно внутри</legend>
          <TypeSelector
            options={data.materialColor}
            changeCallback={handleChageType(actions.setMaterialInsideLinen)}
            placeholder="Материал и цвет"
            label="Полотно"
          />
          <TypeSelector
            options={data.materialColor}
            changeCallback={handleChageType(actions.setMaterialInsideTrim)}
            placeholder="Материал и цвет"
            label="Наличник"
          />
          <TypeSelector
            options={data.materialColor}
            changeCallback={handleChageType(actions.setMaterialInsideOverlays)}
            placeholder="Материал и цвет"
            label="Накладки"
          />
          <TypeSelector
            options={data.toning}
            changeCallback={handleChageType(actions.setMaterialInsideGlass)}
            placeholder="Тонировка стеклопакета"
            label="Тонировка"
          />
        </div>

        <div className="fieldset box">
          <legend>Коробка</legend>
          <TypeSelector
            options={data.materialColor}
            changeCallback={handleChageType(actions.setBoxMaterial)}
            placeholder="Материал и цвет"
            label="Материал и цвет"
          />
          <TypeSelector
            options={data.installing}
            changeCallback={handleChageType(actions.setBoxInstallType)}
            placeholder="Установка"
            label="Способ установки"
          />
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