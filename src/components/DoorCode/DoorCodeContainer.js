import { connect } from 'react-redux';
import DoorCode from './DoorCode';
import { actions } from '../../store/actionFabrick';

const mapStateToProps = state => ({
  code: { ...state },
});

const mapDispatchToProps = dispatch => ({
  onHover: (blockName) => { dispatch(actions.setActiveBlock(blockName)); },
});

const DoorCodeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DoorCode);

export default DoorCodeContainer;
