import React from 'react';
import { map } from 'lodash/collection';

import СartContext from './cartContext';

class CartContainer extends React.Component {
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
        {this.props.children}
      </СartContext.Provider>
    );
  }
}

export default CartContainer;
