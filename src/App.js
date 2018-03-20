import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import './App.css';

const colors = [{key: 'white', value: '#fff', text: 'White'}, {key: 'black', value: '#000', text: 'Black'}];

class App extends Component {
  render() {
    return (
      <Dropdown placeholder="Выберите цвет" search selection options={colors}/>
    );
  }
}

export default App;
