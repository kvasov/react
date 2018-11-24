import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom';

import history from './helpers/history';
import routes from './routes/index';

import App from './App';

import './styles/reset.scss';

function Root() {
  return (
    <Router history={history}>
      <App routes={routes} />
    </Router>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
