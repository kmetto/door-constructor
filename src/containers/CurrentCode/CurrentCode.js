import { connect } from 'react-redux';
import DoorCode from '../../components/DoorCode/DoorCode';

const mapStateToProps = state => ({
  code: { ...state },
});

const mapDispatchToProps = dispatch => ({});

const CurrentCode = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DoorCode);

export default CurrentCode;
