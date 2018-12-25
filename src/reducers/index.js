import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import catalog from './Catalog';
import cart from './Cart';
import product from './Product';

export default combineReducers({
  catalog,
  cart,
  product,
  form: formReducer
});
