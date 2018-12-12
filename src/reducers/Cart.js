import { assign } from 'lodash';
import { map } from 'lodash/collection';

import * as types from '../constants/actionTypes/CartActionTypes';

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_PRODUCT:
      // Так вообще можно делать? объявлять переменные в case.
      // eslint не одобряет :)
      const products = state.products.concat([action.product]);
      return assign({}, initialState, { products });
    case types.REMOVE_PRODUCT:
      const res = [];
      map(state.products, (product, i) => {
        if (action.product !== i) {
          res.push(product);
        }
      });
      return assign({}, initialState, { products: res });
    default:
      return state;
  }
}
