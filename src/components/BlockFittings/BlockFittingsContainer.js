import { connect } from 'react-redux';
import BlockFittings from './BlockFittings';
import { actions } from '../../store/actionFabrick';
import knobs from '../../data/knobs';
import locks from '../../data/locks';

const mapStateToProps = state => ({
  options: {
    knobs,
    locks,
  },
  values: {
    outsidePenType: state.fittings.outsidePenType,
    insidePenType: state.fittings.insidePenType,
    lockType: state.fittings.lockType,
  },
});

const mapDispatchToProps = dispatch => ({
  callbacks: {
    onSetOutsidePenType: (val) => { dispatch(actions.setOutsidePenType(val)); },
    onSetInsidePenType: (val) => { dispatch(actions.setInsidePenType(val)); },
    onSetLockType: (val) => { dispatch(actions.setLockType(val)); },
  },
});

const BlockFittingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlockFittings);

export default BlockFittingsContainer;
