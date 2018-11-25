import React from 'react';
import { Route, Switch } from 'react-router-dom';

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

function App(props) {
  return (
    <Switch>
      {props.routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  );
}

export default App;
