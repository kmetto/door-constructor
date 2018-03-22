// @flow

import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import type { OptionItem } from '../../types/OptionItem';

class InstallationType extends Component<{installTypes: Array<OptionItem>}> {
  render() {
    return <Dropdown placeholder="Тип установки" search selection options={this.props.installTypes} />;
  }
}

export default InstallationType;
