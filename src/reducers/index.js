import { combineReducers } from 'redux';

import catalog from './Catalog';
import cart from './Cart';
import product from './Product';

export default combineReducers({
  catalog,
  cart,
  product
});
