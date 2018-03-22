// @flow

import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import type { OptionItem } from '../../types/OptionItem';

export default class DoorSeries extends Component<{series: Array<OptionItem>}> {
  render() {
    return (
      <Dropdown placeholder="Серия дверей" search selection options={this.props.series} />
    );
  }
}
