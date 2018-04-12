import { connect } from 'react-redux';
import BlockBox from './BlockBox';
import { actions } from '../../store/actionFabrick';
import materialColor from '../../data/material-color';
import installing from '../../data/installing';

const blockName = 'BLOCK_FITTINGS';
const mapStateToProps = state => ({
  options: {
    materialColor,
    installing,
  },
  values: {
    boxMaterial: state.box.material,
    boxInstallType: state.box.instaltionType,
  },
  activity: state.activeBlock === blockName,
});

const mapDispatchToProps = dispatch => ({
  callbacks: {
    onSetBoxMaterial: (val) => { dispatch(actions.setBoxMaterial(val)); },
    onSetBoxInstallType: (val) => { dispatch(actions.setBoxInstallType(val)); },
    onFocus: () => { dispatch(actions.setActiveBlock(blockName)); },
  },
});

const BlockBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlockBox);

export default BlockBoxContainer;
