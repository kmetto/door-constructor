import { connect } from 'react-redux';
import BlockBox from './BlockBox';
import { actions } from '../../store/actionFabrick';
import materialColor from '../../data/material-color';
import installing from '../../data/installing';

const mapStateToProps = state => ({
  options: {
    materialColor,
    installing,
  },
  values: {
    boxMaterial: state.box.material,
    boxInstallType: state.box.instaltionType,
  },
});

const mapDispatchToProps = dispatch => ({
  callbacks: {
    onSetBoxMaterial: (val) => { dispatch(actions.setBoxMaterial(val)); },
    onSetBoxInstallType: (val) => { dispatch(actions.setBoxInstallType(val)); },
  },
});

const BlockBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlockBox);

export default BlockBoxContainer;
