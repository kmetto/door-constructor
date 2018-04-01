// @flow

import React, { Component } from 'react';
import './App.css';
import data from '../../data';
import DoorSeries from '../DoorSeries/DoorSeries';
import InstallationType from '../InstallationType/InstallationType';
import PenType from '../PenType/PenType';
import LockType from '../LockType/LockType';
import CurrentCode from '../../containers/CurrentCode/CurrentCode';

export default class App extends Component<{}> {
  render() {
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
            <LockType installTypes={data.installing} />
            <PenType installTypes={data.installing} />
            <PenType installTypes={data.installing} />
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
  }
}
