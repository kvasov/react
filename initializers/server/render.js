import React from 'react';
import { renderToString } from 'react-dom/server';

import App from 'App';

import createStore from 'store/index';
import routes from 'routes/index';
import { historyCb } from 'helpers/history';

export default (req, res) => {
  const store = createStore();

  historyCb(store, routes, { pathname: req.url, query: req.query }).then(() => {
    const context = {};
    return {
      content: renderToString(<App store={store} location={req.url} context={context} />),
      initialState: store.getState()
    };
  });
};
