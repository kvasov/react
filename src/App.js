/* globals __CLIENT__, __SERVER__ */

import React from 'react';
import { Provider } from 'react-redux';
import { Router, StaticRouter, Route, Switch } from 'react-router-dom';

import routes from './routes/index';

import './styles/reset.scss';

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props =>
        route.render ? route.render(props) : <route.component {...props} routes={route.routes} />
      }
    />
  );
}

const AppRouter = ({ history, children, location, context }) => {
  if (__CLIENT__) {
    return <Router history={history}>{children}</Router>;
  }

  if (__SERVER__) {
    return (
      <StaticRouter location={location} context={context}>
        {children}
      </StaticRouter>
    );
  }
};

function App({ history, store, location, context }) {
  return (
    <Provider store={store}>
      <AppRouter history={history} context={context} location={location}>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </AppRouter>
    </Provider>
  );
}

export default App;
