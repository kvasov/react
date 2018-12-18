import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store/index';
import * as types from 'constants/actionTypes/CartActionTypes';

import { Router } from 'react-router-dom';

import DevTools from './containers/DevTools';

import history from './helpers/history';
import { historyCb } from './helpers/history';

import routes from './routes/index';

import App from './App';

import './styles/reset.scss';

history.listen(historyCb);
historyCb(window.location, 'PUSH');

store.dispatch({
  type: types.RESTORE_FROM_LS
});

function Root() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <App routes={routes} />
      </Router>
    </Provider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));

ReactDOM.render(<DevTools store={store} />, document.getElementById('devtools'));
