import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import calendarApp from './reducers';
import App from './containers/App';
import {createPersistentStore} from './persistence';

import '../style/index.scss';

const store = createPersistentStore(calendarApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
