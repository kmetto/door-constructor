import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
    series: '0',
    designOutside: '0',
    designInside: '0',
    fittings: {
        lockType: '0',
        outsidePenType: '0',
        insidePenType: '0'
    },
    materialOutside: {
        linen: '0',
        trim: '0',
        overlays: '0',
        glass: '0'
    },
    materialInside: {
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