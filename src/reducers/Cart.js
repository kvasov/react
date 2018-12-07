import { assign } from 'lodash';

import * as types from '../constants/actionTypes/CartActionTypes';

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_PRODUCT:
      return assign({}, initialState, { products: action.products });
    case types.REMOVE_PRODUCT:
      return assign({}, initialState, { products: action.products });
    default:
      return state;
  }
}
