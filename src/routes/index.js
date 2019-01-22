import React from 'react';

import Helmet from 'react-helmet';

import { rootPath } from '../helpers/routes/index';
import { aboutPath } from '../helpers/routes/about';
import { contactsPath } from '../helpers/routes/contacts';
import { productPath } from '../helpers/routes/product';
import { cartPath } from '../helpers/routes/cart';

import MainPage from '../components/pages/main/index';
import AboutPage from '../components/pages/about/index';
import contactsPage from '../components/pages/contacts/index';
import ProductPage from '../components/pages/product/Container';
import CartPage from '../components/pages/cart/index';

import { fetchProduct } from '../actions/Product';

function NotFound() {
  return (
    <React.Fragment>
      <Helmet title="404" />
      <div>Page not found :(</div>
    </React.Fragment>
  );
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
    path: contactsPath(),
    component: contactsPage
  },
  {
    path: productPath(),
    render: ({ match }) => <ProductPage id={match.params.id} />,
    prepareData: (store, query, params) => store.dispatch(fetchProduct(params.id))
  },
  {
    path: cartPath(),
    component: CartPage
  },
  {
    component: NotFound
  }
];
