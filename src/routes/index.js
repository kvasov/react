import React from 'react';

import { rootPath } from '../helpers/routes/index';
import { aboutPath } from '../helpers/routes/about';
import { productPath } from '../helpers/routes/product';
import { cartPath } from '../helpers/routes/cart';

import MainPage from '../pages/main/index';
import AboutPage from '../pages/about/index';
import ProductPage from '../pages/product/index';
import CartPage from '../pages/cart/index';

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
    path: aboutPath(),
    component: AboutPage
  },
  {
    path: productPath(),
    render: ({ match }) => <ProductPage id={match.params.id} />
  },
  {
    path: cartPath(),
    component: CartPage
  },
  {
    component: NotFound
  }
];
