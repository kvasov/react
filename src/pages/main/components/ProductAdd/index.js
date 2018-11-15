import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import СartContext from 'core/components/cartContext';

import './style.scss';

class ProductAdd extends React.PureComponent {
  state = {
    count: 1,
    countError: false
  };

  handleChangeCount = e => {
    this.setState(
      {
        count: e.target.value,
        countError: !(!isNaN(parseInt(e.target.value)) && isFinite(e.target.value))
      },
      () => {
        if (!this.state.countError) {
          this.props.setCount(this.state.count);
        }
      }
    );
  };

  render() {
    const { data } = this.props;
    return (
      <СartContext.Consumer>
        {({ addToCart, checkItemInCart }) =>
          checkItemInCart(data.id) ? (
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
                    addToCart(data.id, this.state.count);
                  }
                }}
                className="product-card__add"
              >
                Add
              </button>
            </React.Fragment>
          )
        }
      </СartContext.Consumer>
    );
  }
}

ProductAdd.propTypes = {
  data: PropTypes.object
};

export default ProductAdd;
