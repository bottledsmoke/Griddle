import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import store from './store/store';


// import App from './App';
import Root from './containers/root';

import './styles.styl';

const history = syncHistoryWithStore(browserHistory, store);

console.log(store, history, routes);
ReactDOM.render(
  <AppContainer>
    {/* <App /> */}
    <Root store={store} history={history} routing={routes} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  });
}
