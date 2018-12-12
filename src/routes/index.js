import React from 'react';

import { rootPath } from '../helpers/routes/index';
import { aboutPath } from '../helpers/routes/about';
import { productPath } from '../helpers/routes/product';
import { cartPath } from '../helpers/routes/cart';

import MainPage from '../components/pages/main/index';
import AboutPage from '../components/pages/about/index';
import ProductPage from '../components/pages/product/Container';
import CartPage from '../components/pages/cart/index';

import { fetchProduct } from '../actions/Product';

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
    render: ({ match }) => <ProductPage id={match.params.id} />,
    prepareData: (store, query, params) => {
      store.dispatch(fetchProduct(params.id));
    }
  },
  {
    path: cartPath(),
    component: CartPage
  },
  {
    component: NotFound
  }
];
