import React from 'react';
import { map } from 'lodash/collection';

import Header from 'core/components/Header/index';
import Catalog from './components/Catalog/index';
import СartContext from 'core/components/cartContext';

import products from 'constants/products';

class Index extends React.PureComponent {
  state = {
    cart: [],
    addToCart: (id, count) => this.addToCart(id, count),
    checkItemInCart: id => this.checkItemInCart(id)
  };

  addToCart(id, count) {
    this.setState(
      {
        cart: this.state.cart.concat([{ id, count: parseInt(count) }])
      },
      () => {
        console.log(this.state.cart);
      }
    );
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
      <СartContext.Provider value={this.state}>
        <Header />
        <Catalog products={products} />
      </СartContext.Provider>
    );
  }
}

export default Index;
