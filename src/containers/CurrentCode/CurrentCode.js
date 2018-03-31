import { connect } from 'react-redux'
import DoorCode from '../../components/DoorCode/DoorCode'

const getCurrentCode = (state) => {
    return `${state.series} ${state.box.instaltionType}`
}

const mapStateToProps = (state) => {
  return {
    code: getCurrentCode(state)
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