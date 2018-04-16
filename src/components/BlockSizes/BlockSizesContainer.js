import { connect } from 'react-redux';
import BlockSizes from './BlockSizes';
import { actions } from '../../store/actionFabrick';
import blocks from '../../data/blocks';

const blockName = blocks.BLOCK_SIZES;

const mapStateToProps = state => ({
  activity: state.activeBlock === blockName,
  values: {
    height: state.size.height,
    width: state.size.width,
  },
});

const mapDispatchToProps = dispatch => ({
  callbacks: {
    onSetHeight: (val) => { dispatch(actions.setHeigth(val)); },
    onSetWidth: (val) => { dispatch(actions.setWidth(val)); },
    onFocus: () => { dispatch(actions.setActiveBlock(blockName)); },
  },
});

const BlockSizesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlockSizes);

export default BlockSizesContainer;
