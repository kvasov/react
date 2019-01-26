import React from 'react';
import { map } from 'lodash/collection';
import client from 'helpers/contentful';

import './style.scss';

import ProductCard from '../ProductCard';

class Favorites extends React.PureComponent {
  state = {
    products: [],
    current: 0,
    interval: null
  };

  componentDidMount() {
    client
      .getEntries({
        content_type: 'product',
        'fields.popular': true
      })
      .then(response => {
        this.setState({ products: response.items });
      })
      .catch(console.error);

    this.state.interval = setInterval(() => {
      this.handleNext();
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  handlePrev = () => {
    this.setState({
      current: this.state.current == 0 ? this.state.products.length - 1 : this.state.current - 1
    });
  };

  handleNext = () => {
    this.setState({
      current: this.state.current == this.state.products.length - 1 ? 0 : this.state.current + 1
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="favorites">
          <div className="favorites__title">Избранные товары</div>
          <div className="favorites__slider">
            <div className="favorites__nav prev" onClick={this.handlePrev}>
              &laquo;
            </div>
            {map(
              this.state.products,
              (product, i) =>
                i == this.state.current && (
                  <ProductCard
                    className="favorites__item"
                    key={product.fields.id}
                    data={product.fields}
                  />
                )
            )}
            <div className="favorites__nav next" onClick={this.handleNext}>
              &raquo;
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Favorites;
