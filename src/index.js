// @flow

import React from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import constructorApp from './store/reducers';

let store = createStore(constructorApp)
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
