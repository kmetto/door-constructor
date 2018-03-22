// @flow

import React, { Component } from 'react';
import './App.css';
import data from '../../data';
import DoorSeries from '../DoorSeries/DoorSeries';
import InstallationType from '../InstallationType/InstallationType';

export default class App extends Component<{}> {
  render() {
    return (
      <div>
        <DoorSeries series={data.doorSeries} />
        <InstallationType installTypes={data.installing} />
      </div>
    );
  }
}
