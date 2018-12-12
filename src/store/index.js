import { createStore, applyMiddleware, compose } from 'redux';

import APIMiddleWare from '../middleware/API';
import LocalStorageMiddleWare from '../middleware/LS';

import DevTools from '../containers/DevTools';

import reducers from '../reducers/index';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(APIMiddleWare, LocalStorageMiddleWare),
    DevTools.instrument()
  )
);

export default store;
