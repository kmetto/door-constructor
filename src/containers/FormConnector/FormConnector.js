import { connect } from 'react-redux';
import { actions } from '../../store/actionFabrick';
import DoorCode from '../../components/DoorCode/DoorCode';

const mapStateToProps = state => ({
  series: state.series,
  designOutside: state.designOutside,
  designInside: state.designInside,
  outsidePenType: state.fittings.outsidePenType,
  insidePenType: state.fittings.insidePenType,
  lockType: state.fittings.lockType,
  outsideLinen: state.materialOutside.linen,
  outsideTrim: state.materialOutside.trim,
  outsideOverlays: state.materialOutside.overlays,
  outsideGlass: state.materialOutside.glass,
  insideLinen: state.materialInside.linen,
  insideTrim: state.materialInside.trim,
  insideOverlays: state.materialInside.overlays,
  insideGlass: state.materialInside.glass,
  boxMaterial: state.box.material,
  boxInstallType: state.box.installType,
});

const mapDispatchToProps = ({ dispatch }) => {
  /** Auto generated dipatchers */
  function generateDispatchCallbacks(pairs = {}, dispatchFunc) {
    const map = {};
    Object.entries(pairs).forEach((pair) => {
      const prop = pair[0];
      const callback = pair[1];
      map[prop] = val => dispatchFunc(callback(val));
    });
    return map;
  }

  const callbackActionPairs = {
    onSetSeries: actions.setSeries,
    onSetOutsidePenType: actions.setOutsidePenType,
    onSetInsidePenType: actions.setInsidePenType,
    onSetLockType: actions.setLockType,
    onSetMaterialOutsideLinen: actions.setMaterialOutsideLinen,
    onSetMaterialOutsideTrim: actions.setMaterialOutsideTrim,
    onSetMaterialOutsideOverlays: actions.setMaterialOutsideOverlays,
    onSetMaterialOutsideGlass: actions.setMaterialOutsideGlass,
    onSetMaterialInsideLinen: actions.setMaterialInsideLinen,
    onSetMaterialInsideTrim: actions.setMaterialInsideTrim,
    onSetMaterialInsideOverlays: actions.setMaterialInsideOverlays,
    onSetMaterialInsideGlass: actions.setMaterialInsideGlass,
    onSetBoxMaterial: actions.setBoxMaterial,
    onSetBoxInstallType: actions.setBoxInstallType,
  };

  return {
    ...generateDispatchCallbacks(callbackActionPairs, dispatch),
    // here you can create custom pairs
  };
};


const FormConnector = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DoorCode);

export default FormConnector;
