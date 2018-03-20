import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import './App.css';
import data from '../../data';
import DoorSeries from '../DoorSeries/DoorSeries';
import InstallationType from '../InstallationType/InstallationType';

const colors = [{key: 'white', value: '#fff', text: 'White'}, {key: 'black', value: '#000', text: 'Black'}];

class App extends Component {
  render() {
    return (
      <div>
        <DoorSeries/>
        <InstallationType/>
        <Dropdown placeholder="Выберите цвет" search selection options={colors}/>
      </div>
    );
  }
}

export default App;
