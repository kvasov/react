const express = require('express');
require('app-module-path').addPath(`${__dirname}/src`);

import register from 'ignore-styles';
register(['.sass', '.scss']);

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { StaticRouter, Switch, Route } from 'react-router-dom';

import routes from '~/routes/index';

const RouteWithSubRoutes = (route, key) => <Route key={key} {...route} />;
const app = express();

app.get('*', (req, res) => {
  const context = {};

  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Switch>{routes.map((route, key) => RouteWithSubRoutes(route, key))}</Switch>
    </StaticRouter>
  );

  const response = `
    <!doctype html>
    <html>
      <head>
        <title>Hello, SSR</title>
        <meta content="width=device-width, initial-scale=1, user-scalable=no" name="viewport">
      </head>
      <body>
        <div id="root">${content}</div>
      </body>
    </html>
  `;

  res.send(response);
});

app.listen(3333, () => console.log('ready'));
