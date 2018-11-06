import React from 'react';
import { map } from 'lodash/collection';

import ProductCard from '../ProductCard';
import './style.scss';

function Catalog(props) {
  return (
    <div className="products">
      {map(props.products, product => (
        <ProductCard
          className="products__item"
          key={product.id}
          data={product}
        />
      ))}
    </div>
  );
}

export default Catalog;
