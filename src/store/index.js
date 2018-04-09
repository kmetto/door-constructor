import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
  series: '0',
  designOutside: '-',
  designInside: '-',
  fittings: {
    lockType: '-',
    outsidePenType: '-',
    insidePenType: '-',
  },
  materialOutside: {
    linen: '-',
    trim: '-',
    overlays: '-',
    glass: '-',
  },
  materialInside: {
    linen: '-',
    trim: '-',
    overlays: '-',
    glass: '-',
  },
  box: {
    material: '-',
    instaltionType: '-',
  },
  size: {
    height: '-',
    width: '-',
  },
};

const reduxDevtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__; // eslint-disable-line no-underscore-dangle, max-len
export default createStore(
  reducers,
  initialState,
  reduxDevtoolsExtension && reduxDevtoolsExtension(),
);
