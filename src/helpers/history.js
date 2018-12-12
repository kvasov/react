import createBrowserHistory from 'history/createBrowserHistory';
import routes from '../routes/index';
import { matchPath } from 'react-router-dom';
import { parse } from 'qs';
import prepareData from './prepareData';
import store from '../store/index';

// Подскажи, как записать без default?
// чтобы сразу экспортировать и то и то
export default createBrowserHistory();

export function historyCb(location, action = 'PUSH') {
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
