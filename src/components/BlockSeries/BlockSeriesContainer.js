import { connect } from 'react-redux';
import BlockSeries from './BlockSeries';
import doorSeries from '../../data/door-series';
import { actions } from '../../store/actionFabrick';

const mapStateToProps = state => ({
  options: doorSeries,
  values: {
    doorSeries: state.series,
  },
});

const mapDispatchToProps = dispatch => ({
  callbacks: {
    onSetSeries: (val) => { dispatch(actions.setSeries(val)); },
  },
});

const BlockSeriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlockSeries);

export default BlockSeriesContainer;
