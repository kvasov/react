import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash/collection';
import client from '~/helpers/contentful';

import ProductCard from '../ProductCard';
import './style.scss';

class Catalog extends React.PureComponent {
  state = {
    products: []
  };

  componentDidMount() {
    this.props.requestProducts();
    client
      .getEntries()
      .then(response => {
        this.props.recieveProducts(response.items);
        this.setState({
          products: response.items
        });
      })
      .catch(error => {
        this.props.errorProducts();
      });
  }

  render() {
    return (
      <div className="products">
        {map(this.state.products, product => (
          <ProductCard className="products__item" key={product.fields.id} data={product.fields} />
        ))}
      </div>
    );
  }
}

Catalog.propTypes = {
  products: PropTypes.array
};

export default Catalog;
