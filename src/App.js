import React, { Component } from 'react';

import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import store from './store/store';
const history = syncHistoryWithStore(browserHistory, store);

import './styles.styl';
import Root from './containers/root';


export default class App extends Component {
  render() {
    return (
      <Root store={store} history={history} routing={routes} />
    );
  }
}
