import { combineReducers } from 'redux';
import { setSeries } from './actions';

const initialState = {
    series,
    designFront,
    designRear,
    lockType,
    penType,
    materialFront: {
        linen,
        trim,
        overlays,
        glass
    },
    materialRear: {
        linen,
        trim,
        overlays,
        glass
    },
    box: {
        material,
        instaltionType
    },
    size: {
        height,
        width
    }
}

function series(state = 0, action) {
    switch (action.type) {
        case 'SET_SERIES':
            return action.result

        default:
            return state;
    }
}

function designFront(state = 0, action) {
    switch (action.type) {

        default:
            return state;
    }
}

function designRear(state = 0, action) {
    switch (action.type) {

        default:
            return state;
    }
}

function lockType(state = 0, action) {
    switch (action.type) {

        default:
            return state;
    }
}

function penType(state = 0, action) {
    switch (action.type) {

        default:
            return state;
    }
}

function material(state = { linen, trim, overlays, glass }, action) {
    switch (action.type) {

        default:
            return state;
    }
}

function box(state = { material, instaltionType }, action) {
    switch (action.type) {

        default:
            return state;
    }
}

function size(state = { height, width }, action) {
    switch (action.type) {

        default:
            return state;
    }
}


/** Without combiner it look like that

    export default function store(state = initialState, action) {
        return {
            series: series(state.series, action),
            designFront: designFront(state.designFront, action),
            designRear: designRear(state.designRear, action),
            lockType: lockType(state.lockType, action),
            penType: penType(state.penType, action),
            materialFront: material(state.materialFront, action),
            materialRear: material(state.materialRear, action),
            box: box(state.box, action),
            size: size(state.size, action)
        }
    }

 */

export default const store = combineReducers({
    series,
    designFront,
    designRear,
    lockType,
    penType,
    materialFront: material,
    materialRear: material,
    box,
    size
})

export default store;