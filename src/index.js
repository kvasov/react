import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/index';
import * as types from 'constants/actionTypes/CartActionTypes';

import routes from 'routes/index';

import history from './helpers/history';
import { historyCb } from './helpers/history';

const store = configureStore(window.INITIAL_STATE);
store.dispatch({
  type: types.RESTORE_FROM_LS
});

history.listen(location => historyCb(store, routes, location));

import App from './App';

function Root() {
  return <App history={history} store={store} />;
}

ReactDOM.hydrate(<Root />, document.getElementById('root'), () => {
  delete window.INITIAL_STATE;
});
