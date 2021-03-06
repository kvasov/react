import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { cartPath } from 'helpers/routes/cart';

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
    const name = e.dataTransfer.getData('name');
    const count = e.dataTransfer.getData('count');
    const products = this.props.products.concat([{ id, name, count }]);
    this.props.onAddProducts(products);
    e.stopPropagation();
    e.preventDefault();
  };

  render() {
    return (
      <Link
        to={cartPath()}
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}
        className="header-cart"
      >
        <span className="header-cart__count">{getTotalCount(this.props.products)}</span>
      </Link>
    );
  }
}

HeaderCart.propTypes = {
  addToCart: PropTypes.func,
  onMount: PropTypes.func,
  cart: PropTypes.array
};

export default HeaderCart;
