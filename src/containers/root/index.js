/* global __DEV__ */

/* eslint-disable global-require */

// TODO Disable This
const __DEV__ = true;

if (__DEV__) {
  module.exports = require('./root.dev');
} else {
  module.exports = require('./root.prod');
}
