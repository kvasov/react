import React from 'react';

import { rootPath } from '../helpers/routes/index';
import { productPath } from '../helpers/routes/product';

import MainPage from '../pages/main/index';
import ProductPage from '../pages/product/index';

function NotFound() {
  return <div>NotFound</div>;
}

export default [
  {
    path: rootPath(),
    exact: true,
    component: MainPage
  },
  {
    path: productPath(),
    render: ({ match }) => <ProductPage id={match.params.id} />
  },
  {
    component: NotFound
  }
];
