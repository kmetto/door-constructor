import { combineReducers } from 'redux';
import { types } from './actionFabrick';

function series(state = '0', action) {
    switch (action.type) {
        case types.setSeries:
            return action.result

        default:
            return state;
    }
}

function designFront(state = '0', action) {
    switch (action.type) {

        default:
            return state;
    }
}

function designRear(state = '0', action) {
    switch (action.type) {

        default:
            return state;
    }
}

function fittings(state = { lockType: '0', frontPenType: '0', rearPenType: '0' }, action) {
    switch (action.type) {

        case types.setLockType:
            return {
                ...state,
                lockType: action.result
            }

        case types.setFrontPenType:
            return {
                ...state,
                frontPenType: action.result
            }

        case types.setRearPenType:
            return {
                ...state,
                rearPenType: action.result
            }

        default:
            return state;
    }
}

function material(state = { linen: '0', trim: '0', overlays: '0', glass: '0' }, action) {
    switch (action.type) {

        default:
            return state;
    }
}

function box(state = { material: '0', instaltionType: '0' }, action) {
    switch (action.type) {

        case types.setInstallType:
            return {
                ...state,
                instaltionType: action.result
            }
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


const reducers = combineReducers({
    series,
    designFront,
    designRear,
    fittings,
    materialFront: material,
    materialRear: material,
    box,
    size
})

export default reducers;