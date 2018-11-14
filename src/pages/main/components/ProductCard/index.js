import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import СartContext from 'core/components/cartContext';

import Image from 'core/components/Image';
import TextBox from 'core/components/TextBox';
import Price from 'core/components/Price';

import './style.scss';

class ProductCard extends React.PureComponent {
  state = {
    count: 1,
    countError: false
  };

  handleChangeCount = e => {
    this.setState({
      count: e.target.value,
      countError: !(!isNaN(parseInt(e.target.value)) && isFinite(e.target.value))
    });
  };

  onDragStart = e => {
    e.dataTransfer.setData('id', this.props.data.id);
    e.dataTransfer.setData('count', this.state.count);
  };

  render() {
    return (
      <div
        draggable={true}
        onDragStart={this.onDragStart}
        className={classNames(this.props.className, 'product-card')}
      >
        <Image src={this.props.data.imageUrl} width={200} height={200} />
        <TextBox>{this.props.data.title}</TextBox>
        <Price>{this.props.data.price}</Price>
        <СartContext.Consumer>
          {({ addToCart, checkItemInCart }) =>
            checkItemInCart(this.props.data.id) ? (
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
                      addToCart(this.props.data.id, this.state.count);
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
      </div>
    );
  }
}

ProductCard.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  title: PropTypes.string,
  price: PropTypes.number
};

export default ProductCard;
