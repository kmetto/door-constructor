import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import data from '../../data';

class DoorSeries extends Component {
  render() {
    return (
      <Dropdown placeholder="Серия дверей" search selection options={data.doorSeries}/>
    );
  }
};

export default DoorSeries;
