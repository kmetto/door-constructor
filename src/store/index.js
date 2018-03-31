import { createStore } from 'redux';
import reducers from './reducers';

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

let store = createStore(reducers, initialState)