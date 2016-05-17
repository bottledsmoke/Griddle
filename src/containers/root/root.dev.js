import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import DevTools from '../DevTools';
import Grid from '../../components/Grid';

export default class Root extends Component {
  render() {
    const { store, routing, history } = this.props;

    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            {routing}
          </Router>
          <Grid />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  routing: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
