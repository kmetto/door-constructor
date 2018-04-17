import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Icon, Popup } from 'semantic-ui-react';
import { actions } from '../../store/actionFabrick';


const clipboardBtn = ({ copyAction, currentCode, codeReady }) => (
  <div>
    {
      true &&
      <Popup
        trigger={
          <Button.Group>
            <Button icon onClick={() => copyAction(currentCode)}>
              <Icon name="clipboard" />
            </Button>
          </Button.Group>
      }
        content="Нажмите для копирования"
        position="bottom center"
      />
    }
  </div>
);


function getCurrentCode(state) {
  return [
    state.series,
    state.designs.designOutside,
    state.designs.designInside,
    state.fittings.lockType,
    state.fittings.outsidePenType,
    state.fittings.insidePenType,
    '(', [
      state.materialOutside.linen,
      state.materialOutside.trim,
      state.materialOutside.overlays,
      state.materialOutside.glass,
    ].map(i => (i || '?')).join('.'),
    '/', [
      state.materialInside.linen,
      state.materialInside.trim,
      state.materialInside.overlays,
      state.materialInside.glass,
    ].map(i => (i || '?')).join('.'),
    '-',
    state.box.material,
    state.box.instaltionType,
    state.size.width,
    state.size.height,
    ')',
  ].map(i => (i || '?')).join('');
}

function mapStateToProps(state) {
  return {
    currentCode: getCurrentCode(state),
    codeReady: getCurrentCode(state).match(/\?/g) === null,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ copyAction: actions.copyToClipboard }, dispatch);
}

const copyToClipboardBtn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(clipboardBtn);

export default copyToClipboardBtn;
