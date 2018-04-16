import { connect } from 'react-redux';
import { actions } from '../../store/actionFabrick';
import BlockDesign from './BlockDesign';
import designs from '../../data/designs';
import blocks from '../../data/blocks';

const blockName = blocks.BLOCK_DESIGN;
const mapStateToProps = state => ({
  options: {
    designs,
  },
  values: {
    designOutside: state.designs.designOutside,
    designInside: state.designs.designInside,
  },
  activity: state.activeBlock === blockName,
});

const mapDispatchToProps = dispatch => ({
  callbacks: {
    onSetDesignInside: (val) => { dispatch(actions.setDesignInside(val)); },
    onSetDesignOutside: (val) => { dispatch(actions.setDesignOutside(val)); },
    onFocus: () => { dispatch(actions.setActiveBlock(blockName)); },
  },
});

const BlockDesignContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlockDesign);

export default BlockDesignContainer;
