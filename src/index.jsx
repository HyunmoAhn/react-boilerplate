import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './scss/index.scss';

const requireTest = require.context('./assets', true, /\.*$/);
requireTest.keys().forEach(requireTest);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
