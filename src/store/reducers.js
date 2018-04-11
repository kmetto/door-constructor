import { combineReducers } from 'redux';
import { types } from './actionFabrick';

function series(state = '0', action) {
  switch (action.type) {
    case types.setSeries:
      return action.result;

    default:
      return state;
  }
}

function designOutside(state = '0', action) {
  switch (action.type) {
    default:
      return state;
  }
}

function designInside(state = '0', action) {
  switch (action.type) {
    default:
      return state;
  }
}

function fittings(state = { lockType: '0', outsidePenType: '0', insidePenType: '0' }, action) {
  switch (action.type) {
    case types.setLockType:
      return {
        ...state,
        lockType: action.result,
      };

    case types.setOutsidePenType:
      return {
        ...state,
        outsidePenType: action.result,
      };

    case types.setInsidePenType:
      return {
        ...state,
        insidePenType: action.result,
      };

    default:
      return state;
  }
}

function materialOutside(state = {
  linen: '0', trim: '0', overlays: '0', glass: '0',
}, action) {
  switch (action.type) {
    case types.setMaterialOutsideLinen:
      return {
        ...state,
        linen: action.result,
      };

    case types.setMaterialOutsideTrim:
      return {
        ...state,
        trim: action.result,
      };

    case types.setMaterialOutsideOverlays:
      return {
        ...state,
        overlays: action.result,
      };

    case types.setMaterialOutsideGlass:
      return {
        ...state,
        glass: action.result,
      };

    default:
      return state;
  }
}

function materialInside(state = {
  linen: '0', trim: '0', overlays: '0', glass: '0',
}, action) {
  switch (action.type) {
    case types.setMaterialInsideLinen:
      return {
        ...state,
        linen: action.result,
      };

    case types.setMaterialInsideTrim:
      return {
        ...state,
        trim: action.result,
      };

    case types.setMaterialInsideOverlays:
      return {
        ...state,
        overlays: action.result,
      };

    case types.setMaterialInsideGlass:
      return {
        ...state,
        glass: action.result,
      };

    default:
      return state;
  }
}


function box(state = { material: '0', instaltionType: '0' }, action) {
  switch (action.type) {
    case types.setBoxInstallType:
      return {
        ...state,
        instaltionType: action.result,
      };

    case types.setBoxMaterial:
      return {
        ...state,
        material: action.result,
      };

    default:
      return state;
  }
}

function size(state = { height: '0', width: '0' }, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function activeBlock(state = '', action) {
  switch (action.type) {
    case types.setActiveBlock:
      return action.result;

    default:
      return state;
  }
}


const reducers = combineReducers({
  series,
  designOutside,
  designInside,
  fittings,
  materialOutside,
  materialInside,
  box,
  size,
  activeBlock,
});

export default reducers;
