import { createStore, applyMiddleware, compose } from 'redux';

import APIMiddleWare from '../middleware/API';
import DevTools from '../containers/DevTools';

import reducers from '../reducers/index';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(APIMiddleWare),
    DevTools.instrument()
  )
);

export default store;
