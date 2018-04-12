import { connect } from 'react-redux';
import BlockMaterial from './BlockMaterial';
import { actions } from '../../store/actionFabrick';
import materialColor from '../../data/material-color';
import toning from '../../data/toning';
import blocks from '../../data/blocks';

const blockName = blocks.BLOCK_MATERIAL_OUTSIDE;
const mapStateToProps = state => ({
  options: {
    materialColor,
    toning,
  },
  values: {
    materialLinen: state.materialOutside.linen,
    materialTrim: state.materialOutside.trim,
    materialOverlays: state.materialOutside.overlays,
    materialGlass: state.materialOutside.glass,
  },
  legend: 'Полотно снаружи',
  activity: state.activeBlock === blockName,
});

const mapDispatchToProps = dispatch => ({
  callbacks: {
    onSetMaterialLinen: (val) => { dispatch(actions.setMaterialOutsideLinen(val)); },
    onSetMaterialTrim: (val) => { dispatch(actions.setMaterialOutsideTrim(val)); },
    onSetMaterialOverlays: (val) => { dispatch(actions.setMaterialOutsideOverlays(val)); },
    onSetMaterialGlass: (val) => { dispatch(actions.setMaterialOutsideGlass(val)); },
    onFocus: () => { dispatch(actions.setActiveBlock(blockName)); },
    onBlur: () => { dispatch(actions.setActiveBlock('')); },
  },
});

const BlockMaterialContainerOutside = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlockMaterial);

export default BlockMaterialContainerOutside;
