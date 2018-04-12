import { connect } from 'react-redux';
import BlockSeries from './BlockSeries';
import doorSeries from '../../data/door-series';
import { actions } from '../../store/actionFabrick';
import blocks from '../../data/blocks';

const blockName = blocks.BLOCK_SERIES;

const mapStateToProps = state => ({
  options: doorSeries,
  values: {
    doorSeries: state.series,
  },
  activity: state.activeBlock === blockName,
});

const mapDispatchToProps = dispatch => ({
  callbacks: {
    onSetSeries: (val) => { dispatch(actions.setSeries(val)); },
    onFocus: () => { dispatch(actions.setActiveBlock(blockName)); },
  },
});

const BlockSeriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlockSeries);

export default BlockSeriesContainer;
