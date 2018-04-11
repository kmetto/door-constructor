import { connect } from 'react-redux';
import BlockMaterial from './BlockMaterial';
import { actions } from '../../store/actionFabrick';
import materialColor from '../../data/material-color';
import toning from '../../data/toning';

const blockName = 'BLOCK_MATERIAL_INSIDE';
const mapStateToProps = state => ({
  options: {
    materialColor,
    toning,
  },
  values: {
    materialLinen: state.materialInside.linen,
    materialTrim: state.materialInside.trim,
    materialOverlays: state.materialInside.overlays,
    materialGlass: state.materialInside.glass,
  },
  legend: 'Полотно внутри',
  activity: state.activeBlock === blockName,
});

const mapDispatchToProps = dispatch => ({
  callbacks: {
    onSetMaterialLinen: (val) => { dispatch(actions.setMaterialInsideLinen(val)); },
    onSetMaterialTrim: (val) => { dispatch(actions.setMaterialInsideTrim(val)); },
    onSetMaterialOverlays: (val) => { dispatch(actions.setMaterialInsideOverlays(val)); },
    onSetMaterialGlass: (val) => { dispatch(actions.setMaterialInsideGlass(val)); },
    onFocus: () => { dispatch(actions.setActiveBlock(blockName)); },
  },
});

const BlockMaterialContainerInside = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlockMaterial);

export default BlockMaterialContainerInside;
