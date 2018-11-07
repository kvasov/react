import React from 'react';

import products from 'constants/products';
import Catalog from './components/Catalog/index';

function Index() {
  return <Catalog products={products} />;
}

export default Index;
