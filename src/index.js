// @flow

import React from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { setSeries } from './store/actions'

import store from './store';

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(setSeries(3))
unsubscribe();

render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
