/* globals __CLIENT__ */
import { createStore, applyMiddleware, compose } from 'redux';

import APIMiddleWare from '../middleware/API';
import LocalStorageMiddleWare from '../middleware/LS';

import reducers from '../reducers/index';

export default function(INITIAL_STATE = {}) {
  let enhancers = [];

  // eslint-disable-next-line
  if (__CLIENT__) {
    const { logger } = require('redux-logger');
    enhancers.push(logger);
  }

  enhancers = enhancers.concat([APIMiddleWare, LocalStorageMiddleWare]);
  return createStore(reducers, INITIAL_STATE, compose(applyMiddleware(...enhancers)));
}
