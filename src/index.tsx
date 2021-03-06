import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import store from '~/app/store';

require('intersection-observer');

const render = () => {
  // The require('./rootReducer').default looks a bit odd.
  // That's because we're mixing CommonJS synchronous import syntax with ES modules,
  // so the "default export" is in a object field called default.
  // We could probably also have used import()
  // and handled the reducer replacement asynchronously as well.
  const App = require('./app/App').default;

  ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    // </React.StrictMode>,
    document.getElementById('appMountPoint')
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/App', render);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
