import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { map } from 'lodash/collection';

import './style.scss';

class ProductAdd extends React.PureComponent {
  state = {
    count: 1,
    countError: false
  };

  checkItemInCart(id) {
    let res = false;
    map(this.props.products, product => {
      if (product.id == id) {
        res = true;
      }
    });

    return res;
  }

  handleChangeCount = e => {
    this.setState({
      count: e.target.value,
      countError: !(!isNaN(parseInt(e.target.value)) && isFinite(e.target.value))
    });
  };

  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        {this.checkItemInCart(data.id) ? (
          <span className="product-card__exist">Добавлено</span>
        ) : (
          <React.Fragment>
            <input
              className={classNames('product-card__count', {
                ['product-card__count--error']: this.state.countError
              })}
              value={this.state.count}
              onChange={this.handleChangeCount}
            />
            <button
              onClick={() => {
                if (!this.state.countError) {
                  const products = this.props.products.concat([
                    { id: data.id, name: data.name, count: this.state.count }
                  ]);
                  this.props.onAddProducts(products);
                }
              }}
              className="product-card__add"
            >
              Add
            </button>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

ProductAdd.propTypes = {
  data: PropTypes.object
};

export default ProductAdd;
