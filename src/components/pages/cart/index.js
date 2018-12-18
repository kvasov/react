import React from 'react';

import Header from '~/components/shared/Header/index';
import CartContent from './components/CartContent/Container';

function Cart() {
  return (
    <React.Fragment>
      <Header />
      <CartContent />
    </React.Fragment>
  );
}

export default Cart;
