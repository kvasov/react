import React from 'react';

import Header from '~/core/components/Header/index';
import CartContent from './components/CartContent/index';

function Cart() {
  return (
    <React.Fragment>
      <Header />
      <CartContent />
    </React.Fragment>
  );
}

export default Cart;
