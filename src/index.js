import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import calendarApp from './reducers';
import App from './components/App';
import { STORAGE_KEY } from './constants';

import '../style/index.scss';

const localData = localStorage.getItem(STORAGE_KEY);
const persistedState = localData ? JSON.parse(localData) : {};

const store = createStore(calendarApp, persistedState);

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
