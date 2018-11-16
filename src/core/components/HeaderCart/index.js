import React from 'react';
import PropTypes from 'prop-types';

import СartContext from '../cartContext';

import './style.scss';

function getTotalCount(arr) {
  const result = arr.reduce((sum, current) => sum + parseInt(current.count), 0);

  return result;
}

class HeaderCart extends React.PureComponent {
  onDragOver = e => {
    e.preventDefault();
  };

  onDrop = e => {
    const id = e.dataTransfer.getData('id');
    const count = e.dataTransfer.getData('count');
    this.props.addToCart(id, count);
    e.stopPropagation();
    e.preventDefault();
  };

  render() {
    return (
      <div onDragOver={this.onDragOver} onDrop={this.onDrop} className="header-cart">
        <span className="header-cart__count">{getTotalCount(this.props.cart)}</span>
      </div>
    );
  }
}

HeaderCart.propTypes = {
  addToCart: PropTypes.func,
  cart: PropTypes.array
};

export default () => (
  <СartContext.Consumer>
    {({ addToCart, cart }) => <HeaderCart addToCart={addToCart} cart={cart} />}
  </СartContext.Consumer>
);
