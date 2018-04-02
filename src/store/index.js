import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
    series: '-',
    designOutside: '-',
    designInside: '-',
    fittings: {
        lockType: '-',
        outsidePenType: '-',
        insidePenType: '-'
    },
    materialOutside: {
        linen: '-',
        trim: '-',
        overlays: '-',
        glass: '-'
    },
    materialInside: {
        linen: '-',
        trim: '-',
        overlays: '-',
        glass: '-'
    },
    box: {
        material: '-',
        instaltionType: '-'
    },
    size: {
        height: '-',
        width: '-'
    }
}

const reduxDevtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
export default createStore(reducers, initialState, reduxDevtoolsExtension && reduxDevtoolsExtension())