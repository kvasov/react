import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom';

import history from './helpers/history';
import routes from './routes/index';

import CartContainer from './core/components/CartContainer';
import App from './App';

import './styles/reset.scss';

function Root() {
  return (
    <CartContainer>
      <Router history={history}>
        <App routes={routes} />
      </Router>
    </CartContainer>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
