import React from 'react';
import ReactDOM from 'react-dom';

import { map } from 'lodash/collection';

import { Router } from 'react-router-dom';

import СartContext from 'core/components/cartContext';

import history from './helpers/history';
import routes from './routes/index';

import App from './App';

import './styles/reset.scss';

class Root extends React.PureComponent {
  state = {
    products: [],
    cart: []
  };

  addToCart(id, count) {
    this.setState({
      cart: this.state.cart.concat([{ id, count: parseInt(count) }])
    });
  }

  checkItemInCart(id) {
    let res = false;
    map(this.state.cart, product => {
      if (product.id == id) {
        res = true;
      }
    });

    return res;
  }

  render() {
    return (
      <СartContext.Provider
        value={{
          cart: this.state.cart,
          addToCart: (id, count) => this.addToCart(id, count),
          checkItemInCart: id => this.checkItemInCart(id)
        }}
      >
        <Router history={history}>
          <App routes={routes} />
        </Router>
      </СartContext.Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
