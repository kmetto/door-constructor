import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import data from '../../data';

class InstallationType extends Component{
  render() {
    return (
      <Dropdown placeholder="Тип установки" search selection options={data.installing}/>
    );
  }
}

export default InstallationType;
