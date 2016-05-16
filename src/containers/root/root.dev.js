import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import DevTools from '../DevTools';

// Root.propTypes = {
//   store: PropTypes.object.isRequired,
//   routing: PropTypes.object.isRequired,
//   history: PropTypes.object.isRequired
// };

export default class Root extends Component {
  render() {
    const { store, routing, history } = this.props;

    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            {routing}
          </Router>
          <DevTools />
        </div>
      </Provider>
    );
  }
}
