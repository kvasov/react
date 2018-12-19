import React from 'react';

import Header from '~/components/shared/Header/index';
import CartContent from './components/CartContent/Container';
import OrderForm from './components/OrderForm/Container';

function Cart() {
  return (
    <React.Fragment>
      <Header />
      <CartContent />
      <OrderForm />
    </React.Fragment>
  );
}

export default Cart;
