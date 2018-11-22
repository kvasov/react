import React from 'react';
import ReactDOM from 'react-dom';

import { map } from 'lodash/collection';

import { Router } from 'react-router-dom';

import СartContext from '~/core/components/cartContext';

import history from './helpers/history';
import routes from './routes/index';

import App from './App';

import './styles/reset.scss';

class Root extends React.PureComponent {
  state = {
    products: [],
    cart: []
  };

  addToCart(id, name, count) {
    this.setState({
      cart: this.state.cart.concat([{ id, name, count: parseInt(count) }])
    });
  }

  removeFromCart(id) {
    const res = [];
    map(this.state.cart, (product, i) => {
      if (id !== i) {
        res.push(product);
      }
    });

    this.setState({
      cart: res
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
          addToCart: (id, name, count) => this.addToCart(id, name, count),
          removeFromCart: id => this.removeFromCart(id),
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
