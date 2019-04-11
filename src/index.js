import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'utils/rem.js';
import 'utils/axios-interceptor';
import 'styles/_reset.scss';
import 'styles/_common.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store, persistor } from 'store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <Route path={`/`} component={App} />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
