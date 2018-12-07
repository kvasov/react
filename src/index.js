import React from 'react';
import ReactDOM from 'react-dom';
import { parse } from 'qs';

import { Provider } from 'react-redux';
import store from './store/index';

import { Router, matchPath } from 'react-router-dom';

import DevTools from './containers/DevTools';

import history from './helpers/history';
import prepareData from './helpers/prepareData';
import routes from './routes/index';

import App from './App';

import './styles/reset.scss';

function historyCb(location, action = 'PUSH') {
  const state = { params: {}, query: {}, routes: [] };

  routes.some(route => {
    const match = matchPath(location.pathname, route);

    if (match) {
      state.routes.push(route);
      Object.assign(state.params, match.params);
      Object.assign(state.query, parse(location.search.substr(1)));
    }

    return match;
  });

  prepareData(store, state);
}

history.listen(historyCb);
historyCb(window.location, 'PUSH');

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
