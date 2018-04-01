import { connect } from 'react-redux'
import DoorCode from '../../components/DoorCode/DoorCode'

const mapStateToProps = (state) => {
  return {
    code: {...state}
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const CurrentCode = connect(
  mapStateToProps,
  mapDispatchToProps
)(DoorCode)

export default CurrentCode