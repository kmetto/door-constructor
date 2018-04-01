import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
    series: '0',
    designFront: '0',
    designRear: '0',
    fittings: {
        lockType: '0',
        frontPenType: '0',
        rearPenType: '0'
    },
    materialFront: {
        linen: '0',
        trim: '0',
        overlays: '0',
        glass: '0'
    },
    materialRear: {
        linen: '0',
        trim: '0',
        overlays: '0',
        glass: '0'
    },
    box: {
        material: '0',
        instaltionType: '0'
    },
    size: {
        height: '0',
        width: '0'
    }
}

const reduxDevtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
export default createStore(reducers, initialState, reduxDevtoolsExtension && reduxDevtoolsExtension())