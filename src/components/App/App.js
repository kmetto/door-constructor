// @flow

import React, { Component } from 'react';
import './App.css';
import data from '../../data';
import DoorSeries from '../DoorSeries/DoorSeries';
import InstallationType from '../InstallationType/InstallationType';
import CurrentCode from '../../containers/CurrentCode/CurrentCode';

export default class App extends Component<{}> {
  render() {
    return (
      <section className="app-base-grid">
        <aside>
          <DoorSeries series={data.doorSeries}/>
          <InstallationType installTypes={data.installing} />
        </aside>
        <section>
          <CurrentCode />
        </section>
      </section>
    );
  }
}
