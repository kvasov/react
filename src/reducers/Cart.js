import { assign } from 'lodash';
import { map } from 'lodash/collection';

import * as types from '../constants/actionTypes/CartActionTypes';

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  let products = [];
  const res = [];

  switch (action.type) {
    case types.RESTORE_FROM_LS:
      products = action.products;
      return assign({}, initialState, { products });
    case types.ADD_PRODUCT:
      products = state.products.concat([action.product]);
      return assign({}, initialState, { products });
    case types.REMOVE_PRODUCT:
      map(state.products, product => {
        if (action.product !== product.id) {
          res.push(product);
        }
      });
      return assign({}, initialState, { products: res });
    case types.CLEAR_CART:
      return initialState;
    default:
      return state;
  }
}
