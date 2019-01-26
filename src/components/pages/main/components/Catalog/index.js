import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash/collection';

import ProductCard from '../ProductCard';
import './style.scss';

function Catalog(props) {
  const { products } = props;
  return (
    <div className="products">
      {map(products, product => (
        <ProductCard className="products__item" key={product.fields.id} data={product.fields} />
      ))}
    </div>
  );
}

Catalog.propTypes = {
  products: PropTypes.array
};

export default Catalog;
