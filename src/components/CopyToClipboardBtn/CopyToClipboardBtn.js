import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../store/actionFabrick';

const clipboardBtn = ({ copyAction, currentCode }) => (
  <div>
    <button onClick={() => copyAction(currentCode)}> Copy </button>
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
    ].join('.'),
    '/', [
      state.materialInside.linen,
      state.materialInside.trim,
      state.materialInside.overlays,
      state.materialInside.glass,
    ].join('.'),
    '-',
    state.box.material,
    state.box.instaltionType,
    state.size.height,
    state.size.width,
    ')',
  ].join(' ');
}

function mapStateToProps(state) {
  return { currentCode: getCurrentCode(state) };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ copyAction: actions.copyToClipboard }, dispatch);
}

const copyToClipboardBtn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(clipboardBtn);

export default copyToClipboardBtn;
