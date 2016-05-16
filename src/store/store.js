import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerReducer } from 'react-router-redux';
import DevTools from '../containers/DevTools';

import App from '../reducers';

const initialState = window.INITIAL_STATE || {};

const rootReducer = combineReducers({
  routing: routerReducer,
  App
});

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});

const enhancer = compose(
  applyMiddleware(thunkMiddleware, loggerMiddleware),
  DevTools.instrument()
);

const store = createStore(rootReducer, initialState, enhancer);

if (module.hot) {
  module.hot.accept('../reducers', () =>
    store.replaceReducer(combineReducers({
      routing: routerReducer,
      pulseApp: require('../reducers')
    }))
  );
}

export default store;
