import React from 'react';

class CartContainer extends React.Component {
  state = {
    products: [],
    cart: []
  };

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
